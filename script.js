document.addEventListener('DOMContentLoaded', () => {
    console.log('Plant Match App Initialized');

    // ============================================
    // 🔧 アフィリエイト設定（ここを編集してください）
    // ============================================
    // Amazon アソシエイトID（審査承認後に取得したIDを入力）
    const AMAZON_ASSOCIATE_ID = 'plantmatchdia-22';  // 例: plant-match-22

    // 楽天アフィリエイトID（設定済み✅）
    const RAKUTEN_AFFILIATE_ID = '4eacfed9.af6c0c05.4eacfeda.5a36ff99';
    // ============================================

    // ============================================
    // 📊 診断完了カウンター (Dynamic Counter)
    // ============================================
    const COUNTER_STORAGE_KEY = 'diagnosisCount';
    const COUNTER_BASE = 3847; // 初期ベース値
    const countEl = document.getElementById('diagnosis-count');

    // カウンター初期化 & 表示
    function initDiagnosisCounter() {
        const stored = localStorage.getItem(COUNTER_STORAGE_KEY);
        let count = stored ? parseInt(stored, 10) : COUNTER_BASE;

        // 日付ベースで少しずつ自動増加（リアルな成長感）
        const launchDate = new Date('2024-01-01');
        const today = new Date();
        const daysSinceLaunch = Math.floor((today - launchDate) / (1000 * 60 * 60 * 24));
        const autoGrowth = Math.floor(daysSinceLaunch * 2.5); // 1日平均2.5件増

        const finalCount = Math.max(count, COUNTER_BASE + autoGrowth);

        // LocalStorageに保存
        localStorage.setItem(COUNTER_STORAGE_KEY, finalCount);

        // アニメーション付きで表示
        if (countEl) {
            animateCounter(countEl, finalCount);
        }

        return finalCount;
    }

    // カウントアップアニメーション
    function animateCounter(element, targetValue) {
        const duration = 1500; // 1.5秒
        const startValue = Math.max(0, targetValue - 100);
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // イージング（ease-out）
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOut);

            element.textContent = currentValue.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    // 診断完了時にカウント増加
    function incrementDiagnosisCount() {
        const stored = localStorage.getItem(COUNTER_STORAGE_KEY);
        let count = stored ? parseInt(stored, 10) : COUNTER_BASE;
        count++;
        localStorage.setItem(COUNTER_STORAGE_KEY, count);

        // カウンター表示を更新（ページに戻った時用）
        if (countEl) {
            countEl.textContent = count.toLocaleString();
        }
    }

    // 初期化実行
    initDiagnosisCounter();
    // ============================================

    // DOM Elements
    const heroSection = document.getElementById('hero');
    const diagnosisSection = document.getElementById('diagnosis');
    const resultSection = document.getElementById('result');
    const startBtn = document.getElementById('start-btn');
    const retryBtn = document.getElementById('retry-btn');
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');
    const progressBar = document.getElementById('progress-bar');


    // ============================================
    // 履歴モーダル & UI追加 (History Feature)
    // ============================================
    const body = document.body;
    const modalHTML = `
        <div id="history-modal" class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title">🌿 My Plants (診断履歴)</div>
                    <button class="modal-close" id="modal-close">&times;</button>
                </div>
                <div id="history-list" class="history-list">
                    <!-- History items injected here -->
                </div>
            </div>
        </div>
    `;
    body.insertAdjacentHTML('beforeend', modalHTML);

    const historyModal = document.getElementById('history-modal');
    const historyListEl = document.getElementById('history-list');
    const modalCloseBtn = document.getElementById('modal-close');

    // フッターに履歴ボタンを追加
    // Inject History Button into Hero Section (after Start Button)
    if (startBtn) {
        const historyBtnHTML = `
            <div class="history-btn-container" style="margin-top: 1rem; text-align: center;">
                <button id="show-history-btn" class="history-trigger-btn" style="padding: 0.8rem 2rem; font-size: 1rem; background: white; border: 2px solid #4CAF50; color: #4CAF50; border-radius: 50px; cursor: pointer; display: inline-flex; align-items: center; gap: 0.5rem; transition: all 0.3s; font-weight: bold;">
                    <span>🌿 My Plantsを見る</span>
                </button>
            </div>
        `;
        startBtn.insertAdjacentHTML('afterend', historyBtnHTML);

        const historyBtn = document.getElementById('show-history-btn');
        if (historyBtn) {
            historyBtn.addEventListener('click', openHistoryModal);
        }
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', () => {
            historyModal.classList.remove('active');
        });
    }

    if (historyModal) {
        historyModal.addEventListener('click', (e) => {
            if (e.target === historyModal) historyModal.classList.remove('active');
        });
    }
    // ============================================



    // State
    let currentQuestionIndex = 0;
    let answers = {};

    // Diagnosis Data
    const questions = [
        {
            id: 'sunlight',
            question: 'お部屋の日当たりはどうですか？',
            options: [
                { value: 'high', label: '日当たり良好', emoji: '☀️' },
                { value: 'medium', label: '普通', emoji: '🌤️' },
                { value: 'low', label: '日陰が多い', emoji: '☁️' }
            ]
        },
        {
            id: 'experience',
            question: '植物を育てた経験は？',
            options: [
                { value: 'beginner', label: '初心者', emoji: '🌱' },
                { value: 'intermediate', label: '少しある', emoji: '🪴' },
                { value: 'expert', label: 'ベテラン', emoji: '🌳' }
            ]
        },
        {
            id: 'care_frequency',
            question: 'どのくらいお世話できますか？',
            options: [
                { value: 'daily', label: '毎日', emoji: '🗓️' },
                { value: 'weekly', label: '週1回程度', emoji: '📅' },
                { value: 'minimal', label: 'たまに', emoji: '⏰' }
            ]
        },
        {
            id: 'size',
            question: '植物のサイズの希望は？',
            options: [
                { value: 'small', label: '小さめ（卓上）', emoji: '🌿' },
                { value: 'medium', label: '中くらい', emoji: '🪴' },
                { value: 'large', label: '大きめ（床置き）', emoji: '🌴' }
            ]
        },
        {
            id: 'pet_safety',
            question: 'ペット（犬・猫）を飼っていますか？',
            options: [
                { value: 'yes', label: 'はい', emoji: '🐶' },
                { value: 'no', label: 'いいえ', emoji: '🐱' }
            ]
        }
    ];

    // Plants data is loaded from data/plants.js

    // GA4 Event Tracking Helper
    function trackEvent(action, category, label) {
        if (typeof gtag === 'function') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }
    }

    // Event Listeners
    startBtn.addEventListener('click', () => {
        trackEvent('start_diagnosis', 'diagnosis', 'start');
        startDiagnosis();
    });
    retryBtn.addEventListener('click', () => {
        trackEvent('retry_diagnosis', 'diagnosis', 'retry');
        resetDiagnosis();
    });

    function startDiagnosis() {
        currentQuestionIndex = 0;
        answers = {};
        heroSection.classList.add('hidden');

        // Hide new trust-building sections
        const testimonialsSection = document.querySelector('.testimonials-section');
        const faqSection = document.querySelector('.faq-section');
        const seoSection = document.querySelector('.seo-content-section');
        if (testimonialsSection) testimonialsSection.classList.add('hidden');
        if (faqSection) faqSection.classList.add('hidden');
        if (seoSection) seoSection.classList.add('hidden');

        diagnosisSection.classList.remove('hidden');
        window.scrollTo(0, 0);
        showQuestion(currentQuestionIndex);
    }

    function showQuestion(index) {
        const question = questions[index];
        const progress = ((index + 1) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;

        questionContainer.innerHTML = `
            <div class="question-card">
                <h2 class="question-title">${question.question}</h2>
                <div class="options-grid">
                    ${question.options.map(option => `
                        <button class="option-btn" data-value="${option.value}">
                            <span style="font-size: 2rem;">${option.emoji}</span>
                            <span>${option.label}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        // Add event listeners to options
        const optionButtons = questionContainer.querySelectorAll('.option-btn');
        optionButtons.forEach(btn => {
            btn.addEventListener('click', () => handleOptionSelect(question.id, btn.dataset.value));
        });
    }

    function handleOptionSelect(questionId, value) {
        answers[questionId] = value;

        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            setTimeout(() => showQuestion(currentQuestionIndex), 300);
        } else {
            setTimeout(() => showResult(), 300);
        }
    }

    function calculateMatch(plant) {
        let score = 0;
        // let maxScore = 0; // maxScore is no longer used for percentage, but for individual scoring.

        for (const [key, value] of Object.entries(answers)) {
            // maxScore++; // No longer incrementing maxScore for percentage calculation

            if (plant.match[key] && plant.match[key].includes(value)) {
                // Assign different weights to different match criteria
                switch (key) {
                    case 'sunlight':
                        score += 20;
                        break;
                    case 'experience':
                        score += 20;
                        break;
                    case 'care_frequency':
                        score += 20;
                        break;
                    case 'size':
                        score += 30; // Higher weight for size
                        break;
                    default:
                        score += 10;
                }
            }
        }

        // ペット安全性フィルター（必須）
        if (answers.pet_safety === 'yes' && !plant.isPetSafe) {
            return -100; // ペットがいるのに安全でない場合は除外（または大幅減点）
        }

        return score;
    }

    // ---------------------------------------------------------
    // 年間お世話カレンダー生成ロジック
    // ---------------------------------------------------------
    // ---------------------------------------------------------
    // History Logic
    // ---------------------------------------------------------

    function saveToHistory(plant) {
        let history = JSON.parse(localStorage.getItem('plantHistory')) || [];
        // Remove duplicates (move to top)
        history = history.filter(item => item.name !== plant.name);

        const newItem = {
            name: plant.name,
            date: new Date().toLocaleDateString('ja-JP'),
            color: plant.imageColor
        };

        history.unshift(newItem); // Add to top
        if (history.length > 20) history.pop(); // Limit to 20

        localStorage.setItem('plantHistory', JSON.stringify(history));
    }

    function openHistoryModal() {
        const history = JSON.parse(localStorage.getItem('plantHistory')) || [];
        historyListEl.innerHTML = '';

        if (history.length === 0) {
            historyListEl.innerHTML = '<p style="text-align:center; color:#888;">まだ履歴がありません。<br>診断を始めましょう！</p>';
        } else {
            history.forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'history-item';
                div.innerHTML = `
                    <div class="history-thumb" style="background-color: ${item.color || '#ddd'}">🌿</div>
                    <div class="history-info">
                        <div class="history-name">${item.name}</div>
                        <div class="history-date">${item.date}</div>
                    </div>
                `;
                historyListEl.appendChild(div);
            });
        }

        historyModal.classList.add('active');
    }

    function generateCalendarHTML(plant) {
        // 植物タイプの判定（簡易ロジック）
        // care_frequencyが'minimal'なら多肉・乾燥タイプ、それ以外は通常タイプ
        const isDryType = plant.match.care_frequency ? plant.match.care_frequency.includes('minimal') : false;

        // 月ごとのラベル
        const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

        // カレンダーグリッドの生成
        let calendarGridHTML = '<div class="calendar-grid">';

        months.forEach((month, index) => {
            const monthNum = index + 1;
            let icons = '';

            if (isDryType) {
                // --- 乾燥タイプ（サンスベリア、多肉など） ---
                // 水やり: 基本控えめ。冬(12-2月)はほぼ断水
                if (monthNum >= 12 || monthNum <= 2) {
                    icons += '<span class="care-icon water-dry" title="水やり：月1回以下（断水気味）">🌧️</span>';
                } else {
                    icons += '<span class="care-icon water" title="水やり：土が乾いてから数日後">💧</span>';
                }

                // 肥料: 春秋(4-6, 9-10)のみ少量
                if ((monthNum >= 4 && monthNum <= 6) || (monthNum >= 9 && monthNum <= 10)) {
                    icons += '<span class="care-icon fertilizer" title="肥料：少量">💊</span>';
                }

                // 植え替え: 春(4-5月)か秋(9月)
                if (monthNum === 4 || monthNum === 5 || monthNum === 9) {
                    icons += '<span class="care-icon repot" title="植え替え適期">🪴</span>';
                }

            } else {
                // --- 通常タイプ（パキラ、モンステラ、シダなど） ---
                // 水やり: 夏(5-9月)はたっぷり、冬(11-3月)は控えめ
                if (monthNum >= 5 && monthNum <= 9) {
                    icons += '<span class="care-icon water" title="水やり：土が乾いたらたっぷり">💧</span>';
                } else {
                    icons += '<span class="care-icon water-dry" title="水やり：乾かし気味に">🌧️</span>';
                }

                // 肥料: 成長期(5-9月)
                if (monthNum >= 5 && monthNum <= 9) {
                    icons += '<span class="care-icon fertilizer" title="肥料：月1-2回">💊</span>';
                }

                // 植え替え: 5-6月がベスト
                if (monthNum === 5 || monthNum === 6) {
                    icons += '<span class="care-icon repot" title="植え替え適期">🪴</span>';
                }
            }

            calendarGridHTML += `
                <div class="calendar-month">
                    <div class="month-label">${month}</div>
                    <div class="care-icons">${icons}</div>
                </div>
            `;
        });

        calendarGridHTML += '</div>';

        return `
            <div class="calendar-section">
                <div class="calendar-title">📅 年間お世話カレンダー</div>
                ${calendarGridHTML}
                <div class="calendar-legend">
                    <div class="legend-item"><span class="care-icon">💧</span> 通常の水やり</div>
                    <div class="legend-item"><span class="care-icon">🌧️</span> 控えめ（乾燥気味）</div>
                    <div class="legend-item"><span class="care-icon">💊</span> 肥料</div>
                    <div class="legend-item"><span class="care-icon">🪴</span> 植え替え適期</div>
                </div>
            </div>
        `;
    }

    // SEO強化用：育て方の詳細情報を生成
    function getCareDetails(plant) {
        const sunlightMap = {
            'high': { label: '日当たり良好', description: '直射日光が当たる明るい場所を好みます。窓際の日当たりの良い場所に置くのが最適です。ただし、真夏の強い直射日光は葉焼けの原因になるため、レースカーテン越しの光が理想的です。' },
            'medium': { label: '普通', description: '明るい日陰や、レースカーテン越しの柔らかい光が当たる場所が最適です。室内の明るい窓際や、間接光が入る場所で育てることができます。' },
            'low': { label: '日陰が多い', description: '日陰に強く、直射日光を避けた場所で育てることができます。北向きの窓や、室内の明るい日陰でも十分に育ちます。強い日差しは避けましょう。' }
        };

        const careFrequencyMap = {
            'daily': { label: '毎日', description: '毎日こまめにチェックし、土の表面が乾いたら水やりを行います。特に夏場は水切れに注意が必要です。葉水も定期的に行うと良いでしょう。' },
            'weekly': { label: '週1回程度', description: '週に1回程度、土の表面が乾いてから2〜3日後に水やりを行います。季節によって頻度を調整し、冬場は水やりを控えめにします。' },
            'minimal': { label: 'たまに', description: '水やりは控えめで問題ありません。土が完全に乾いてから数日後に水やりを行います。多肉植物の場合は、月に1〜2回程度でも十分です。' }
        };

        const careLevelMap = {
            1: { label: 'とても簡単', description: '初心者でも安心して育てられる植物です。基本的な水やりと日当たりの管理さえできれば、長く楽しむことができます。失敗しても復活しやすいので、植物育ての入門に最適です。' },
            2: { label: '普通', description: '基本的な育て方を理解していれば問題なく育てられます。適切な水やりと日当たりの管理、時々の葉の手入れを行うことで、健康的に育ちます。' },
            3: { label: 'やや難しい', description: 'ある程度の経験と知識が必要な植物です。湿度管理や温度管理、適切な施肥など、細かいケアが必要になります。上級者向けですが、その分育てがいがあります。' }
        };

        // matchデータから最適な情報を取得
        const sunlight = plant.match.sunlight?.[0] || 'medium';
        const careFrequency = plant.match.care_frequency?.[0] || 'weekly';
        const careLevel = plant.careLevel || 2;

        return {
            sunlight: sunlightMap[sunlight] || sunlightMap['medium'],
            careFrequency: careFrequencyMap[careFrequency] || careFrequencyMap['weekly'],
            careLevel: careLevelMap[careLevel] || careLevelMap[2]
        };
    }

    function showResult() {
        // Ensure other sections are hidden
        heroSection.classList.add('hidden');
        diagnosisSection.classList.add('hidden');

        // Show result section
        resultSection.classList.remove('hidden');

        // Scroll to the result section smoothly
        resultSection.scrollIntoView({ behavior: 'smooth' });

        // 診断完了カウンターを増加
        incrementDiagnosisCount();



        // Calculate best match
        const plantsWithScores = plants.map(plant => ({
            ...plant,
            matchScore: calculateMatch(plant)
        }));

        plantsWithScores.sort((a, b) => b.matchScore - a.matchScore);

        // ランダム性を高めるため、候補数を拡大（全体の上位50%または150件の多い方）
        const candidateCount = Math.max(150, Math.floor(plantsWithScores.length * 0.5));
        const allCandidates = plantsWithScores.slice(0, candidateCount);

        // 1位を選出するための「厳選候補」（品質担保のため上位30件から選出）
        // ※以前は広範囲から選んでいましたが、あまりにスコアが低いものが1位にならないように調整
        const topTierCount = Math.min(30, allCandidates.length);
        const topTierCandidates = allCandidates.slice(0, topTierCount);

        // 1位を選出 (厳選候補からランダム)
        const bestMatchIndex = Math.floor(Math.random() * topTierCandidates.length);
        const bestMatch = topTierCandidates[bestMatchIndex];

        // 2位・3位を選出（全候補から1位を除外した中からランダムに2つ）
        const otherCandidates = allCandidates.filter(p => p.name !== bestMatch.name);
        const recommendations = otherCandidates.sort(() => 0.5 - Math.random()).slice(0, 2);

        // Generate care level dots
        const careDots = Array(3).fill(0).map((_, i) =>
            `<span class="care-dot ${i < bestMatch.careLevel ? 'filled' : ''}"></span>`
        ).join('');

        // SEO強化用：育て方の詳細情報を取得
        const careDetails = getCareDetails(bestMatch);

        // Generate Amazon affiliate link
        const plantSearchQuery = encodeURIComponent(bestMatch.name + ' 観葉植物');

        // Amazon アフィリエイトリンク生成
        const amazonUrl = bestMatch.amazonUrl ||
            `https://www.amazon.co.jp/s?k=${plantSearchQuery}&tag=${AMAZON_ASSOCIATE_ID}`;

        // Google検索URL
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(bestMatch.name + ' 観葉植物 育て方')}`;

        // 購入ボタンのHTMLを生成（再利用用）
        const purchaseButtonsHTML = `
            <div class="purchase-buttons-top">
                <!-- Google検索ボタン -->
                <a href="${googleSearchUrl}" target="_blank" rel="noopener" class="purchase-btn google-btn">
                    <span class="btn-icon">🔍</span>
                    <span>この植物を検索</span>
                </a>
            </div>
            <div class="share-button-top">
                <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(`私の相性の良い観葉植物は【${bestMatch.name}】でした！🌿\nあなたも診断してみない？\n#植物診断 #観葉植物`)}&url=${encodeURIComponent('https://plantmatch.site/')}" target="_blank" rel="noopener" class="share-btn-top twitter-btn">
                    <span class="btn-icon">𝕏</span>
                    <span>結果をシェア</span>
                </a>
            </div>
            </div>
        `;

        resultContainer.innerHTML = `
            <div class="plant-card">
                <div class="plant-image" style="background: linear-gradient(135deg, ${bestMatch.imageColor}CC 0%, ${bestMatch.imageColor} 100%); display: flex; align-items: center; justify-content: center;">
                    <span style="font-size: 8rem;">🪴</span>
                </div>
                
                <div class="plant-info">
                    <h3 class="plant-name">${bestMatch.name}</h3>
                    <p class="plant-scientific">${bestMatch.scientific}</p>

                    <div class="plant-tags" style="margin-bottom: 1rem; margin-top: 0.5rem;">
                        ${bestMatch.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>

                    <p class="plant-description">${bestMatch.description}</p>
                    
                    <div class="detail-item">
                        <span class="detail-label">育てやすさ:</span>
                        <span class="detail-value">${careDetails.careLevel.label}</span>
                    </div>

                    ${generateCalendarHTML(bestMatch)}

                    <div class="care-details-section" style="border-top: 1px solid #e0e0e0;">
                        <h2 class="care-details-title">${bestMatch.name}の育て方</h2>
                        
                        <div class="care-detail-item">
                            <h3 class="care-detail-heading">🌱 育てやすさ</h3>
                            <div class="care-level-detail">
                                <span class="care-level-badge">${careDetails.careLevel.label}</span>
                                <div class="care-dots">${careDots}</div>
                            </div>
                            <p class="care-detail-description">${careDetails.careLevel.description}</p>
                        </div>

                        <div class="care-detail-item">
                            <h3 class="care-detail-heading">💧 水やりの頻度</h3>
                            <p class="care-frequency-label"><strong>${careDetails.careFrequency.label}</strong></p>
                            <p class="care-detail-description">${careDetails.careFrequency.description}</p>
                        </div>

                        <div class="care-detail-item">
                            <h3 class="care-detail-heading">☀️ 日当たり</h3>
                            <p class="care-sunlight-label"><strong>${careDetails.sunlight.label}</strong></p>
                            <p class="care-detail-description">${careDetails.sunlight.description}</p>
                        </div>
                    </div>

                    <div class="purchase-section">
                        <h4 class="purchase-title">🔍 この植物について</h4>
                        <div class="purchase-buttons">
                            <!-- Google検索ボタン -->
                            <a href="${googleSearchUrl}" target="_blank" rel="noopener" class="purchase-btn google-btn">
                                <span class="btn-icon">🔍</span>
                                <span>この植物を検索</span>
                            </a>
                        </div>
                        <p class="affiliate-notice">※ 検索を通じて、この植物の詳細情報を調べられます</p>
                    </div>

                    <div class="share-section">
                        <h4 class="share-title">📢 診断結果をシェア</h4>
                        <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(`私の相性の良い観葉植物は【${bestMatch.name}】でした！🌿\nあなたも診断してみない？\n#植物診断 #観葉植物`)}&url=${encodeURIComponent('https://plantmatch.site/')}" target="_blank" rel="noopener" class="share-btn twitter-btn">
                            <span class="btn-icon">𝕏</span>
                            <span>Post</span>
                        </a>
                    </div>
                    </div>
                </div >
            </div >

            <div class="recommendations-section" style="margin-top: 3rem; border-top: 2px dashed #eee; padding-top: 2rem;">
                <h3 style="text-align: center; color: #2E7D32; margin-bottom: 1.5rem; font-size: 1.2rem;">こちらもおすすめの観葉植物 🌿</h3>
                <div class="recommendations-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem;">
                    ${recommendations.map(plant => `
                        <div class="mini-plant-card" style="background: white; padding: 1.5rem; border-radius: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); text-align: center; border: 1px solid #f0f0f0; transition: transform 0.2s;">
                            <div style="font-size: 3rem; margin-bottom: 0.5rem;">🪴</div>
                            <h4 style="margin: 0.5rem 0; font-size: 1rem; color: #333; font-weight: bold;">${plant.name}</h4>
                            <p style="font-size: 0.8rem; color: #666; margin-bottom: 1rem;">${plant.scientific}</p>
                            <a href="https://www.google.com/search?q=${encodeURIComponent(plant.name + ' 観葉植物')}" target="_blank" rel="noopener" style="display: inline-block; padding: 0.5rem 1rem; background: #f8f9fa; color: #555; text-decoration: none; border-radius: 20px; font-size: 0.8rem; font-weight: bold;">詳しく見る</a>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // 診断結果を履歴に保存
        saveToHistory(bestMatch);

        // Add GA4 Event Listeners for Dynamic Elements
        const amazonBtn = resultContainer.querySelector('.amazon-btn');
        const shareBtnTop = resultContainer.querySelector('.share-btn-top');
        const shareBtnBottom = resultContainer.querySelector('.share-btn');

        if (amazonBtn) {
            amazonBtn.addEventListener('click', () => {
                trackEvent('click_affiliate', 'affiliate', `amazon_${bestMatch.name} `);
            });
        }
        if (shareBtnTop) {
            shareBtnTop.addEventListener('click', () => {
                trackEvent('share_result', 'share', `twitter_top_${bestMatch.name} `);
            });
        }
        if (shareBtnBottom) {
            shareBtnBottom.addEventListener('click', () => {
                trackEvent('share_result', 'share', `twitter_bottom_${bestMatch.name} `);
            });
        }
    }

    function resetDiagnosis() {
        resultSection.classList.add('hidden');
        heroSection.classList.remove('hidden');
        currentQuestionIndex = 0;
        answers = {};
        progressBar.style.width = '0%';

    }
});
