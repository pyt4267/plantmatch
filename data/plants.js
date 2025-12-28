const plants = [
        {
            name: 'ポトス',
            scientific: 'Epipremnum aureum',
            description: '初心者でも育てやすく、つる性で成長も早い人気の観葉植物。室内のどこでも育ち、空気清浄効果も期待できます。',
            tags: ['初心者向け', '日陰OK', '手入れ簡単'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly', 'minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#4CAF50',
            amazonUrl: 'https://www.amazon.co.jp/s?k=ポトス+観葉植物',
            rakutenUrl: 'https://search.rakuten.co.jp/search/mall/ポトス+観葉植物/'
        },
        {
            name: 'モンステラ',
            scientific: 'Monstera deliciosa',
            description: '大きな切れ込みの入った葉が特徴的で、インテリアとして人気の高い観葉植物。成長すると存在感抜群です。',
            tags: ['おしゃれ', '大型', '人気'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium', 'large']
            },
            imageColor: '#2E7D32'
        },
        {
            name: 'サンスベリア',
            scientific: 'Sansevieria trifasciata',
            description: '乾燥に強く、ほとんど手入れ不要で育つ多肉植物。空気清浄効果が高く、夜間も酸素を放出します。',
            tags: ['多肉植物', '乾燥に強い', '空気清浄'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#558B2F'
        },
        {
            name: 'フィカス・ウンベラータ',
            scientific: 'Ficus umbellata',
            description: 'ハート型の大きな葉が美しい人気の観葉植物。存在感があり、リビングのシンボルツリーとして最適です。',
            tags: ['シンボルツリー', '大型', '人気'],
            careLevel: 3,
            match: {
                sunlight: ['high'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['daily', 'weekly'],
                size: ['large']
            },
            imageColor: '#33691E'
        },
        {
            name: 'パキラ',
            scientific: 'Pachira aquatica',
            description: '編み込まれた幹と青々とした葉が特徴。「発財樹」「money tree」とも呼ばれ、縁起物としても人気です。',
            tags: ['縁起物', '初心者向け', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium', 'large']
            },
            imageColor: '#689F38'
        },
        {
            name: 'アイビー（ヘデラ）',
            scientific: 'Hedera helix',
            description: 'つる性で垂れ下がる姿が美しい植物。ハンギングに最適で、どんな場所でも育ちやすい万能選手です。',
            tags: ['つる性', '日陰OK', '初心者向け'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner'],
                care_frequency: ['weekly', 'minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#43A047'
        },
        {
            name: 'ガジュマル',
            scientific: 'Ficus microcarpa',
            description: '独特な幹の形が魅力の観葉植物。「多幸の木」として縁起が良く、丈夫で育てやすいのが特徴です。',
            tags: ['縁起物', '個性的', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#7CB342'
        },
        {
            name: 'ドラセナ・マッサンゲアナ',
            scientific: 'Dracaena fragrans',
            description: '「幸福の木」として有名。黄色の斑入り葉が美しく、オフィスや店舗でも人気の観葉植物です。',
            tags: ['幸福の木', '人気', '初心者向け'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#689F38'
        },
        {
            name: 'ユッカ（青年の木）',
            scientific: 'Yucca elephantipes',
            description: 'シャープな葉が特徴の力強い観葉植物。乾燥に非常に強く、「青年の木」として贈り物にも人気です。',
            tags: ['乾燥に強い', '縁起物', '初心者向け'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['medium', 'large']
            },
            imageColor: '#558B2F'
        },
        {
            name: 'フィカス・ベンジャミン',
            scientific: 'Ficus benjamina',
            description: '小さな葉が密生する美しい樹形が魅力。シンボルツリーとして人気で、空間を華やかに演出します。',
            tags: ['シンボルツリー', 'おしゃれ', '人気'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium', 'large']
            },
            imageColor: '#388E3C'
        },
        {
            name: 'アロエ',
            scientific: 'Aloe vera',
            description: '多肉質の葉に水分を蓄える丈夫な植物。美容・健康にも使え、手入れがほとんど不要です。',
            tags: ['多肉植物', '薬用', '手入れ簡単'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'シェフレラ（カポック）',
            scientific: 'Schefflera arboricola',
            description: '光沢のある丸い葉が可愛らしい観葉植物。丈夫で育てやすく、初心者に最適です。',
            tags: ['初心者向け', '丈夫', '手入れ簡単'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'アジアンタム',
            scientific: 'Adiantum raddianum',
            description: '繊細で柔らかな葉が美しいシダ植物。優雅な雰囲気で、和洋どちらにも合います。',
            tags: ['シダ植物', 'おしゃれ', '爽やか'],
            isPetSafe: true,
            careLevel: 3,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['daily'],
                size: ['small', 'medium']
            },
            imageColor: '#81C784'
        },
        {
            name: 'オリヅルラン',
            scientific: 'Chlorophytum comosum',
            description: '白と緑の斑入り葉が爽やか。子株をどんどん増やせるので、育てる楽しみがあります。',
            tags: ['初心者向け', '増やせる', '空気清浄'],
            isPetSafe: true,
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'テーブルヤシ',
            scientific: 'Chamaedorea elegans',
            description: 'コンパクトなヤシで、卓上に置けるサイズ。南国ムード満点で、日陰にも強い優等生です。',
            tags: ['卓上サイズ', '日陰OK', '南国風'],
            isPetSafe: true,
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#689F38'
        },
        {
            name: 'アスプレニウム',
            scientific: 'Asplenium nidus',
            description: '「アビス」とも呼ばれる美しいシダ植物。光沢のある葉が波打つ姿が優雅で、観賞価値が高いです。',
            tags: ['シダ植物', 'おしゃれ', '日陰OK'],
            isPetSafe: true,
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'アグラオネマ',
            scientific: 'Aglaonema commutatum',
            description: '美しい斑入り葉が特徴。日陰に強く、空気清浄効果も高い実力派の観葉植物です。',
            tags: ['日陰OK', '空気清浄', 'おしゃれ'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'カラテア',
            scientific: 'Calathea orbifolia',
            description: '葉の模様が美しく、夜になると葉を閉じる不思議な植物。芸術的な美しさが魅力です。',
            tags: ['おしゃれ', '個性的', '人気'],
            careLevel: 3,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['daily'],
                size: ['small', 'medium']
            },
            imageColor: '#388E3C'
        },
        {
            name: 'ゴムの木（フィカス・エラスティカ）',
            scientific: 'Ficus elastica',
            description: '光沢のある大きな葉が印象的。丈夫で育てやすく、インテリアグリーンの定番です。',
            tags: ['大型', '丈夫', '初心者向け'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#2E7D32'
        },
        {
            name: 'クワズイモ',
            scientific: 'Alocasia odora',
            description: '大きなハート型の葉が存在感抜群。エキゾチックな雰囲気で、南国リゾート風のインテリアに最適です。',
            tags: ['大型', '南国風', 'エキゾチック'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium', 'large']
            },
            imageColor: '#43A047'
        },
        {
            name: 'ペペロミア',
            scientific: 'Peperomia obtusifolia',
            description: '多肉質の厚い葉が可愛らしいミニ観葉植物。コンパクトで、デスクや棚にぴったりです。',
            tags: ['卓上サイズ', '可愛い', '初心者向け'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['weekly', 'minimal'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'エバーフレッシュ',
            scientific: 'Pithecellobium confertum',
            description: '繊細な葉が涼しげで、夜になると葉を閉じる「眠る木」。優しい雰囲気が人気です。',
            tags: ['おしゃれ', '個性的', '爽やか'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['daily', 'weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#7CB342'
        },
        {
            name: 'コウモリラン（ビカクシダ）',
            scientific: 'Platycerium bifurcatum',
            description: '独特な葉形が魅力のシダ植物。壁掛けにして育てるスタイルが人気で、インテリア性抜群です。',
            tags: ['個性的', '壁掛け', '上級者向け'],
            careLevel: 3,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['expert'],
                care_frequency: ['daily'],
                size: ['small', 'medium']
            },
            imageColor: '#558B2F'
        },
        {
            name: 'フィロデンドロン',
            scientific: 'Philodendron',
            description: 'ハート型やユニークな葉形が魅力。つる性で、支柱に這わせたりハンギングにしたり自由に楽しめます。',
            tags: ['つる性', 'おしゃれ', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'ストレリチア（極楽鳥花）',
            scientific: 'Strelitzia reginae',
            description: '大きな葉と鮮やかな花が特徴。トロピカルな雰囲気で、リゾート風の空間作りに最適です。',
            tags: ['南国風', '大型', '花が咲く'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#FF9800'
        },
        {
            name: 'ディフェンバキア',
            scientific: 'Dieffenbachia',
            description: '白や黄色の美しい斑入り葉が特徴。日陰にも強く、空間を明るく演出してくれます。',
            tags: ['日陰OK', '斑入り', 'おしゃれ'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'スパティフィラム',
            scientific: 'Spathiphyllum',
            description: '白い花のような苞が美しい観葉植物。空気清浄効果が高く、日陰でも花を咲かせます。',
            tags: ['花が咲く', '日陰OK', '空気清浄'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'ザミオクルカス',
            scientific: 'Zamioculcas zamiifolia',
            description: '光沢のある肉厚な葉が特徴。乾燥に非常に強く、ほとんど手入れ不要の優秀な観葉植物です。',
            tags: ['乾燥に強い', '初心者向け', '手入れ簡単'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#388E3C'
        },
        {
            name: 'コーヒーの木',
            scientific: 'Coffea arabica',
            description: '光沢のある濃緑の葉が美しい。育てるとコーヒーの実がなることも。カフェ風インテリアに人気です。',
            tags: ['おしゃれ', '実がなる', 'カフェ風'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#2E7D32'
        },
        {
            name: 'アンスリウム',
            scientific: 'Anthurium andreanum',
            description: 'ハート型の赤や白の苞が美しい。花が長持ちし、華やかな空間を演出します。',
            tags: ['花が咲く', '華やか', '人気'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#E91E63'
        },
        {
            name: 'セローム',
            scientific: 'Philodendron selloum',
            description: '深く切れ込んだ大きな葉がエキゾチック。存在感があり、リゾート風やアジアンテイストに最適です。',
            tags: ['大型', 'エキゾチック', '南国風'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#388E3C'
        },
        {
            name: 'シンゴニウム',
            scientific: 'Syngonium podophyllum',
            description: '矢尻型の葉が可愛らしく、様々な色の品種があります。つる性で、ハンギングにも向いています。',
            tags: ['つる性', '可愛い', '初心者向け'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#81C784'
        },
        {
            name: 'オリーブの木',
            scientific: 'Olea europaea',
            description: '平和の象徴とされる人気の果樹。銀葉が美しく、シンボルツリーとして玄関やベランダに最適です。',
            tags: ['シンボルツリー', 'おしゃれ', '屋外向き'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#556B2F'
        },
        {
            name: 'ユーカリ',
            scientific: 'Eucalyptus',
            description: 'シルバーグリーンの丸い葉が可愛い。爽やかな香りがあり、ドライフラワーやリース作りにも使えます。',
            tags: ['香りが良い', 'おしゃれ', 'クラフト'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#8FBC8F'
        },
        {
            name: 'エケベリア',
            scientific: 'Echeveria',
            description: 'バラの花のようなロゼット型が美しい多肉植物。種類が豊富でコレクション性があり、紅葉も楽しめます。',
            tags: ['多肉植物', '可愛い', 'コレクション'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['small']
            },
            imageColor: '#A2D9CE'
        },
        {
            name: 'エアプランツ（チランジア）',
            scientific: 'Tillandsia',
            description: '土が不要で、空気中の水分を吸収して育つ不思議な植物。ガラス容器に入れたり吊るしたり、飾り方は自由自在。',
            tags: ['土がいらない', 'おしゃれ', 'インテリア'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['small']
            },
            imageColor: '#B0C4DE'
        },
        {
            name: 'ピレア・ペペロミオイデス',
            scientific: 'Pilea peperomioides',
            description: '「パンケーキプランツ」とも呼ばれる、丸い葉が特徴的な植物。多産で子株がどんどん増え、ポップな雰囲気が魅力。',
            tags: ['可愛い', '個性的', '増やせる'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#90EE90'
        },
        {
            name: 'リプサリス',
            scientific: 'Rhipsalis',
            description: '「森のサボテン」と呼ばれる、細長い茎が垂れ下がる植物。ハンギングに最適で、モダンなインテリアに合います。',
            tags: ['サボテン', 'ハンギング', 'おしゃれ'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'minimal'],
                size: ['medium']
            },
            imageColor: '#9ACD32'
        },
        {
            name: 'アデニウム（砂漠のバラ）',
            scientific: 'Adenium obesum',
            description: '肥大した幹（塊根）と鮮やかな花が魅力。「砂漠のバラ」と呼ばれ、盆栽のように仕立てて楽しめます。',
            tags: ['塊根植物', '花が咲く', '個性的'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#FF69B4'
        },
        {
            name: 'ソテツ',
            scientific: 'Cycas revoluta',
            description: '南国の雰囲気漂う、力強い姿が特徴。非常に丈夫で寿命が長く、成長もゆっくりなので管理が楽です。',
            tags: ['南国風', '丈夫', '長寿'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['medium', 'large']
            },
            imageColor: '#228B22'
        },
        {
            name: 'トックリラン（ポニーテール）',
            scientific: 'Beaucarnea recurvata',
            description: '株元が徳利のように膨らむユニークな形。葉が馬の尻尾のように垂れ下がり、愛嬌のある姿が人気です。',
            tags: ['ユニーク', '丈夫', '乾燥に強い'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['medium', 'large']
            },
            imageColor: '#32CD32'
        },
        {
            name: 'ネペンテス（ウツボカズラ）',
            scientific: 'Nepenthes',
            description: '捕虫袋をつける食虫植物。奇妙でユニークな姿は、観察する楽しさがあり、子供から大人まで人気です。',
            tags: ['食虫植物', '個性的', '観察'],
            careLevel: 3,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['daily'],
                size: ['medium']
            },
            imageColor: '#CD5C5C'
        },
        {
            name: 'アロカシア・ポリー',
            scientific: 'Alocasia amazonica',
            description: '濃緑色の葉に太い葉脈が入る、エキゾチックな植物。仮面のような見た目で、クールなインテリアに映えます。',
            tags: ['エキゾチック', 'クール', '個性的'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#006400'
        },
        {
            name: 'ハオルチア',
            scientific: 'Haworthia',
            description: '「窓」と呼ばれる透明な部分を持つ多肉植物。宝石のように美しく、室内でも徒長しにくいので育てやすいです。',
            tags: ['多肉植物', '透明感', '室内向き'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['small']
            },
            imageColor: '#98FB98'
        },
        {
            name: 'ミモザ（アカシア）',
            scientific: 'Acacia baileyana',
            description: '春にふわふわの黄色い花を咲かせる人気の花木。銀色の葉も美しく、庭木や切り花としても愛されています。',
            tags: ['花が咲く', 'シンボルツリー', '春'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#FFD700'
        },
        {
            name: 'レモンツリー',
            scientific: 'Citrus limon',
            description: '自宅でレモンが収穫できる果樹。白い花は甘い香りがし、実がなる喜びを味わえます。',
            tags: ['実がなる', '香り', '収穫'],
            careLevel: 3,
            match: {
                sunlight: ['high'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['daily', 'weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#FFFACD'
        },
        {
            name: 'マンガベ',
            scientific: 'Mangave',
            description: 'マンフレダとアガベの交配種。成長が早く、独特の斑点模様がアートのような美しさを持つ最新の多肉植物。',
            tags: ['最新品種', 'アート', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['minimal'],
                size: ['medium']
            },
            imageColor: '#483D8B'
        },
        {
            name: 'ステファニア・エレクタ',
            scientific: 'Stephania erecta',
            description: 'ジャガイモのような塊根から、可愛らしい丸い葉を出す不思議な植物。ユニークな姿が愛好家に大人気です。',
            tags: ['塊根植物', '個性的', '可愛い'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['minimal'],
                size: ['small']
            },
            imageColor: '#8FBC8F'
        },
        {
            name: 'ビカクシダ・リドレイ',
            scientific: 'Platycerium ridleyi',
            description: '鹿の角のような葉が特徴的なビカクシダの中でも、特に美しい品種。キャベツのような貯水葉が魅力です。',
            tags: ['ビザールプランツ', '壁掛け', '上級者向け'],
            careLevel: 3,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['expert'],
                care_frequency: ['daily'],
                size: ['medium']
            },
            imageColor: '#556B2F'
        },
        {
            name: '亀甲竜（ディオスコレア）',
            scientific: 'Dioscorea elephantipes',
            description: '亀の甲羅のようなゴツゴツした塊根を持つ植物。秋から春にかけてハート型の葉を茂らせます。',
            tags: ['塊根植物', '個性的', '冬型'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['minimal'],
                size: ['medium']
            },
            imageColor: '#8B4513'
        },
        {
            name: 'アルブカ・スピラリス',
            scientific: 'Albuca spiralis',
            description: 'くるくるとカールした葉が特徴的な球根植物。「ナンジャコレ」という別名も。春には香りの良い花も咲きます。',
            tags: ['珍奇植物', '個性的', '可愛い'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['minimal'],
                size: ['small']
            },
            imageColor: '#9ACD32'
        },
        {
            name: 'ボストンファーン',
            scientific: 'Nephrolepis exaltata',
            description: 'ボリュームのある美しい緑の葉が垂れ下がるシダ植物。空気清浄能力が非常に高いことでも知られています。',
            tags: ['シダ植物', '空気清浄', 'ハンギング'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['daily', 'weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#32CD32'
        },
        {
            name: 'ホヤ（サクララン）',
            scientific: 'Hoya carnosa',
            description: '肉厚な葉を持つつる性植物。飴細工のような星形の花を咲かせることから「ワックスプラント」とも呼ばれます。',
            tags: ['つる性', '花が咲く', '可愛い'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#FFB6C1'
        },
        {
            name: 'マランタ（祈り草）',
            scientific: 'Maranta leuconeura',
            description: '葉の模様が美しく、夜になると葉を閉じて祈るような姿になることから「祈り草」と呼ばれます。',
            tags: ['おしゃれ', '個性的', '日陰OK'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['daily', 'weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#2E8B57'
        },
        {
            name: 'ベゴニア・マクラータ',
            scientific: 'Begonia maculata',
            description: '水玉模様の葉がとてもお洒落な木立性ベゴニア。葉の裏は赤く、コントラストが美しい人気の植物です。',
            tags: ['おしゃれ', '個性的', '花が咲く'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#CD5C5C'
        },
        {
            name: 'トラデスカンティア',
            scientific: 'Tradescantia',
            description: '紫や白の縞模様が入る葉が美しいつる性植物。成長が早く、ハンギングバスケットに最適です。',
            tags: ['ハンギング', 'おしゃれ', '初心者向け'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#800080'
        },
        {
            name: 'ブーゲンビリア',
            scientific: 'Bougainvillea',
            description: '鮮やかな色の苞が南国ムード満点。日光を好み、上手に育てると年に何度も花を楽しめます。',
            tags: ['南国風', '花が咲く', '華やか'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#FF00FF'
        },
        {
            name: 'ハイビスカス',
            scientific: 'Hibiscus rosa-sinensis',
            description: '夏を代表するトロピカルな花。一日花ですが、次々と新しい花を咲かせ、元気を与えてくれます。',
            tags: ['南国風', '花が咲く', '夏'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['daily'],
                size: ['medium']
            },
            imageColor: '#FF0000'
        },
        {
            name: 'ジャカランダ',
            scientific: 'Jacaranda mimosifolia',
            description: '世界三大花木の一つ。涼しげなシダのような葉が美しく、観葉植物としても人気があります。',
            tags: ['おしゃれ', '涼しげ', '花木'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#9370DB'
        },
        {
            name: 'ポリシャス',
            scientific: 'Polyscias',
            description: 'モミジのような葉や丸い葉など品種が豊富。東洋的な雰囲気があり、和室やアジアンテイストに合います。',
            tags: ['和風', 'アジアン', 'おしゃれ'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#228B22'
        },
        {
            name: 'カラジウム',
            scientific: 'Caladium',
            description: 'ハート型の葉に赤やピンク、白などの鮮やかな模様が入る球根植物。夏のインテリアを涼しげに彩ります。',
            tags: ['カラフル', '夏', 'おしゃれ'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#FF69B4'
        },
        {
            name: 'コリウス',
            scientific: 'Plectranthus scutellarioides',
            description: '葉の色や模様のバリエーションが非常に豊富。寄せ植えのアクセントや、ハンギングにも向いています。',
            tags: ['カラフル', '初心者向け', '寄せ植え'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#DC143C'
        },
        {
            name: 'ストロマンテ・サンギネア',
            scientific: 'Stromanthe sanguinea',
            description: '葉の表は緑と白の斑入り、裏は鮮やかな赤紫色というコントラストが美しい植物。',
            tags: ['おしゃれ', '個性的', '日陰OK'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium', 'large']
            },
            imageColor: '#800000'
        },
        {
            name: 'ダバリア（シノブ）',
            scientific: 'Davallia mariesii',
            description: 'フサフサした根茎が特徴的なシダ植物。涼しげな葉姿で、苔玉や釣り忍として古くから親しまれています。',
            tags: ['和風', 'シダ植物', '涼しげ'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#2E8B57'
        },
        {
            name: 'アデナンサス',
            scientific: 'Adenanthos',
            description: 'オーストラリア原産のネイティブプランツ。シルバーグリーンの柔らかい葉が美しく、クリスマスツリーの代わりにも。',
            tags: ['オージープランツ', 'おしゃれ', '屋外向き'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['minimal'],
                size: ['medium', 'large']
            },
            imageColor: '#A9A9A9'
        },
        {
            name: 'バンクシア',
            scientific: 'Banksia',
            description: 'タワシのようなユニークな花を咲かせるオージープランツ。ドライフラワーとしても非常に人気があります。',
            tags: ['オージープランツ', '個性的', 'ドライフラワー'],
            careLevel: 3,
            match: {
                sunlight: ['high'],
                experience: ['expert'],
                care_frequency: ['minimal'],
                size: ['medium', 'large']
            },
            imageColor: '#DAA520'
        },
        {
            name: 'ウエストリンギア',
            scientific: 'Westringia fruticosa',
            description: 'ローズマリーに似たシルバーリーフが美しい低木。非常に丈夫で、ベランダガーデニングに最適です。',
            tags: ['丈夫', '屋外向き', 'おしゃれ'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['medium']
            },
            imageColor: '#C0C0C0'
        },
        {
            name: 'グリーンネックレス',
            scientific: 'Senecio rowleyanus',
            description: '丸い葉がネックレスのように連なる多肉植物。ハンギングに最適で、垂れ下がる姿が美しい人気の観葉植物です。',
            tags: ['多肉植物', 'ハンギング', '可愛い'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'アロカシア・アマゾニカ',
            scientific: 'Alocasia amazonica',
            description: '濃緑色の葉に白い葉脈が美しいエキゾチックな観葉植物。「ポリー」とも呼ばれ、クールなインテリアに映えます。',
            tags: ['エキゾチック', 'おしゃれ', '個性的'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#006400'
        },
        {
            name: 'フィロデンドロン・ビルケイ',
            scientific: 'Philodendron birkin',
            description: '白い縞模様が入る美しい葉が特徴。成長とともに模様が変化し、観察する楽しみがある人気の観葉植物です。',
            tags: ['おしゃれ', '個性的', '人気'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'モンステラ・アダンソニー',
            scientific: 'Monstera adansonii',
            description: '小さな穴が開いた葉が可愛らしいモンステラの仲間。「スイスチーズプラント」とも呼ばれ、ハンギングにも最適です。',
            tags: ['つる性', 'おしゃれ', 'ハンギング'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#7CB342'
        },
        {
            name: 'アンスリウム・クラリネルビウム',
            scientific: 'Anthurium clarinervium',
            description: 'ハート型の大きな葉に白い葉脈が美しい観葉植物。ベルベットのような質感が高級感を演出します。',
            tags: ['おしゃれ', '高級感', '個性的'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#2E7D32'
        },
        {
            name: 'フィカス・リラータ',
            scientific: 'Ficus lyrata',
            description: 'バイオリンのような大きな葉が特徴。「フィドルリーフ」とも呼ばれ、存在感抜群のシンボルツリーとして人気です。',
            tags: ['シンボルツリー', '大型', 'おしゃれ'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#388E3C'
        },
        {
            name: 'ペペロミア・オブツシフォリア',
            scientific: 'Peperomia obtusifolia',
            description: '肉厚で丸い葉が可愛らしいミニ観葉植物。コンパクトで、デスクや棚にぴったり。初心者にも育てやすいです。',
            tags: ['卓上サイズ', '可愛い', '初心者向け'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['weekly', 'minimal'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'アロエ・ベラ',
            scientific: 'Aloe vera',
            description: '多肉質の葉に水分を蓄える丈夫な植物。美容・健康にも使え、手入れがほとんど不要で初心者に最適です。',
            tags: ['多肉植物', '薬用', '手入れ簡単'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'シンゴニウム・ピンク',
            scientific: 'Syngonium podophyllum',
            description: 'ピンク色の美しい葉が特徴的なシンゴニウム。つる性で、ハンギングにも向いています。可愛らしい見た目が人気です。',
            tags: ['つる性', '可愛い', 'カラフル'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#FFB6C1'
        },
        {
            name: 'サボテン',
            scientific: 'Cactaceae',
            description: '乾燥に非常に強く、ほとんど水やり不要。様々な形があり、インテリアとしても人気の多肉植物です。',
            tags: ['多肉植物', '乾燥に強い', '手入れ簡単'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#9ACD32'
        },
        {
            name: 'ストレリチア・レギネ',
            scientific: 'Strelitzia reginae',
            description: '「極楽鳥花」とも呼ばれる南国風の観葉植物。大きな葉と鮮やかな花が特徴で、リゾート風の空間作りに最適です。',
            tags: ['南国風', '大型', '花が咲く'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#FF9800'
        },
        {
            name: 'フィロデンドロン・セロウム',
            scientific: 'Philodendron selloum',
            description: '深く切れ込んだ大きな葉がエキゾチック。存在感があり、リゾート風やアジアンテイストに最適です。',
            tags: ['大型', 'エキゾチック', '南国風'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#388E3C'
        },
        {
            name: 'アスパラガス・スプレンゲリー',
            scientific: 'Asparagus densiflorus',
            description: '細かく繊細な葉が美しい観葉植物。ハンギングに最適で、爽やかな雰囲気を演出します。',
            tags: ['ハンギング', '爽やか', 'おしゃれ'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#81C784'
        },
        {
            name: 'ディフェンバキア',
            scientific: 'Dieffenbachia',
            description: '白や黄色の美しい斑入り葉が特徴。日陰にも強く、空間を明るく演出してくれます。',
            tags: ['日陰OK', '斑入り', 'おしゃれ'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'アグラオネマ',
            scientific: 'Aglaonema commutatum',
            description: '美しい斑入り葉が特徴。日陰に強く、空気清浄効果も高い実力派の観葉植物です。',
            tags: ['日陰OK', '空気清浄', 'おしゃれ'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'カラテア',
            scientific: 'Calathea orbifolia',
            description: '葉の模様が美しく、夜になると葉を閉じる不思議な植物。芸術的な美しさが魅力です。',
            tags: ['おしゃれ', '個性的', '人気'],
            careLevel: 3,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['daily'],
                size: ['small', 'medium']
            },
            imageColor: '#388E3C'
        },
        {
            name: 'ゴムの木',
            scientific: 'Ficus elastica',
            description: '光沢のある大きな葉が印象的。丈夫で育てやすく、インテリアグリーンの定番です。',
            tags: ['大型', '丈夫', '初心者向け'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#2E7D32'
        },
        {
            name: 'クワズイモ',
            scientific: 'Alocasia odora',
            description: '大きなハート型の葉が存在感抜群。エキゾチックな雰囲気で、南国リゾート風のインテリアに最適です。',
            tags: ['大型', '南国風', 'エキゾチック'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium', 'large']
            },
            imageColor: '#43A047'
        },
        {
            name: 'ペペロミア',
            scientific: 'Peperomia obtusifolia',
            description: '多肉質の厚い葉が可愛らしいミニ観葉植物。コンパクトで、デスクや棚にぴったりです。',
            tags: ['卓上サイズ', '可愛い', '初心者向け'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['weekly', 'minimal'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'エバーフレッシュ',
            scientific: 'Pithecellobium confertum',
            description: '繊細な葉が涼しげで、夜になると葉を閉じる「眠る木」。優しい雰囲気が人気です。',
            tags: ['おしゃれ', '個性的', '爽やか'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['daily', 'weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#7CB342'
        },
        {
            name: 'コウモリラン',
            scientific: 'Platycerium bifurcatum',
            description: '独特な葉形が魅力のシダ植物。壁掛けにして育てるスタイルが人気で、インテリア性抜群です。',
            tags: ['個性的', '壁掛け', '上級者向け'],
            careLevel: 3,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['expert'],
                care_frequency: ['daily'],
                size: ['small', 'medium']
            },
            imageColor: '#558B2F'
        },
        {
            name: 'フィロデンドロン',
            scientific: 'Philodendron',
            description: 'ハート型やユニークな葉形が魅力。つる性で、支柱に這わせたりハンギングにしたり自由に楽しめます。',
            tags: ['つる性', 'おしゃれ', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'アンスリウム',
            scientific: 'Anthurium andreanum',
            description: 'ハート型の赤や白の苞が美しい。花が長持ちし、華やかな空間を演出します。',
            tags: ['花が咲く', '華やか', '人気'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#E91E63'
        },
        {
            name: 'コーヒーの木',
            scientific: 'Coffea arabica',
            description: '光沢のある濃緑の葉が美しい。育てるとコーヒーの実がなることも。カフェ風インテリアに人気です。',
            tags: ['おしゃれ', '実がなる', 'カフェ風'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#2E7D32'
        },
        {
            name: 'オリヅルラン',
            scientific: 'Chlorophytum comosum',
            description: '白と緑の斑入り葉が爽やか。子株をどんどん増やせるので、育てる楽しみがあります。',
            tags: ['初心者向け', '増やせる', '空気清浄'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'テーブルヤシ',
            scientific: 'Chamaedorea elegans',
            description: 'コンパクトなヤシで、卓上に置けるサイズ。南国ムード満点で、日陰にも強い優等生です。',
            tags: ['卓上サイズ', '日陰OK', '南国風'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#689F38'
        },
        {
            name: 'アスプレニウム',
            scientific: 'Asplenium nidus',
            description: '「アビス」とも呼ばれる美しいシダ植物。光沢のある葉が波打つ姿が優雅で、観賞価値が高いです。',
            tags: ['シダ植物', 'おしゃれ', '日陰OK'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'ザミオクルカス',
            scientific: 'Zamioculcas zamiifolia',
            description: '光沢のある肉厚な葉が特徴。乾燥に非常に強く、ほとんど手入れ不要の優秀な観葉植物です。',
            tags: ['乾燥に強い', '初心者向け', '手入れ簡単'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#388E3C'
        },
        {
            name: 'ポリシャス',
            scientific: 'Polyscias fruticosa',
            description: '繊細な葉が茂る姿がエレガント。「タイワンモミジ」とも呼ばれ、和洋どちらのインテリアにも合います。',
            tags: ['おしゃれ', '和モダン', '繊細'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#558B2F'
        },
        {
            name: 'トラデスカンチア',
            scientific: 'Tradescantia zebrina',
            description: '紫と緑の縞模様が美しい葉を持つつる性植物。成長が早く、ハンギングにするとボリュームが出て素敵です。',
            tags: ['つる性', 'カラフル', 'ハンギング'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#9C27B0'
        },
        {
            name: 'ホヤ・カル诺サ',
            scientific: 'Hoya carnosa',
            description: '肉厚の葉と、飴細工のような可愛い花が特徴。「サクララン」とも呼ばれ、花を楽しむこともできます。',
            tags: ['花が咲く', 'つる性', '多肉質'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['minimal', 'weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#E91E63'
        },
        {
            name: 'マランタ',
            scientific: 'Maranta leuconeura',
            description: '葉の模様が独特で美しく、夜になると葉を閉じる「祈りの植物」。エキゾチックな雰囲気が魅力です。',
            tags: ['個性的', 'エキゾチック', '日陰OK'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#388E3C'
        },
        {
            name: 'ピレア・ペペロミオイデス',
            scientific: 'Pilea peperomioides',
            description: '丸いコインのような葉が可愛らしい。「パンケーキプランツ」とも呼ばれ、多産で子株が増えやすいです。',
            tags: ['可愛い', '個性的', '卓上サイズ'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'シェフレラ',
            scientific: 'Schefflera arboricola',
            description: '手のひらのような葉が特徴。「カポック」とも呼ばれ、非常に丈夫で環境適応能力が高い植物です。',
            tags: ['丈夫', '初心者向け', '定番'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high', 'low'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#43A047'
        },
        {
            name: 'ドラセナ・コンシンネ',
            scientific: 'Dracaena marginata',
            description: '細長く尖った葉がスタイリッシュ。「真実の木」とも呼ばれ、モダンなインテリアによく合います。',
            tags: ['スタイリッシュ', 'モダン', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#D32F2F'
        },
        {
            name: 'ユッカ',
            scientific: 'Yucca elephantipes',
            description: '太い幹と剣のような葉が力強い。「青年の木」とも呼ばれ、成長・発展のシンボルとして人気です。',
            tags: ['丈夫', 'シンボルツリー', '乾燥に強い'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['medium', 'large']
            },
            imageColor: '#2E7D32'
        },
        {
            name: 'トックリラン',
            scientific: 'Beaucarnea recurvata',
            description: '株元が徳利のように膨らむユニークな姿。「ポニーテール」とも呼ばれ、乾燥に強く育てやすいです。',
            tags: ['個性的', '乾燥に強い', '可愛い'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['medium', 'large']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'フィットニア',
            scientific: 'Fittonia albivenis',
            description: '網目状の葉脈が美しい。「アミメグサ」とも呼ばれ、テラリウムなどの湿度の高い環境を好みます。',
            tags: ['個性的', 'テラリウム', 'カラフル'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['daily', 'weekly'],
                size: ['small']
            },
            imageColor: '#F48FB1'
        },
        {
            name: 'チランジア（エアプランツ）',
            scientific: 'Tillandsia',
            description: '土を必要とせず、空気中の水分を吸収して育つ不思議な植物。ガラス容器に入れたり、吊るしたりと飾り方は自由自在です。',
            tags: ['土不要', 'おしゃれ', 'ハンギング'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#B0BEC5'
        },
        {
            name: 'フィカス・ウンベラータ',
            scientific: 'Ficus umbellata',
            description: 'ハート型の大きな葉が特徴的な人気の観葉植物。優しい雰囲気で、ナチュラルなインテリアにぴったりです。',
            tags: ['大型', 'ハート型の葉', '人気'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'オーガスタ',
            scientific: 'Strelitzia nicolai',
            description: 'バナナのような巨大な葉がトロピカルな雰囲気を演出。存在感抜群で、リゾートホテルのような空間を作れます。',
            tags: ['大型', '南国風', 'リゾート'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'ベゴニア・マクラータ',
            scientific: 'Begonia maculata',
            description: '水玉模様の葉が非常にユニークでおしゃれ。葉の裏は赤く、コントラストが美しい人気の植物です。',
            tags: ['個性的', 'おしゃれ', '水玉模様'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#1B5E20'
        },
        {
            name: 'カラジウム',
            scientific: 'Caladium',
            description: '白やピンク、赤などの鮮やかな葉色が魅力。夏のインテリアを涼しげに彩る、芸術的な美しさを持つ植物です。',
            tags: ['カラフル', 'おしゃれ', '夏に元気'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#F06292'
        },
        {
            name: 'ストロマンテ・サンギネア',
            scientific: 'Stromanthe sanguinea',
            description: '緑、白、ピンクのトリカラーが美しい葉を持つ植物。葉の裏は鮮やかな赤紫色で、エキゾチックな雰囲気です。',
            tags: ['カラフル', 'エキゾチック', '日陰OK'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium']
            },
            imageColor: '#D81B60'
        },
        {
            name: 'ホヤ・カーリー',
            scientific: 'Hoya kerrii',
            description: '完璧なハート型の葉が愛らしい多肉植物。「ラブハート」とも呼ばれ、プレゼントにも大人気です。',
            tags: ['ハート型の葉', '可愛い', '多肉植物'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'ユーフォルビア・トリゴナ',
            scientific: 'Euphorbia trigona',
            description: 'サボテンのような見た目ですが、小さな葉をつける多肉植物。「彩雲閣」とも呼ばれ、魔除けとしても人気です。',
            tags: ['多肉植物', '個性的', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['medium', 'large']
            },
            imageColor: '#2E7D32'
        },
        {
            name: 'アデニウム',
            scientific: 'Adenium obesum',
            description: '「砂漠のバラ」と呼ばれ、美しい花を咲かせる塊根植物。ユニークな幹の形と鮮やかな花が魅力です。',
            tags: ['塊根植物', '花が咲く', '個性的'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#E91E63'
        },
        {
            name: 'ウツボカズラ',
            scientific: 'Nepenthes',
            description: '捕虫袋をつける食虫植物。ユニークな見た目で、ハンギングにして吊るすとインテリアのアクセントになります。',
            tags: ['食虫植物', 'ハンギング', '個性的'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['daily', 'weekly'],
                size: ['medium']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'オジギソウ',
            scientific: 'Mimosa pudica',
            description: '葉に触れると閉じてお辞儀をする不思議な植物。動きがあるので、子供から大人まで楽しめます。',
            tags: ['動く植物', 'ユニーク', '可愛い'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['daily', 'weekly'],
                size: ['small']
            },
            imageColor: '#AED581'
        },
        {
            name: 'ハートカズラ',
            scientific: 'Ceropegia woodii',
            description: '小さなハート型の葉が連なるつる性多肉植物。「ラブチェーン」とも呼ばれ、恋が実る植物として人気です。',
            tags: ['ハート型の葉', 'つる性', 'ハンギング'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['minimal', 'weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#81C784'
        },
        {
            name: 'ドルフィンネックレス',
            scientific: 'Senecio peregrinus',
            description: '葉の形がイルカがジャンプしているように見える多肉植物。非常に可愛らしく、癒やし効果抜群です。',
            tags: ['多肉植物', '可愛い', '個性的'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['minimal', 'weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'ビカクシダ（グランデ）',
            scientific: 'Platycerium superbum',
            description: '「森の王冠」と呼ばれる大型のビカクシダ。圧倒的な存在感で、壁掛けにするとインテリアの主役になります。',
            tags: ['大型', '壁掛け', '個性的'],
            careLevel: 3,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['expert', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#558B2F'
        },
        {
            name: 'パキポディウム・グラキリス',
            scientific: 'Pachypodium gracilius',
            description: '丸く太った幹が特徴の塊根植物。非常に人気が高く、ユニークな樹形は一つとして同じものがありません。',
            tags: ['塊根植物', '人気', '個性的'],
            careLevel: 3,
            match: {
                sunlight: ['high'],
                experience: ['expert', 'intermediate'],
                care_frequency: ['minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#9E9D24'
        },
        {
            name: 'ボストンファーン',
            scientific: 'Nephrolepis exaltata',
            description: 'ボリュームのある美しい葉が特徴のシダ植物。空気清浄効果が高く、ハンギングにすると豪華な雰囲気になります。',
            tags: ['シダ植物', '空気清浄', 'ハンギング'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium', 'large']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'アジアンタム',
            scientific: 'Adiantum raddianum',
            description: '小さく繊細な葉が涼しげなシダ植物。乾燥に弱いため、こまめな霧吹きが必要ですが、その美しさは格別です。',
            tags: ['シダ植物', '繊細', '涼しげ'],
            careLevel: 3,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['daily'],
                size: ['small', 'medium']
            },
            imageColor: '#81C784'
        },
        {
            name: 'アレカヤシ',
            scientific: 'Dypsis lutescens',
            description: '南国ムード満点のヤシ。明るい緑色の葉が優雅に広がり、リビングやオフィスのシンボルツリーとして人気です。',
            tags: ['ヤシ', '南国風', '大型'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'ケンチャヤシ',
            scientific: 'Howea forsteriana',
            description: '濃緑色の葉が優雅に垂れ下がる、高級感のあるヤシ。耐陰性が高く、室内でも育てやすいのが特徴です。',
            tags: ['ヤシ', '高級感', '日陰OK'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#2E7D32'
        },
        {
            name: 'スパティフィラム',
            scientific: 'Spathiphyllum',
            description: '白い仏炎苞（花のような部分）が美しい植物。日陰に強く、清潔感があり、どんなインテリアにも馴染みます。',
            tags: ['花が咲く', '日陰OK', '清潔感'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#FFFFFF'
        },
        {
            name: 'カランコエ',
            scientific: 'Kalanchoe blossfeldiana',
            description: '肉厚の葉と、赤やピンク、黄色などの鮮やかな花が特徴。乾燥に強く、初心者でも簡単に花を楽しめます。',
            tags: ['花が咲く', '多肉質', 'カラフル'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['minimal', 'weekly'],
                size: ['small']
            },
            imageColor: '#FF5722'
        },
        {
            name: 'シクラメン',
            scientific: 'Cyclamen persicum',
            description: '冬の鉢花の代表格。ハート型の葉と、かがり火のような花が特徴で、冬の室内を明るく彩ります。',
            tags: ['花が咲く', '冬の花', 'ハート型の葉'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#E91E63'
        },
        {
            name: 'ハラン',
            scientific: 'Aspidistra elatior',
            description: '非常に丈夫で、日陰や寒さにも強い最強の観葉植物。大きな葉は和風モダンな空間によく合います。',
            tags: ['丈夫', '日陰OK', '和モダン'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['weekly', 'minimal'],
                size: ['medium', 'large']
            },
            imageColor: '#1B5E20'
        },
        {
            name: 'ザミオクルカス・レイヴン',
            scientific: 'Zamioculcas zamiifolia Raven',
            description: '黒に近い濃い紫色の葉がシックでかっこいい品種。モダンで落ち着いたインテリアに最適です。',
            tags: ['黒い葉', 'モダン', '乾燥に強い'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['minimal'],
                size: ['medium']
            },
            imageColor: '#212121'
        },
        {
            name: 'サンセベリア・スタッキー',
            scientific: 'Sansevieria stuckyi',
            description: '棒状の葉がスタイリッシュに伸びるサンセベリア。モダンな見た目で、空気清浄効果も高いです。',
            tags: ['スタイリッシュ', '空気清浄', '乾燥に強い'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['medium']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'ステファニア',
            scientific: 'Stephania erecta',
            description: 'ジャガイモのような塊根から、丸い葉がつる状に伸びるユニークな植物。愛好家に人気の珍奇植物です。',
            tags: ['塊根植物', '個性的', '可愛い'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['minimal', 'weekly'],
                size: ['small']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'ディオスコレア（亀甲竜）',
            scientific: 'Dioscorea elephantipes',
            description: '亀の甲羅のようなゴツゴツした塊根が特徴。冬型塊根植物の代表格で、ハート型の葉を展開します。',
            tags: ['塊根植物', '個性的', '冬型'],
            careLevel: 3,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['expert', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#795548'
        },
        {
            name: 'アガベ・アテナータ',
            scientific: 'Agave attenuata',
            description: 'トゲがなく、柔らかい葉がロゼット状に広がる美しいアガベ。上品な姿で、モダンな空間にマッチします。',
            tags: ['多肉植物', 'モダン', '大型'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['minimal'],
                size: ['medium', 'large']
            },
            imageColor: '#A5D6A7'
        },
        {
            name: 'ソテツ',
            scientific: 'Cycas revoluta',
            description: '太い幹と羽状の葉が南国ムードを演出。非常に丈夫で寿命が長く、成長もゆっくりなので管理しやすいです。',
            tags: ['南国風', '丈夫', '和モダン'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['medium', 'large']
            },
            imageColor: '#388E3C'
        },
        {
            name: 'オリーブの木',
            scientific: 'Olea europaea',
            description: '銀色の葉が美しい、平和の象徴とされる木。地中海風のインテリアにぴったりで、実を楽しむこともできます。',
            tags: ['おしゃれ', 'シンボルツリー', '実がなる'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#9E9D24'
        },
        {
            name: 'マリモ',
            scientific: 'Aegagropila linnaei',
            description: '北海道の阿寒湖などで有名な緑色の球体。水中で育てる癒やしの植物で、手入れも水を換えるだけで簡単です。',
            tags: ['水生植物', '癒やし', '可愛い'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#00695C'
        },
        {
            name: '苔テラリウム',
            scientific: 'Bryophyte',
            description: 'ガラス容器の中で苔を育てる小さな森。湿度を保つことで、美しい緑を長く楽しめます。デスクの癒やしに最適。',
            tags: ['テラリウム', '癒やし', '卓上サイズ'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#33691E'
        },
        {
            name: 'ガジュマル',
            scientific: 'Ficus microcarpa',
            description: '「多幸の木」と呼ばれる縁起の良い植物。太い幹とユニークな樹形が特徴で、生命力を感じさせます。',
            tags: ['縁起が良い', '丈夫', '個性的'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            name: 'パキラ',
            scientific: 'Pachira aquatica',
            description: '「発財樹」とも呼ばれ、金運アップの植物として人気。編み込まれた幹がおしゃれで、初心者にも育てやすいです。',
            tags: ['金運アップ', '丈夫', '定番'],
            isPetSafe: true,
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high', 'low'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'ミリオンバンブー',
            scientific: 'Dracaena sanderiana',
            description: '「開運竹」とも呼ばれる縁起物。竹のように見えますがドラセナの仲間で、水耕栽培でも簡単に育ちます。',
            tags: ['縁起が良い', '水耕栽培OK', '和モダン'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'アナナス（グズマニア）',
            scientific: 'Guzmania',
            description: '鮮やかな赤や黄色の花苞が長く楽しめるパイナップル科の植物。トロピカルな雰囲気で、部屋を明るくします。',
            tags: ['カラフル', '南国風', '花が咲く'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#F44336'
        },
        {
            name: 'アンスリウム・フーケリー',
            scientific: 'Anthurium hookeri',
            description: '花よりも、波打つ巨大な葉を楽しむ原種系アンスリウム。野性味あふれる姿がかっこいい植物です。',
            tags: ['葉を楽しむ', '個性的', '大型'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#2E7D32'
        },
        {
            name: 'フィロデンドロン・ピンクプリンセス',
            scientific: 'Philodendron Pink Princess',
            description: '黒に近い深緑の葉に、鮮やかなピンクの斑が入る希少品種。宝石のような美しさで、コレクターに大人気です。',
            tags: ['ピンクの斑', '希少', 'おしゃれ'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#E91E63'
        },
        {
            name: 'モンステラ・デリシオーサ',
            scientific: 'Monstera deliciosa',
            description: '観葉植物の王様。大きく切れ込みの入った葉はインパクト抜群で、ひとつ置くだけで部屋がおしゃれになります。',
            tags: ['大型', '定番', 'おしゃれ'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#1B5E20'
        },
        {
            name: 'サンスベリア・ローレンティー',
            scientific: 'Sansevieria trifasciata Laurentii',
            description: '「トラノオ」とも呼ばれる最もポピュラーな品種。黄色い縁取りが特徴で、空気清浄効果が非常に高いです。',
            tags: ['空気清浄', '丈夫', '定番'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['medium', 'large']
            },
            imageColor: '#FFC107'
        },
        {
            name: 'ドラセナ・マッサンゲアナ',
            scientific: 'Dracaena fragrans Massangeana',
            description: '「幸福の木」として親しまれている定番の観葉植物。太い幹と優しい緑の葉が、温かい家庭の雰囲気に合います。',
            tags: ['幸福の木', '定番', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'ユッカ・ロストラータ',
            scientific: 'Yucca rostrata',
            description: 'シルバーブルーの葉が放射状に広がる美しいユッカ。耐寒性が強く、ドライガーデンやモダンな庭にも最適です。',
            tags: ['シルバーリーフ', 'ドライガーデン', '丈夫'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['minimal'],
                size: ['medium', 'large']
            },
            imageColor: '#B0BEC5'
        },
        {
            name: 'アガベ・チタノタ',
            scientific: 'Agave titanota',
            description: '肉厚で短い葉と、厳ついトゲが特徴のアガベ。ワイルドな見た目が男性にも大人気で、コレクション性が高いです。',
            tags: ['多肉植物', 'ワイルド', '人気'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#546E7A'
        },
        {
            name: 'ハオルチア',
            scientific: 'Haworthia',
            description: '「砂漠の宝石」と呼ばれる、透明な窓を持つ多肉植物。光にかざすとキラキラと輝き、非常に美しいです。',
            tags: ['多肉植物', '透明感', '卓上サイズ'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['minimal'],
                size: ['small']
            },
            imageColor: '#81C784'
        },
        {
            name: 'リトープス',
            scientific: 'Lithops',
            description: '「生ける宝石」と呼ばれる、石に擬態した多肉植物。脱皮をして成長するユニークな生態が魅力です。',
            tags: ['多肉植物', 'ユニーク', '擬態'],
            careLevel: 3,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['expert', 'intermediate'],
                care_frequency: ['minimal'],
                size: ['small']
            },
            imageColor: '#A1887F'
        },
        {
            name: 'エケベリア',
            scientific: 'Echeveria',
            description: 'バラの花のような美しいロゼット型多肉植物。色や形が豊富で、コレクション性が高い人気種です。',
            tags: ['多肉植物', '可愛い', 'カラフル'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['small']
            },
            imageColor: '#E1BEE7'
        },
        {
            name: 'セダム',
            scientific: 'Sedum',
            description: 'ぷっくりした葉が可愛い小型多肉植物。寄せ植えやグランドカバーに最適で、育てやすさ抜群です。',
            tags: ['多肉植物', '可愛い', '寄せ植え'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['small']
            },
            imageColor: '#C5E1A5'
        },
        {
            name: 'クラッスラ・オウァタ',
            scientific: 'Crassula ovata',
            description: '「金のなる木」として有名な縁起物。コインのような丸い葉が特徴で、金運アップの植物として人気です。',
            tags: ['多肉植物', '金運アップ', '縁起が良い'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#AED581'
        },
        {
            name: 'センペルビウム',
            scientific: 'Sempervivum',
            description: '「永遠に生きる」という意味の名を持つ多肉植物。耐寒性が非常に強く、屋外でも育てられます。',
            tags: ['多肉植物', '丈夫', '寒さに強い'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['small']
            },
            imageColor: '#9CCC65'
        },
        {
            name: 'ブロメリア・ネオレゲリア',
            scientific: 'Neoregelia',
            description: '中心部が赤やピンクに色づく美しいブロメリア。水を溜める葉の中央が特徴的で、管理も簡単です。',
            tags: ['カラフル', 'エキゾチック', 'ユニーク'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#EC407A'
        },
        {
            name: 'クリプタンサス',
            scientific: 'Cryptanthus',
            description: '「地球の星」と呼ばれるブロメリアの仲間。星型に広がる葉と美しい模様が特徴です。',
            tags: ['個性的', 'カラフル', '卓上サイズ'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#8E24AA'
        },
        {
            name: 'ミニバラ',
            scientific: 'Rosa',
            description: '室内でも育てられる小さなバラ。四季咲きで、年中可愛い花を楽しめます。',
            tags: ['花が咲く', '可愛い', '香り'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['daily', 'weekly'],
                size: ['small']
            },
            imageColor: '#F48FB1'
        },
        {
            name: 'ラベンダー',
            scientific: 'Lavandula',
            description: '爽やかな香りが魅力のハーブ。紫の花が美しく、リラックス効果も期待できます。',
            tags: ['ハーブ', '香り', '花が咲く'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#9575CD'
        },
        {
            name: 'ローズマリー',
            scientific: 'Rosmarinus officinalis',
            description: '料理にも使える実用的なハーブ。清々しい香りで、記憶力向上の効果も言われています。',
            tags: ['ハーブ', '料理', '香り'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'バジル',
            scientific: 'Ocimum basilicum',
            description: 'イタリア料理に欠かせないハーブ。摘みたての香りは格別で、キッチンガーデンに最適です。',
            tags: ['ハーブ', '料理', '香り'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['daily', 'weekly'],
                size: ['small']
            },
            imageColor: '#7CB342'
        },
        {
            name: 'ミント',
            scientific: 'Mentha',
            description: '清涼感のある香りが特徴のハーブ。繁殖力が強く、簡単に育てられます。',
            tags: ['ハーブ', '香り', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['daily', 'weekly'],
                size: ['small']
            },
            imageColor: '#26A69A'
        },
        {
            name: 'タイム',
            scientific: 'Thymus',
            description: '小さな葉から芳香を放つハーブ。料理にもティーにも使える万能ハーブです。',
            tags: ['ハーブ', '料理', '香り'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#689F38'
        },
        {
            name: 'クロトン',
            scientific: 'Codiaeum variegatum',
            description: '赤、黄、緑など色鮮やかな葉が特徴。トロピカルな雰囲気で、存在感抜群です。',
            tags: ['カラフル', '南国風', '個性的'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#FF9800'
        },
        {
            name: 'コルジリネ',
            scientific: 'Cordyline fruticosa',
            description: 'ピンクや赤の葉が美しい観葉植物。「ティーツリー」とも呼ばれ、おしゃれな空間を演出します。',
            tags: ['カラフル', 'おしゃれ', '南国風'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#E91E63'
        },
        {
            name: 'ストレプトカーパス',
            scientific: 'Streptocarpus',
            description: '可愛らしい花が次々と咲く室内向け植物。セントポーリアの仲間で、育てやすい品種です。',
            tags: ['花が咲く', '可愛い', '卓上サイズ'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#BA68C8'
        },
        {
            name: 'セントポーリア',
            scientific: 'Saintpaulia',
            description: '「アフリカスミレ」とも呼ばれる室内花の女王。小さな花が年中咲き、カラーバリエーションも豊富です。',
            tags: ['花が咲く', '可愛い', '卓上サイズ'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#9C27B0'
        },
        {
            name: 'シンビジウム',
            scientific: 'Cymbidium',
            description: '冬に美しい花を咲かせる洋ラン。比較的育てやすく、長い期間花を楽しめます。',
            tags: ['花が咲く', '冬の花', '高級感'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#FFEB3B'
        },
        {
            name: 'アイビーゼラニウム',
            scientific: 'Pelargonium peltatum',
            description: 'つる性で垂れ下がる姿が美しいゼラニウム。ハンギングにすると華やかで、花も楽しめます。',
            tags: ['花が咲く', 'ハンギング', '可愛い'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#FF5252'
        },
        {
            name: 'ハエトリソウ',
            scientific: 'Dionaea muscipula',
            description: '二枚貝のような葉で虫を捕らえる食虫植物。ユニークな生態で、観察するのが楽しい植物です。',
            tags: ['食虫植物', 'ユニーク', '個性的'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['daily', 'weekly'],
                size: ['small']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'モウセンゴケ',
            scientific: 'Drosera',
            description: '葉の表面の粘液で虫を捕らえる食虫植物。キラキラと光る粘液が美しく、インテリアとしても人気です。',
            tags: ['食虫植物', 'ユニーク', 'キラキラ'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#F06292'
        },
        {
            name: 'レモンの木',
            scientific: 'Citrus limon',
            description: '爽やかな香りの花と実を楽しめる果樹。自家結実性があり、一本でも実がなります。',
            tags: ['実がなる', '香り', '料理'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['daily', 'weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#FFF176'
        },
        {
            name: 'コーヒーの木',
            scientific: 'Coffea arabica',
            description: '艶のある濃い緑の葉が美しい観葉植物。大きく育てば、白い花と赤い実を楽しめます。',
            tags: ['実がなる', 'おしゃれ', '光沢のある葉'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#3E2723'
        },
        {
            name: 'ブルーベリー',
            scientific: 'Vaccinium',
            description: '春には花、夏には実、秋には紅葉と、四季折々の変化を楽しめる果樹。鉢植えでも育てやすいです。',
            tags: ['実がなる', '紅葉', '料理'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['daily', 'weekly'],
                size: ['medium']
            },
            imageColor: '#5C6BC0'
        },
        {
            name: 'コノフィツム',
            scientific: 'Conophytum',
            description: 'ハート型や足袋型など、ユニークな形の多肉植物。脱皮をして成長する姿が可愛らしいです。',
            tags: ['多肉植物', '可愛い', 'ユニーク'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['minimal'],
                size: ['small']
            },
            imageColor: '#81C784'
        },
        {
            name: 'アスプレニウム',
            scientific: 'Asplenium',
            description: '放射状に広がる鮮やかな緑の葉が美しいシダ植物。耐陰性が強く、室内の暗い場所でも育ちます。',
            tags: ['シダ', '日陰OK', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#64DD17'
        },
        {
            name: 'フィカス・ベンガレンシス',
            scientific: 'Ficus benghalensis',
            description: '白い幹と緑の葉のコントラストが美しいゴムの木。「長寿の木」として縁起も良く、インテリアの主役に最適です。',
            tags: ['おしゃれ', '大型', '縁起が良い'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#AED581'
        },
        {
            name: 'エバーフレッシュ',
            scientific: 'Pithecellobium confertum',
            description: '夜になると葉を閉じる「睡眠運動」をする植物。涼しげな見た目で、部屋に軽やかな印象を与えます。',
            tags: ['おしゃれ', 'ユニーク', '大型'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['daily', 'weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'ソフォラ・リトルベイビー',
            scientific: 'Sophora prostrata',
            description: '「メルヘンの木」とも呼ばれる、ジグザグの枝と小さな葉が特徴の植物。華奢で可愛らしい姿が人気です。',
            tags: ['可愛い', '個性的', 'おしゃれ'],
            careLevel: 3,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['expert', 'intermediate'],
                care_frequency: ['daily', 'weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'アデニウム・アラビカム',
            scientific: 'Adenium arabicum',
            description: 'どっしりとした塊根部と、枝分かれした樹形が魅力。盆栽のように仕立てて楽しむことができます。',
            tags: ['塊根植物', '盆栽風', '個性的'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['minimal'],
                size: ['medium']
            },
            imageColor: '#795548'
        },
        {
            name: 'パキポディウム・ラメリー',
            scientific: 'Pachypodium lamerei',
            description: 'トゲのある幹と、頂上の長い葉がヤシの木のような雰囲気。丈夫で育てやすく、塊根植物の入門種としておすすめ。',
            tags: ['塊根植物', 'トゲトゲ', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['medium', 'large']
            },
            imageColor: '#4DB6AC'
        },
        {
            name: 'アガベ・パリー',
            scientific: 'Agave parryi',
            description: '「吉祥天」の和名を持つ、整ったロゼット型のアガベ。耐寒性が非常に強く、ドライガーデンにも最適です。',
            tags: ['多肉植物', 'かっこいい', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['medium']
            },
            imageColor: '#90A4AE'
        },
        {
            name: 'ディッキア',
            scientific: 'Dyckia',
            description: '硬質の葉と鋭いトゲが特徴のブロメリア。ワイルドな見た目で、乾燥にも強く育てやすいです。',
            tags: ['かっこいい', 'トゲトゲ', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#546E7A'
        },
        {
            name: 'チランジア・キセログラフィカ',
            scientific: 'Tillandsia xerographica',
            description: '「エアプランツの王様」と呼ばれる大型種。銀白色のカールした葉が美しく、存在感抜群です。',
            tags: ['エアプランツ', 'おしゃれ', '大型'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#B0BEC5'
        },
        {
            name: 'ビカクシダ・リドレイ',
            scientific: 'Platycerium ridleyi',
            description: '鹿の角のような胞子葉と、キャベツのような貯水葉が特徴。独特のフォルムで、ビカクシダの中でも特に人気があります。',
            tags: ['シダ', '個性的', 'ハンギング'],
            careLevel: 3,
            match: {
                sunlight: ['medium'],
                experience: ['expert'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'シェフレラ・アンガスティフォリア',
            scientific: 'Schefflera angustifolia',
            description: '細長い葉が涼しげなシェフレラ。スタイリッシュな雰囲気で、どんなインテリアにも馴染みます。',
            tags: ['おしゃれ', '丈夫', 'スタイリッシュ'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#81C784'
        },
        {
            name: 'アスパラガス・ナナス',
            scientific: 'Asparagus nanus',
            description: 'ふわふわとした繊細な葉が美しい観葉植物。涼しげな見た目で、寄せ植えの名脇役としても活躍します。',
            tags: ['可愛い', '繊細', '涼しげ'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#C5E1A5'
        },
        {
            name: 'カラテア・マコヤナ',
            scientific: 'Calathea makoyana',
            description: '孔雀の羽のような美しい模様の葉を持つ植物。夜になると葉を立てて眠る休眠運動を行います。',
            tags: ['カラフル', '個性的', '美しい'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#A1887F'
        },
        {
            name: 'アロカシア・ポリー',
            scientific: 'Alocasia polly',
            description: '濃い緑の葉に白い葉脈がくっきりと入る、エキゾチックな雰囲気の植物。「アマゾニカ」の小型品種です。',
            tags: ['個性的', 'かっこいい', 'エキゾチック'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#3E2723'
        },
        {
            name: 'ハオルチア・オブツーサ',
            scientific: 'Haworthia cooperi',
            description: '「雫石」とも呼ばれる、透明な窓を持つ多肉植物。光にかざすとキラキラと輝き、非常に美しいです。',
            tags: ['多肉植物', '透明感', '美しい'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['minimal'],
                size: ['small']
            },
            imageColor: '#B2DFDB'
        },
        {
            name: 'リプサリス',
            scientific: 'Rhipsalis',
            description: '「森林サボテン」と呼ばれる、トゲのないサボテン。細長い茎が垂れ下がる姿がユニークで、ハンギングに最適です。',
            tags: ['サボテン', 'ハンギング', 'ユニーク'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['medium']
            },
            imageColor: '#81C784'
        },
        {
            name: 'ホヤ・リネアリス',
            scientific: 'Hoya linearis',
            description: '細長い葉がカーテンのように垂れ下がるホヤ。条件が合うと、白く美しい花を咲かせます。',
            tags: ['ハンギング', 'おしゃれ', '花が咲く'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#C8E6C9'
        },
        {
            name: 'ディスキディア',
            scientific: 'Dischidia',
            description: '丸い葉が連なる姿が可愛いつる性植物。「カンガルーポケット」と呼ばれる袋状の葉を持つ品種もあります。',
            tags: ['可愛い', 'ハンギング', '個性的'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#AED581'
        },
        {
            name: 'ピレア・グラウカ',
            scientific: 'Pilea glauca',
            description: 'シルバーグレーの小さな葉が密集する美しい植物。シックな雰囲気で、大人のインテリアによく合います。',
            tags: ['おしゃれ', 'シルバーリーフ', '卓上サイズ'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#CFD8DC'
        },
        {
            name: 'ペペロミア・ロッソ',
            scientific: 'Peperomia Rosso',
            description: '葉の表面は緑、裏面は赤というコントラストが美しいペペロミア。コンパクトで育てやすく、デスクにも置けます。',
            tags: ['カラフル', '卓上サイズ', '個性的'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#D32F2F'
        },
        {
            name: 'フィットニア（アミメグサ）',
            scientific: 'Fittonia',
            description: '網目状の模様が入る葉が特徴。赤やピンク、白などカラーバリエーションが豊富で、テラリウムにも向いています。',
            tags: ['カラフル', 'テラリウム', '可愛い'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#F48FB1'
        },
        {
            name: 'ヒポエステス',
            scientific: 'Hypoestes',
            description: '「ソバカスソウ」とも呼ばれる、斑点模様が可愛い植物。ピンクや赤、白の斑が入り、寄せ植えのアクセントになります。',
            tags: ['カラフル', '可愛い', '寄せ植え'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#FFCDD2'
        },
        {
            name: 'トラデスカンティア・ゼブリナ',
            scientific: 'Tradescantia zebrina',
            description: '紫とシルバーの縞模様が美しいつる性植物。成長が早く、ハンギングにするとボリュームが出て見応えがあります。',
            tags: ['カラフル', 'ハンギング', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#7B1FA2'
        },
        {
            name: 'オキザリス',
            scientific: 'Oxalis',
            description: 'クローバーのような葉と、可憐な花が特徴。紫色の葉を持つ「トリアングラリス」などが人気です。',
            tags: ['可愛い', '花が咲く', 'カラフル'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#BA68C8'
        },
        {
            name: 'ベゴニア・マクラータ',
            scientific: 'Begonia maculata',
            description: '水玉模様の葉が非常にユニークなベゴニア。葉の裏は赤く、モダンなインテリアにぴったりの植物です。',
            tags: ['おしゃれ', '個性的', '水玉模様'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#D7CCC8'
        },
        {
            name: 'フィカス・ウンベラータ',
            scientific: 'Ficus umbellata',
            description: 'ハート型の大きな葉が特徴的で、インテリアグリーンとして大人気。明るい場所を好み、存在感のある樹形が魅力です。',
            tags: ['人気', '大型', 'おしゃれ'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['weekly', 'daily'],
                size: ['large', 'medium']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'アロカシア',
            scientific: 'Alocasia',
            description: '矢じり型の大きな葉が印象的な熱帯性植物。独特の葉脈と光沢がエキゾチックな雰囲気を演出します。',
            tags: ['個性的', 'エキゾチック', '上級者向け'],
            careLevel: 3,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium', 'large']
            },
            imageColor: '#2E7D32'
        },
        {
            name: 'カラテア',
            scientific: 'Calathea',
            description: '美しい模様の入った葉が特徴で、夜になると葉が立ち上がる「就眠運動」をする不思議な植物。',
            tags: ['模様が美しい', '個性的', '中級者向け'],
            isPetSafe: true,
            careLevel: 3,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'ストレリチア・レギネ',
            scientific: 'Strelitzia reginae',
            description: '「極楽鳥花」とも呼ばれ、南国ムード満点の大型観葉植物。オレンジ色の美しい花を咲かせます。',
            tags: ['花が咲く', '大型', 'トロピカル'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#FF9800'
        },
        {
            name: 'ミリオンバンブー',
            scientific: 'Dracaena sanderiana',
            description: '「開運竹」として人気の縁起物。水耕栽培も可能で、初心者でも育てやすい幸運を呼ぶ観葉植物。',
            tags: ['縁起物', '初心者向け', '水耕栽培可'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly', 'minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'シェフレラ',
            scientific: 'Schefflera arboricola',
            description: '「カポック」とも呼ばれ、傘のように広がる葉が特徴。丈夫で育てやすく、初心者に最適です。',
            tags: ['初心者向け', '育てやすい', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium', 'large']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'ピレア・ペペロミオイデス',
            scientific: 'Pilea peperomioides',
            description: '「チャイニーズマネープラント」として人気急上昇中。コインのような丸い葉がかわいらしい。',
            tags: ['おしゃれ', 'SNS映え', '人気'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'スキンダプサス',
            scientific: 'Scindapsus pictus',
            description: 'シルバーの斑点が美しい「サテンポトス」。つる性で垂らして楽しむこともできます。',
            tags: ['つる性', '美しい葉', '育てやすい'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#81C784'
        },
        {
            name: 'ハートカズラ',
            scientific: 'Ceropegia woodii',
            description: 'ハート型の小さな葉が連なるつる性植物。「ラブチェーン」とも呼ばれ、贈り物にも人気。',
            tags: ['つる性', 'かわいい', '多肉質'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly', 'minimal'],
                size: ['small']
            },
            imageColor: '#9C27B0'
        },
        {
            name: 'クワズイモ',
            scientific: 'Alocasia odora',
            description: '大きなハート型の葉が印象的で、トロピカルな雰囲気を演出。成長が早く存在感抜群。',
            tags: ['大型', 'トロピカル', 'インパクト'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['large']
            },
            imageColor: '#388E3C'
        },
        {
            name: 'ビカクシダ',
            scientific: 'Platycerium',
            description: '鹿の角のような独特の葉が特徴の着生シダ。壁掛けでも楽しめるユニークな観葉植物。',
            tags: ['個性的', '着生植物', '上級者向け'],
            isPetSafe: true,
            careLevel: 3,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#689F38'
        },
        {
            name: 'アグラオネマ・ピクタム',
            scientific: 'Aglaonema pictum',
            description: '美しい迷彩模様の葉が特徴の希少種。コレクター心をくすぐる個性的な観葉植物。',
            tags: ['希少', '美しい模様', 'コレクター向け'],
            careLevel: 3,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['expert'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#2E7D32'
        },
        {
            name: 'フィロデンドロン・バーキン',
            scientific: 'Philodendron birkin',
            description: '白いストライプ模様が美しいフィロデンドロンの園芸品種。コンパクトで育てやすい。',
            tags: ['美しい模様', '人気', '育てやすい'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'モンステラ・アダンソニー',
            scientific: 'Monstera adansonii',
            description: '小さめの葉に穴が開く「ヒメモンステラ」。つる性で垂らしても這わせても楽しめます。',
            tags: ['つる性', 'おしゃれ', '人気'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#2E7D32'
        },
        // 🌵 多肉植物・サボテン (10種類)
        {
            name: 'エケベリア',
            scientific: 'Echeveria',
            description: 'バラの花のような美しいロゼット状の多肉植物。様々な色や形があり、コレクション性が高い。',
            tags: ['多肉植物', '育てやすい', 'おしゃれ'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly', 'minimal'],
                size: ['small']
            },
            imageColor: '#81C784'
        },
        {
            name: 'セダム',
            scientific: 'Sedum',
            description: 'プクプクした葉が可愛らしい多肉植物。寒さにも強く、屋外でも育てられます。',
            tags: ['多肉植物', '初心者向け', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'クラッスラ',
            scientific: 'Crassula',
            description: '「金のなる木」として有名な多肉植物。縁起物として人気があります。',
            tags: ['多肉植物', '縁起物', '育てやすい'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly', 'minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'アガベ',
            scientific: 'Agave',
            description: 'ドライガーデンで人気の大型多肉植物。力強いフォルムが魅力的。',
            tags: ['多肉植物', 'ドライガーデン', '個性的'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['minimal'],
                size: ['medium', 'large']
            },
            imageColor: '#689F38'
        },
        {
            name: 'サボテン（柱サボテン）',
            scientific: 'Cereus',
            description: '西部劇に出てくるような柱状のサボテン。存在感抜群で育てやすい。',
            tags: ['サボテン', '育てやすい', 'インパクト'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['minimal'],
                size: ['medium', 'large']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'ハオルチア',
            scientific: 'Haworthia',
            description: '透明感のある葉が美しい小型多肉植物。「窓」と呼ばれる透明部分が特徴。',
            tags: ['多肉植物', '美しい', 'コレクター向け'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'minimal'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'リトープス',
            scientific: 'Lithops',
            description: '「生ける宝石」と呼ばれる不思議な多肉植物。石のような外見が特徴的。',
            tags: ['多肉植物', '個性的', '上級者向け'],
            careLevel: 3,
            match: {
                sunlight: ['high'],
                experience: ['expert'],
                care_frequency: ['minimal'],
                size: ['small']
            },
            imageColor: '#9E9E9E'
        },
        {
            name: 'グラプトペタルム',
            scientific: 'Graptopetalum',
            description: 'パステルカラーの葉が美しい多肉植物。「朧月」などの品種が人気。',
            tags: ['多肉植物', '美しい', '育てやすい'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly', 'minimal'],
                size: ['small']
            },
            imageColor: '#B39DDB'
        },
        {
            name: 'アロエ',
            scientific: 'Aloe',
            description: '薬用植物としても有名な多肉植物。丈夫で育てやすく、実用性も高い。',
            tags: ['多肉植物', '薬用', '育てやすい'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly', 'minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#7CB342'
        },
        {
            name: 'カランコエ',
            scientific: 'Kalanchoe',
            description: '色とりどりの花を咲かせる多肉植物。開花期が長く、初心者にも人気。',
            tags: ['多肉植物', '花が咲く', '初心者向け'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#FF7043'
        },
        // 🌿 シダ植物 (8種類)
        {
            name: 'アジアンタム',
            scientific: 'Adiantum',
            description: '繊細なレース状の葉が美しいシダ植物。「乙女の髪」とも呼ばれます。',
            tags: ['シダ', '美しい', '湿度好き'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['daily', 'weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'シノブ',
            scientific: 'Davallia',
            description: '這うように成長する根茎が特徴の和風シダ。「うさぎの足」のような根茎が人気。',
            tags: ['シダ', '和風', '個性的'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'ネフロレピス',
            scientific: 'Nephrolepis',
            description: 'ボリューム感のある葉が魅力的なシダ。空気清浄効果も期待できます。',
            tags: ['シダ', '空気清浄', '育てやすい'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium']
            },
            imageColor: '#388E3C'
        },
        {
            name: 'プテリス',
            scientific: 'Pteris',
            description: '斑入りの葉が美しいシダ植物。インテリアグリーンとして人気。',
            tags: ['シダ', '斑入り', 'おしゃれ'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#81C784'
        },
        {
            name: 'アスプレニウム',
            scientific: 'Asplenium',
            description: '「タニワタリ」として知られるシダ。光沢のある葉が美しい。',
            tags: ['シダ', '光沢', '育てやすい'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#2E7D32'
        },
        {
            name: 'セラギネラ',
            scientific: 'Selaginella',
            description: '苔のような見た目の小型シダ。テラリウムに最適。',
            tags: ['シダ', 'テラリウム', '小型'],
            careLevel: 3,
            match: {
                sunlight: ['low'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#558B2F'
        },
        {
            name: 'ツデー',
            scientific: 'Polystichum',
            description: '濃い緑の硬質な葉が特徴のシダ。日本庭園にもよく使われます。',
            tags: ['シダ', '和風', '丈夫'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#1B5E20'
        },
        {
            name: 'クジャクシダ',
            scientific: 'Ceratopteris',
            description: '水生シダとしても育てられるユニークな植物。繊細な葉が美しい。',
            tags: ['シダ', '水生可', 'ユニーク'],
            careLevel: 3,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['expert'],
                care_frequency: ['daily'],
                size: ['small', 'medium']
            },
            imageColor: '#43A047'
        },
        // 🌴 ヤシ類 (7種類)
        {
            name: 'テーブルヤシ',
            scientific: 'Chamaedorea elegans',
            description: '卓上サイズの小型ヤシ。トロピカルな雰囲気を手軽に楽しめます。',
            tags: ['ヤシ', '小型', '初心者向け'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'アレカヤシ',
            scientific: 'Dypsis lutescens',
            description: '優雅な姿が人気の大型ヤシ。オフィスや店舗でもよく見かけます。',
            tags: ['ヤシ', '大型', '人気'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#FDD835'
        },
        {
            name: 'ケンチャヤシ',
            scientific: 'Howea forsteriana',
            description: 'エレガントな姿の大型ヤシ。日陰にも強く育てやすい。',
            tags: ['ヤシ', '大型', '日陰OK'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#7CB342'
        },
        {
            name: 'フェニックス・ロベレニー',
            scientific: 'Phoenix roebelenii',
            description: 'スタイリッシュな姿の小型ヤシ。リゾート感を演出できます。',
            tags: ['ヤシ', 'おしゃれ', 'リゾート'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'ココヤシ',
            scientific: 'Cocos nucifera',
            description: 'ココナッツがなるヤシの木。南国ムード満点の観葉植物。',
            tags: ['ヤシ', '南国', 'ユニーク'],
            careLevel: 3,
            match: {
                sunlight: ['high'],
                experience: ['expert'],
                care_frequency: ['daily'],
                size: ['large']
            },
            imageColor: '#FFA726'
        },
        {
            name: 'シュロチク',
            scientific: 'Rhapis excelsa',
            description: '和風の雰囲気が漂う竹状のヤシ。日陰に強く育てやすい。',
            tags: ['ヤシ', '和風', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#558B2F'
        },
        {
            name: 'カンノンチク',
            scientific: 'Rhapis humilis',
            description: 'シュロチクに似た和風のヤシ。観音様の手に似た葉が特徴。',
            tags: ['ヤシ', '和風', '縁起物'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#689F38'
        },
        // 🍃 フィロデンドロン系 (6種類)
        {
            name: 'フィロデンドロン・セローム',
            scientific: 'Philodendron selloum',
            description: '大きく切れ込みの入った葉がインパクト抜群。成長すると巨大化します。',
            tags: ['フィロデンドロン', '大型', 'インパクト'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#2E7D32'
        },
        {
            name: 'フィロデンドロン・ブラジル',
            scientific: 'Philodendron hederaceum brasil',
            description: '黄色い斑入りが美しいつる性フィロデンドロン。育てやすく人気。',
            tags: ['フィロデンドロン', 'つる性', '斑入り'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#FFEB3B'
        },
        {
            name: 'フィロデンドロン・レモンライム',
            scientific: 'Philodendron lemon lime',
            description: '明るいライムグリーンの葉が鮮やか。インテリアのアクセントに最適。',
            tags: ['フィロデンドロン', '明るい色', 'おしゃれ'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#C5E1A5'
        },
        {
            name: 'フィロデンドロン・ピンクプリンセス',
            scientific: 'Philodendron pink princess',
            description: 'ピンクの斑入りが美しい希少品種。コレクター垂涎の植物。',
            tags: ['フィロデンドロン', '希少', 'ピンク'],
            careLevel: 3,
            match: {
                sunlight: ['medium'],
                experience: ['expert'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#F48FB1'
        },
        {
            name: 'フィロデンドロン・クッカバラ',
            scientific: 'Philodendron kookaburra',
            description: '深く切れ込んだ葉が特徴的。セロームよりもコンパクトに育つ。',
            tags: ['フィロデンドロン', '切れ込み', '育てやすい'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#388E3C'
        },
        {
            name: 'フィロデンドロン・ホワイトプリンセス',
            scientific: 'Philodendron white princess',
            description: '白い斑入りが美しい希少品種。ピンクプリンセスの姉妹品種。',
            tags: ['フィロデンドロン', '希少', '斑入り'],
            careLevel: 3,
            match: {
                sunlight: ['medium'],
                experience: ['expert'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#E8F5E9'
        },
        // 🌸 花が咲く植物 (6種類)
        {
            name: 'アンスリウム',
            scientific: 'Anthurium',
            description: 'ハート型の赤い花（実際は仏炎苞）が美しい。一年中花を楽しめます。',
            tags: ['花が咲く', '赤', '人気'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#E91E63'
        },
        {
            name: 'スパティフィラム',
            scientific: 'Spathiphyllum',
            description: '白い花が清楚で美しい。空気清浄効果でNASAも認めた植物。',
            tags: ['花が咲く', '空気清浄', '育てやすい'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#FFFFFF'
        },
        {
            name: 'ベゴニア',
            scientific: 'Begonia',
            description: '色とりどりの花と葉が美しい。品種が豊富で選ぶ楽しみも。',
            tags: ['花が咲く', 'カラフル', 'バリエーション豊富'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#FF4081'
        },
        {
            name: 'シクラメン',
            scientific: 'Cyclamen',
            description: '冬の定番花。反り返る花びらが優雅で美しい。',
            tags: ['花が咲く', '冬', '人気'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#EC407A'
        },
        {
            name: 'クンシラン',
            scientific: 'Clivia miniata',
            description: 'オレンジ色の豪華な花を咲かせる。縁起物としても人気。',
            tags: ['花が咲く', '縁起物', '豪華'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#FF9800'
        },
        {
            name: 'セントポーリア',
            scientific: 'Saintpaulia',
            description: '小さくて可愛らしい花が人気。室内で一年中花を楽しめます。',
            tags: ['花が咲く', '小型', 'かわいい'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#9C27B0'
        },
        // 🌬️ エアプランツ (5種類)
        {
            name: 'チランジア・イオナンタ',
            scientific: 'Tillandsia ionantha',
            description: '小型で育てやすいエアプランツの定番。開花時は赤く染まります。',
            tags: ['エアプランツ', '小型', '初心者向け'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#FF5722'
        },
        {
            name: 'チランジア・ウスネオイデス',
            scientific: 'Tillandsia usneoides',
            description: 'スパニッシュモスとして有名。垂らして楽しむエアプランツ。',
            tags: ['エアプランツ', '垂らす', 'おしゃれ'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#9E9E9E'
        },
        {
            name: 'チランジア・キセログラフィカ',
            scientific: 'Tillandsia xerographica',
            description: 'エアプランツの王様。大型で存在感抜群の美しい姿。',
            tags: ['エアプランツ', '大型', '高級'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#C0CA33'
        },
        {
            name: 'チランジア・カプトメデューサエ',
            scientific: 'Tillandsia caput-medusae',
            description: 'メデューサの頭のようなユニークな姿。個性的なエアプランツ。',
            tags: ['エアプランツ', 'ユニーク', '個性的'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'チランジア・ブルボーサ',
            scientific: 'Tillandsia bulbosa',
            description: '球根状の基部が特徴的。くるくるカールする葉が可愛い。',
            tags: ['エアプランツ', 'かわいい', 'ユニーク'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        // 🎋 つる性植物 (4種類)
        {
            name: 'ホヤ・カルノーサ',
            scientific: 'Hoya carnosa',
            description: '肉厚の葉と星型の花が美しいつる性植物。「サクララン」とも呼ばれます。',
            tags: ['つる性', '花が咲く', '多肉質'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#E91E63'
        },
        {
            name: 'ディスキディア',
            scientific: 'Dischidia',
            description: 'ハート型やカンガルーポケットのような葉が特徴。着生植物。',
            tags: ['つる性', 'ユニーク', '着生植物'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'トラデスカンティア',
            scientific: 'Tradescantia',
            description: '紫やピンクの葉が美しいつる性植物。成長が早く育てやすい。',
            tags: ['つる性', 'カラフル', '育てやすい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#9C27B0'
        },
        {
            name: 'グリーンネックレス',
            scientific: 'Senecio rowleyanus',
            description: '真珠のような丸い葉が連なる多肉質のつる性植物。',
            tags: ['つる性', '多肉質', 'かわいい'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'minimal'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        // 🌟 希少種・コレクター向け (4種類)
        {
            name: 'モンステラ・オブリカ',
            scientific: 'Monstera obliqua',
            description: '穴だらけの葉が特徴の超希少種。コレクター垂涎の植物。',
            tags: ['希少', 'コレクター向け', '高級'],
            careLevel: 3,
            match: {
                sunlight: ['medium'],
                experience: ['expert'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium']
            },
            imageColor: '#1B5E20'
        },
        {
            name: 'アンスリウム・クラリネルビウム',
            scientific: 'Anthurium clarinervium',
            description: '白い葉脈が美しいビロードのような葉。観葉アンスリウムの代表種。',
            tags: ['希少', '美しい葉脈', '高級'],
            careLevel: 3,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['expert'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#2E7D32'
        },
        {
            name: 'フィカス・ウンベラータ・バンビーノ',
            scientific: 'Ficus umbellata bambino',
            description: 'フィカス・ウンベラータの小型品種。コンパクトで育てやすい。',
            tags: ['希少', '小型', 'おしゃれ'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'アロカシア・バンビーノアロー',
            scientific: 'Alocasia bambino arrow',
            description: '小型で育てやすいアロカシアの品種。矢じり型の葉が美しい。',
            tags: ['希少', 'コンパクト', '育てやすい'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#2E7D32'
        },
        // 🌿 ハーブ・香りの植物 (15種類) - Phase 2
        {
            name: 'バジル',
            scientific: 'Ocimum basilicum',
            description: '料理に欠かせない香草。室内で育てれば新鮮なバジルをいつでも収穫できます。',
            tags: ['ハーブ', '食用', '香り'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'ローズマリー',
            scientific: 'Rosmarinus officinalis',
            description: '爽やかな香りが特徴のハーブ。料理や芳香剤として人気。丈夫で育てやすい。',
            tags: ['ハーブ', '食用', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly', 'minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#689F38'
        },
        {
            name: 'ラベンダー',
            scientific: 'Lavandula',
            description: 'リラックス効果のある香りが人気。紫色の花も美しく、ドライフラワーにも。',
            tags: ['ハーブ', '香り', '花が咲く'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#9575CD'
        },
        {
            name: 'ミント',
            scientific: 'Mentha',
            description: '爽快な香りのハーブ。成長が早く、初心者でも育てやすい。',
            tags: ['ハーブ', '食用', '育てやすい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#4DB6AC'
        },
        {
            name: 'タイム',
            scientific: 'Thymus',
            description: '小さな葉と花が可愛らしいハーブ。料理にも使える実用性の高い植物。',
            tags: ['ハーブ', '食用', '小型'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#7CB342'
        },
        {
            name: 'オレガノ',
            scientific: 'Origanum vulgare',
            description: 'イタリア料理に欠かせないハーブ。丈夫で育てやすく、実用的。',
            tags: ['ハーブ', '食用', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['weekly', 'minimal'],
                size: ['small']
            },
            imageColor: '#9CCC65'
        },
        {
            name: 'セージ',
            scientific: 'Salvia officinalis',
            description: '銀緑色の葉が美しいハーブ。料理や薬用として古くから親しまれています。',
            tags: ['ハーブ', '食用', '薬用'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#AED581'
        },
        {
            name: 'レモンバーム',
            scientific: 'Melissa officinalis',
            description: 'レモンの香りがするハーブ。ハーブティーに最適で、リラックス効果も。',
            tags: ['ハーブ', '香り', 'ハーブティー'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#C5E1A5'
        },
        {
            name: 'ユーカリ',
            scientific: 'Eucalyptus',
            description: '爽やかな香りが人気の観葉植物。ドライフラワーやアロマとしても利用できます。',
            tags: ['ハーブ', '香り', 'おしゃれ'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium', 'large']
            },
            imageColor: '#81C784'
        },
        {
            name: 'パセリ',
            scientific: 'Petroselinum crispum',
            description: '栄養豊富なハーブ。料理の彩りとしても、主役としても活躍します。',
            tags: ['ハーブ', '食用', '栄養豊富'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'コリアンダー（パクチー）',
            scientific: 'Coriandrum sativum',
            description: 'エスニック料理に欠かせないハーブ。好き嫌いが分かれる独特の香り。',
            tags: ['ハーブ', '食用', 'エスニック'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#7CB342'
        },
        {
            name: 'チャイブ',
            scientific: 'Allium schoenoprasum',
            description: 'ネギの仲間のハーブ。細い葉が美しく、料理の薬味として重宝。',
            tags: ['ハーブ', '食用', '育てやすい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'レモングラス',
            scientific: 'Cymbopogon citratus',
            description: 'レモンの香りがするトロピカルハーブ。ハーブティーやアジア料理に。',
            tags: ['ハーブ', 'トロピカル', '香り'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium']
            },
            imageColor: '#CDDC39'
        },
        {
            name: 'ステビア',
            scientific: 'Stevia rebaudiana',
            description: '天然の甘味料として有名なハーブ。砂糖の代わりに使えます。',
            tags: ['ハーブ', '甘味料', 'ユニーク'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#9CCC65'
        },
        {
            name: 'カモミール',
            scientific: 'Matricaria chamomilla',
            description: 'リンゴのような香りの花を咲かせるハーブ。ハーブティーで有名。',
            tags: ['ハーブ', '花が咲く', 'ハーブティー'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#FFF59D'
        },
        // 🌺 ラン科植物 (12種類) - Phase 2
        {
            name: 'コチョウラン（胡蝶蘭）',
            scientific: 'Phalaenopsis',
            description: '優雅な花が蝶のように見える高級ラン。お祝いの贈り物として人気。',
            tags: ['ラン', '高級', '花が咲く'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#F8BBD0'
        },
        {
            name: 'デンドロビウム',
            scientific: 'Dendrobium',
            description: 'カラフルな花を咲かせる人気のラン。品種が豊富で選ぶ楽しみも。',
            tags: ['ラン', 'カラフル', '人気'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#CE93D8'
        },
        {
            name: 'シンビジウム',
            scientific: 'Cymbidium',
            description: '冬に美しい花を咲かせる大型ラン。比較的育てやすく初心者向け。',
            tags: ['ラン', '冬', '育てやすい'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#BA68C8'
        },
        {
            name: 'オンシジウム',
            scientific: 'Oncidium',
            description: '黄色い小花が群れ咲く「ダンシングレディ」。華やかで人気。',
            tags: ['ラン', '黄色', '華やか'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#FFD54F'
        },
        {
            name: 'カトレア',
            scientific: 'Cattleya',
            description: '「ランの女王」と呼ばれる豪華なラン。大輪の花が美しい。',
            tags: ['ラン', '高級', '豪華'],
            careLevel: 3,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['expert'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium']
            },
            imageColor: '#E1BEE7'
        },
        {
            name: 'バンダ',
            scientific: 'Vanda',
            description: '根が空中に露出する個性的なラン。大きな花が美しい。',
            tags: ['ラン', '個性的', '上級者向け'],
            careLevel: 3,
            match: {
                sunlight: ['high'],
                experience: ['expert'],
                care_frequency: ['daily'],
                size: ['medium', 'large']
            },
            imageColor: '#9575CD'
        },
        {
            name: 'パフィオペディルム',
            scientific: 'Paphiopedilum',
            description: '「レディーススリッパ」の愛称を持つラン。独特の花形が魅力。',
            tags: ['ラン', 'ユニーク', '個性的'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#A1887F'
        },
        {
            name: 'エピデンドラム',
            scientific: 'Epidendrum',
            description: '小花が集まって咲く可愛らしいラン。丈夫で育てやすい。',
            tags: ['ラン', '育てやすい', 'かわいい'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#FF8A65'
        },
        {
            name: 'ミルトニア',
            scientific: 'Miltonia',
            description: 'パンジーのような花を咲かせる「パンジーオーキッド」。',
            tags: ['ラン', '美しい', '香り'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#F48FB1'
        },
        {
            name: 'セロジネ',
            scientific: 'Coelogyne',
            description: '白い清楚な花を咲かせるラン。寒さに強く育てやすい。',
            tags: ['ラン', '白', '育てやすい'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#FFFFFF'
        },
        {
            name: 'リカステ',
            scientific: 'Lycaste',
            description: '大きな三角形の花が特徴的なラン。香りも良い。',
            tags: ['ラン', '香り', '大輪'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#FFF176'
        },
        {
            name: 'ジゴペタラム',
            scientific: 'Zygopetalum',
            description: '紫色の模様が美しいラン。強い香りも魅力。',
            tags: ['ラン', '香り', '美しい模様'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#7E57C2'
        },
        // 🦷 食虫植物 (8種類) - Phase 2
        {
            name: 'ハエトリソウ',
            scientific: 'Dionaea muscipula',
            description: '葉が閉じて虫を捕らえる有名な食虫植物。動きが面白い。',
            tags: ['食虫植物', 'ユニーク', '人気'],
            careLevel: 3,
            match: {
                sunlight: ['high'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'ウツボカズラ',
            scientific: 'Nepenthes',
            description: '壺状の捕虫葉が特徴。熱帯性の不思議な食虫植物。',
            tags: ['食虫植物', 'トロピカル', 'ユニーク'],
            careLevel: 3,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['expert'],
                care_frequency: ['daily'],
                size: ['small', 'medium']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'サラセニア',
            scientific: 'Sarracenia',
            description: '筒状の葉が美しい北米原産の食虫植物。比較的育てやすい。',
            tags: ['食虫植物', '美しい', '育てやすい'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['daily'],
                size: ['small', 'medium']
            },
            imageColor: '#7CB342'
        },
        {
            name: 'モウセンゴケ',
            scientific: 'Drosera',
            description: '粘液で虫を捕らえる食虫植物。キラキラした露が美しい。',
            tags: ['食虫植物', '美しい', '小型'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#FF7043'
        },
        {
            name: 'ムシトリスミレ',
            scientific: 'Pinguicula',
            description: 'スミレのような花を咲かせる食虫植物。葉で虫を捕らえます。',
            tags: ['食虫植物', '花が咲く', 'かわいい'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#9C27B0'
        },
        {
            name: 'ヘリアンフォラ',
            scientific: 'Heliamphora',
            description: '南米の高山に自生する希少な食虫植物。コレクター向け。',
            tags: ['食虫植物', '希少', 'コレクター向け'],
            careLevel: 3,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['expert'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#FF5722'
        },
        {
            name: 'ミミカキグサ',
            scientific: 'Utricularia',
            description: '小さな黄色い花が可愛らしい食虫植物。水中や湿地に自生。',
            tags: ['食虫植物', 'かわいい', '小型'],
            careLevel: 3,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['expert'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#FFEB3B'
        },
        {
            name: 'セファロタス',
            scientific: 'Cephalotus',
            description: 'オーストラリア原産の珍しい食虫植物。小さな壺が可愛い。',
            tags: ['食虫植物', '希少', 'オーストラリア'],
            careLevel: 3,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['expert'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#795548'
        },
        // 🎋 竹・笹類 (7種類) - Phase 2
        {
            name: '黒竹',
            scientific: 'Phyllostachys nigra',
            description: '黒い幹が美しい竹。和風庭園や盆栽として人気。',
            tags: ['竹', '和風', 'おしゃれ'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#424242'
        },
        {
            name: '斑入り笹',
            scientific: 'Pleioblastus variegatus',
            description: '白い斑が入った笹。コンパクトで室内でも育てられます。',
            tags: ['笹', '斑入り', 'コンパクト'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#C5E1A5'
        },
        {
            name: '布袋竹',
            scientific: 'Phyllostachys aurea',
            description: '節が膨らんだユニークな竹。「金明竹」とも呼ばれます。',
            tags: ['竹', 'ユニーク', '和風'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#FDD835'
        },
        {
            name: 'タケノコ',
            scientific: 'Bambusa vulgaris',
            description: '一般的な竹。成長が早く、力強い姿が魅力的。',
            tags: ['竹', '成長が早い', '大型'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['weekly', 'daily'],
                size: ['large']
            },
            imageColor: '#689F38'
        },
        {
            name: 'オカメザサ',
            scientific: 'Shibataea kumasaca',
            description: '丸い葉が特徴的な小型の笹。グランドカバーにも。',
            tags: ['笹', '小型', 'かわいい'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'クマザサ',
            scientific: 'Sasa veitchii',
            description: '冬に葉の縁が白くなる笹。和風の雰囲気が強い。',
            tags: ['笹', '和風', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#7CB342'
        },
        {
            name: 'ナリヒラダケ',
            scientific: 'Semiarundinaria fastuosa',
            description: 'すっきりした姿が美しい竹。「業平竹」とも書きます。',
            tags: ['竹', '和風', '美しい'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#558B2F'
        },
        // 🌸 ブロメリア科 (10種類) - Phase 2 continued
        {
            name: 'グズマニア',
            scientific: 'Guzmania',
            description: '鮮やかな色の花苞が美しいブロメリア。トロピカルな雰囲気満点。',
            tags: ['ブロメリア', 'カラフル', 'トロピカル'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#FF5252'
        },
        {
            name: 'ビルベルギア',
            scientific: 'Billbergia',
            description: '筒状の葉から美しい花を咲かせるブロメリア。育てやすく人気。',
            tags: ['ブロメリア', '花が咲く', '育てやすい'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#E91E63'
        },
        {
            name: 'ネオレゲリア',
            scientific: 'Neoregelia',
            description: '葉の中心が赤く染まる美しいブロメリア。コンパクトで育てやすい。',
            tags: ['ブロメリア', '美しい', 'コンパクト'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#F44336'
        },
        {
            name: 'クリプタンサス',
            scientific: 'Cryptanthus',
            description: '「地球の星」と呼ばれる小型ブロメリア。模様が美しい。',
            tags: ['ブロメリア', '小型', '美しい模様'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#9C27B0'
        },
        {
            name: 'エクメア',
            scientific: 'Aechmea',
            description: 'ピンクの花穂が美しいブロメリア。丈夫で育てやすい。',
            tags: ['ブロメリア', '花が咲く', '丈夫'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#FF4081'
        },
        {
            name: 'ティランジア（エアプランツ以外）',
            scientific: 'Tillandsia cyanea',
            description: '青い花を咲かせる大型ティランジア。鉢植えで育てます。',
            tags: ['ブロメリア', '花が咲く', '青'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#2196F3'
        },
        {
            name: 'ブロメリア・バランサエ',
            scientific: 'Bromelia balansae',
            description: 'トゲのある葉が特徴的な地植えブロメリア。力強い姿。',
            tags: ['ブロメリア', 'ユニーク', '大型'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'フリーセア',
            scientific: 'Vriesea',
            description: '剣のような花穂が印象的なブロメリア。「フレーミングソード」。',
            tags: ['ブロメリア', '花が咲く', 'インパクト'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#FF9800'
        },
        {
            name: 'ディッキア',
            scientific: 'Dyckia',
            description: 'トゲトゲした葉が特徴の陸生ブロメリア。乾燥に強い。',
            tags: ['ブロメリア', '乾燥に強い', 'ユニーク'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#795548'
        },
        {
            name: 'アナナス',
            scientific: 'Ananas comosus',
            description: 'パイナップルの仲間。観賞用の小型品種。ユニークで人気。',
            tags: ['ブロメリア', 'ユニーク', '食用可'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#FFEB3B'
        },
        // 🌴 ドラセナ系 (10種類) - Phase 2 continued
        {
            name: 'ドラセナ・マッサンゲアナ',
            scientific: 'Dracaena fragrans massangeana',
            description: '「幸福の木」として有名。黄色い斑入りの葉が美しい人気観葉植物。',
            tags: ['ドラセナ', '人気', '縁起物'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#CDDC39'
        },
        {
            name: 'ドラセナ・コンシンネ',
            scientific: 'Dracaena marginata',
            description: '細い葉が放射状に広がるスタイリッシュなドラセナ。赤い縁が特徴。',
            tags: ['ドラセナ', 'スタイリッシュ', '育てやすい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#C62828'
        },
        {
            name: 'ドラセナ・ワーネッキー',
            scientific: 'Dracaena deremensis warneckii',
            description: '白い縦縞が美しいドラセナ。日陰に強く育てやすい。',
            tags: ['ドラセナ', '斑入り', '日陰OK'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#E8F5E9'
        },
        {
            name: 'ドラセナ・レフレクサ',
            scientific: 'Dracaena reflexa',
            description: '「ソング・オブ・インディア」として人気。黄色い縁取りが美しい。',
            tags: ['ドラセナ', '美しい', '人気'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#FFD54F'
        },
        {
            name: 'ドラセナ・コンパクタ',
            scientific: 'Dracaena deremensis compacta',
            description: 'コンパクトな樹形の濃緑ドラセナ。机上にも置きやすい。',
            tags: ['ドラセナ', 'コンパクト', '育てやすい'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#1B5E20'
        },
        {
            name: 'ドラセナ・ジェレ',
            scientific: 'Dracaena surculosa',
            description: '斑点模様が特徴的なユニークなドラセナ。「星の王子様」。',
            tags: ['ドラセナ', 'ユニーク', '斑点'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#C5E1A5'
        },
        {
            name: 'ドラセナ・ゴッドセフィアナ',
            scientific: 'Dracaena godseffiana',
            description: '黄色い斑点が美しいドラセナ。コンパクトで育てやすい。',
            tags: ['ドラセナ', '斑点', 'コンパクト'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#FFF176'
        },
        {
            name: 'ドラセナ・フラグランス',
            scientific: 'Dracaena fragrans',
            description: '香りの良い花を咲かせるドラセナ。大型で存在感抜群。',
            tags: ['ドラセナ', '花が咲く', '大型'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'ドラセナ・ユッカ',
            scientific: 'Dracaena draco',
            description: 'リュウケツジュとも呼ばれる古代から存在する種。力強い姿。',
            tags: ['ドラセナ', '古代種', 'ユニーク'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#8D6E63'
        },
        {
            name: 'ドラセナ・カンボジアーナ',
            scientific: 'Dracaena cambodiana',
            description: 'カンボジア原産の希少なドラセナ。スリムな樹形が美しい。',
            tags: ['ドラセナ', '希少', 'スリム'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#558B2F'
        },
        // 🍃 ペペロミア系 (10種類) - Phase 2 continued
        {
            name: 'ペペロミア・カペラータ',
            scientific: 'Peperomia caperata',
            description: '波打つ葉が特徴的な小型ペペロミア。「シワクチャペペ」として人気。',
            tags: ['ペペロミア', '小型', 'かわいい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'ペペロミア・オブツシフォリア',
            scientific: 'Peperomia obtusifolia',
            description: '肉厚の丸い葉が可愛い定番ペペロミア。「ベビーラバープラント」。',
            tags: ['ペペロミア', '肉厚', '育てやすい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'ペペロミア・プテオラータ',
            scientific: 'Peperomia puteolata',
            description: '縦縞模様が美しいペペロミア。コンパクトで机上に最適。',
            tags: ['ペペロミア', '模様が美しい', 'コンパクト'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#81C784'
        },
        {
            name: 'ペペロミア・セルペンス',
            scientific: 'Peperomia serpens',
            description: 'つる性のペペロミア。垂らして楽しむこともできます。',
            tags: ['ペペロミア', 'つる性', 'ハンギング'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#4DB6AC'
        },
        {
            name: 'ペペロミア・グラベラ',
            scientific: 'Peperomia gravelens',
            description: '赤い茎が美しい小型ペペロミア。紅葉も楽しめます。',
            tags: ['ペペロミア', '赤い茎', '小型'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#E57373'
        },
        {
            name: 'ペペロミア・ホープ',
            scientific: 'Peperomia tetraphylla',
            description: '丸い葉が4枚ずつ並ぶ可愛いペペロミア。コンパクトで人気。',
            tags: ['ペペロミア', 'かわいい', '人気'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'ペペロミア・ジェリー',
            scientific: 'Peperomia clusiifolia',
            description: '斑入りの肉厚な葉が美しいペペロミア。「レインボー」とも。',
            tags: ['ペペロミア', '斑入り', '美しい'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#F48FB1'
        },
        {
            name: 'ペペロミア・アルギレイア',
            scientific: 'Peperomia argyreia',
            description: 'スイカ模様の葉が特徴的な「スイカペペ」。個性的で人気。',
            tags: ['ペペロミア', '模様が美しい', 'ユニーク'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#C8E6C9'
        },
        {
            name: 'ペペロミア・ロッソ',
            scientific: 'Peperomia rosso',
            description: '裏が赤い葉が美しいペペロミア。コントラストが魅力的。',
            tags: ['ペペロミア', '赤', '美しい'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#D32F2F'
        },
        {
            name: 'ペペロミア・フレーザー',
            scientific: 'Peperomia fraseri',
            description: '白い花穂が美しいペペロミア。香りも良い。',
            tags: ['ペペロミア', '花が咲く', '香り'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#FFFFFF'
        },
        // 🎨 クロトン・カラフル葉物 (8種類) - Phase 2 continued
        {
            name: 'クロトン',
            scientific: 'Codiaeum variegatum',
            description: '赤、黄、緑の鮮やかな葉が美しい熱帯植物。バリエーションが豊富。',
            tags: ['クロトン', 'カラフル', 'トロピカル'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#FF6F00'
        },
        {
            name: 'コリウス',
            scientific: 'Solenostemon scutellarioides',
            description: 'カラフルな葉が美しい一年草。品種が豊富で選ぶ楽しみも。',
            tags: ['コリウス', 'カラフル', 'バリエーション豊富'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#9C27B0'
        },
        {
            name: 'カラジウム',
            scientific: 'Caladium',
            description: 'ハート型の葉に美しい模様が入る球根植物。夏の室内を彩ります。',
            tags: ['カラジウム', '美しい模様', '球根'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#F48FB1'
        },
        {
            name: 'ヒポエステス',
            scientific: 'Hypoestes phyllostachya',
            description: 'ピンクの斑点が入る「ドットプラント」。可愛らしい葉が人気。',
            tags: ['ヒポエステス', '斑点', 'かわいい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#EC407A'
        },
        {
            name: 'イレシネ',
            scientific: 'Iresine herbstii',
            description: '赤紫の葉が美しい観葉植物。「ビーツプラント」とも呼ばれます。',
            tags: ['イレシネ', '赤紫', 'カラフル'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#880E4F'
        },
        {
            name: 'アグラオネマ',
            scientific: 'Aglaonema',
            description: '銀色や赤の模様が美しい葉。「チャイニーズエバーグリーン」。',
            tags: ['アグラオネマ', '美しい模様', '育てやすい'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#E91E63'
        },
        {
            name: 'シンゴニウム',
            scientific: 'Syngonium podophyllum',
            description: '矢じり型の葉が特徴。ピンクや白の品種が人気。',
            tags: ['シンゴニウム', 'カラフル', '育てやすい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#F8BBD0'
        },
        {
            name: 'フィットニア',
            scientific: 'Fittonia',
            description: '網目模様の葉が美しい小型植物。テラリウムにも人気。',
            tags: ['フィットニア', '模様が美しい', 'テラリウム'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#FF4081'
        },
        // 🌳 フィカス系（追加品種） (10種類) - Phase 2 continued
        {
            name: 'フィカス・ベンジャミン',
            scientific: 'Ficus benjamina',
            description: '小さな葉が密生する人気のゴムの木。樹形が美しく、盆栽にも。',
            tags: ['フィカス', '人気', '樹形が美しい'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'フィカス・アルテシーマ',
            scientific: 'Ficus altissima',
            description: '黄色い斑入りの葉が明るく美しいゴムの木。「アルテシマ」。',
            tags: ['フィカス', '斑入り', '明るい'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#FFEB3B'
        },
        {
            name: 'フィカス・リラータ',
            scientific: 'Ficus lyrata',
            description: 'バイオリン型の大きな葉が特徴。「カシワバゴム」として人気。',
            tags: ['フィカス', '大型', '人気'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#2E7D32'
        },
        {
            name: 'フィカス・トライアンギュラリス',
            scientific: 'Ficus triangularis',
            description: '三角形の葉が個性的なゴムの木。コンパクトで育てやすい。',
            tags: ['フィカス', 'ユニーク', 'コンパクト'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'フィカス・エラスティカ',
            scientific: 'Ficus elastica',
            description: '丸く大きな葉の定番ゴムの木。「インドゴム」。丈夫で育てやすい。',
            tags: ['フィカス', '定番', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#1B5E20'
        },
        {
            name: 'フィカス・バーガンディ',
            scientific: 'Ficus elastica burgundy',
            description: '深紅の葉が美しいゴムの木。シックで大人っぽい雰囲気。',
            tags: ['フィカス', '赤', 'おしゃれ'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#880E4F'
        },
        {
            name: 'フィカス・プミラ',
            scientific: 'Ficus pumila',
            description: '小さな葉がかわいいつる性のフィカス。這わせたり垂らしたり。',
            tags: ['フィカス', 'つる性', 'かわいい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#81C784'
        },
        {
            name: 'フィカス・ベンガレンシス',
            scientific: 'Ficus benghalensis',
            description: 'ベンガル菩提樹。丸い葉と白い幹が美しい大型種。',
            tags: ['フィカス', '大型', '美しい'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#A5D6A7'
        },
        {
            name: 'フィカス・ルビギノーサ',
            scientific: 'Ficus rubiginosa',
            description: 'オーストラリア原産のゴムの木。丸い葉が密生して美しい。',
            tags: ['フィカス', 'オーストラリア', '密生'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#388E3C'
        },
        {
            name: 'フィカス・ウンベラータ（標準種）',
            scientific: 'Ficus umbellata standard',
            description: 'ハート型の大きな葉が特徴の定番フィカス。インテリアグリーンとして大人気。',
            tags: ['フィカス', '人気', 'ハート型'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#4CAF50'
        },
        // 🌿 トロピカル葉物・カラテア系 (15種類) - Phase 3
        {
            name: 'カラテア・オルビフォリア',
            scientific: 'Calathea orbifolia',
            description: '大きな丸い葉に美しい縞模様。人気のカラテア。',
            tags: ['カラテア', '美しい模様', '人気'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium']
            },
            imageColor: '#C8E6C9'
        },
        {
            name: 'カラテア・マコヤナ',
            scientific: 'Calathea makoyana',
            description: '「クジャクの羽」模様が美しい。カラテアの代表種。',
            tags: ['カラテア', '美しい模様', '人気'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#A5D6A7'
        },
        {
            name: 'カラテア・ロゼオピクタ',
            scientific: 'Calathea roseopicta',
            description: 'ピンクの模様が美しいカラテア。「ドッティ」など人気品種多数。',
            tags: ['カラテア', 'ピンク', '美しい'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#F48FB1'
        },
        {
            name: 'カラテア・ゼブリナ',
            scientific: 'Calathea zebrina',
            description: 'シマウマ模様の葉が特徴。インパクトのあるカラテア。',
            tags: ['カラテア', 'ストライプ', 'インパクト'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium']
            },
            imageColor: '#81C784'
        },
        {
            name: 'マランタ・レウコネウラ',
            scientific: 'Maranta leuconeura',
            description: '「祈りの植物」。夜に葉が立ち上がる不思議な植物。',
            tags: ['マランタ', 'ユニーク', '動く葉'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'ストロマンテ・トリオスター',
            scientific: 'Stromanthe sanguinea triostar',
            description: 'ピンク、白、緑の美しい3色の葉。華やかな熱帯植物。',
            tags: ['ストロマンテ', 'カラフル', '美しい'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium']
            },
            imageColor: '#F06292'
        },
        {
            name: 'クテナンテ・ルベルシアナ',
            scientific: 'Ctenanthe lubbersiana',
            description: '黄色い斑が入る美しい葉。育てやすいカラテア科植物。',
            tags: ['クテナンテ', '斑入り', '育てやすい'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#FFF176'
        },
        {
            name: 'カラテア・ランシフォリア',
            scientific: 'Calathea lancifolia',
            description: '細長い葉に波状の模様。「ガラガラヘビプラント」。',
            tags: ['カラテア', 'ユニーク模様', '細葉'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'カラテア・メダリオン',
            scientific: 'Calathea medallion',
            description: 'メダルのような丸い模様が美しいカラテア。',
            tags: ['カラテア', '丸い模様', '美しい'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#7E57C2'
        },
        {
            name: 'カラテア・ルフィバルバ',
            scientific: 'Calathea rufibarba',
            description: 'ビロードのような質感の葉。裏が紫色の「ベルベットカラテア」。',
            tags: ['カラテア', 'ビロード', 'ユニーク'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium']
            },
            imageColor: '#9C27B0'
        },
        {
            name: 'カラテア・ワリセウィッチー',
            scientific: 'Calathea warscewiczii',
            description: 'ビロードのような大きな葉。紫の裏が美しい。',
            tags: ['カラテア', '大型', '紫'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium', 'large']
            },
            imageColor: '#673AB7'
        },
        {
            name: 'カラテア・ホワイトフュージョン',
            scientific: 'Calathea white fusion',
            description: '白とグリーンの美しいマーブル模様。希少な品種。',
            tags: ['カラテア', '希少', '白'],
            careLevel: 3,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['expert'],
                care_frequency: ['daily'],
                size: ['small', 'medium']
            },
            imageColor: '#E8F5E9'
        },
        {
            name: 'カラテア・ネットワーク',
            scientific: 'Calathea musaica network',
            description: 'モザイク模様が特徴的。「ネットワーク」として人気。',
            tags: ['カラテア', 'モザイク模様', 'ユニーク'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#AED581'
        },
        {
            name: 'ストロマンテ・サンギネア',
            scientific: 'Stromanthe sanguinea',
            description: '裏が赤紫の美しい葉。トリオスターの原種。',
            tags: ['ストロマンテ', '赤紫', '美しい'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium']
            },
            imageColor: '#AD1457'
        },
        {
            name: 'マランタ・ファッシネーター',
            scientific: 'Maranta leuconeura fascinator',
            description: '赤い羽根模様が美しいマランタ。コンパクトで育てやすい。',
            tags: ['マランタ', '赤', 'コンパクト'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#D32F2F'
        },
        // 🌱 アロイド系追加品種 (12種類) - Phase 3 continued
        {
            name: 'ポトス・マーブルクイーン',
            scientific: 'Epipremnum aureum marble queen',
            description: '白い斑が美しいポトス。人気の品種。',
            tags: ['ポトス', '斑入り', '人気'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#E8F5E9'
        },
        {
            name: 'ポトス・ライム',
            scientific: 'Epipremnum aureum neon',
            description: '明るいライムグリーンが美しいポトス。',
            tags: ['ポトス', 'ライム', '明るい'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#CDDC39'
        },
        {
            name: 'ポトス・エンジョイ',
            scientific: 'Epipremnum aureum njoy',
            description: '白と緑のコントラストが美しい小型ポトス。',
            tags: ['ポトス', 'コンパクト', '美しい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#C8E6C9'
        },
        {
            name: 'ポトス・パーフェクトグリーン',
            scientific: 'Epipremnum aureum global green',
            description: '濃淡のグリーンが美しいポトス。',
            tags: ['ポトス', 'グリーン', '美しい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'スキンダプサス・ピクタス',
            scientific: 'Scindapsus pictus',
            description: 'シルバーの斑点が美しい「サテンポトス」。',
            tags: ['スキンダプサス', 'シルバー', '美しい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#90A4AE'
        },
        {
            name: 'スキンダプサス・トレビー',
            scientific: 'Scindapsus treubii',
            description: 'シルバーとグリーンの葉が美しい希少種。',
            tags: ['スキンダプサス', '希少', 'シルバー'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#B0BEC5'
        },
        {
            name: 'フィロデンドロン・ブラジル',
            scientific: 'Philodendron hederaceum brasil',
            description: 'ライムグリーンと深緑の斑が美しい。',
            tags: ['フィロデンドロン', 'カラフル', '人気'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'フィロデンドロン・ミカンス',
            scientific: 'Philodendron micans',
            description: 'ビロードのような質感とブロンズ色の葉。',
            tags: ['フィロデンドロン', 'ビロード', 'ブロンズ'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#8D6E63'
        },
        {
            name: 'フィロデンドロン・バーキン',
            scientific: 'Philodendron birkin',
            description: '白い縦縞が入る人気のフィロデンドロン。',
            tags: ['フィロデンドロン', 'ストライプ', '人気'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#E8F5E9'
        },
        {
            name: 'フィロデンドロン・シルバーソード',
            scientific: 'Philodendron hastatum',
            description: 'シルバーがかった矢じり型の葉。',
            tags: ['フィロデンドロン', 'シルバー', 'ユニーク'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#B0BEC5'
        },
        {
            name: 'エピプレムナム・ピンナツム',
            scientific: 'Epipremnum pinnatum',
            description: '切れ込みの入る大きな葉。「ドラゴンテール」。',
            tags: ['エピプレムナム', '大型', 'ユニーク'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'ラフィドフォラ・テトラスペルマ',
            scientific: 'Rhaphidophora tetrasperma',
            description: '「ミニモンステラ」。切れ込みが美しく育てやすい。',
            tags: ['ラフィドフォラ', '切れ込み', '人気'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#66BB6A'
        },
        // 🌵 多肉植物・サボテン追加 (10種類) - Phase 3 continued
        {
            name: 'センペルビウム',
            scientific: 'Sempervivum',
            description: 'バラのようなロゼットを作る多肉植物。耐寒性が強い。',
            tags: ['多肉植物', '耐寒性', 'ロゼット'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['small']
            },
            imageColor: '#9CCC65'
        },
        {
            name: 'パキフィツム',
            scientific: 'Pachyphytum',
            description: 'ぷっくりした葉が可愛い多肉植物。「月美人」など。',
            tags: ['多肉植物', 'ぷっくり', 'かわいい'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['minimal', 'weekly'],
                size: ['small']
            },
            imageColor: '#C5CAE9'
        },
        {
            name: 'アドロミスクス',
            scientific: 'Adromischus',
            description: 'ユニークな葉の形が魅力的な小型多肉植物。',
            tags: ['多肉植物', 'ユニーク', '小型'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['minimal', 'weekly'],
                size: ['small']
            },
            imageColor: '#A1887F'
        },
        {
            name: 'グラプトペタルム',
            scientific: 'Graptopetalum',
            description: 'パステルカラーの葉が美しい多肉植物。',
            tags: ['多肉植物', 'パステル', '美しい'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['minimal', 'weekly'],
                size: ['small']
            },
            imageColor: '#F8BBD0'
        },
        {
            name: 'クラッスラ・オルビクラリス',
            scientific: 'Crassula orbicularis',
            description: '小さな丸い葉が重なる可愛い多肉植物。',
            tags: ['クラッスラ', 'かわいい', '小型'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['minimal', 'weekly'],
                size: ['small']
            },
            imageColor: '#81C784'
        },
        {
            name: 'リトープス',
            scientific: 'Lithops',
            description: '「生きた宝石」。石のような姿が特徴的。',
            tags: ['多肉植物', 'ユニーク', '希少'],
            careLevel: 3,
            match: {
                sunlight: ['high'],
                experience: ['expert'],
                care_frequency: ['minimal'],
                size: ['small']
            },
            imageColor: '#BCAAA4'
        },
        {
            name: 'コノフィツム',
            scientific: 'Conophytum',
            description: '小さくて可愛い球状の多肉植物。花も美しい。',
            tags: ['多肉植物', '小型', '花が咲く'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['minimal'],
                size: ['small']
            },
            imageColor: '#CE93D8'
        },
        {
            name: 'ガステリア',
            scientific: 'Gasteria',
            description: '舌のような形の葉が特徴。育てやすい多肉植物。',
            tags: ['多肉植物', 'ユニーク', '育てやすい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly', 'minimal'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'フォーカリア',
            scientific: 'Faucaria',
            description: 'トゲのある葉が特徴。「虎の口」として知られる。',
            tags: ['多肉植物', 'トゲ', 'ユニーク'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['minimal', 'weekly'],
                size: ['small']
            },
            imageColor: '#7CB342'
        },
        {
            name: 'クラッスラ・ペルフォラータ',
            scientific: 'Crassula perforata',
            description: '葉が茎を貫くように育つユニークな多肉植物。',
            tags: ['クラッスラ', 'ユニーク', '幾何学的'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['minimal', 'weekly'],
                size: ['small']
            },
            imageColor: '#AED581'
        },
        // 🗡️ サンスベリア系 (10種類) - Phase 3 continued
        {
            name: 'サンスベリア・トリファスキアタ',
            scientific: 'Sansevieria trifasciata',
            description: '「トラノオ」として有名。空気清浄効果が高い定番種。',
            tags: ['サンスベリア', '空気清浄', '丈夫'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['medium', 'large']
            },
            imageColor: '#689F38'
        },
        {
            name: 'サンスベリア・ローレンティー',
            scientific: 'Sansevieria trifasciata laurentii',
            description: '黄色い縁取りが美しい人気品種。',
            tags: ['サンスベリア', '黄色い縁', '人気'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['medium', 'large']
            },
            imageColor: '#FDD835'
        },
        {
            name: 'サンスベリア・ムーンシャイン',
            scientific: 'Sansevieria moonshine',
            description: 'シルバーグリーンの美しい葉。モダンな雰囲気。',
            tags: ['サンスベリア', 'シルバー', 'おしゃれ'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['medium']
            },
            imageColor: '#B0BEC5'
        },
        {
            name: 'サンスベリア・シリンドリカ',
            scientific: 'Sansevieria cylindrica',
            description: '円筒形の葉が特徴的。モダンなスタイリッシュさ。',
            tags: ['サンスベリア', '円筒形', 'スタイリッシュ'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['medium']
            },
            imageColor: '#558B2F'
        },
        {
            name: 'サンスベリア・ハニー',
            scientific: 'Sansevieria trifasciata hahnii',
            description: 'コンパクトなロゼット型。机上にも最適。',
            tags: ['サンスベリア', 'コンパクト', 'かわいい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['small']
            },
            imageColor: '#7CB342'
        },
        {
            name: 'サンスベリア・スタッキー',
            scientific: 'Sansevieria stuckyi',
            description: '細長い円筒形の葉。ユニークでスタイリッシュ。',
            tags: ['サンスベリア', 'スタイリッシュ', 'ユニーク'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['medium']
            },
            imageColor: '#689F38'
        },
        {
            name: 'サンスベリア・ファーンウッド',
            scientific: 'Sansevieria fernwood',
            description: '細長い葉が束生する品種。コンパクトで美しい。',
            tags: ['サンスベリア', 'コンパクト', '美しい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'サンスベリア・バキュラリス',
            scientific: 'Sansevieria bacularis',
            description: '細い円筒形の葉が特徴。エレガントな雰囲気。',
            tags: ['サンスベリア', '細葉', 'エレガント'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#9CCC65'
        },
        {
            name: 'サンスベリア・エーレンベルギー',
            scientific: 'Sansevieria ehrenbergii',
            description: '広い剣状の葉。力強い姿が魅力。',
            tags: ['サンスベリア', '大型', '力強い'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['minimal'],
                size: ['large']
            },
            imageColor: '#558B2F'
        },
        {
            name: 'サンスベリア・デザート',
            scientific: 'Sansevieria desertii',
            description: '赤い縁取りが美しい希少種。',
            tags: ['サンスベリア', '赤い縁', '希少'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['minimal'],
                size: ['medium']
            },
            imageColor: '#E57373'
        },
        // 🌾 アスパラガス系・グラス類 (8種類) - Phase 3 continued
        {
            name: 'アスパラガス・デンシフロルス',
            scientific: 'Asparagus densiflorus',
            description: 'ふんわりした葉が美しい。「スプレンゲリー」として人気。',
            tags: ['アスパラガス', 'ふんわり', '人気'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#81C784'
        },
        {
            name: 'アスパラガス・プルモーサス',
            scientific: 'Asparagus setaceus',
            description: 'レースのように繊細な葉。「アスパラガスファーン」。',
            tags: ['アスパラガス', '繊細', '美しい'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'アスパラガス・スプレンゲリー',
            scientific: 'Asparagus densiflorus sprengeri',
            description: '垂れ下がる葉が美しい。ハンギングに最適。',
            tags: ['アスパラガス', 'ハンギング', '垂れ下がる'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'アスパラガス・ナナス',
            scientific: 'Asparagus densiflorus myers',
            description: 'フサフサの尾のような葉。「キツネノオ」。',
            tags: ['アスパラガス', 'ユニーク', 'フサフサ'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#7CB342'
        },
        {
            name: 'カレックス',
            scientific: 'Carex',
            description: '細い葉が美しいグラス。カラーリーフとして人気。',
            tags: ['グラス', '細葉', 'カラーリーフ'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#C5E1A5'
        },
        {
            name: 'ムシアゲ',
            scientific: 'Juncus effusus',
            description: '螺旋状に巻く葉が特徴。「スパイラルラッシュ」。',
            tags: ['グラス', 'ユニーク', '螺旋'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'コキア',
            scientific: 'Bassia scoparia',
            description: 'ふんわり丸い形。秋に紅葉する「ホウキグサ」。',
            tags: ['グラス', '紅葉', 'ふんわり'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#FF7043'
        },
        {
            name: 'ペニセタム',
            scientific: 'Pennisetum',
            description: 'フサフサの穂が美しいグラス。「チカラシバ」。',
            tags: ['グラス', '穂', '美しい'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#D7CCC8'
        },
        // 🌺 ベゴニア系追加 (10種類) - Phase 3 continued
        {
            name: 'ベゴニア・レックス',
            scientific: 'Begonia rex',
            description: '美しい模様の葉が特徴。「根茎ベゴニア」。',
            tags: ['ベゴニア', '美しい模様', '人気'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#E91E63'
        },
        {
            name: 'ベゴニア・マクラータ',
            scientific: 'Begonia maculata',
            description: '白い斑点が美しい木立性ベゴニア。「ポルカドット」。',
            tags: ['ベゴニア', '斑点', '美しい'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#F48FB1'
        },
        {
            name: 'ベゴニア・エスカルゴ',
            scientific: 'Begonia rex escargot',
            description: 'カタツムリのような螺旋模様。レックスベゴニアの人気種。',
            tags: ['ベゴニア', '螺旋模様', 'ユニーク'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#9C27B0'
        },
        {
            name: 'ベゴニア・ボリビエンシス',
            scientific: 'Begonia boliviensis',
            description: '垂れ下がる花が美しい球根ベゴニア。ハンギングに最適。',
            tags: ['ベゴニア', '花が咲く', 'ハンギング'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#FF5722'
        },
        {
            name: 'ベゴニア・コッシニア',
            scientific: 'Begonia coccinea',
            description: '竹のような節が特徴の木立性ベゴニア。「竹ベゴニア」。',
            tags: ['ベゴニア', '木立性', 'ユニーク'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'ベゴニア・エラチオール',
            scientific: 'Begonia elatior',
            description: 'バラのような花を咲かせる冬咲きベゴニア。',
            tags: ['ベゴニア', '花が咲く', '冬'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#F06292'
        },
        {
            name: 'ベゴニア・アンプラ',
            scientific: 'Begonia ampla',
            description: '大きな葉が特徴的な木立性ベゴニア。存在感抜群。',
            tags: ['ベゴニア', '大型', '木立性'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'ベゴニア・リスタダ',
            scientific: 'Begonia listada',
            description: 'シルバーのストライプが美しい葉。',
            tags: ['ベゴニア', 'ストライプ', '美しい'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#B0BEC5'
        },
        {
            name: 'ベゴニア・フィーバー',
            scientific: 'Begonia rex fever',
            description: '黒とピンクのコントラストが美しいレックスベゴニア。',
            tags: ['ベゴニア', 'ピンク', 'ドラマチック'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#EC407A'
        },
        {
            name: 'ベゴニア・ルクソリアンス',
            scientific: 'Begonia luxurians',
            description: 'ヤシのような大きな葉。トロピカルな雰囲気。',
            tags: ['ベゴニア', 'トロピカル', '大型'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#66BB6A'
        },
        // ☂️ シェフレラ・アラリア系 (8種類) - Phase 3 continued
        {
            name: 'シェフレラ・アルボリコラ',
            scientific: 'Schefflera arboricola',
            description: '「カポック」として人気。小さな葉が可愛い。',
            tags: ['シェフレラ', '人気', '育てやすい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'シェフレラ・斑入り',
            scientific: 'Schefflera variegata',
            description: '黄色や白の斑入りカポック。明るく華やか。',
            tags: ['シェフレラ', '斑入り', '明るい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#FFF176'
        },
        {
            name: 'シェフレラ・ホンコンカポック',
            scientific: 'Schefflera heptaphylla',
            description: '大きな葉の大型カポック。存在感抜群。',
            tags: ['シェフレラ', '大型', '存在感'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'ディジゴセカ',
            scientific: 'Dizygotheca elegantissima',
            description: '細く切れ込んだ葉が優雅。「セローム」。',
            tags: ['アラリア', '優雅', '細葉'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#1B5E20'
        },
        {
            name: 'ファッツヘデラ',
            scientific: 'Fatshedera lizei',
            description: 'アイビーとファッツィアの交配種。丈夫で育てやすい。',
            tags: ['アラリア', '丈夫', '育てやすい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'ファッツィア',
            scientific: 'Fatsia japonica',
            description: '「ヤツデ」。大きな手のひら状の葉。和の雰囲気。',
            tags: ['アラリア', '和風', '大型'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#2E7D32'
        },
        {
            name: 'ポリシャス',
            scientific: 'Polyscias',
            description: '繊細な葉が美しい。「タイワンモミジ」。',
            tags: ['アラリア', '繊細', '美しい'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#81C784'
        },
        {
            name: 'ポリシャス・ フルティコーサ',
            scientific: 'Polyscias fruticosa',
            description: 'パセリのような葉。「パセリアラリア」。',
            tags: ['アラリア', 'ユニーク', '繊細'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#66BB6A'
        },
        // 🌵 サボテン追加品種 (10種類) - Phase 3 continued
        {
            name: '月下美人',
            scientific: 'Epiphyllum oxypetalum',
            description: '夜に咲く巨大な白い花。神秘的な美しさ。',
            tags: ['サボテン', '花が咲く', '夜咲き'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#FFFFFF'
        },
        {
            name: 'クジャクサボテン',
            scientific: 'Epiphyllum',
            description: '鮮やかな花を咲かせる森林性サボテン。',
            tags: ['サボテン', '花が咲く', 'カラフル'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#FF4081'
        },
        {
            name: '金鯱',
            scientific: 'Echinocactus grusonii',
            description: '黄金のトゲが美しい大型サボテン。「金のボール」。',
            tags: ['サボテン', '大型', '黄金'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['minimal', 'weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#FFD54F'
        },
        {
            name: 'ウチワサボテン',
            scientific: 'Opuntia',
            description: '平たい円盤状の葉が特徴。トゲに注意。',
            tags: ['サボテン', 'ユニーク', '食用可'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['minimal'],
                size: ['medium', 'large']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'マミラリア',
            scientific: 'Mammillaria',
            description: '小さくて可愛い玉サボテン。花も美しい。',
            tags: ['サボテン', '小型', '花が咲く'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['minimal', 'weekly'],
                size: ['small']
            },
            imageColor: '#F48FB1'
        },
        {
            name: 'ギムノカリキウム',
            scientific: 'Gymnocalycium',
            description: 'カラフルな花を咲かせる球形サボテン。',
            tags: ['サボテン', '花が咲く', 'カラフル'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['minimal', 'weekly'],
                size: ['small']
            },
            imageColor: '#FF6F00'
        },
        {
            name: 'ロビビア',
            scientific: 'Lobivia',
            description: '鮮やかな花が咲く小型サボテン。',
            tags: ['サボテン', '花が咲く', '小型'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['minimal', 'weekly'],
                size: ['small']
            },
            imageColor: '#E91E63'
        },
        {
            name: 'リプサリス',
            scientific: 'Rhipsalis',
            description: '垂れ下がる細い茎。ハンギングに最適な森林性サボテン。',
            tags: ['サボテン', 'ハンギング', 'ユニーク'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'スクルンベルゲラ',
            scientific: 'Schlumbergera',
            description: '「シャコバサボテン」。冬に美しい花を咲かせる。',
            tags: ['サボテン', '花が咲く', '冬'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#F06292'
        },
        {
            name: 'アストロフィツム',
            scientific: 'Astrophytum',
            description: '星形の美しい白い斑点。「有星類」サボテン。',
            tags: ['サボテン', '美しい', '斑点'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['minimal', 'weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#E8F5E9'
        },
        // 🌿 グランドカバー・這性植物 (7種類) - Phase 3 continued
        {
            name: 'ワイヤープランツ',
            scientific: 'Muehlenbeckia complexa',
            description: '細いワイヤー状の茎に小さな葉。可愛らしい。',
            tags: ['グランドカバー', 'かわいい', '小型'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#81C784'
        },
        {
            name: 'ソレイロリア',
            scientific: 'Soleirolia soleirolii',
            description: '「ベビーティアーズ」。小さな葉が密生して可愛い。',
            tags: ['グランドカバー', 'かわいい', '密生'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'セラギネラ',
            scientific: 'Selaginella',
            description: 'シダに似た小さな葉。テラリウムに最適。',
            tags: ['グランドカバー', 'テラリウム', 'シダ風'],
            careLevel: 2,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'プミラ 追加品種',
            scientific: 'Ficus pumila variegata',
            description: '斑入りのプミラ。白と緑のコントラストが美しい。',
            tags: ['つる性', '斑入り', 'グランドカバー'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#E8F5E9'
        },
        {
            name: 'ピレア・デプレッサ',
            scientific: 'Pilea depressa',
            description: '小さな丸い葉が可愛い這性植物。',
            tags: ['グランドカバー', 'かわいい', '小型'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'ヘデラ追加品種',
            scientific: 'Hedera helix variegata',
            description: '斑入りアイビー。白や黄色の斑が美しい。',
            tags: ['つる性', '斑入り', '育てやすい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#C5E1A5'
        },
        {
            name: 'トラディスカンチア・フルミネンシス',
            scientific: 'Tradescantia fluminensis',
            description: '白い斑入りの葉。「シロフハカタカラクサ」。',
            tags: ['つる性', '斑入り', 'グランドカバー'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#E8F5E9'
        },
        // 🏠 人気観葉植物追加 (10種類) - Phase 3 continued
        {
            name: 'ガジュマル',
            scientific: 'Ficus microcarpa',
            description: '幹の形が面白い。「多幸の木」として人気。',
            tags: ['フィカス', '縁起物', '人気'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium', 'large']
            },
            imageColor: '#7CB342'
        },
        {
            name: 'パキラ',
            scientific: 'Pachira aquatica',
            description: '手のひら状の葉。「発財樹」として人気。',
            tags: ['人気', '縁起物', '育てやすい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small', 'medium', 'large']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'ユッカ',
            scientific: 'Yucca elephantipes',
            description: '剣状の葉が力強い。「青年の木」。',
            tags: ['ユッカ', '力強い', '育てやすい'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#558B2F'
        },
        {
            name: 'オリヅルラン・斑入り',
            scientific: 'Chlorophytum comosum variegatum',
            description: '白や黄色の縞が入る人気品種。',
            tags: ['オリヅルラン', '斑入り', '育てやすい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#C5E1A5'
        },
        {
            name: 'テーブルヤシ・セフリジー',
            scientific: 'Chamaedorea seifrizii',
            description: '細い葉が美しいヤシ。コンパクトで育てやすい。',
            tags: ['ヤシ', 'コンパクト', 'トロピカル'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#81C784'
        },
        {
            name: 'ストレリチア・レギネ',
            scientific: 'Strelitzia reginae',
            description: '「極楽鳥花」。オレンジの美しい花。',
            tags: ['ストレリチア', '花が咲く', '美しい'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#FF6F00'
        },
        {
            name: 'アレカヤシ追加品種',
            scientific: 'Dypsis lutescens',
            description: 'エレガントな羽状の葉。空気清浄効果も高い。',
            tags: ['ヤシ', '空気清浄', 'エレガント'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['large']
            },
            imageColor: '#FDD835'
        },
        {
            name: 'コーヒーノキ',
            scientific: 'Coffea arabica',
            description: 'コーヒー豆がなる植物。光沢のある葉が美しい。',
            tags: ['コーヒー', 'ユニーク', '食用可'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#6D4C41'
        },
        {
            name: 'フェニックス・ロベレニー',
            scientific: 'Phoenix roebelenii',
            description: '「シンノウヤシ」。優雅な羽状葉のヤシ。',
            tags: ['ヤシ', '優雅', 'トロピカル'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#7CB342'
        },
        {
            name: 'クワズイモ・アロカシア',
            scientific: 'Alocasia odora',
            description: '大きな葉が特徴。「出世芋」として人気。',
            tags: ['アロカシア', '大型', '人気'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['large']
            },
            imageColor: '#2E7D32'
        },
        // 🌴 ヤシ・パームツリー系 (12種類) - Phase 4
        {
            name: 'ココヤシ',
            scientific: 'Cocos nucifera',
            description: 'ココナッツがなるヤシ。トロピカルな雰囲気満点。',
            tags: ['ヤシ', 'トロピカル', '大型'],
            careLevel: 3,
            match: {
                sunlight: ['high'],
                experience: ['expert'],
                care_frequency: ['weekly', 'daily'],
                size: ['large']
            },
            imageColor: '#8D6E63'
        },
        {
            name: 'ケンチャヤシ',
            scientific: 'Howea forsteriana',
            description: '「ケンティアパーム」。優雅で育てやすいヤシ。',
            tags: ['ヤシ', '優雅', '育てやすい'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#558B2F'
        },
        {
            name: 'リビストナ・チャイネンシス',
            scientific: 'Livistona chinensis',
            description: '「チャイニーズファンパーム」。扇状の葉が美しい。',
            tags: ['ヤシ', '扇状', '美しい'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#689F38'
        },
        {
            name: 'シュロチク',
            scientific: 'Rhapis excelsa',
            description: '「棕櫚竹」。和風の雰囲気。耐陰性が高い。',
            tags: ['ヤシ', '和風', '耐陰性'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#2E7D32'
        },
        {
            name: 'ラピス・フミリス',
            scientific: 'Rhapis humilis',
            description: '「観音竹」。シュロチクより細葉で繊細。',
            tags: ['ヤシ', '細葉', '繊細'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#388E3C'
        },
        {
            name: 'ワシントンヤシ',
            scientific: 'Washingtonia',
            description: '大きな扇状の葉。力強い存在感。',
            tags: ['ヤシ', '大型', '力強い'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#7CB342'
        },
        {
            name: 'ビロウ',
            scientific: 'Livistona subglobosa',
            description: '日本原産のヤシ。耐寒性がある。',
            tags: ['ヤシ', '日本原産', '耐寒性'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#689F38'
        },
        {
            name: 'カナリーヤシ',
            scientific: 'Phoenix canariensis',
            description: '「カナリア諸島ヤシ」。太い幹が特徴的。',
            tags: ['ヤシ', '太い幹', '大型'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'ココスヤシ',
            scientific: 'Syagrus romanzoffiana',
            description: '「クイーンパーム」。優雅な羽状葉。',
            tags: ['ヤシ', '優雅', '羽状葉'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#9CCC65'
        },
        {
            name: 'トックリヤシ',
            scientific: 'Hyophorbe lagenicaulis',
            description: '徳利のような太い幹。ユニークな形状。',
            tags: ['ヤシ', 'ユニーク', '徳利型'],
            careLevel: 3,
            match: {
                sunlight: ['high'],
                experience: ['expert'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#7CB342'
        },
        {
            name: 'トックリヤシモドキ',
            scientific: 'Hyophorbe verschaffeltii',
            description: 'オレンジ色の幹が美しいヤシ。',
            tags: ['ヤシ', 'オレンジ幹', '美しい'],
            careLevel: 3,
            match: {
                sunlight: ['high'],
                experience: ['expert'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#FF9800'
        },
        {
            name: 'メキシコケンチャ',
            scientific: 'Chamaedorea ernesti-augusti',
            description: 'コンパクトなヤシ。室内栽培に最適。',
            tags: ['ヤシ', 'コンパクト', '室内向き'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#66BB6A'
        },
        // Phase 4 continued - Due to character limits, I'll add remaining species in the next edit
        {
            name: 'ハイビスカス',
            scientific: 'Hibiscus rosa-sinensis',
            description: '南国を代表する花。鮮やかな色彩。',
            tags: ['ハイビスカス', '花が咲く', 'トロピカル'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium', 'large']
            },
            imageColor: '#E91E63'
        },
        {
            name: 'ブーゲンビリア',
            scientific: 'Bougainvillea',
            description: '鮮やかな苞が美しい。南国の雰囲気。',
            tags: ['ブーゲンビリア', '花が咲く', 'カラフル'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#FF4081'
        },
        {
            name: 'プルメリア',
            scientific: 'Plumeria',
            description: '「フランジパニ」。甘い香りの美しい花。',
            tags: ['プルメリア', '香り', '花が咲く'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#FFF9C4'
        },
        {
            name: 'ジャスミン',
            scientific: 'Jasminum',
            description: '芳香が素晴らしい白い花。「茉莉花」。',
            tags: ['ジャスミン', '香り', '花が咲く'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#F5F5F5'
        },
        {
            name: 'クチナシ',
            scientific: 'Gardenia jasminoides',
            description: '甘い香りの白い花。日本でも人気。',
            tags: ['クチナシ', '香り', '花が咲く'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#FFFFFF'
        },
        {
            name: 'アラマンダ',
            scientific: 'Allamanda cathartica',
            description: '黄色いトランペット状の花。トロピカルな雰囲気。',
            tags: ['アラマンダ', '花が咲く', '黄色'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#FFEB3B'
        },
        {
            name: 'マンデビラ',
            scientific: 'Mandevilla',
            description: 'トランペット状の美しい花。つる性。',
            tags: ['マンデビラ', '花が咲く', 'つる性'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium']
            },
            imageColor: '#F8BBD0'
        },
        {
            name: 'デュランタ',
            scientific: 'Duranta erecta',
            description: '紫や白の小さな花。黄色い実も美しい。',
            tags: ['デュランタ', '花が咲く', '実がなる'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#9C27B0'
        },
        {
            name: 'ランタナ',
            scientific: 'Lantana camara',
            description: '色が変わる花。「七変化」。',
            tags: ['ランタナ', '花が咲く', '色変化'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#FF9800'
        },
        {
            name: 'イクソラ',
            scientific: 'Ixora',
            description: '「サンタンカ」。赤やオレンジの球状の花。',
            tags: ['イクソラ', '花が咲く', '球状'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small', 'medium']
            },
            imageColor: '#FF5722'
        },
        {
            name: 'アンスリウム',
            scientific: 'Anthurium andraeanum',
            description: '赤いハート型の苞が美しい。人気の観葉植物。',
            tags: ['アンスリウム', '花が咲く', 'ハート型'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#E53935'
        },
        {
            name: 'スパティフィラム',
            scientific: 'Spathiphyllum',
            description: '白い花が美しい。空気清浄効果も高い。',
            tags: ['スパティフィラム', '花が咲く', '空気清浄'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#F5F5F5'
        },
        {
            name: 'カランコエ',
            scientific: 'Kalanchoe blossfeldiana',
            description: '小さな花が密集して咲く多肉植物。',
            tags: ['カランコエ', '花が咲く', '多肉植物'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#F06292'
        },
        {
            name: 'シクラメン',
            scientific: 'Cyclamen persicum',
            description: '冬の定番。美しい花と斑入りの葉。',
            tags: ['シクラメン', '花が咲く', '冬'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#EC407A'
        },
        {
            name: 'プリムラ',
            scientific: 'Primula',
            description: 'カラフルな花が咲く春の植物。',
            tags: ['プリムラ', '花が咲く', '春'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#AB47BC'
        },
        {
            name: 'セントポーリア',
            scientific: 'Saintpaulia',
            description: '「アフリカスミレ」。可愛い花が年中咲く。',
            tags: ['セントポーリア', '花が咲く', '小型'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#673AB7'
        },
        {
            name: 'グロキシニア',
            scientific: 'Sinningia speciosa',
            description: 'ビロードのような大きな花。',
            tags: ['グロキシニア', '花が咲く', 'ビロード'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#9C27B0'
        },
        {
            name: 'ストレプトカーパス',
            scientific: 'Streptocarpus',
            description: 'トランペット状の花。長期間咲く。',
            tags: ['ストレプトカーパス', '花が咲く', '長期'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#7E57C2'
        },
        {
            name: 'クリビア',
            scientific: 'Clivia miniata',
            description: '「君子蘭」。オレンジの美しい花。',
            tags: ['クリビア', '花が咲く', 'オレンジ'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#FF6F00'
        },
        {
            name: 'オキザリス',
            scientific: 'Oxalis',
            description: 'クローバーのような葉。可愛い花も咲く。',
            tags: ['オキザリス', '花が咲く', 'クローバー'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#E91E63'
        },
        {
            name: 'パピルス',
            scientific: 'Cyperus papyrus',
            description: '古代エジプトの紙の原料。水辺を好む。',
            tags: ['水生植物', '歴史的', '大型'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['daily'],
                size: ['large']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'ホテイアオイ',
            scientific: 'Eichhornia crassipes',
            description: '「布袋葵」。紫の美しい花。浮き草。',
            tags: ['水生植物', '浮き草', '花が咲く'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#9C27B0'
        },
        {
            name: 'ミズバショウ',
            scientific: 'Lysichiton camtschatcensis',
            description: '白い苞が美しい湿地植物。春の代表種。',
            tags: ['湿地植物', '白', '春'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['daily'],
                size: ['medium']
            },
            imageColor: '#E8F5E9'
        },
        {
            name: 'カラー',
            scientific: 'Zantedeschia',
            description: '「オランダカイウ」。エレガントな苞。',
            tags: ['湿地植物', 'エレガント', '花が咲く'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium']
            },
            imageColor: '#F5F5F5'
        },
        {
            name: 'モミジ盆栽',
            scientific: 'Acer palmatum',
            description: '紅葉が美しい日本の代表的盆栽。',
            tags: ['盆栽', '紅葉', '日本'],
            careLevel: 3,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['expert'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#D32F2F'
        },
        {
            name: 'マツ盆栽',
            scientific: 'Pinus',
            description: '「松柏盆栽」。格調高い盆栽の代表。',
            tags: ['盆栽', '松', '格調高い'],
            careLevel: 3,
            match: {
                sunlight: ['high'],
                experience: ['expert'],
                care_frequency: ['daily'],
                size: ['small', 'medium']
            },
            imageColor: '#2E7D32'
        },
        {
            name: 'サクラ盆栽',
            scientific: 'Prunus serrulata',
            description: '桜の花を楽しむ盆栽。春の代表。',
            tags: ['盆栽', '桜', '花が咲く'],
            careLevel: 3,
            match: {
                sunlight: ['high'],
                experience: ['expert'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#FCE4EC'
        },
        {
            name: 'ティランジア・ウスネオイデス',
            scientific: 'Tillandsia usneoides',
            description: '「スパニッシュモス」。垂れ下がる姿が美しい。',
            tags: ['エアプランツ', '垂れ下がる', 'ユニーク'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#A1887F'
        },
        {
            name: 'ティランジア・イオナンタ',
            scientific: 'Tillandsia ionantha',
            description: '小型で人気。花の時期に赤く染まる。',
            tags: ['エアプランツ', '小型', '赤'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#E57373'
        },
        {
            name: 'ティランジア・キセログラフィカ',
            scientific: 'Tillandsia xerographica',
            description: '「エアプランツの女王」。大型で美しい。',
            tags: ['エアプランツ', '大型', '女王'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#C5E1A5'
        },
        {
            name: 'アロエベラ',
            scientific: 'Aloe vera',
            description: '薬用として有名。ゲル状の葉肉が有用。',
            tags: ['アロエ', '薬用', '多肉植物'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['minimal', 'weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#7CB342'
        },
        {
            name: 'センテッドゼラニウム',
            scientific: 'Pelargonium graveolens',
            description: 'バラの香りのゼラニウム。アロマに人気。',
            tags: ['ゼラニウム', '香り', 'アロマ'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#F48FB1'
        },
        {
            name: '金木犀',
            scientific: 'Osmanthus fragrans',
            description: '秋の香りの代表。甘い芳香。',
            tags: ['金木犀', '香り', '秋'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#FF9800'
        },
        {
            name: 'スイートピー',
            scientific: 'Lathyrus odoratus',
            description: '甘い香りの美しい花。春の代表。',
            tags: ['スイートピー', '香り', '花が咲く'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#F8BBD0'
        },
        {
            name: 'ヒヤシンス',
            scientific: 'Hyacinthus',
            description: '強い香りの球根植物。春の定番。',
            tags: ['ヒヤシンス', '香り', '球根'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#9C27B0'
        },
        {
            name: 'ビカクシダ',
            scientific: 'Platycerium',
            description: '「コウモリラン」。壁掛けで人気の着生シダ。',
            tags: ['ビカクシダ', '着生', 'ユニーク'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#7CB342'
        },
        {
            name: '亀甲竜',
            scientific: 'Dioscorea elephantipes',
            description: '亀の甲羅のような塊根。希少種。',
            tags: ['塊根植物', '希少', 'ユニーク'],
            careLevel: 3,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['expert'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#8D6E63'
        },
        {
            name: 'ホヤ・カーティシー',
            scientific: 'Hoya kerrii',
            description: 'ハート型の葉。「ラブラブハート」。',
            tags: ['ホヤ', 'ハート型', 'かわいい'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'ポインセチア',
            scientific: 'Euphorbia pulcherrima',
            description: 'クリスマスの定番。赤い苞が美しい。',
            tags: ['ポインセチア', 'クリスマス', '赤'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#E53935'
        },
        {
            name: 'クリスマスローズ',
            scientific: 'Helleborus',
            description: '冬に咲く美しい花。「冬の貴婦人」。',
            tags: ['クリスマスローズ', '冬', '花が咲く'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#F8BBD0'
        },
        {
            name: 'パンジー',
            scientific: 'Viola tricolor',
            description: '冬から春の定番。カラフルな花。',
            tags: ['パンジー', '冬春', 'カラフル'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#9C27B0'
        },
        {
            name: 'ペチュニア',
            scientific: 'Petunia',
            description: '夏の定番。長期間カラフルな花。',
            tags: ['ペチュニア', '夏', 'カラフル'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#9C27B0'
        },
        {
            name: 'コスモス',
            scientific: 'Cosmos bipinnatus',
            description: '秋の代表的な花。繊細で美しい。',
            tags: ['コスモス', '秋', '花が咲く'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#F8BBD0'
        },
        // Phase 4 continued - Remaining species
        {
            name: 'ウォーターレタス',
            scientific: 'Pistia stratiotes',
            description: '「ボタンウキクサ」。レタスのような浮き草。',
            tags: ['水生植物', '浮き草', 'ユニーク'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#C5E1A5'
        },
        {
            name: 'クワイ',
            scientific: 'Sagittaria trifolia',
            description: '食用の水生植物。矢じり型の葉。',
            tags: ['水生植物', '食用', '矢じり葉'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['daily'],
                size: ['medium']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'ザゼンソウ',
            scientific: 'Symplocarpus foetidus',
            description: '座禅を組む僧侶のような姿。ユニーク。',
            tags: ['湿地植物', 'ユニーク', '春'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#8D6E63'
        },
        {
            name: 'アサザ',
            scientific: 'Nymphoides peltata',
            description: '黄色い花が咲く浮葉植物。',
            tags: ['水生植物', '浮葉', '花が咲く'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#FFEB3B'
        },
        {
            name: 'ケヤキ盆栽',
            scientific: 'Zelkova serrata',
            description: '美しい樹形。「箒立ち」が人気。',
            tags: ['盆栽', '樹形', '日本'],
            careLevel: 3,
            match: {
                sunlight: ['high'],
                experience: ['expert'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#7CB342'
        },
        {
            name: 'ウメ盆栽',
            scientific: 'Prunus mume',
            description: '早春に香り高い花。日本の伝統。',
            tags: ['盆栽', '花が咲く', '香り'],
            careLevel: 3,
            match: {
                sunlight: ['high'],
                experience: ['expert'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#F8BBD0'
        },
        {
            name: 'フジ盆栽',
            scientific: 'Wisteria',
            description: '藤の花が垂れ下がる美しい盆栽。',
            tags: ['盆栽', '藤', '花が咲く'],
            careLevel: 3,
            match: {
                sunlight: ['high'],
                experience: ['expert'],
                care_frequency: ['daily'],
                size: ['small', 'medium']
            },
            imageColor: '#9C27B0'
        },
        {
            name: 'イチョウ盆栽',
            scientific: 'Ginkgo biloba',
            description: '黄色く色づく秋が美しい。',
            tags: ['盆栽', '銀杏', '秋'],
            careLevel: 3,
            match: {
                sunlight: ['high'],
                experience: ['expert'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#FDD835'
        },
        {
            name: 'ツツジ盆栽',
            scientific: 'Rhododendron',
            description: '花が美しい「さつき盆栽」。',
            tags: ['盆栽', 'ツツジ', '花が咲く'],
            careLevel: 3,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['expert'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#E91E63'
        },
        {
            name: 'カエデ盆栽',
            scientific: 'Acer buergerianum',
            description: '「三つ葉楓」。紅葉が美しい。',
            tags: ['盆栽', '紅葉', '美しい'],
            careLevel: 3,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['expert'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#FF6F00'
        },
        {
            name: 'ミニバラ',
            scientific: 'Rosa miniature',
            description: '小さなバラ。室内でも楽しめる。',
            tags: ['ミニ観葉', '花が咲く', 'バラ'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#F06292'
        },
        {
            name: 'ティランジア・カプトメデューサエ',
            scientific: 'Tillandsia caput-medusae',
            description: 'メデューサの頭のようなユニークな形。',
            tags: ['エアプランツ', 'ユニーク', 'メデューサ'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'ティランジア・ストリクタ',
            scientific: 'Tillandsia stricta',
            description: 'ピンクの花が美しい人気種。',
            tags: ['エアプランツ', '花が咲く', 'ピンク'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#F48FB1'
        },
        {
            name: 'ティランジア・ブルボーサ',
            scientific: 'Tillandsia bulbosa',
            description: '球根状の基部が特徴的。',
            tags: ['エアプランツ', '球根状', 'ユニーク'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#81C784'
        },
        {
            name: 'ティランジア・ベルティナ',
            scientific: 'Tillandsia albertiana',
            description: '細長い葉が特徴。成長が早い。',
            tags: ['エアプランツ', '細葉', '成長早い'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'ティランジア・ジュンセア',
            scientific: 'Tillandsia juncea',
            description: '細い葉が束生する。シンプルで美しい。',
            tags: ['エアプランツ', '細葉', 'シンプル'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'ティランジア・ブッツィー',
            scientific: 'Tillandsia butzii',
            description: '斑点模様が特徴的。ユニークな姿。',
            tags: ['エアプランツ', '斑点', 'ユニーク'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#9CCC65'
        },
        {
            name: 'ティランジア・トリコロール',
            scientific: 'Tillandsia tricolor',
            description: '3色の美しい花。人気品種。',
            tags: ['エアプランツ', '花が咲く', '3色'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#FF6F00'
        },
        {
            name: 'エキナセア',
            scientific: 'Echinacea purpurea',
            description: '免疫力を高めるハーブ。ピンクの花も美しい。',
            tags: ['ハーブ', '薬用', '花が咲く'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#EC407A'
        },
        {
            name: 'フィーバーフュー',
            scientific: 'Tanacetum parthenium',
            description: '頭痛に効くハーブ。「夏白菊」。',
            tags: ['ハーブ', '薬用', '白花'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#F5F5F5'
        },
        {
            name: 'セントジョーンズワート',
            scientific: 'Hypericum perforatum',
            description: '抗うつ作用のあるハーブ。黄色い花。',
            tags: ['ハーブ', '薬用', '黄花'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#FFEB3B'
        },
        {
            name: 'バレリアン',
            scientific: 'Valeriana officinalis',
            description: '鎮静作用のあるハーブ。「西洋カノコソウ」。',
            tags: ['ハーブ', '薬用', '鎮静'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#F8BBD0'
        },
        {
            name: 'マロウ',
            scientific: 'Malva sylvestris',
            description: '喉に良いハーブ。紫の美しい花。',
            tags: ['ハーブ', '薬用', '花が咲く'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#9C27B0'
        },
        {
            name: 'レモンバーベナ',
            scientific: 'Aloysia citrodora',
            description: '強いレモンの香り。ハーブティーに最適。',
            tags: ['ハーブ', '香り', 'レモン'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#CDDC39'
        },
        {
            name: 'アーティチョーク',
            scientific: 'Cynara scolymus',
            description: '肝臓に良いハーブ。食用にもなる。',
            tags: ['ハーブ', '薬用', '食用'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#689F38'
        },
        {
            name: 'ミルクシスル',
            scientific: 'Silybum marianum',
            description: '肝臓保護のハーブ。「マリアアザミ」。',
            tags: ['ハーブ', '薬用', '肝臓'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#9C27B0'
        },
        {
            name: 'エルダーフラワー',
            scientific: 'Sambucus nigra',
            description: '風邪に効くハーブ。白い花が美しい。',
            tags: ['ハーブ', '薬用', '花が咲く'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#F5F5F5'
        },
        {
            name: '沈丁花',
            scientific: 'Daphne odora',
            description: '早春の香り。甘く強い芳香。',
            tags: ['沈丁花', '香り', '早春'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#E91E63'
        },
        {
            name: 'フリージア',
            scientific: 'Freesia',
            description: '春の香りの球根植物。カラフルな花。',
            tags: ['フリージア', '香り', '球根'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#FFF9C4'
        },
        {
            name: 'スイセン',
            scientific: 'Narcissus',
            description: '春の香り。白や黄色の花。',
            tags: ['スイセン', '香り', '球根'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#FFEB3B'
        },
        {
            name: 'ライラック',
            scientific: 'Syringa vulgaris',
            description: '甘い香りの紫の花。春の代表的低木。',
            tags: ['ライラック', '香り', '紫'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#9C27B0'
        },
        {
            name: 'パキポディウム・ラメリー',
            scientific: 'Pachypodium lamerei',
            description: 'マダガスカルパーム。トゲのある幹が特徴。',
            tags: ['パキポディウム', 'トゲ', '希少'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#A1887F'
        },
        {
            name: 'オペルクリカリア・デカリー',
            scientific: 'Operculicarya decaryi',
            description: '盆栽のような樹形。希少なマダガスカル原産。',
            tags: ['塊根植物', '希少', '樹形'],
            careLevel: 3,
            match: {
                sunlight: ['high'],
                experience: ['expert'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#6D4C41'
        },
        {
            name: 'ユーフォルビア・オベサ',
            scientific: 'Euphorbia obesa',
            description: '球状の珍しいユーフォルビア。希少種。',
            tags: ['ユーフォルビア', '球状', '希少'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['weekly', 'minimal'],
                size: ['small']
            },
            imageColor: '#9CCC65'
        },
        {
            name: 'ウィルコクシア',
            scientific: 'Wilcoxia',
            description: '細長いサボテン。珍しい希少種。',
            tags: ['サボテン', '希少', '細長い'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['minimal', 'weekly'],
                size: ['small']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'ビオラ',
            scientific: 'Viola cornuta',
            description: 'パンジーより小さな花。長期間咲く。',
            tags: ['ビオラ', '冬春', '長期間'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['weekly', 'daily'],
                size: ['small']
            },
            imageColor: '#7E57C2'
        },
        {
            name: 'ガーデンシクラメン',
            scientific: 'Cyclamen coum',
            description: '寒さに強いシクラメン。屋外でも育つ。',
            tags: ['シクラメン', '冬', '耐寒性'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#EC407A'
        },
        {
            name: 'ストック',
            scientific: 'Matthiola incana',
            description: '春の香りの花。甘い芳香。',
            tags: ['ストック', '春', '香り'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#F48FB1'
        },
        {
            name: 'マーガレット',
            scientific: 'Argyranthemum frutescens',
            description: '春の代表的な花。白や黄色。',
            tags: ['マーガレット', '春', '花が咲く'],
            careLevel: 1,
            match: {
                sunlight: ['high'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#F5F5F5'
        },
        {
            name: 'インパチェンス',
            scientific: 'Impatiens',
            description: '日陰でも育つ夏の花。鮮やかな色。',
            tags: ['インパチェンス', '夏', '日陰OK'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#F06292'
        },
        {
            name: 'ベゴニア・マクラータ',
            scientific: 'Begonia maculata',
            description: '水玉模様の葉が特徴的。SNSで大人気。',
            tags: ['ベゴニア', '水玉模様', 'トレンド'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#D32F2F'
        },
        {
            name: 'グリーンネックレス',
            scientific: 'Senecio rowleyanus',
            description: '真珠のネックレスのような多肉植物。垂れ下がる姿が人気。',
            tags: ['多肉植物', 'ハンギング', '人気'],
            careLevel: 2,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['minimal', 'weekly'],
                size: ['small']
            },
            imageColor: '#C5E1A5'
        },
        {
            name: 'ハートカズラ',
            scientific: 'Ceropegia woodii',
            description: 'ハート型の葉が連なるつる性植物。ラブチェーンとも呼ばれる。',
            tags: ['つる性', 'ハート型', 'ハンギング'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['minimal'],
                size: ['small', 'medium']
            },
            imageColor: '#F8BBD0'
        },
        {
            name: 'アガベ・チタノタ',
            scientific: 'Agave titanota',
            description: '肉厚で荒々しい葉が魅力。コレクターに大人気。',
            tags: ['アガベ', '塊根植物', '男前プランツ'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['weeks'],
                size: ['medium']
            },
            imageColor: '#455A64'
        },
        {
            name: 'パキポディウム・グラキリス',
            scientific: 'Pachypodium gracilius',
            description: 'ぷっくりとした塊根部が特徴。塊根植物の王様。',
            tags: ['塊根植物', 'コーデックス', 'トレンド'],
            careLevel: 3,
            match: {
                sunlight: ['high'],
                experience: ['expert'],
                care_frequency: ['weeks'],
                size: ['small', 'medium']
            },
            imageColor: '#FFCC80'
        },
        {
            name: 'カラテア・オルビフォリア',
            scientific: 'Calathea orbifolia',
            description: '大きな丸い葉とシルバーのストライプが美しい。',
            tags: ['カラテア', '大きな葉', '模様'],
            careLevel: 3,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['intermediate'],
                care_frequency: ['weekly', 'daily'],
                size: ['medium', 'large']
            },
            imageColor: '#A5D6A7'
        },
        {
            name: 'オキザリス・トリアングラリス',
            scientific: 'Oxalis triangularis',
            description: '紫色の三角形の葉。光に合わせて葉が開閉する。',
            tags: ['紫の葉', '動きがある', 'ユニーク'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#7B1FA2'
        },
        {
            name: 'ピレア・ペペロミオイデス',
            scientific: 'Pilea peperomioides',
            description: 'パンケーキプランツとも呼ばれる丸い葉が特徴。',
            tags: ['丸い葉', 'ペペロミア', 'かわいい'],
            careLevel: 1,
            match: {
                sunlight: ['medium'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#4CAF50'
        },
        {
            name: 'ストレリチア・ニコライ（オーガスタ）',
            scientific: 'Strelitzia nicolai',
            description: '南国リゾート感あふれる巨大な葉。存在感抜群。',
            tags: ['大型', 'リゾート', '初心者'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['large']
            },
            imageColor: '#1B5E20'
        },
        {
            name: 'オジギソウ',
            scientific: 'Mimosa pudica',
            description: '触れると葉が閉じる不思議な植物。動画映え間違いなし。',
            tags: ['動く植物', 'ユニーク', '実験'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#81C784'
        },
        {
            name: 'ハエトリソウ',
            scientific: 'Dionaea muscipula',
            description: '虫を捕らえる食虫植物。独特な見た目が人気。',
            tags: ['食虫植物', 'ユニーク', '観賞用'],
            careLevel: 3,
            match: {
                sunlight: ['high'],
                experience: ['intermediate', 'expert'],
                care_frequency: ['daily'],
                size: ['small']
            },
            imageColor: '#C62828'
        },
        {
            name: 'ウツボカズラ',
            scientific: 'Nepenthes',
            description: '袋状の捕虫器をつける食虫植物。ハンギングにおすすめ。',
            tags: ['食虫植物', 'ハンギング', 'ユニーク'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['intermediate'],
                care_frequency: ['daily'],
                size: ['medium']
            },
            imageColor: '#D84315'
        },
        {
            name: 'キセログラフィカ',
            scientific: 'Tillandsia xerographica',
            description: 'エアプランツの王様。存在感があり、インテリア性が高い。',
            tags: ['エアプランツ', '王様', 'インテリア'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['minimal'],
                size: ['medium', 'large']
            },
            imageColor: '#ECEFF1'
        },
        {
            name: 'ステファニア・エレクタ',
            scientific: 'Stephania erecta',
            description: 'ジャガイモのような塊根から丸い葉を出す。可愛らしい姿。',
            tags: ['塊根植物', '丸い葉', 'トレンド'],
            careLevel: 2,
            match: {
                sunlight: ['medium'],
                experience: ['intermediate'],
                care_frequency: ['minimal', 'weekly'],
                size: ['small']
            },
            imageColor: '#8D6E63'
        },
        {
            name: 'アルブカ・スピラリス',
            scientific: 'Albuca spiralis',
            description: 'くるくるとカールした葉が特徴的な球根植物。',
            tags: ['球根植物', 'カール', 'ユニーク'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#9E9D24'
        },
        {
            name: 'ザミオクルカス・レイヴン',
            scientific: 'Zamioculcas zamiifolia raven',
            description: '黒く光沢のある葉が美しい。最強クラスの耐陰性を持つ。',
            tags: ['黒い葉', '耐陰性', 'モダン'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner'],
                care_frequency: ['weeks'],
                size: ['medium']
            },
            imageColor: '#212121'
        },
        {
            name: 'ホヤ・カーリー（ハートホヤ）',
            scientific: 'Hoya kerrii',
            description: 'ハート型の多肉質な葉が特徴。恋人へのギフトに人気。',
            tags: ['多肉質', 'ハート型', 'つる性'],
            careLevel: 1,
            match: {
                sunlight: ['high', 'medium'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#81C784'
        },
        {
            name: 'ビカクシダ（コウモリラン）',
            scientific: 'Platycerium bifurcatum',
            description: '鹿の角のような葉が特徴。板付けにして壁に飾るのが定番。',
            tags: ['シダ', 'ハンギング', '男前プランツ'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#43A047'
        },
        {
            name: 'アスプレニウム（タニワタリ）',
            scientific: 'Asplenium nidus',
            description: '放射状に広がる光沢のある葉が美しい。新芽の展開が見もの。',
            tags: ['シダ', '耐陰性', 'インテリア'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#66BB6A'
        },
        {
            name: 'クロトン',
            scientific: 'Codiaeum variegatum',
            description: '黄色や赤の鮮やかな斑入り葉。部屋が明るくなる。',
            tags: ['カラフル', 'トロピカル', '日光好き'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium']
            },
            imageColor: '#FFCA28'
        },
        {
            name: 'ディフェンバキア',
            scientific: 'Dieffenbachia seguine',
            description: '大きな葉に白い斑が入る。存在感抜群の観葉植物。',
            tags: ['斑入り', '大型', '定番'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#AED581'
        },
        {
            name: 'マランタ',
            scientific: 'Maranta leuconeura',
            description: '赤や緑の独特な模様。夜になると葉が閉じる（睡眠運動）。',
            tags: ['模様', 'ハンギング', '動きがある'],
            careLevel: 2,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['intermediate'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#D81B60'
        },
        {
            name: 'バナナの木（ドワーフ）',
            scientific: 'Musa acuminata',
            description: '南国気分を一気に高める大きな葉。成長が早い。',
            tags: ['南国', '大型', '果樹'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['daily', 'weekly'],
                size: ['large']
            },
            imageColor: '#7CB342'
        },
        {
            name: 'オリーブの木',
            scientific: 'Olea europaea',
            description: '平和の象徴。シルバーリーフが美しく、洋風の家に合う。',
            tags: ['シンボルツリー', 'シルバーリーフ', '日光好き'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#90A4AE'
        },
        {
            name: 'ユーカリ',
            scientific: 'Eucalyptus',
            description: '爽やかな香りと丸い葉が人気。ドライフラワーにもなる。',
            tags: ['香り', 'シルバーリーフ', '日光好き'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['beginner', 'intermediate'],
                care_frequency: ['weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#B0BEC5'
        },
        {
            name: 'コーヒーの木',
            scientific: 'Coffea arabica',
            description: '艶のある濃い緑の葉。白い花と赤い実が楽しめる。',
            tags: ['実がなる', '艶のある葉', 'インテリア'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small', 'medium']
            },
            imageColor: '#3E2723'
        },
        {
            name: 'レモンの木',
            scientific: 'Citrus limon',
            description: '爽やかな香りと黄色い実。ベランダ栽培でも人気。',
            tags: ['実がなる', '香り', '人気'],
            careLevel: 2,
            match: {
                sunlight: ['high'],
                experience: ['intermediate'],
                care_frequency: ['daily', 'weekly'],
                size: ['medium', 'large']
            },
            imageColor: '#FDD835'
        },
        {
            name: 'フィッシュボーンカクタス',
            scientific: 'Epiphyllum anguliger',
            description: '魚の骨のようなジグザグした形のサボテン。',
            tags: ['サボテン', 'ユニーク', 'ハンギング'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'high'],
                experience: ['beginner'],
                care_frequency: ['weeks'],
                size: ['small', 'medium']
            },
            imageColor: '#8BC34A'
        },
        {
            name: 'ペペロミア・アルギレイア',
            scientific: 'Peperomia argyreia',
            description: 'スイカの皮のような模様の葉。スイカペペとも呼ばれる。',
            tags: ['模様', 'ペペロミア', 'かわいい'],
            careLevel: 1,
            match: {
                sunlight: ['medium', 'low'],
                experience: ['beginner'],
                care_frequency: ['weekly'],
                size: ['small']
            },
            imageColor: '#EEEEEE'
        },
        {
            name: 'ハラン（葉蘭）',
            scientific: 'Aspidistra elatior',
            description: '最強クラスの耐陰性と耐寒性。和風にもモダンにも合う。',
            tags: ['耐陰性', '丈夫', '和風'],
            careLevel: 1,
            match: {
                sunlight: ['low', 'medium'],
                experience: ['beginner'],
                care_frequency: ['weeks'],
                size: ['medium', 'large']
            },
            imageColor: '#1B5E20'
        },
        // --- Batch 14: Rare, Unique & Flowering (30 items) ---
        { name: 'ステファニア', scientific: 'Stephania', description: 'ジャガイモのような塊根から丸い葉を出す。', tags: ['塊根植物', 'ユニーク', 'かわいい'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#8D6E63' },
        { name: 'アデニウム', scientific: 'Adenium obesum', description: '「砂漠のバラ」と呼ばれる美しい花を咲かせる塊根植物。', tags: ['塊根植物', '花が咲く', '日光好き'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#F48FB1' },
        { name: 'パキポディウム', scientific: 'Pachypodium', description: 'トゲのある太い幹が特徴。ユニークな姿が人気。', tags: ['塊根植物', 'トゲ', '日光好き'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['minimal'], size: ['small', 'medium'] }, imageColor: '#BCAAA4' },
        { name: 'エバーフレッシュ', scientific: 'Cojoba arborea var. angustifolia', description: '夜になると葉を閉じる。涼しげな姿がインテリアに最適。', tags: ['動きがある', '涼しげ', '人気'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['daily', 'weekly'], size: ['large'] }, imageColor: '#4CAF50' },
        { name: 'フランスゴムの木', scientific: 'Ficus rubiginosa', description: '小ぶりな葉と曲がった幹がおしゃれ。育てやすい。', tags: ['おしゃれ', '曲がり', '丈夫'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium', 'large'] }, imageColor: '#66BB6A' },
        { name: 'シェフレラ（ホンコンカポック）', scientific: 'Schefflera arboricola', description: '手のひらのような葉が特徴。非常に丈夫で寒さにも強い。', tags: ['丈夫', '定番', '耐寒性'], careLevel: 1, match: { sunlight: ['medium', 'high', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium', 'large'] }, imageColor: '#388E3C' },
        { name: 'ソフォラ・リトルベイビー', scientific: 'Sophora prostrata', description: 'ジグザグの枝と極小の葉がメルヘンチック。', tags: ['かわいい', 'ユニーク', '繊細'], careLevel: 3, match: { sunlight: ['medium', 'high'], experience: ['expert'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#AED581' },
        { name: 'アジアンタム', scientific: 'Adiantum', description: 'レースのような繊細な葉が美しいシダ植物。乾燥に弱い。', tags: ['繊細', '涼しげ', '水好き'], careLevel: 3, match: { sunlight: ['medium', 'low'], experience: ['expert'], care_frequency: ['daily'], size: ['small', 'medium'] }, imageColor: '#81C784' },
        { name: 'ピレア・ペペロミオイデス', scientific: 'Pilea peperomioides', description: 'まん丸の葉がポップで可愛い。「パンケーキプランツ」とも。', tags: ['かわいい', '丸い葉', '人気'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#C8E6C9' },
        { name: 'カラテア・オルビフォリア', scientific: 'Calathea orbifolia', description: '大きな丸い葉に入ったシルバーの縞模様が美しい。', tags: ['模様', '耐陰性', '大型葉'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#A5D6A7' },
        { name: 'ヒメモンステラ', scientific: 'Rhaphidophora tetrasperma', description: 'モンステラより小ぶりで、日本の住宅でも扱いやすい。', tags: ['モンステラ', '小ぶり', '半つる性'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#43A047' },
        { name: 'ストレリチア・オーガスタ', scientific: 'Strelitzia nicolai', description: 'バナナのような巨大な葉がトロピカルな雰囲気。', tags: ['南国', '大型', 'リゾート'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#1B5E20' },
        { name: 'ドラセナ・コンシンネ', scientific: 'Dracaena marginata', description: '細長い葉とスタイリッシュな樹形がモダン。', tags: ['モダン', 'スタイリッシュ', '定番'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium', 'large'] }, imageColor: '#D32F2F' },
        { name: 'ユッカ（青年の木）', scientific: 'Yucca elephantipes', description: '力強い見た目で、成長・発展の象徴とされる。', tags: ['丈夫', 'シンボルツリー', '日光好き'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#2E7D32' },
        { name: 'ポニーテール（トックリラン）', scientific: 'Beaucarnea recurvata', description: '根元が膨らんだユニークな形。乾燥に非常に強い。', tags: ['ユニーク', '乾燥に強い', '長寿'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small', 'medium'] }, imageColor: '#E6EE9C' },
        { name: 'サボテン（金鯱）', scientific: 'Echinocactus grusonii', description: '「サボテンの王様」。丸くて金色のトゲが美しい。', tags: ['サボテン', 'トゲ', '長寿'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small', 'medium'] }, imageColor: '#FDD835' },
        { name: 'ハートホヤ（カーリー）', scientific: 'Hoya kerrii', description: 'ハート型の葉が特徴。バレンタインの贈り物にも。', tags: ['ハート', '多肉質', 'かわいい'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#81C784' },
        { name: 'リプサリス', scientific: 'Rhipsalis', description: '森林サボテン。細い茎が垂れ下がる姿がおしゃれ。', tags: ['ハンギング', 'サボテン', '耐陰性'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#C5E1A5' },
        { name: 'ネペンテス（ウツボカズラ）', scientific: 'Nepenthes', description: '独特な袋を持つ食虫植物。ハンギングに最適。', tags: ['食虫植物', 'ユニーク', 'ハンギング'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#EF5350' },
        { name: 'ハエトリソウ', scientific: 'Dionaea muscipula', description: '二枚貝のような葉で虫を捕らえる食虫植物。', tags: ['食虫植物', 'ユニーク', '観察'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#C62828' },
        { name: '紫陽花（アジサイ・鉢植え）', scientific: 'Hydrangea macrophylla', description: '華やかな花が楽しめる。水切れに注意が必要。', tags: ['花が咲く', '季節', '水好き'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#7986CB' },
        { name: 'ハイビスカス', scientific: 'Hibiscus rosa-sinensis', description: '南国の象徴。鮮やかな花を次々と咲かせる。', tags: ['花が咲く', '南国', '日光好き'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#D50000' },
        { name: 'ブーゲンビリア', scientific: 'Bougainvillea', description: '鮮やかな色の苞（ほう）が美しい。南国気分満点。', tags: ['花が咲く', '南国', '日光好き'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium', 'large'] }, imageColor: '#EC407A' },
        { name: 'シクラメン', scientific: 'Cyclamen persicum', description: '冬の鉢花の定番。次々と花を咲かせる。', tags: ['花が咲く', '冬', '定番'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#F06292' },
        { name: 'セントポーリア', scientific: 'Saintpaulia', description: '「室内の女王」。蛍光灯の光でも花が咲く。', tags: ['花が咲く', '耐陰性', 'かわいい'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#AB47BC' },
        { name: 'ポインセチア', scientific: 'Euphorbia pulcherrima', description: 'クリスマスの定番。赤と緑のコントラストが美しい。', tags: ['クリスマス', '季節', '華やか'], careLevel: 3, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#D50000' },
        { name: 'カジュマル（気根）', scientific: 'Ficus microcarpa', description: '気根がたくさん出た野生的な姿のガジュマル。', tags: ['ユニーク', '生命力', '和風'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small', 'medium'] }, imageColor: '#5D4037' },
        { name: 'トキワシノブ', scientific: 'Davallia mariesii', description: 'フサフサした根茎が特徴のシダ。苔玉によく合う。', tags: ['和風', 'シダ', '涼しげ'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#7CB342' },
        { name: '紅葉（モミジ・盆栽）', scientific: 'Acer palmatum', description: '日本の四季を感じられる。秋の紅葉は絶景。', tags: ['和風', '紅葉', '盆栽'], careLevel: 3, match: { sunlight: ['high', 'medium'], experience: ['expert'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#FF5722' },
        { name: '極楽鳥花（ストレリチア・レギネ）', scientific: 'Strelitzia reginae', description: '鳥のような鮮やかな形の花を咲かせる。', tags: ['花が咲く', '南国', '切り花'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#FF9800' },
        // --- Batch 15: Air Plants, Succulents & Unique Foliage (30 items) ---
        { name: 'キセログラフィカ', scientific: 'Tillandsia xerographica', description: 'エアプランツの王様。銀白色の葉が美しく、インテリア性が高い。', tags: ['エアプランツ', '銀葉', '王様'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#CFD8DC' },
        { name: 'ウスネオイデス', scientific: 'Tillandsia usneoides', description: 'スパニッシュモスとも呼ばれる。吊るして飾るのが定番。', tags: ['エアプランツ', 'ハンギング', 'おしゃれ'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium', 'large'] }, imageColor: '#B0BEC5' },
        { name: 'イオナンタ', scientific: 'Tillandsia ionantha', description: '小型で可愛らしいエアプランツ。花が咲くと葉が赤くなる。', tags: ['エアプランツ', '小型', 'かわいい'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#F48FB1' },
        { name: 'カプトメデューサ', scientific: 'Tillandsia caput-medusae', description: '名前の通り、蛇のようなうねる葉が特徴のエアプランツ。', tags: ['エアプランツ', 'ユニーク', '動きがある'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small', 'medium'] }, imageColor: '#90A4AE' },
        { name: 'コットンキャンディ', scientific: 'Tillandsia Cotton Candy', description: 'ふわふわとしたトリコームとピンクの花が美しい。', tags: ['エアプランツ', '花が咲く', 'かわいい'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#F8BBD0' },
        { name: 'ハオルチア・オブツーサ', scientific: 'Haworthia cooperi', description: '「雫石」とも呼ばれる。透明な窓を持つ美しい多肉植物。', tags: ['多肉植物', '透明感', '宝石'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#81C784' },
        { name: 'グリーンネックレス', scientific: 'Senecio rowleyanus', description: 'コロコロとした玉状の葉が連なる。ハンギングに大人気。', tags: ['多肉植物', 'ハンギング', 'かわいい'], careLevel: 2, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small', 'medium'] }, imageColor: '#AED581' },
        { name: 'ルビーネックレス', scientific: 'Othonna capensis', description: '寒さに当たると紫色に紅葉する。黄色い花も咲く。', tags: ['多肉植物', '紅葉', 'ハンギング'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small', 'medium'] }, imageColor: '#E57373' },
        { name: '黒法師（アエオニウム）', scientific: 'Aeonium arboreum \'Zwartkop\'', description: '黒紫色の葉がシックでモダンな印象を与える多肉植物。', tags: ['多肉植物', '黒葉', 'モダン'], careLevel: 2, match: { sunlight: ['high', 'medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#3E2723' },
        { name: 'エケベリア（七福神）', scientific: 'Echeveria secunda', description: 'バラの花のようなロゼット型が美しい、多肉植物の代表格。', tags: ['多肉植物', 'ロゼット', '定番'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#80CBC4' },
        { name: 'セダム（虹の玉）', scientific: 'Sedum rubrotinctum', description: 'プチプチとした葉が可愛い。秋には真っ赤に紅葉する。', tags: ['多肉植物', '紅葉', 'グランドカバー'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#FFCCBC' },
        { name: 'アロエ・ベラ', scientific: 'Aloe vera', description: '薬用としても有名。肉厚な葉はインパクト大。', tags: ['多肉植物', '実用性', '丈夫'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#4CAF50' },
        { name: 'マハラジャ（ユーフォルビア）', scientific: 'Euphorbia lactea cristata', description: '扇のように波打つ独特の形状。接ぎ木で楽しまれることが多い。', tags: ['ユニーク', '彫刻的', 'レア'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#D7CCC8' },
        { name: 'ミルクブッシュ', scientific: 'Euphorbia tirucalli', description: '「緑のサンゴ」とも呼ばれる。枝だけの不思議な植物。', tags: ['ユニーク', 'モダン', 'サンゴ'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium', 'large'] }, imageColor: '#C5E1A5' },
        { name: 'ペペロミア・サンデルシー（スイカペペ）', scientific: 'Peperomia argyreia', description: 'スイカの皮のような模様の丸い葉が特徴。', tags: ['かわいい', '模様', 'ユニーク'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#A5D6A7' },
        { name: 'フィカス・ベンジャミン・バロック', scientific: 'Ficus benjamina \'Barok\'', description: 'くるくるとカールした葉が個性的でおしゃれ。', tags: ['カール葉', 'おしゃれ', '人気'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium', 'large'] }, imageColor: '#66BB6A' },
        { name: 'アルテシマ（フィカス）', scientific: 'Ficus altissima', description: '黄緑色の斑入り葉が明るい印象。インテリアグリーンとして人気。', tags: ['斑入り', '明るい', 'ゴムの木'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium', 'large'] }, imageColor: '#DCEDC8' },
        { name: 'カシワバゴムノキ', scientific: 'Ficus lyrata', description: '柏の葉のような大きな波打つ葉が存在感抜群。', tags: ['大型葉', '存在感', 'おしゃれ'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#2E7D32' },
        { name: 'ポリシャス・フルティコーサ', scientific: 'Polyscias fruticosa', description: '繊細な切れ込みのある葉が涼しげ。和洋どちらにも合う。', tags: ['繊細', '涼しげ', 'スタイリッシュ'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['weekly'], size: ['medium', 'large'] }, imageColor: '#43A047' },
        { name: 'アスパラガス・スプレンゲリー', scientific: 'Asparagus densiflorus', description: '細い葉がふんわりと広がる。動きのあるアレンジに。', tags: ['繊細', 'ハンギング', '丈夫'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#81C784' },
        { name: 'オリヅルラン', scientific: 'Chlorophytum comosum', description: 'ランナーを出して子株が増える。空気清浄能力が高い。', tags: ['丈夫', '空気清浄', '増やせる'], careLevel: 1, match: { sunlight: ['medium', 'low', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small', 'medium'] }, imageColor: '#C8E6C9' },
        { name: 'シュガーバイン', scientific: 'Parthenocissus sugarvine', description: '5枚の葉が手のひらのように広がるつる性植物。', tags: ['つる性', 'かわいい', 'ナチュラル'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small', 'medium'] }, imageColor: '#AED581' },
        { name: 'ワイヤープランツ', scientific: 'Muehlenbeckia complexa', description: '針金のような茎に小さな丸い葉がたくさんつく。', tags: ['かわいい', 'グランドカバー', '寄せ植え'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small', 'medium'] }, imageColor: '#689F38' },
        { name: 'ディスキディア（カンガルーポケット）', scientific: 'Dischidia pectinoides', description: '貯水嚢（ポケット）を持つ不思議な植物。中に根を張る。', tags: ['ユニーク', 'ハンギング', 'レア'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#8BC34A' },
        { name: 'リトープス', scientific: 'Lithops', description: '「生ける宝石」。石に擬態する脱皮する多肉植物。', tags: ['ユニーク', '多肉植物', '脱皮'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#BCAAA4' },
        { name: 'コウモリラン（グランデ）', scientific: 'Platycerium grande', description: '「森の王冠」。貯水葉が大きく広がり、圧倒的な存在感。', tags: ['ビカクシダ', '大型', '王様'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#558B2F' },
        { name: 'アグラオネマ・ピクタム', scientific: 'Aglaonema pictum', description: '迷彩柄の葉がマニアに人気。「迷彩」プランツ。', tags: ['迷彩', 'レア', 'マニア向け'], careLevel: 3, match: { sunlight: ['low', 'medium'], experience: ['expert'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#2E7D32' },
        { name: 'ジュエルオーキッド', scientific: 'Ludisia discolor', description: '葉脈が宝石のように輝く蘭の仲間。花より葉を楽しむ。', tags: ['宝石', '美しい葉', 'テラリウム'], careLevel: 3, match: { sunlight: ['low'], experience: ['expert'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#3E2723' },
        { name: 'マランタ・レウコネウラ', scientific: 'Maranta leuconeura', description: '葉脈の模様が独特。夜に葉を閉じる祈りの植物（Prayer Plant）。', tags: ['模様', '動きがある', '耐陰性'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#81C784' },
        { name: 'ストロマンテ・トリオスター', scientific: 'Stromanthe sanguinea', description: '葉の裏が赤紫色の鮮やかな植物。エキゾチックな雰囲気。', tags: ['カラーリーフ', '裏赤', 'おしゃれ'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium', 'large'] }, imageColor: '#AD1457' },
        // --- Batch 16: Herbs, Edibles & Fragrant Plants (30 items) ---
        { name: 'ローズマリー', scientific: 'Rosmarinus officinalis', description: '爽やかな香りで料理にも使える。乾燥に強く丈夫。', tags: ['ハーブ', '香り', '料理'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#5C6BC0' },
        { name: 'ミント（スペアミント）', scientific: 'Mentha spicata', description: '清涼感のある香り。繁殖力が非常に強いので地植えは注意。', tags: ['ハーブ', '香り', '丈夫'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#66BB6A' },
        { name: 'バジル（スイートバジル）', scientific: 'Ocimum basilicum', description: 'イタリア料理に欠かせない。日当たりと水を好む。', tags: ['ハーブ', '料理', '香り'], careLevel: 2, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#43A047' },
        { name: 'レモンバーム', scientific: 'Melissa officinalis', description: 'レモンのような爽やかな香り。ハーブティーにおすすめ。', tags: ['ハーブ', '香り', 'リラックス'], careLevel: 1, match: { sunlight: ['medium', 'high', 'low'], experience: ['beginner'], care_frequency: ['daily'], size: ['small', 'medium'] }, imageColor: '#AED581' },
        { name: 'ラベンダー（フレンチ）', scientific: 'Lavandula stoechas', description: 'ウサギの耳のような花穂が可愛い。暑さに比較的強い。', tags: ['ハーブ', '香り', '花が咲く'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#7E57C2' },
        { name: 'センテッドゼラニウム', scientific: 'Pelargonium graveolens', description: 'バラのような香りなど様々な香りがある。虫除け効果も。', tags: ['ハーブ', '香り', '虫除け'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#F06292' },
        { name: 'タイム（クリーピングタイム）', scientific: 'Thymus serpyllum', description: '地面を這うように広がる。踏まれても香るグランドカバー。', tags: ['ハーブ', 'グランドカバー', '丈夫'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#9CCC65' },
        { name: 'オレガノ', scientific: 'Origanum vulgare', description: 'トマト料理によく合う。乾燥気味に育てるのがコツ。', tags: ['ハーブ', '料理', '乾燥に強い'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#8BC34A' },
        { name: 'セージ（コモンセージ）', scientific: 'Salvia officinalis', description: 'ソーセージの語源とも。肉料理の臭み消しに。', tags: ['ハーブ', '料理', 'シルバーリーフ'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#CFD8DC' },
        { name: '月桂樹（ローリエ）', scientific: 'Laurus nobilis', description: '煮込み料理の香り付けに。常緑樹でシンボルツリーにも。', tags: ['ハーブ', '料理', 'シンボルツリー'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#388E3C' },
        { name: 'オリーブの木', scientific: 'Olea europaea', description: '平和の象徴。シルバーグリーンの葉が美しい。', tags: ['おしゃれ', 'シンボルツリー', '実がなる'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#90A4AE' },
        { name: 'コーヒーの木', scientific: 'Coffea arabica', description: '光沢のある濃い緑の葉が美しい。白い花と赤い実も楽しめる。', tags: ['実がなる', 'ツヤ葉', '人気'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#1B5E20' },
        { name: 'ティーツリー（メラレウカ）', scientific: 'Melaleuca alternifolia', description: '抗菌作用のあるオイルが有名。繊細な葉が涼しげ。', tags: ['ハーブ', '香り', '涼しげ'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium', 'large'] }, imageColor: '#80CBC4' },
        { name: 'ユーカリ・シネレア（銀世界）', scientific: 'Eucalyptus cinerea', description: '丸い銀色の葉がおしゃれ。ドライフラワーにも人気。', tags: ['おしゃれ', '銀葉', '香り'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#B0BEC5' },
        { name: 'ユーカリ・グニー', scientific: 'Eucalyptus gunnii', description: '小さな丸い葉が特徴。シネレアより葉が小さく可愛い。', tags: ['おしゃれ', '銀葉', 'かわいい'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium', 'large'] }, imageColor: '#90A4AE' },
        { name: 'オキザリス（三角葉）', scientific: 'Oxalis triangularis', description: '紫色の三角形の葉が特徴。夜に葉を閉じる。', tags: ['紫葉', '球根', '動きがある'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#8E24AA' },
        { name: 'ベゴニア・マクラータ', scientific: 'Begonia maculata', description: '水玉模様の葉が非常にユニークでおしゃれ。', tags: ['水玉', 'おしゃれ', '花が咲く'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#D32F2F' },
        { name: 'レックスベゴニア', scientific: 'Begonia rex', description: '葉の色や模様のバリエーションが豊富。コレクション性高。', tags: ['カラーリーフ', '模様', '派手'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small', 'medium'] }, imageColor: '#BA68C8' },
        { name: 'カラテア・マコヤナ', scientific: 'Goeppertia makoyana', description: '「孔雀竹芋」。葉の模様が孔雀の羽のように美しい。', tags: ['模様', '耐陰性', 'エキゾチック'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#AED581' },
        { name: 'カラテア・ランシフォリア', scientific: 'Goeppertia lancifolia', description: '細長い葉と波打つ縁、斑点模様が特徴。', tags: ['模様', '耐陰性', 'ユニーク'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#8BC34A' },
        { name: 'フィカス・バーガンディ', scientific: 'Ficus elastica \'Burgundy\'', description: '黒に近い赤茶色の葉が大人っぽい雰囲気のゴムの木。', tags: ['シック', '大人っぽい', 'ゴムの木'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#3E2723' },
        { name: 'フィカス・ティネケ', scientific: 'Ficus elastica \'Tineke\'', description: 'クリーム色の斑が入る明るい葉色のゴムの木。', tags: ['斑入り', '明るい', 'ゴムの木'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#C8E6C9' },
        { name: 'インドゴムノキ', scientific: 'Ficus elastica', description: '古くから愛される定番の観葉植物。非常に丈夫。', tags: ['定番', '丈夫', 'ゴムの木'], careLevel: 1, match: { sunlight: ['medium', 'high', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#1B5E20' },
        { name: 'ドラセナ・マッサンゲアナ（幸福の木）', scientific: 'Dracaena fragrans \'Massangeana\'', description: '「幸福の木」として贈り物に最適。太い幹と斑入り葉。', tags: ['幸福', '縁起物', '定番'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#43A047' },
        { name: 'ドラセナ・ワーネッキー', scientific: 'Dracaena deremensis \'Warneckii\'', description: '白と緑のストライプが爽やか。耐陰性が強い。', tags: ['ストライプ', '爽やか', '耐陰性'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium', 'large'] }, imageColor: '#81C784' },
        { name: 'スパティフィラム（ドミノ）', scientific: 'Spathiphyllum \'Domino\'', description: 'デコボコした葉に白い斑が入る珍しい品種。', tags: ['斑入り', '花が咲く', 'レア'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#A5D6A7' },
        { name: 'シンゴニウム', scientific: 'Syngonium podophyllum', description: '矢尻型の葉が特徴。つる性でハンギングやポール仕立てに。', tags: ['つる性', '耐陰性', 'かわいい'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small', 'medium'] }, imageColor: '#C5E1A5' },
        { name: 'トラデスカンティア・ゼブリナ', scientific: 'Tradescantia zebrina', description: '紫と銀色の縞模様がキラキラ輝く美しい植物。', tags: ['ハンギング', 'カラーリーフ', '丈夫'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small', 'medium'] }, imageColor: '#7B1FA2' },
        { name: 'コリウス', scientific: 'Plectranthus scutellarioides', description: '葉の色や模様が非常に多彩。寄せ植えのアクセントに。', tags: ['カラーリーフ', '派手', '寄せ植え'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#F44336' },
        { name: 'カラジウム', scientific: 'Caladium', description: '夏の観葉植物。白やピンクの大きな葉が涼しげで華やか。', tags: ['カラーリーフ', '夏', '華やか'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#EF9A9A' },
        // --- Batch 17: Cacti, Succulents & Dry Garden (30 items) ---
        { name: 'ウチワサボテン', scientific: 'Opuntia', description: '「ミッキーマウスの木」とも呼ばれる平たい形が可愛い。', tags: ['サボテン', 'かわいい', 'トゲ'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small', 'medium'] }, imageColor: '#66BB6A' },
        { name: '竜神木（ミルチロカクタス）', scientific: 'Myrtillocactus geometrizans', description: '青みがかった肌と規則正しい形が美しい柱サボテン。', tags: ['サボテン', '柱サボテン', 'スタイリッシュ'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium', 'large'] }, imageColor: '#90A4AE' },
        { name: '兜丸（アストロフィツム）', scientific: 'Astrophytum asterias', description: 'トゲがなく、星のような斑点がある丸いサボテン。', tags: ['サボテン', 'トゲなし', 'ユニーク'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#CDDC39' },
        { name: '緋牡丹（ギムノカリキウム）', scientific: 'Gymnocalycium mihanovichii', description: '赤や黄色などの鮮やかな色が特徴。光合成できないため接ぎ木される。', tags: ['サボテン', 'カラフル', 'かわいい'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#F44336' },
        { name: 'マミラリア', scientific: 'Mammillaria', description: '群生しやすく、小さな花を冠のように咲かせる。', tags: ['サボテン', '花が咲く', '群生'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#F06292' },
        { name: 'アガベ・チタノタ', scientific: 'Agave titanota', description: '荒々しいトゲと肉厚な葉が男性的な人気を誇る。', tags: ['アガベ', 'カッコイイ', '塊根植物'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#CFD8DC' },
        { name: 'アガベ・パリー', scientific: 'Agave parryi', description: '吉祥天とも。整ったロゼットとシルバーブルーの葉が美しい。', tags: ['アガベ', '美しい', '耐寒性'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#B0BEC5' },
        { name: 'アガベ・アテナータ', scientific: 'Agave attenuata', description: 'トゲがなく、柔らかい葉を持つ大型のアガベ。優雅な雰囲気。', tags: ['アガベ', 'トゲなし', '大型'], careLevel: 2, match: { sunlight: ['high', 'medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#A5D6A7' },
        { name: 'ユッカ・ロストラータ', scientific: 'Yucca rostrata', description: '放射状に広がるシルバーブルーの葉が美しいドライガーデンの主役。', tags: ['ドライガーデン', 'シルバーリーフ', '耐寒性'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#B0BEC5' },
        { name: 'ダシリリオン', scientific: 'Dasylirion', description: '細長い葉を放射状に広げる。非常に丈夫で乾燥に強い。', tags: ['ドライガーデン', '個性的', '丈夫'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#81C784' },
        { name: 'サンスベリア・ボンセル', scientific: 'Sansevieria cylindrica \'Boncel\'', description: '丸い棒状の葉が手のひらのように広がる可愛い品種。', tags: ['サンスベリア', 'かわいい', '空気清浄'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#C5E1A5' },
        { name: 'サンスベリア・サムライ', scientific: 'Sansevieria ehrenbergii \'Samurai\'', description: '肉厚で硬い葉が対になって扇状に広がる。', tags: ['サンスベリア', 'カッコイイ', 'ドワーフ'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#558B2F' },
        { name: 'ガステリア', scientific: 'Gasteria', description: '舌のような形の肉厚な葉が特徴。耐陰性が強い。', tags: ['多肉植物', '耐陰性', 'ユニーク'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#33691E' },
        { name: '月兎耳（ツキトジ）', scientific: 'Kalanchoe tomentosa', description: 'フェルトのような毛に覆われた葉がウサギの耳に似ている。', tags: ['多肉植物', 'もふもふ', 'かわいい'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#E0E0E0' },
        { name: 'カランコエ（ベニベンケイ）', scientific: 'Kalanchoe blossfeldiana', description: '鮮やかな色の小さな花をたくさん咲かせる。', tags: ['花が咲く', '多肉植物', '定番'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#E91E63' },
        { name: '金のなる木（花月）', scientific: 'Crassula ovata', description: '縁起が良いとされる多肉植物。丈夫で長持ち。', tags: ['縁起物', '丈夫', '多肉植物'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#4CAF50' },
        { name: '雅楽の舞（ポーチュラカリア）', scientific: 'Portulacaria afra var. variegata', description: '小さな斑入りの葉と赤い茎のコントラストが美しい。', tags: ['多肉植物', '盆栽', '斑入り'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small', 'medium'] }, imageColor: '#F8BBD0' },
        { name: 'ビアホップ（新玉つづり）', scientific: 'Sedum morganianum', description: '葡萄の房のように葉が垂れ下がる。触ると葉が落ちやすいので注意。', tags: ['多肉植物', 'ハンギング', 'かわいい'], careLevel: 2, match: { sunlight: ['high', 'medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#C8E6C9' },
        { name: 'ドルフィンネックレス', scientific: 'Senecio peregrinus', description: '葉の形がイルカが飛び跳ねているように見える。', tags: ['多肉植物', 'かわいい', 'ハンギング'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#81C784' },
        { name: 'ハートカズラ', scientific: 'Ceropegia woodii', description: 'ハート型の葉が連なるロマンチックなつる性植物。', tags: ['ハート', 'つる性', 'ハンギング'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#D7CCC8' },
        { name: 'サクララン（ホヤ・カルノーサ）', scientific: 'Hoya carnosa', description: '飴細工のような星形の花を咲かせる。', tags: ['つる性', '花が咲く', '耐陰性'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#F48FB1' },
        { name: 'ホヤ・リネアリス', scientific: 'Hoya linearis', description: '細い葉がカーテンのように垂れ下がる。独特の質感。', tags: ['ハンギング', 'ユニーク', 'おしゃれ'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['minimal'], size: ['medium', 'large'] }, imageColor: '#E6EE9C' },
        { name: 'ディスキディア・ヌンムラリア', scientific: 'Dischidia nummularia', description: 'コインのような丸い葉が連なる。', tags: ['ハンギング', 'かわいい', '丸い葉'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#C5E1A5' },
        { name: 'ペペロミア・オブツシフォリア', scientific: 'Peperomia obtusifolia', description: '肉厚で光沢のある丸い葉が特徴。非常に丈夫。', tags: ['丸い葉', '耐陰性', '丈夫'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#2E7D32' },
        { name: 'ペペロミア・ポリボトリア', scientific: 'Peperomia polybotrya', description: '「レインボードロップ」。しずく型の葉が可愛い。', tags: ['かわいい', 'しずく型', '耐陰性'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#66BB6A' },
        { name: 'ピレア・カディエレイ（アルミニウムプランツ）', scientific: 'Pilea cadierei', description: '葉にアルミニウムを塗ったような銀色の模様が入る。', tags: ['模様', '銀葉', 'ユニーク'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#90A4AE' },
        { name: 'ピレア・ムーンバレー', scientific: 'Pilea mollis', description: 'ちりめん状のデコボコした葉が特徴。', tags: ['ユニーク', 'デコボコ', '耐陰性'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#AED581' },
        { name: 'トラデスカンティア・ナヌーク', scientific: 'Tradescantia \'Nanouk\'', description: 'ピンク、白、緑の斑入り葉が非常に鮮やかでポップ。', tags: ['ピンク', 'かわいい', 'カラーリーフ'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#F8BBD0' },
        { name: 'カリシア・レペンス', scientific: 'Callisia repens', description: '小さな葉が密集して這うように広がる。挿し木で簡単に増える。', tags: ['小型', 'グランドカバー', '丈夫'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#C8E6C9' },
        { name: 'ユキノシタ', scientific: 'Saxifraga stolonifera', description: '日本の伝統的な植物。丸い葉と赤いランナーが特徴。', tags: ['和風', '耐寒性', '山野草'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#4E342E' },
        // --- Batch 18: Orchids, Tropical Flowers & Rare Aroids (30 items) ---
        { name: '胡蝶蘭（ミディ）', scientific: 'Phalaenopsis aphrodite', description: '「幸福が飛んでくる」。贈り物に定番の蘭。室内でも育てやすい。', tags: ['蘭', '花が咲く', 'エレガント'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#F8BBD0' },
        { name: 'カトレア', scientific: 'Cattleya', description: '「蘭の女王」。華やかで香りの良い花を咲かせる。', tags: ['蘭', '香り', '女王'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#E040FB' },
        { name: 'デンドロビウム', scientific: 'Dendrobium', description: '竹のような茎にたくさんの花をつける。種類が豊富。', tags: ['蘭', '花が咲く', '丈夫'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#BA68C8' },
        { name: 'オンシジューム', scientific: 'Oncidium', description: '「ダンシング・レディ」。黄色い小花がたくさん咲く。', tags: ['蘭', '黄色', '華やか'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#FFEB3B' },
        { name: 'バンダ', scientific: 'Vanda', description: '土を必要とせず、空中に根を張る着生蘭。青い花が有名。', tags: ['蘭', 'ハンギング', '青い花'], careLevel: 3, match: { sunlight: ['high', 'medium'], experience: ['expert'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#3F51B5' },
        { name: 'パフィオペディラム', scientific: 'Paphiopedilum', description: '袋状の花弁が特徴的な食虫植物のような見た目の蘭。', tags: ['蘭', 'ユニーク', 'マニア向け'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#5D4037' },
        { name: 'アンスリウム（赤）', scientific: 'Anthurium andraeanum', description: 'ハート型の赤い仏炎苞が情熱的。室内のアクセントに。', tags: ['花が咲く', '赤', 'トロピカル'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#D32F2F' },
        { name: 'アンスリウム・クラリネルビウム', scientific: 'Anthurium clarinervium', description: 'ベルベットのような質感のハート型の葉に白い葉脈が入る。', tags: ['美しい葉', 'ハート', 'ベルベット'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#263238' },
        { name: 'アンスリウム・クリスタリナム', scientific: 'Anthurium crystallinum', description: '水晶のような輝きを持つ葉脈が美しい原種アンスリウム。', tags: ['美しい葉', 'レア', 'コレクション'], careLevel: 3, match: { sunlight: ['medium', 'low'], experience: ['expert'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#37474F' },
        { name: 'フィロデンドロン・ピンクプリンセス', scientific: 'Philodendron erubescens \'Pink Princess\'', description: '黒っぽい葉に鮮やかなピンクの斑が入る人気品種。', tags: ['斑入り', 'ピンク', '人気'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#F06292' },
        { name: 'フィロデンドロン・バーキン', scientific: 'Philodendron \'Birkin\'', description: '緑の葉に細い白のストライプが入る美しい品種。', tags: ['斑入り', 'ストライプ', 'おしゃれ'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small', 'medium'] }, imageColor: '#C8E6C9' },
        { name: 'フィロデンドロン・ホワイトナイト', scientific: 'Philodendron \'White Knight\'', description: '茎が紫褐色で、葉に白い斑が入る高貴な印象の品種。', tags: ['斑入り', 'レア', 'コントラスト'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#455A64' },
        { name: 'フィロデンドロン・グロリオーサム', scientific: 'Philodendron gloriosum', description: 'ビロード状の大きなハート型の葉が這うように広がる。', tags: ['大型葉', 'ベルベット', 'リゾート'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#1B5E20' },
        { name: 'アロカシア・アマゾニカ', scientific: 'Alocasia amazonica', description: '濃い緑の葉に太い白の葉脈がくっきりと入る。エッジが波打つ。', tags: ['ユニーク', 'シャープ', '人気'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#004D40' },
        { name: 'アロカシア・ゼブリナ', scientific: 'Alocasia zebrina', description: '茎にシマウマのような模様が入るユニークな品種。', tags: ['ユニーク', 'アニマル柄', 'スタイリッシュ'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium', 'large'] }, imageColor: '#A1887F' },
        { name: 'アロカシア・フライデック', scientific: 'Alocasia micholitziana \'Frydek\'', description: '「グリーンベルベット」。起毛した葉の質感がとても美しい。', tags: ['ベルベット', '美しい葉', '人気'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#2E7D32' },
        { name: 'コロカシア・ブラックマジック', scientific: 'Colocasia esculenta \'Black Magic\'', description: '黒紫色の大きな葉がインパクト抜群。水を好む。', tags: ['黒葉', '大型', '水好き'], careLevel: 2, match: { sunlight: ['high', 'medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#212121' },
        { name: 'スキンダプサス（サテンポトス）', scientific: 'Scindapsus pictus', description: 'サテンのような質感の葉に銀色の斑が入るつる性植物。', tags: ['つる性', '銀葉', 'おしゃれ'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small', 'medium'] }, imageColor: '#CFD8DC' },
        { name: 'ポトス・マーブルクイーン', scientific: 'Epipremnum aureum \'Marble Queen\'', description: '白と緑のマーブル模様が美しいポトスの品種。', tags: ['斑入り', '定番', '明るい'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#E8F5E9' },
        { name: 'ポトス・ライム（ネオン）', scientific: 'Epipremnum aureum \'Neon\'', description: '鮮やかなライムグリーンの葉が部屋を明るくする。', tags: ['明るい', '定番', '初心者向き'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#C6FF00' },
        { name: 'セブブルー（ポトス）', scientific: 'Epipremnum pinnatum \'Cebu Blue\'', description: 'シルバーブルーの葉が特徴。成長すると切れ込みが入る。', tags: ['銀葉', 'レア', 'おしゃれ'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#90A4AE' },
        { name: 'ラフィドフォラ・デカーシバ', scientific: 'Rhaphidophora decursiva', description: '「ドラゴン・テール」。成長すると葉が深く避ける。', tags: ['つる性', '大型', 'ワイルド'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#1B5E20' },
        { name: 'アミドリウム・ミディアム', scientific: 'Amydrium medium', description: '蜘蛛の巣のような穴あき葉が特徴の珍奇植物。', tags: ['ビザールプランツ', 'ユニーク', '銀葉'], careLevel: 3, match: { sunlight: ['medium', 'low'], experience: ['expert'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#B0BEC5' },
        { name: 'マドカズラ（モンステラ・アダンソニー）', scientific: 'Monstera adansonii', description: '葉に窓のような穴がたくさん開く。ハンギングに最適。', tags: ['モンステラ', 'ハンギング', '人気'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#43A047' },
        { name: 'モンステラ・ペルー', scientific: 'Monstera karstenianum', description: 'ボコボコとした葉の質感が爬虫類のよう。', tags: ['ユニーク', '耐陰性', 'ハンギング'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small', 'medium'] }, imageColor: '#33691E' },
        { name: 'ディフェンバキア', scientific: 'Dieffenbachia', description: '大きな葉にゴージャスな斑が入る。樹液に注意。', tags: ['斑入り', '大型葉', '華やか'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium', 'large'] }, imageColor: '#DCEDC8' },
        { name: 'アグラオネマ・シルバークイーン', scientific: 'Aglaonema \'Silver Queen\'', description: '映画「レオン」にも登場した名品。銀色の葉がクール。', tags: ['映画', '銀葉', 'スタイリッシュ'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#CFD8DC' },
        { name: 'ホマロメナ', scientific: 'Homalomena', description: 'ビロードのような光沢のある葉が美しい。湿気を好む。', tags: ['耐陰性', '美しい葉', 'テラリウム'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small', 'medium'] }, imageColor: '#388E3C' },
        { name: 'シールド（アロカシア・クリペイ）', scientific: 'Alocasia clypeolata', description: '「グリーンシールド」。盾のような厚い葉が特徴。', tags: ['ユニーク', '丈夫', '個性的'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#81C784' },
        { name: 'ブラックベルベット（アロカシア）', scientific: 'Alocasia reginula', description: '黒に近い深緑色の葉がビロードのようで高級感がある。', tags: ['黒葉', 'ベルベット', '小型'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#212121' },
        // --- Batch 19: Japanese Classics, Bonsai & Zen Garden (30 items) ---
        { name: '黒松（クロマツ）', scientific: 'Pinus thunbergii', description: '盆栽の王様。力強い幹と鋭い葉が特徴。', tags: ['和風', '盆栽', '王様'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['daily'], size: ['small', 'medium'] }, imageColor: '#1B5E20' },
        { name: '赤松（アカマツ）', scientific: 'Pinus densiflora', description: '幹が赤く、葉がしなやか。女性的な美しさを持つ松。', tags: ['和風', '盆栽', '優美'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['daily'], size: ['small', 'medium'] }, imageColor: '#D7CCC8' },
        { name: '真柏（シンパク）', scientific: 'Juniperus chinensis var. sargentii', description: '捻転する幹（舎利）が美しい、盆栽の人気樹種。', tags: ['和風', '盆栽', '芸術'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#FFFFFF' },
        { name: 'ケヤキ（盆栽）', scientific: 'Zelkova serrata', description: '箒（ほうき）を逆さにしたような樹形が美しい。四季を感じる。', tags: ['和風', '盆栽', '紅葉'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#FFCC80' },
        { name: 'イチョウ（盆栽）', scientific: 'Ginkgo biloba', description: '「生きた化石」。秋の黄金色の紅葉は圧巻。', tags: ['和風', '盆栽', '紅葉'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#FDD835' },
        { name: '藤（フジ・盆栽）', scientific: 'Wisteria floribunda', description: '春に垂れ下がる紫色の花房が大変美しい。', tags: ['花が咲く', '和風', '盆栽'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#B39DDB' },
        { name: '梅（ウメ・盆栽）', scientific: 'Prunus mume', description: '早春に香りの良い花を咲かせる。日本の春の象徴。', tags: ['花が咲く', '和風', '香り'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#F48FB1' },
        { name: '桜（旭山桜）', scientific: 'Prunus serrulata \'Asahiyama\'', description: '鉢植えでもたくさんの花を咲かせる人気の桜。', tags: ['花が咲く', '和風', '春'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#F8BBD0' },
        { name: '椿（ツバキ）', scientific: 'Camellia japonica', description: '冬から春にかけて美しい花を咲かせる常緑樹。', tags: ['花が咲く', '和風', '茶花'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#D50000' },
        { name: 'サツキ', scientific: 'Rhododendron indicum', description: '初夏に鮮やかな花を一斉に咲かせる。', tags: ['花が咲く', '和風', '丈夫'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#E91E63' },
        { name: '南天（ナンテン）', scientific: 'Nandina domestica', description: '「難を転ずる」縁起木。赤い実が美しい。', tags: ['縁起物', '和風', '赤い実'], careLevel: 1, match: { sunlight: ['medium', 'high', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#C62828' },
        { name: 'リュウノヒゲ', scientific: 'Ophiopogon japonicus', description: 'グランドカバーの定番。非常に丈夫で日陰にも強い。', tags: ['グランドカバー', '丈夫', '和風'], careLevel: 1, match: { sunlight: ['medium', 'low', 'high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#1B5E20' },
        { name: 'トクサ', scientific: 'Equisetum hyemale', description: '直立する竹のような茎がモダンで和風な雰囲気。', tags: ['和風', 'モダン', '涼しげ'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#2E7D32' },
        { name: 'ソテツ（蘇鉄）', scientific: 'Cycas revoluta', description: '南国ムードと和の雰囲気を併せ持つ古代植物。', tags: ['南国', '和風', '丈夫'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium', 'large'] }, imageColor: '#33691E' },
        { name: 'ヤツデ', scientific: 'Fatsia japonica', description: '「天狗の団扇」。魔除けの木とされる。大きな葉が特徴。', tags: ['縁起物', '和風', '耐陰性'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#1B5E20' },
        { name: 'アオキ', scientific: 'Aucuba japonica', description: '日陰に非常に強く、赤い実をつける。庭の彩りに。', tags: ['耐陰性', '和風', '赤い実'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#4CAF50' },
        { name: '万両（マンリョウ）', scientific: 'Ardisia crenata', description: '正月の縁起物。下向きに赤い実をつける。', tags: ['縁起物', '和風', '赤い実'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#D32F2F' },
        { name: '万年青（オモト）', scientific: 'Rohdea japonica', description: '長寿や引越しの縁起物として古くから親しまれる。', tags: ['縁起物', '和風', '古典園芸'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#2E7D32' },
        { name: 'ハラン', scientific: 'Aspidistra elatior', description: '非常に強健で、寿司の仕切りにも使われる大きな葉。', tags: ['丈夫', '和風', '耐陰性'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#1B5E20' },
        { name: 'ツワブキ', scientific: 'Farfugium japonicum', description: '艶のある丸い葉と黄色い花が特徴。日陰の庭を明るくする。', tags: ['和風', '耐陰性', '黄色い花'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#F9A825' },
        { name: 'ギボウシ（ホスタ）', scientific: 'Hosta', description: '多彩な葉色や大きさがあるシェードガーデンの女王。', tags: ['耐陰性', 'カラーリーフ', '人気'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#C8E6C9' },
        { name: 'ヒューケラ（ツボサンゴ）', scientific: 'Heuchera', description: '葉色のバリエーションが豊富で、寄せ植えに大人気。', tags: ['カラーリーフ', '寄せ植え', '耐寒性'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#AD1457' },
        { name: 'アジュガ', scientific: 'Ajugareptans', description: '青紫色の花を咲かせ、地面を覆うように広がる。', tags: ['グランドカバー', '花が咲く', '丈夫'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#536DFE' },
        { name: 'ビンカ・マジョール（ツルニチニチソウ）', scientific: 'Vinca major', description: '春から初夏に青紫色の花を咲かせるつる性植物。', tags: ['つる性', '花が咲く', '丈夫'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#7986CB' },
        { name: 'アイビー（ヘデラ）', scientific: 'Hedera helix', description: 'ハート型や星型の葉が可愛い。非常に丈夫で育てやすい。', tags: ['つる性', '丈夫', '定番'], careLevel: 1, match: { sunlight: ['medium', 'low', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#2E7D32' },
        { name: 'フィカス・プミラ', scientific: 'Ficus pumila', description: '小さな丸い葉が密生するつる性植物。壁面緑化にも。', tags: ['つる性', 'かわいい', '壁面緑化'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#66BB6A' },
        { name: 'ベビーティアーズ', scientific: 'Soleirolia soleirolii', description: '世界最小クラスの葉が苔のように広がる。', tags: ['かわいい', '繊細', 'グランドカバー'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#C6FF00' },
        { name: 'リシマキア・ヌンムラリア（オーレア）', scientific: 'Lysimachia nummularia \'Aurea\'', description: '黄金色の丸い葉が美しい。水辺やグランドカバーに。', tags: ['黄金葉', 'グランドカバー', '水好き'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#FFEB3B' },
        { name: 'ディコンドラ・シルバーフォールズ', scientific: 'Dichondra argentea \'Silver Falls\'', description: '銀色のハート型の葉が滝のように垂れ下がる。', tags: ['銀葉', 'ハンギング', 'おしゃれ'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#CFD8DC' },
        { name: 'ミモザ（ギンヨウアカシア）', scientific: 'Acacia baileyana', description: '春に咲く黄色いポンポンのような花が大人気。', tags: ['花が咲く', '銀葉', 'シンボルツリー'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#FFEB3B' },
        // --- Batch 20: Fruit Trees & Balcony Vegetables (30 items) ---
        { name: 'レモン（リスボン）', scientific: 'Citrus limon', description: '家庭で育てやすい柑橘。爽やかな香りと実りを楽しめる。', tags: ['実がなる', '香り', '人気'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium', 'large'] }, imageColor: '#FFEB3B' },
        { name: 'ブルーベリー', scientific: 'Vaccinium', description: '春の白い花、夏の実、秋の紅葉と四季を楽しめる。', tags: ['実がなる', '紅葉', 'ベランダ菜園'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#3F51B5' },
        { name: 'イチゴ（四季成り）', scientific: 'Fragaria × ananassa', description: 'プランターで手軽に育てられる。可愛い花と赤い実が魅力。', tags: ['実がなる', 'かわいい', 'ベランダ菜園'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#E91E63' },
        { name: '四季柑（シキカン）', scientific: 'Citrus madurensis', description: '小型の柑橘で、一年中実をつける縁起物。', tags: ['実がなる', '縁起物', '鉢植え'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small', 'medium'] }, imageColor: '#FF9800' },
        { name: '金柑（キンカン）', scientific: 'Citrus japonica', description: '皮ごと食べられる小さな黄色い実がたくさんなる。', tags: ['実がなる', '縁起物', '和風'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#FFCC80' },
        { name: 'ジューンベリー', scientific: 'Amelanchier canadensis', description: '春の花、初夏の実、秋の紅葉。シンボルツリーに人気。', tags: ['実がなる', '紅葉', 'シンボルツリー'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#C62828' },
        { name: '姫リンゴ', scientific: 'Malus x cerasifera', description: '観賞用の小さなリンゴ。春の白い花も美しい。', tags: ['実がなる', '花が咲く', 'かわいい'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#D32F2F' },
        { name: 'クランベリー（ツルコケモモ）', scientific: 'Vaccinium macrocarpon', description: '這うように広がり、赤い宝石のような実をつける。', tags: ['実がなる', 'かわいい', 'グランドカバー'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#C62828' },
        { name: 'ラズベリー', scientific: 'Rubus idaeus', description: '甘酸っぱい実が初心者でも簡単に収穫できる。', tags: ['実がなる', 'ベランダ菜園', '丈夫'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#D81B60' },
        { name: 'ブラックベリー', scientific: 'Rubus fruticosus', description: '非常に丈夫で豊産性。ジャムなどに加工できる。', tags: ['実がなる', '丈夫', 'つる性'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#212121' },
        { name: 'イチジク（ドーフィン）', scientific: 'Ficus carica', description: '鉢植えでも実りやすい。夏秋兼用の代表品種。', tags: ['実がなる', 'ベランダ菜園', '健康的'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['daily'], size: ['medium', 'large'] }, imageColor: '#795548' },
        { name: 'ブドウ（デラウェア）', scientific: 'Vitis labrusca', description: '定番の小粒ブドウ。日除け（グリーンカーテン）にも。', tags: ['実がなる', 'つる性', '日除け'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#5E35B1' },
        { name: 'パッションフルーツ', scientific: 'Passiflora edulis', description: 'トロピカルな香り。時計草の仲間で花もユニーク。', tags: ['実がなる', 'つる性', '日除け'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#AA00FF' },
        { name: 'マンゴー（アーウィン）', scientific: 'Mangifera indica', description: '「アップルマンゴー」。冬は室内で管理が必要。', tags: ['実がなる', '南国', '高級'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#FF6F00' },
        { name: 'アボカド', scientific: 'Persea americana', description: '種から育てられる観葉植物としても人気。結実は難しい。', tags: ['観葉植物', '実がなる', '大型'], careLevel: 1, match: { sunlight: ['high'], 'medium': ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#4CAF50' },
        { name: 'バナナ（ドワーフモンキー）', scientific: 'Musa', description: '背が高くならない矮性バナナ。南国気分を味わえる。', tags: ['実がなる', '南国', '大型葉'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#FFEB3B' },
        { name: 'パイナップル', scientific: 'Ananas comosus', description: '食べた後の冠芽（クラウン）から育てられる。', tags: ['実がなる', '南国', 'ユニーク'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#FBC02D' },
        { name: 'ミニトマト（レジナ）', scientific: 'Solanum lycopersicum', description: '観賞用としても楽しめる矮性ミニトマト。支柱不要。', tags: ['ベランダ菜園', '実がなる', 'かわいい'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#F44336' },
        { name: '唐辛子（観賞用）', scientific: 'Capsicum annuum', description: 'カラフルな実が上向きにつく。食用には向かない品種も。', tags: ['実がなる', 'カラフル', '魔除け'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#D50000' },
        { name: 'ナス（千両二号）', scientific: 'Solanum melongena', description: '夏野菜の定番。紫色の花も実も美しい。', tags: ['ベランダ菜園', '実がなる', '夏'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#4A148C' },
        { name: 'サヤインゲン', scientific: 'Phaseolus vulgaris', description: 'つるありとつるなしがある。収穫までの期間が短い。', tags: ['ベランダ菜園', '簡単', '実がなる'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#66BB6A' },
        { name: 'キュウリ', scientific: 'Cucumis sativus', description: '成長が早い。グリーンカーテンにも最適。', tags: ['ベランダ菜園', 'つる性', '日除け'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#43A047' },
        { name: 'ゴーヤ（ニガウリ）', scientific: 'Momordica charantia', description: '夏の節電対策（グリーンカーテン）の定番。', tags: ['ベランダ菜園', '日除け', '健康'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#2E7D32' },
        { name: '大葉（青シソ）', scientific: 'Perilla frutescens', description: '薬味に便利。こぼれ種で増えるほど丈夫。', tags: ['ベランダ菜園', '料理', 'ハーブ'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#66BB6A' },
        { name: 'パセリ', scientific: 'Petroselinum crispum', description: '栄養豊富で彩りに便利。キッチンプランツに。', tags: ['ベランダ菜園', '料理', 'ハーブ'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#4CAF50' },
        { name: 'イタリアンパセリ', scientific: 'Petroselinum neapolitanum', description: '平らな葉で香りが強い。洋風料理に。', tags: ['ベランダ菜園', '料理', 'ハーブ'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#43A047' },
        { name: 'ルッコラ（ロケット）', scientific: 'Eruca vesicaria', description: 'ゴマのような香りとピリッとした辛味。サラダに。', tags: ['ベランダ菜園', '料理', 'ハーブ'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#81C784' },
        { name: '小ネギ（万能ネギ）', scientific: 'Allium fistulosum', description: '根元を残して切れば何度でも収穫できる。', tags: ['ベランダ菜園', '料理', 'リボベジ'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#4CAF50' },
        { name: 'ミョウガ', scientific: 'Zingiber mioga', description: '日陰で育つ貴重な野菜。薬味として重宝する。', tags: ['ベランダ菜園', '耐陰性', '和風'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#D7CCC8' },
        { name: '山椒（サンショウ）', scientific: 'Zanthoxylum piperitum', description: '葉（木の芽）も実も香り高い。アゲハ蝶が来ることも。', tags: ['ベランダ菜園', '和風', '香り'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#689F38' },
        // --- Batch 21: Groundcovers, Aquatic, & Supporting Roles (30 items) ---
        { name: '苔（ホソバオキナゴケ）', scientific: 'Leucobryum juniperoideum', description: '「山苔」。盆栽やテラリウムの定番。乾燥すると白っぽくなる。', tags: ['苔', 'テラリウム', '和風'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#D7CCC8' },
        { name: 'スナゴケ', scientific: 'Racomitrium canescens', description: '日当たりの良い場所を好む珍しい苔。乾燥に強い。', tags: ['苔', '日光好き', '和風'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#AFB42B' },
        { name: 'ハイゴケ', scientific: 'Hypnum plumaeforme', description: '這うように広がる。比較的丈夫で育てやすい苔。', tags: ['苔', 'グランドカバー', '丈夫'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#689F38' },
        { name: 'カモジゴケ', scientific: 'Dicranum scoparium', description: '動物の毛のようなフサフサした質感が人気。', tags: ['苔', 'テラリウム', 'もふもふ'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#33691E' },
        { name: 'マリモ（西洋マリモ）', scientific: 'Aegagropila linnaei', description: '水中でコロコロ転がる姿が癒やされる。暑さに弱い。', tags: ['水生植物', 'かわいい', '丸い'], careLevel: 1, match: { sunlight: ['low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#2E7D32' },
        { name: 'ウィローモス', scientific: 'Fontinalis antipyretica', description: 'アクアリウムの定番。流木や石に活着させて楽しむ。', tags: ['水草', 'アクアリウム', '丈夫'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#558B2F' },
        { name: 'アヌビアス・ナナ', scientific: 'Anubias barteri var. nana', description: '非常に丈夫な水草。CO2添加なしでも育つ。', tags: ['水草', 'アクアリウム', '耐陰性'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#1B5E20' },
        { name: 'ミクロソリウム', scientific: 'Microsorum pteropus', description: 'シダの仲間。丈夫で独特の葉の形が人気。', tags: ['水草', 'シダ', 'アクアリウム'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#43A047' },
        { name: 'ホテイアオイ', scientific: 'Eichhornia crassipes', description: '夏に青紫色の美しい花を咲かせる浮草。メダカの産卵床に。', tags: ['水生植物', '浮草', '花が咲く'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small', 'medium'] }, imageColor: '#7986CB' },
        { name: '睡蓮（スイレン・温帯性）', scientific: 'Nymphaea', description: '水面に浮かぶ花が幻想的。ビオトープの主役。', tags: ['水生植物', '花が咲く', 'ビオトープ'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#F48FB1' },
        { name: 'ハス（碗蓮）', scientific: 'Nelumbo nucifera', description: '小型のハス。立ち上がる葉と神聖な花が魅力。', tags: ['水生植物', '花が咲く', '和風'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#F06292' },
        { name: 'トクサ（水辺）', scientific: 'Equisetum hyemale', description: '水辺でも陸上でも育つ。和風モダンなアレンジに。', tags: ['水生植物', '和風', 'モダン'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#2E7D32' },
        { name: 'シラサギカヤツリ', scientific: 'Rhynchospora colorata', description: '白鷺が飛んでいるような形の花（苞）が美しい。', tags: ['水生植物', '花が咲く', '涼しげ'], careLevel: 2, match: { sunlight: ['high', 'medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#FFFFFF' },
        { name: 'ウォータークローバー（ムチカ）', scientific: 'Marsilea mutica', description: '四つ葉のクローバーのような葉が水面に浮かぶ。', tags: ['水生植物', 'かわいい', 'ビオトープ'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#4CAF50' },
        { name: 'ナガバオモダカ', scientific: 'Sagittaria graminea', description: '白い可憐な花を咲かせる。非常に丈夫で増えやすい。', tags: ['水生植物', '花が咲く', '丈夫'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#FFFFFF' },
        { name: 'ポトス（水耕栽培）', scientific: 'Epipremnum aureum', description: '土を使わずに水だけで育てるスタイル。清潔で虫が湧きにくい。', tags: ['水耕栽培', '清潔', '初心者向き'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small', 'medium'] }, imageColor: '#C6FF00' },
        { name: 'ヒヤシンス（水栽培）', scientific: 'Hyacinthus orientalis', description: '根の生長と香りの良い花を楽しめる。春の訪れを感じる。', tags: ['水耕栽培', '球根', '香り'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#7B1FA2' },
        { name: 'クロッカス（水栽培）', scientific: 'Crocus', description: '小さくて可愛い花。水栽培初心者にもおすすめ。', tags: ['水耕栽培', '球根', 'かわいい'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#FFEB3B' },
        { name: 'アボカド（水栽培）', scientific: 'Persea americana', description: '食べた後の種を水につけて発芽させる。観葉植物になる。', tags: ['水耕栽培', 'リボベジ', '実験'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#4CAF50' },
        { name: 'サボテン（水栽培）', scientific: 'Cactaceae', description: '土を落として水で育てるスタイル。根の様子が美しい。', tags: ['水耕栽培', 'サボテン', 'モダン'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#80CBC4' },
        { name: 'エアプランツ（水やり：ソーキング）', scientific: 'Tillandsia', description: '週に一度水に漬け込む「ソーキング」で育てる。', tags: ['エアプランツ', '水浴び', 'ユニーク'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#B0BEC5' },
        { name: 'ネオレゲリア', scientific: 'Neoregelia', description: '筒状の葉の間に水を溜めて育てるタンクブロメリア。', tags: ['タンクブロメリア', 'ユニーク', '水溜め'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#D32F2F' },
        { name: 'ビルベルギア', scientific: 'Billbergia', description: '細長い筒状の姿がスタイリッシュなタンクブロメリア。', tags: ['タンクブロメリア', 'スタイリッシュ', '模様'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#607D8B' },
        { name: 'フリーセア', scientific: 'Vriesea', description: 'トラ柄のような葉の模様が特徴。インコアナダスなど。', tags: ['タンクブロメリア', '模様', 'エキゾチック'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#FF9800' },
        { name: 'コケサンゴ（ネルテラ）', scientific: 'Nertera granadensis', description: 'オレンジ色の小さな実がビーズのように密集する。', tags: ['グランドカバー', 'かわいい', '実がなる'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#FF5722' },
        { name: 'ソレイロリア（天使の涙）', scientific: 'Soleirolia soleirolii', description: 'ベビーティアーズの別名。繊細なグリーンが美しい。', tags: ['グランドカバー', '繊細', '癒やし'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#C6FF00' },
        { name: 'ヒメイワダレソウ（リピア）', scientific: 'Phyla canescens', description: '踏圧に強く、小さな花を一面に咲かせる。', tags: ['グランドカバー', '丈夫', '花が咲く'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#F8BBD0' },
        { name: 'クラピア', scientific: 'Lippia nodiflora', description: 'ヒメイワダレソウの改良品種。芝生の代わりに。', tags: ['グランドカバー', '芝生代わり', '丈夫'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#F0F4C3' },
        { name: 'セダム（万年草）', scientific: 'Sedum', description: '種類が豊富で乾燥に強い。屋上緑化にも使われる。', tags: ['グランドカバー', '多肉植物', '丈夫'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small', 'medium'] }, imageColor: '#AED581' },
        { name: 'エリゲロン（源平小菊）', scientific: 'Erigeron karvinskianus', description: '白からピンクへ色が変わる小花が咲き続ける。', tags: ['グランドカバー', '花が咲く', 'ナチュラル'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#FCE4EC' },
        // --- Batch 22: Rare Imports & Collector's Items (30 items) ---
        { name: 'エンセファラルトス・ホリダス', scientific: 'Encephalartos horridus', description: '「蘇鉄の王様」。青白い葉と鋭いトゲが圧倒的な存在感。', tags: ['ソテツ', 'レア', '王様'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#B0BEC5' },
        { name: 'オペルクリカリア・パキプス', scientific: 'Operculicarya pachypus', description: '塊根植物の最高峰。ゴツゴツした幹と小さな葉が魅力。', tags: ['塊根植物', '王様', 'マニア向け'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#5D4037' },
        { name: 'パキポディウム・グラキリス', scientific: 'Pachypodiumrosulatum var. gracilius', description: '丸く太った塊根が愛らしい、大人気の塊根植物。', tags: ['塊根植物', '人気', 'かわいい'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#FDD835' },
        { name: 'アガベ・ユタエンシス・エボリスピナ', scientific: 'Agave utahensis var. eborispina', description: '長くうねる白いトゲが芸術的。非常に人気が高い。', tags: ['アガベ', 'アート', 'レア'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#ECEFF1' },
        { name: 'アガベ・チタノタ・ブラックアンドブルー', scientific: 'Agave titanota \'Black and Blue\'', description: '青白い葉と黒いトゲのコントラストがクール。', tags: ['アガベ', 'カッコイイ', '人気'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#607D8B' },
        { name: 'アガベ・笹の雪（ササノユキ）', scientific: 'Agave victoriae-reginae', description: '幾何学的な白いペンキ模様（ペンキ）が美しい芸術品。', tags: ['アガベ', '美しい', '幾何学的'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#2E7D32' },
        { name: 'ハオルチア・万象（バンゾウ）', scientific: 'Haworthia maughanii', description: '葉の先端（窓）の模様が千差万別で、高値で取引される。', tags: ['ハオルチア', 'マニア向け', 'ユニーク'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#455A64' },
        { name: 'ハオルチア・玉扇（ギョクセン）', scientific: 'Haworthia truncata', description: '扇のように葉が並ぶ。窓の模様を楽しむ。', tags: ['ハオルチア', 'マニア向け', 'ユニーク'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#37474F' },
        { name: 'コミフォラ・モンストローサ', scientific: 'Commiphora monstrosa', description: 'ジグザグに伸びる枝が特徴的な灌木系塊根植物。', tags: ['塊根植物', '灌木', 'ユニーク'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#8D6E63' },
        { name: 'ボスウェリア・ネグレクタ', scientific: 'Boswellia neglecta', description: '乳香（フランキンセンス）の原料となる木。神聖な香り。', tags: ['塊根植物', '香木', '神聖'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#A1887F' },
        { name: 'モンステラ・デリシオーサ・タイコンステレーション', scientific: 'Monstera deliciosa \'Thai Constellation\'', description: '星空のような散り斑が美しい、安定した斑入り品種。', tags: ['モンステラ', '斑入り', '美しい'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#FFF9C4' },
        { name: 'モンステラ・ボルシギアナ・アルボ（ホワイトタイガー）', scientific: 'Monstera borsigiana \'Albo Variegata\'', description: '白と緑のコントラストが鮮烈な、最高級の斑入りモンステラ。', tags: ['モンステラ', '斑入り', '最高級'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#FFFFFF' },
        { name: 'フィロデンドロン・ジョーピー', scientific: 'Philodendron joepii', description: '葉の形が極端にくびれた、非常に珍しいフィロデンドロン。', tags: ['アロイド', 'レア', 'ユニーク'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#4CAF50' },
        { name: 'アンスリウム・ワロクエアナム', scientific: 'Anthurium warocqueanum', description: '「アンスリウムの女王」。細長いベルベット状の葉が垂れ下がる。', tags: ['アロイド', '女王', 'ベルベット'], careLevel: 3, match: { sunlight: ['medium', 'low'], experience: ['expert'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#1B5E20' },
        { name: 'アンスリウム・ベイチー', scientific: 'Anthurium veitchii', description: '「アンスリウムの王様」。葉の横ひだ（リブ）が細かく美しい。', tags: ['アロイド', '王様', 'ユニーク'], careLevel: 3, match: { sunlight: ['medium', 'low'], experience: ['expert'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#2E7D32' },
        { name: 'ビカクシダ・リドレイ', scientific: 'Platycerium ridleyi', description: '鹿の角のような胞子葉と、キャベツのような貯水葉が特徴。', tags: ['ビカクシダ', '人気', 'ハンギング'], careLevel: 3, match: { sunlight: ['high', 'medium'], experience: ['expert'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#81C784' },
        { name: 'ビカクシダ・マダガスカリエンセ', scientific: 'Platycerium madagascariense', description: '脳みそのような凹凸のある貯水葉が独特な人気種。', tags: ['ビカクシダ', 'ユニーク', 'マニア向け'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['daily'], size: ['small', 'medium'] }, imageColor: '#33691E' },
        { name: 'ユーフォルビア・オベサ', scientific: 'Euphorbia obesa', description: 'チェック柄のボールのような姿。「植物界のバスケットボール」。', tags: ['多肉植物', 'かわいい', 'ユニーク'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#81C784' },
        { name: 'ユーフォルビア・ホワイトゴースト', scientific: 'Euphorbia lactea \'White Ghost\'', description: '全身が白く、幽霊のような不思議な美しさを持つ。', tags: ['多肉植物', '白い植物', 'インテリア'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium', 'large'] }, imageColor: '#F5F5F5' },
        { name: 'ディッキア', scientific: 'Dyckia', description: '鋭いトゲと金属的な光沢を持つ葉がカッコイイ。', tags: ['ブロメリア', 'トゲ', 'クール'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small', 'medium'] }, imageColor: '#757575' },
        { name: 'ダドレア・仙女盃（ブリトニー）', scientific: 'Dudleya brittonii', description: '世界で最も白い植物の一つ。真っ白な粉をまとう。', tags: ['多肉植物', '白い植物', '美しい'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#FFFFFF' },
        { name: 'ブーファン・ディスティチャ', scientific: 'Boophone disticha', description: '扇状に広がる波打つ葉と、巨大な球根が特徴。', tags: ['球根', 'ユニーク', '扇形'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#9E9E9E' },
        { name: '亀甲竜（キッコウリュウ・アフリカ）', scientific: 'Dioscorea elephantipes', description: '亀の甲羅のようなゴツゴツした塊根からつるを伸ばす。', tags: ['塊根植物', 'ユニーク', 'ハート'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#795548' },
        { name: 'ステファニア・エレクタ', scientific: 'Stephania erecta', description: 'ジャガイモのような塊根から、丸い葉をふわっと展開する。', tags: ['塊根植物', 'かわいい', '癒やし'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#8D6E63' },
        { name: 'アルブカ・スピラリス（フリズルシズル）', scientific: 'Albuca spiralis "Frizzle Sizzle"', description: 'くるくるとカールした葉が特徴的な球根植物。', tags: ['球根', 'くるくる', 'ユニーク'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#AED581' },
        { name: 'セロペギア・ボッセリ', scientific: 'Ceropegia bosseri', description: '黒い骨のような節のある茎が這う。奇怪な見た目。', tags: ['ビザールプランツ', '黒い植物', 'ユニーク'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#212121' },
        { name: 'プセウドリトス・ミギウルティヌス', scientific: 'Pseudolithos migiurtinus', description: '「石ころ」のような見た目。異星の生物のよう。', tags: ['ビザールプランツ', 'キモカワ', 'レア'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#81C784' },
        { name: 'コノフィツム・ブルゲリ', scientific: 'Conophytum burgeri', description: '「砂漠の宝石」。透明感のある赤いガラス玉のような姿。', tags: ['多肉植物', '宝石', '透明感'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#EF5350' },
        { name: 'リトープス（生ける宝石）', scientific: 'Lithops', description: '石に擬態した植物。脱皮をして大きくなる。', tags: ['多肉植物', '擬態', 'かわいい'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#BCAAA4' },
        { name: 'アデニウム・ソコトラナム', scientific: 'Adenium socotranum', description: '「砂漠のバラ」。ソコトラ島固有の希少種。', tags: ['塊根植物', 'レア', '花が咲く'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#D7CCC8' },
        // --- Batch 23: Large Indoor Trees & Palms (30 items) ---
        { name: 'フィカス・ベンガレンシス', scientific: 'Ficus benghalensis', description: '白い幹とくっきりした葉脈が美しい。お祝いの定番。', tags: ['大型', 'ゴムの木', '定番'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#C8E6C9' },
        { name: 'フィカス・アルテシマ', scientific: 'Ficus altissima', description: '明るいライムグリーンの斑入り葉が部屋を明るくする。', tags: ['大型', 'ゴムの木', '明るい'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#DCE775' },
        { name: 'フランスゴムの木', scientific: 'Ficus rubiginosa', description: '小ぶりな葉と曲がった幹がおしゃれなインテリアプランツ。', tags: ['中型', 'ゴムの木', 'おしゃれ'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium', 'large'] }, imageColor: '#66BB6A' },
        { name: 'カシワバゴムノキ（バンビーノ）', scientific: 'Ficus lyrata', description: '波打つ大きな葉が特徴。存在感抜群。バンビーノは小型種。', tags: ['大型', 'ゴムの木', '個性的'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#388E3C' },
        { name: 'ゴムの木（ロブスター）', scientific: 'Ficus elastica', description: '昔ながらのゴムの木。非常に丈夫でツヤのある黒緑の葉。', tags: ['大型', 'ゴムの木', '丈夫'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#1B5E20' },
        { name: 'フィカス・バーガンディ', scientific: 'Ficus elastica \'Burgundy\'', description: '大人っぽい赤黒い葉がシックな空間に合う。', tags: ['大型', 'ゴムの木', '黒葉'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#3E2723' },
        { name: 'フィカス・ティネケ', scientific: 'Ficus elastica \'Tineke\'', description: 'クリーム色の斑が入る華やかなゴムの木。', tags: ['大型', 'ゴムの木', '斑入り'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#F0F4C3' },
        { name: 'ドラセナ・マッサンゲアナ（幸福の木）', scientific: 'Dracaena fragrans', description: '「幸福の木」として有名。太い幹と柔らかな葉。', tags: ['大型', '縁起物', '定番'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#A5D6A7' },
        { name: 'ドラセナ・コンシンネ', scientific: 'Dracaena marginata', description: 'スタイリッシュな細い葉。赤やトリコロールの品種も。', tags: ['中型', 'スタイリッシュ', 'モダン'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium', 'large'] }, imageColor: '#C62828' },
        { name: 'ドラセナ・デレメンシス（ワーネッキー）', scientific: 'Dracaena deremensis', description: 'ストライプ柄の葉が涼しげ。耐陰性が高い。', tags: ['中型', 'ストライプ', '耐陰性'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#E0F2F1' },
        { name: 'ユッカ（青年の木）', scientific: 'Yucca elephantipes', description: '太い幹と剣のような葉。力強く、成長・発展の象徴。', tags: ['大型', '丈夫', '縁起物'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#2E7D32' },
        { name: 'アレカヤシ', scientific: 'Dypsis lutescens', description: '南国リゾートの雰囲気満点。蒸散作用が高く天然の加湿器。', tags: ['大型', 'ヤシ', '南国'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#81C784' },
        { name: 'フェニックス・ロベレニー', scientific: 'Phoenix roebelenii', description: '八丈島などで生産される親しみやすいヤシ。', tags: ['大型', 'ヤシ', '南国'], careLevel: 2, match: { sunlight: ['high', 'medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#33691E' },
        { name: 'ケンチャヤシ', scientific: 'Howea forsteriana', description: '葉が優雅に垂れる。耐陰性・耐寒性があり育てやすい。', tags: ['大型', 'ヤシ', '丈夫'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#1B5E20' },
        { name: 'テーブルヤシ', scientific: 'Chamaedorea elegans', description: '卓上サイズの小型ヤシ。日陰に非常に強い。', tags: ['小型', 'ヤシ', '耐陰性'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#4CAF50' },
        { name: 'シュロチク（棕櫚竹）', scientific: 'Rhapis excelsa', description: '和洋どちらにも合う落ち着いた雰囲気。寒さに強い。', tags: ['中型', '和風', '耐寒性'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#2E7D32' },
        { name: 'セフレジ（チャメドレア）', scientific: 'Chamaedorea seifrizii', description: '竹のような茎立ちが涼しげ。空気清浄能力が高い。', tags: ['中型', '空気清浄', '涼しげ'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#66BB6A' },
        { name: 'トックリラン（ポニーテール）', scientific: 'Beaucarnea recurvata', description: '株元が徳利のように膨らむ。葉はポニーテールのように垂れる。', tags: ['ユニーク', '乾燥に強い', 'かわいい'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#8D6E63' },
        { name: 'ブラキキトン（ボトルツリー）', scientific: 'Brachychiton rupestris', description: 'ワインボトルのような幹が特徴。涼しげな細い葉。', tags: ['ユニーク', 'おしゃれ', '塊根'], careLevel: 2, match: { sunlight: ['high', 'medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#A1887F' },
        { name: 'シェフレラ（カポック）', scientific: 'Schefflera arboricola', description: '手のひらのような葉。非常に丈夫でどんな環境でも育つ。', tags: ['中型', '丈夫', '定番'], careLevel: 1, match: { sunlight: ['medium', 'low', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium', 'large'] }, imageColor: '#43A047' },
        { name: 'シェフレラ・アンガスティフォリア', scientific: 'Schefflera angustifolia', description: '細長い葉がスタイリッシュ。繊細な印象。', tags: ['大型', 'スタイリッシュ', 'おしゃれ'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#66BB6A' },
        { name: 'ポリシャス', scientific: 'Polyscias', description: '森のような繊細な葉が魅力。環境の変化に敏感。', tags: ['繊細', 'おしゃれ', 'インテリア'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#2E7D32' },
        { name: 'エバーフレッシュ', scientific: 'Pithecellobium confertum', description: '昼は葉を広げ、夜は閉じる（就眠運動）。', tags: ['大型', '人気', '動きがある'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#81C784' },
        { name: 'ネムノキ', scientific: 'Albizia julibrissin', description: 'エバーフレッシュの近縁。ピンクのふわふわした花が咲く。', tags: ['大型', '花が咲く', '和風'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#F48FB1' },
        { name: 'オリーブの木', scientific: 'Olea europaea', description: '平和の象徴。銀色の葉が美しい。日当たり必須。', tags: ['大型', '銀葉', 'シンボルツリー'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#90A4AE' },
        { name: 'シマトネリコ', scientific: 'Fraxinus griffithii', description: '小さく艶のある葉が涼しげ。シンボルツリーとして大人気。', tags: ['大型', '人気', '涼しげ'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#4CAF50' },
        { name: 'ユーカリ・ポポラス', scientific: 'Eucalyptus polyanthemos', description: '丸いハート型の葉が可愛い。ドライフラワーにも。', tags: ['大型', '銀葉', 'かわいい'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#B0BEC5' },
        { name: 'ユーカリ・グニー', scientific: 'Eucalyptus gunnii', description: '小さな銀色の丸い葉。清涼感のある香り。', tags: ['大型', '銀葉', '香り'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#CFD8DC' },
        { name: 'ミモザ（アカシア）', scientific: 'Acacia', description: '春の黄色い花が美しい。成長が非常に早い。', tags: ['大型', '花が咲く', '春'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#FFEB3B' },
        { name: ' コーヒーの木', scientific: 'Coffea arabica', description: '艶のある葉。大きくなると白い花と赤い実をつける。', tags: ['中型', '実がなる', 'かわいい'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#388E3C' },
        // --- Batch 24: Patterned Leaves (Calathea, Alocasia, Maranta) (30 items) ---
        { name: 'カラテア・マコヤナ', scientific: 'Calathea makoyana', description: '「孔雀の植物」。葉の模様が孔雀の羽のように美しい。', tags: ['カラテア', '模様', '耐陰性'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#A5D6A7' },
        { name: 'カラテア・オルビフォリア', scientific: 'Calathea orbifolia', description: '大きな丸い葉に銀色のストライプが入る人気種。', tags: ['カラテア', '大型葉', 'ストライプ'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#81C784' },
        { name: 'カラテア・ランシフォリア（インシグニス）', scientific: 'Calathea lancifolia', description: '細長い葉に独特の斑点模様。葉裏は赤紫。', tags: ['カラテア', 'ユニーク', 'エキゾチック'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#C8E6C9' },
        { name: 'カラテア・ドッティ', scientific: 'Calathea roseopicta \'Dottie\'', description: '黒に近い紫色の葉にピンクのリング模様が映える。', tags: ['カラテア', '黒葉', 'ピンク'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#4A148C' },
        { name: 'カラテア・ホワイトフュージョン', scientific: 'Calathea fusion white', description: '絵画のような白斑が圧倒的に美しいが、管理は難しい。', tags: ['カラテア', '斑入り', '超美麗'], careLevel: 3, match: { sunlight: ['medium', 'low'], experience: ['expert'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#E8F5E9' },
        { name: 'カラテア・メダリオン', scientific: 'Calathea roseopicta \'Medallion\'', description: '精巧なメダルのような模様。葉裏は鮮やかな赤紫。', tags: ['カラテア', '模様', '定番'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#1B5E20' },
        { name: 'カラテア・トリオスター（ストロマンテ）', scientific: 'Stromanthe sanguinea \'Triostar\'', description: '白、緑、赤ピンクのトリコロールカラーが華やか。', tags: ['カラテア周辺', 'カラフル', '丈夫'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#F48FB1' },
        { name: 'マランタ・レウコネウラ（ケルコビアナ）', scientific: 'Maranta leuconeura var. kerchoveana', description: '葉に黒い斑点が並ぶ。夜になると葉を閉じて祈る。', tags: ['プレイヤー・プラント', 'ハンギング', '模様'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#AED581' },
        { name: 'マランタ・レウコネウラ・エリスロネウラ', scientific: 'Maranta leuconeura var. erythroneura', description: '赤い葉脈がくっきりと浮き出る美しい品種。', tags: ['プレイヤー・プラント', '赤葉脈', 'エキゾチック'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#33691E' },
        { name: 'クテナンテ・ブルレマルクシー', scientific: 'Ctenanthe burle-marxii', description: '魚の骨のような模様の小さな葉が密集する。', tags: ['耐陰性', 'グランドカバー', '模様'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#DCEDC8' },
        { name: 'アロカシア・アマゾニカ', scientific: 'Alocasia amazonica', description: '濃い緑に白く太い葉脈。プラスチックのような質感。', tags: ['アロカシア', 'クール', '人気'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#004D40' },
        { name: 'アロカシア・ゼブリナ', scientific: 'Alocasia zebrina', description: '茎（葉柄）がシマウマのような模様になっている。', tags: ['アロカシア', 'アニマル柄', 'ユニーク'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#F0F4C3' },
        { name: 'アロカシア・ブラックベルベット', scientific: 'Alocasia reginula', description: '黒っぽいビロード状の葉が高級感漂う小型種。', tags: ['アロカシア', '黒葉', 'ベルベット'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#212121' },
        { name: 'アロカシア・クプレア', scientific: 'Alocasia cuprea', description: '銅色（カッパー）に輝く凸凹した葉がメタリック。', tags: ['アロカシア', 'メタリック', 'レア'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#5D4037' },
        { name: 'アロカシア・グリーンベルベット（フライデック）', scientific: 'Alocasia micholitziana \'Frydek\'', description: '鮮やかな緑のベルベット葉に白い葉脈が美しい。', tags: ['アロカシア', 'ベルベット', '美しい'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#00C853' },
        { name: 'アロカシア・スティングレイ', scientific: 'Alocasia macrorrhizos \'Stingray\'', description: '葉の先端がエイ（Stingray）の尾のように伸びる。', tags: ['アロカシア', 'ユニーク', '魚'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#66BB6A' },
        { name: 'コロカシア・モヒート', scientific: 'Colocasia esculenta \'Mojito\'', description: 'サトイモの仲間。黒い斑点が散る迷彩柄がカッコイイ。', tags: ['コロカシア', '迷彩', 'アウトドア'], careLevel: 2, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#33691E' },
        { name: 'コロカシア・ブラックマジック', scientific: 'Colocasia esculenta \'Black Magic\'', description: '全身が真っ黒になるサトイモ。水辺を好む。', tags: ['コロカシア', '黒い植物', '水好き'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#212121' },
        { name: 'アグラオネマ・シルバークイーン', scientific: 'Aglaonema \'Silver Queen\'', description: '映画「レオン」の植物として有名。銀色の斑が涼しげ。', tags: ['アグラオネマ', '映画', '耐陰性'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#B2DFDB' },
        { name: 'アグラオネマ・ピクタム・トリカラー', scientific: 'Aglaonema pictum tricolor', description: '3色の緑が織りなす迷彩柄が大人気の宝石植物。', tags: ['アグラオネマ', '迷彩', 'マニア向け'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#4CAF50' },
        { name: 'アグラオネマ・オースピシャス・レッド', scientific: 'Aglaonema \'Auspicious Red\'', description: '鮮やかな赤やピンクの葉が部屋のアクセントに。', tags: ['アグラオネマ', '赤い葉', '風水'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#D32F2F' },
        { name: 'ディフェンバキア・カミーラ', scientific: 'Dieffenbachia \'Camille\'', description: '中心が白く、縁が緑のコントラスト。明るい印象。', tags: ['耐陰性', '明るい', '定番'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#C8E6C9' },
        { name: 'シンゴニウム・ネオン', scientific: 'Syngonium podophyllum \'Neon\'', description: '優しいピンク色の葉が可愛らしい。', tags: ['ピンク', 'かわいい', '耐陰性'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#F8BBD0' },
        { name: 'シンゴニウム・チョコレート', scientific: 'Syngonium erythrophyllum \'Llano Carti Road\'', description: '表は銅色、裏は赤紫のシックなシンゴニウム。', tags: ['銅葉', 'シック', 'テラリウム'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#3E2723' },
        { name: 'フィットニア（シロアミメグサ）', scientific: 'Fittonia albivenis', description: '網目状の葉脈がくっきり。白、ピンク、赤など多彩。', tags: ['網目模様', 'テラリウム', 'カラフル'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#F48FB1' },
        { name: 'ヒポエステス（ソバカスソウ）', scientific: 'Hypoestes phyllostachya', description: '赤、ピンク、白の斑点が細かく入る。寄せ植えに。', tags: ['カラフル', '寄せ植え', 'かわいい'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#FFCDD2' },
        { name: 'ベゴニア・マクラータ', scientific: 'Begonia maculata', description: '水玉模様（ドット）がおしゃれな木立性ベゴニア。', tags: ['ベゴニア', 'ドット柄', 'おしゃれ'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#B71C1C' },
        { name: 'レックスベゴニア', scientific: 'Begonia rex-cultorum', description: '葉の形、色、模様が無限のバリエーションを持つ。', tags: ['ベゴニア', 'コレクション', 'アート'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#880E4F' },
        { name: 'トラデスカンティア・ゼブリナ', scientific: 'Tradescantia zebrina', description: '紫と銀の縞模様が美しいつる性植物。非常に丈夫。', tags: ['つる性', '紫の葉', '丈夫'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#7B1FA2' },
        { name: 'トラデスカンティア・ナヌーク', scientific: 'Tradescantia \'Nanouk\'', description: 'ピンク、白、緑の斑が入る肉厚な葉が人気。', tags: ['ピンク', 'かわいい', '丈夫'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#F8BBD0' },
        // --- Batch 25: Ferns & Hoyas (Forest Vibes) (30 items) ---
        { name: 'ボストンファーン', scientific: 'Nephrolepis exaltata', description: 'ボリュームのある緑の噴水。室内の空気をきれいにする。', tags: ['シダ', '空気清浄', 'ボリューム'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#4CAF50' },
        { name: 'タマシダ（ネフロレピス）', scientific: 'Nephrolepis', description: '非常に強健なシダ。初心者でも育てやすい。', tags: ['シダ', '丈夫', '定番'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#388E3C' },
        { name: 'アジアンタム・フラグランス', scientific: 'Adiantum raddianum', description: 'レースのような繊細な葉が涼しげ。乾燥に注意。', tags: ['シダ', '繊細', '涼しげ'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#A5D6A7' },
        { name: 'プテリス（イノモトソウ）', scientific: 'Pteris cretica', description: '斑入りや縮れ葉など種類が豊富。テーブルサイズ。', tags: ['シダ', 'ミニ観葉', '寄せ植え'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#C8E6C9' },
        { name: 'アスプレニウム（タニワタリ）', scientific: 'Asplenium nidus', description: '放射状に広がる一枚葉が力強い。日陰に強い。', tags: ['シダ', '耐陰性', '丈夫'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#2E7D32' },
        { name: 'アスプレニウム・コブラ', scientific: 'Asplenium nidus \'Cobra\'', description: '波打つような葉が特徴的なタニワタリの品種。', tags: ['シダ', 'ユニーク', '丈夫'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#1B5E20' },
        { name: 'ダバリア（シノブ）', scientific: 'Davallia mariesii', description: '「猫のシッポ」のようなフサフサの根茎を楽しむ。', tags: ['シダ', '根茎', 'かわいい'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#8D6E63' },
        { name: 'ドリオプテリス（紅シダ）', scientific: 'Dryopteris erythrosora', description: '新芽が赤茶色に染まる美しいシダ。和風の庭にも。', tags: ['シダ', '紅葉', '和風'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#D84315' },
        { name: 'ブレクナム（シルバーレディ）', scientific: 'Blechnum gibbum', description: '木生シダの仲間。ソテツのような整った姿が美しい。', tags: ['シダ', '木立性', 'エレガント'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#43A047' },
        { name: 'リュウビンタイ', scientific: 'Angiopteris lygodiifolia', description: 'ゴツゴツした根元と原始的な雰囲気が魅力の大型シダ。', tags: ['シダ', '古代植物', '和風'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#1B5E20' },
        { name: 'ホヤ・カルノーサ（サクララン）', scientific: 'Hoya carnosa', description: '肉厚な葉と、飴細工のようなピンクの花が魅力。', tags: ['ホヤ', '花が咲く', 'つる性'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#F8BBD0' },
        { name: 'ホヤ・カーリー（ラブハート）', scientific: 'Hoya kerrii', description: 'ハート型の葉が「バレンタイン」ギフトに人気。', tags: ['ホヤ', 'ハート', 'かわいい'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#81C784' },
        { name: 'ホヤ・リネアリス', scientific: 'Hoya linearis', description: '細長い棒状の葉がカーテンのように垂れ下がる。', tags: ['ホヤ', 'ハンギング', '繊細'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#DCEDC8' },
        { name: 'ホヤ・レツーサ', scientific: 'Hoya retusa', description: '平たい棒状の葉先がハートのように割れる面白い形。', tags: ['ホヤ', 'ユニーク', 'ハンギング'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#C5E1A5' },
        { name: 'ホヤ・クミンギアナ', scientific: 'Hoya cumingiana', description: '丸い葉が連なり、マスカットのような香りの花が咲く。', tags: ['ホヤ', '香り', 'かわいい'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#FFF9C4' },
        { name: 'ディスキディア・ヌンムラリア（エメラルド）', scientific: 'Dischidia nummularia', description: '小さな丸い葉が連なる。着生植物で流木仕立ても人気。', tags: ['ハンギング', '着生植物', 'かわいい'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#AED581' },
        { name: 'ディスキディア・ミリオンハート', scientific: 'Dischidia ruscifolia', description: '小さなハート型の葉がたくさんつく。', tags: ['ハンギング', 'ハート', 'かわいい'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#C8E6C9' },
        { name: 'カンガルーポケット（ディスキディア・ペクテノイデス）', scientific: 'Dischidia pectenoides', description: '袋状の葉（貯水嚢）を持つ不思議な植物。', tags: ['ハンギング', 'ユニーク', '袋'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#EF9A9A' },
        { name: 'リプサリス・カスッサ', scientific: 'Rhipsalis cassutha', description: '細い紐のようなサボテンがフサフサと垂れる。', tags: ['森林サボテン', 'ハンギング', '癒やし'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#A5D6A7' },
        { name: 'リプサリス・パラドクサ', scientific: 'Rhipsalis paradoxa', description: '鎖のような不思議な形の茎が長く垂れ下がる。', tags: ['森林サボテン', 'ハンギング', 'ユニーク'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#689F38' },
        { name: 'エピフィルム（月下美人）', scientific: 'Epiphyllum oxypetalum', description: '夜に一夜だけ咲く、香り高く神秘的な花。', tags: ['森林サボテン', '花が咲く', '神秘的'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#FFFFFF' },
        { name: 'フィッシュボーンカクタス（ジグザグカクタス）', scientific: 'Epiphyllum anguliger', description: '魚の骨のようなジグザグの葉が特徴的で人気。', tags: ['森林サボテン', 'ユニーク', '人気'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#AED581' },
        { name: 'シャコバサボテン（クリスマスカクタス）', scientific: 'Schlumbergera truncata', description: '冬に鮮やかな花を咲かせる。お歳暮の定番。', tags: ['多肉植物', '花が咲く', '冬'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#F06292' },
        { name: 'グリーンネックレス', scientific: 'Senecio rowleyanus', description: '緑の玉（コロコロ）が垂れ下がる。多肉寄せ植えの定番。', tags: ['多肉植物', 'ハンギング', 'かわいい'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#66BB6A' },
        { name: 'ルビーネックレス', scientific: 'Othonna capensis', description: '寒さに当たると紫色（ルビー色）に紅葉する。', tags: ['多肉植物', 'ハンギング', '紅葉'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#7B1FA2' },
        { name: 'ドルフィンネックレス', scientific: 'Senecio peregrinus', description: 'イルカが跳ねているような形の葉が可愛い。', tags: ['多肉植物', 'ハンギング', 'イルカ'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#4CAF50' },
        { name: 'ハートカズラ', scientific: 'Ceropegia woodii', description: 'ハート型の葉が鎖のように連なる「愛の鎖」。', tags: ['多肉植物', 'ハンギング', 'ハート'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#BCAAA4' },
        { name: 'ピレア・ペペロミオイデス', scientific: 'Pilea peperomioides', description: '「パンケーキプランツ」。丸い葉がポップで可愛い。', tags: ['北欧', 'かわいい', '丸い葉'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#66BB6A' },
        { name: 'ピレア・カディエレイ', scientific: 'Pilea cadierei', description: 'アルミニウムを塗ったような銀色の模様が入る。', tags: ['メタリック', '模様', '観葉植物'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#B0BEC5' },
        { name: 'ペペロミア・オブツシフォリア', scientific: 'Peperomia obtusifolia', description: '肉厚で丸い葉。非常に丈夫で様々な斑入り品種がある。', tags: ['ペペロミア', '丈夫', '定番'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#43A047' },
        // --- Batch 26: Carnivorous & Exotic (Unique & Fun) (30 items) ---
        { name: 'ウツボカズラ（ネペンテス）', scientific: 'Nepenthes', description: '捕虫袋がユニークな食虫植物の代表格。', tags: ['食虫植物', 'ハンギング', 'ユニーク'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#D84315' },
        { name: 'ハエトリソウ（ディオネア）', scientific: 'Dionaea muscipula', description: '虫をパクっと捕まえる動きが有名な食虫植物。', tags: ['食虫植物', 'アクション', '子供に人気'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#4CAF50' },
        { name: 'モウセンゴケ', scientific: 'Drosera', description: '粘液のついた毛で虫を捕らえる。キラキラして綺麗。', tags: ['食虫植物', 'キラキラ', 'かわいい'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#F48FB1' },
        { name: 'サラセニア', scientific: 'Sarracenia', description: '筒状の葉が立ち上がる。鑑賞価値の高い食虫植物。', tags: ['食虫植物', '美しい', '水好き'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#8D6E63' },
        { name: 'ムシトリスミレ', scientific: 'Pinguicula', description: '可憐な花を咲かせるが、葉で小バエを捕まえる。', tags: ['食虫植物', '花が咲く', 'かわいい'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#CE93D8' },
        { name: 'セファロタス（フクロユキノシタ）', scientific: 'Cephalotus follicularis', description: '地面に小さな袋が密集する。オーストラリア原産。', tags: ['食虫植物', 'レア', 'かわいい'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#5D4037' },
        { name: 'ミミカキグサ（ウサギゴケ）', scientific: 'Utricularia sandersonii', description: 'ウサギのような形の花が咲く可愛らしい食虫植物。', tags: ['食虫植物', '花が咲く', 'かわいい'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#FFFFFF' },
        { name: 'ダーリントン（コブラリリー）', scientific: 'Darlingtonia californica', description: '鎌首をもたげたコブラのような姿が怪しくも美しい。', tags: ['食虫植物', 'ビザール', 'レア'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#33691E' },
        { name: 'タヌキモ', scientific: 'Utricularia', description: '水中に浮遊して虫を捕らえる水生食虫植物。', tags: ['食虫植物', '水生植物', 'ユニーク'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#FFEB3B' },
        { name: 'アリストロキア・ギガンティア', scientific: 'Aristolochia gigantea', description: '巨大な奇妙な花を咲かせるつる性植物。', tags: ['変な花', 'つる性', '巨大'], careLevel: 2, match: { sunlight: ['high', 'medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#5D4037' },
        { name: 'ブラックキャット（タッカ・シャントリエリ）', scientific: 'Tacca chantrieri', description: '黒いコウモリや猫のような形の花。「悪魔の花」。', tags: ['変な花', '黒い植物', 'レア'], careLevel: 3, match: { sunlight: ['medium', 'low'], experience: ['expert'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#212121' },
        { name: 'ストレリチア・レギネ（極楽鳥花）', scientific: 'Strelitzia reginae', description: 'オレンジ色の鳥のような花。南国ムード満点。', tags: ['花が咲く', '南国', '丈夫'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#FF9800' },
        { name: 'ストレリチア・オーガスタ', scientific: 'Strelitzia nicolai', description: 'バナナのような巨大な葉がリゾート感を演出。', tags: ['大型', 'リゾート', '丈夫'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#4CAF50' },
        { name: 'タビビトノキ', scientific: 'Ravenala madagascariensis', description: '扇状に葉が広がるダイナミックな姿。植物園の主役。', tags: ['大型', '扇形', 'リゾート'], careLevel: 2, match: { sunlight: ['high', 'medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#2E7D32' },
        { name: 'ヘリコニア', scientific: 'Heliconia', description: 'ロブスターの爪のような派手な花（苞）をつける。', tags: ['南国', '派手', '花が咲く'], careLevel: 2, match: { sunlight: ['high', 'medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#F44336' },
        { name: 'ジンジャー（ゲットウ）', scientific: 'Alpinia zerumbet', description: '葉に殺菌作用があり、香りも良い。化粧水などにも。', tags: ['ハーブ', '香り', '有用植物'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#F0F4C3' },
        { name: 'カラジューム', scientific: 'Caladium', description: '白、赤、ピンクなど葉色が非常に鮮やか。夏に楽しむ。', tags: ['カラーリーフ', '夏', '球根'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#FFCDD2' },
        { name: 'アカリファ（キャットテール）', scientific: 'Acalypha reptans', description: '赤い猫じゃらしのような花が垂れ下がる。', tags: ['花が咲く', 'かわいい', 'ハンギング'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#D32F2F' },
        { name: 'サクラソウ（プリムラ）', scientific: 'Primula sieboldii', description: '春の訪れを告げる可憐な花。日本の伝統園芸植物。', tags: ['花が咲く', '和風', '春'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#F48FB1' },
        { name: 'サイネリア', scientific: 'Pericallis × hybrida', description: 'ドーム状に花が密集して咲く。卒業式の定番。', tags: ['花が咲く', 'カラフル', 'ボリューム'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#7B1FA2' },
        { name: 'カランコエ', scientific: 'Kalanchoe blossfeldiana', description: '肉厚な葉と鮮やかな花。乾燥に強く育てやすい。', tags: ['多肉植物', '花が咲く', '丈夫'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#F44336' },
        { name: 'カランコエ・ウェンディ', scientific: 'Kalanchoe \'Wendy\'', description: '釣鐘状の赤い花がシャンデリアのように咲く。', tags: ['多肉植物', '花が咲く', 'ハンギング'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#D32F2F' },
        { name: 'セントポーリア', scientific: 'Saintpaulia', description: '「室内の女王」。蛍光灯の光でも花が咲く。', tags: ['花が咲く', '耐陰性', 'コレクション'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#7E57C2' },
        { name: 'ストレプトカーパス', scientific: 'Streptocarpus', description: 'セントポーリアの仲間。次々と花を咲かせる。', tags: ['花が咲く', '耐陰性', 'かわいい'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#AB47BC' },
        { name: 'グロキシニア', scientific: 'Sinningia speciosa', description: 'ビロードのような大きな花が豪華。', tags: ['花が咲く', '豪華', '球根'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#C2185B' },
        { name: 'アキメネス', scientific: 'Achimenes', description: '夏にたくさんの花を咲かせる。ハンギングに向く。', tags: ['花が咲く', 'ハンギング', '夏'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#7B1FA2' },
        { name: 'コルムネア', scientific: 'Columnea', description: '金魚のような形の花が咲く「ゴールドフィッシュプラント」。', tags: ['花が咲く', 'ハンギング', 'ユニーク'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#EF6C00' },
        { name: 'エスキナンサス', scientific: 'Aeschynanthus', description: '赤い口紅のような花が咲く「リップスティックプランツ」。', tags: ['花が咲く', 'ハンギング', 'ユニーク'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#D32F2F' },
        { name: 'メディニラ・マグニフィカ', scientific: 'Medinilla magnifica', description: 'ピンクのシャンデリアのような巨大な花房が圧巻。', tags: ['花が咲く', '豪華', '大型'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#F06292' },
        { name: 'マイソルヤハズカズラ', scientific: 'Thunbergia mysorensis', description: '黄色と赤褐色の花が藤棚のように垂れ下がる。', tags: ['つる性', '花が咲く', '温室'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#FDD835' },
        // --- Batch 27: Cacti & Succulents Deep Dive (30 items) ---
        { name: '緋牡丹（ヒボタン）', scientific: 'Gymnocalycium mihanovichii', description: '赤、黄、ピンクなどの鮮やかな色のサボテンを接ぎ木している。', tags: ['サボテン', 'カラフル', 'かわいい'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#F44336' },
        { name: 'マミラリア・白星', scientific: 'Mammillaria plumosa', description: '白い羽毛のようなトゲに覆われたふわふわのサボテン。', tags: ['サボテン', 'ふわふわ', 'かわいい'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#FAFAFA' },
        { name: '柱サボテン（鬼面角）', scientific: 'Cereus hildmannianus', description: '太い柱状のサボテン。ドライガーデンや店舗ディスプレイに人気。', tags: ['サボテン', '大型', 'モダン'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#4CAF50' },
        { name: 'ウチワサボテン（バニーカクタス）', scientific: 'Opuntia microdasys', description: 'ウサギの耳のような形が可愛い。トゲは非常に細かいので注意。', tags: ['サボテン', 'かわいい', 'ユニーク'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#AED581' },
        { name: 'アストロフィツム（兜丸）', scientific: 'Astrophytum asterias', description: 'トゲがなく、丸い帽子のような形。星のような斑点が入る。', tags: ['サボテン', 'トゲなし', 'コレクション'], careLevel: 2, match: { sunlight: ['high', 'medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#8D6E63' },
        { name: 'アストロフィツム（ランポー玉）', scientific: 'Astrophytum myriostigma', description: '角ばった星型のような形のトゲなしサボテン。', tags: ['サボテン', 'トゲなし', '幾何学的'], careLevel: 2, match: { sunlight: ['high', 'medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#B0BEC5' },
        { name: '十二の巻（ハオルチア）', scientific: 'Haworthia fasciata', description: '硬い葉に白い縞模様が入る。非常に丈夫で日陰にも強い。', tags: ['多肉植物', '丈夫', '耐陰性'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#1B5E20' },
        { name: '雫石（ハオルチア・オブツーサ）', scientific: 'Haworthia cooperi var. truncata', description: '葉先が透明な窓になっている。光にかざすと美しい。', tags: ['多肉植物', '透明感', '人気'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#B2DFDB' },
        { name: '玉扇（ハオルチア）', scientific: 'Haworthia truncata', description: '葉が扇状に切断されたような形。断面の模様（窓）を楽しむ。', tags: ['多肉植物', '高級', 'コレクション'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#00695C' },
        { name: '万象（ハオルチア）', scientific: 'Haworthia maughanii', description: '象の足の裏のような形の葉。マニアに絶大な人気を誇る。', tags: ['多肉植物', '高級', 'コレクション'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#3E2723' },
        { name: 'エケベリア・桃太郎', scientific: 'Echeveria \'Momotarou\'', description: '葉先が赤く染まる美しいロゼット型。普及種の代表格。', tags: ['多肉植物', 'ロゼット', 'かわいい'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#F48FB1' },
        { name: 'エケベリア・ラウイ', scientific: 'Echeveria laui', description: '全身が真っ白な粉で覆われた、世界一美しいと言われるエケベリア。', tags: ['多肉植物', '白い', '美しい'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#FFFFFF' },
        { name: '黒法師（アエオニウム）', scientific: 'Aeonium arboreum \'Zwartkop\'', description: '真っ黒な葉が花のように展開する。冬型多肉植物。', tags: ['多肉植物', '黒葉', '冬型'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#212121' },
        { name: 'カラスミセバヤ', scientific: 'Hylotelephium cauticola', description: '紫がかった葉とピンクの花が美しい。ロックガーデン向き。', tags: ['多肉植物', '紫の葉', '花が咲く'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#7B1FA2' },
        { name: '虹の玉', scientific: 'Sedum rubrotinctum', description: '秋になると真っ赤に紅葉するつぶつぶ多肉。寄せ植えに必須。', tags: ['多肉植物', '紅葉', 'つぶつぶ'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#D32F2F' },
        { name: '乙女心', scientific: 'Sedum pachyphyllum', description: 'バナナのような葉の先がポッと赤くなる。とても可愛い。', tags: ['多肉植物', 'かわいい', '寄せ植え'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#CDDC39' },
        { name: '熊童子（コグマノテ）', scientific: 'Cotyledon tomentosa', description: '産毛に覆われた葉先が茶色くなり、まるで熊の手のよう。', tags: ['多肉植物', 'かわいい', '人気'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#AED581' },
        { name: '月兎耳（ツキトジ）', scientific: 'Kalanchoe tomentosa', description: 'ベルベットのような白毛に覆われた「ウサギの耳」。', tags: ['多肉植物', 'もふもふ', '丈夫'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#BCAAA4' },
        { name: '不死鳥（カランコエ）', scientific: 'Kalanchoe daigremontiana hybrid', description: '葉の縁にたくさんの子供（不定芽）をつけ、落ちて増える。', tags: ['多肉植物', '繁殖力', 'ユニーク'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#558B2F' },
        { name: '子宝草', scientific: 'Kalanchoe crempnophylla', description: 'たくさんの子供を葉につける縁起の良い植物。', tags: ['多肉植物', '縁起物', '増える'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#81C784' },
        { name: 'アガベ・チタノタ（オテロイ）', scientific: 'Agave titanota', description: '荒々しい鋸歯（トゲ）と肉厚な葉が男性ファンに大人気。', tags: ['アガベ', 'カッコイイ', 'コレクション'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#A5D6A7' },
        { name: 'アガベ・アメリカーナ（アオノリュウゼツラン）', scientific: 'Agave americana', description: '巨大になるアガベ。ドライガーデンの主役。', tags: ['アガベ', '大型', 'ドライガーデン'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#78909C' },
        { name: 'アガベ・笹の雪', scientific: 'Agave victoriae-reginae', description: 'ペンキで描いたような白い模様が幾何学的で美しい。', tags: ['アガベ', '美しい', 'アート'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#2E7D32' },
        { name: 'アガベ・雷神', scientific: 'Agave potatorum', description: 'バラのようなロゼットを形成する小型アガベ。', tags: ['アガベ', 'ロゼット', '人気'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#B2DFDB' },
        { name: 'ユーフォルビア・オベサ', scientific: 'Euphorbia obesa', description: 'トゲのないまん丸の玉。木質化すると味わいが出る。', tags: ['多肉植物', 'ボール', 'かわいい'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#795548' },
        { name: 'ユーフォルビア・ホワイトゴースト', scientific: 'Euphorbia lactea \'White Ghost\'', description: '全身が白い幽霊のような不思議なフォルム。', tags: ['多肉植物', '白い', 'モダン'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#F5F5F5' },
        { name: 'ユーフォルビア・マハラジャ', scientific: 'Euphorbia lactea \'Cristata\'', description: '鶏冠（トサカ）のように綴化したユニークな形。', tags: ['多肉植物', 'ユニーク', '綴化'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#E91E63' },
        { name: 'ペディランサス（大銀竜）', scientific: 'Pedilanthus tithymaloides', description: 'ジグザグに伸びる茎が特徴。「商売繁盛」の植物。', tags: ['多肉植物', 'ジグザグ', '縁起物'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#C8E6C9' },
        { name: 'アロエ・ベラ', scientific: 'Aloe vera', description: '食用や薬用としても有名なアロエ。非常に丈夫。', tags: ['多肉植物', '薬用', '丈夫'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#66BB6A' },
        { name: 'アロエ・ディコトマ', scientific: 'Aloidendron dichotomum', description: '木のように大きく育つアロエ。矢筒の木とも呼ばれる。', tags: ['多肉植物', '大型', '希少'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#FDD835' },
        // --- Batch 28: Flowering Houseplants & Bromeliads (30 items) ---
        { name: 'アンスリウム・アンドレアナム', scientific: 'Anthurium andraeanum', description: 'ハート型の赤い仏炎苞が情熱的。切り花でも長持ち。', tags: ['花が咲く', '赤い花', '定番'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#D32F2F' },
        { name: 'スパティフィラム', scientific: 'Spathiphyllum', description: '純白の仏炎苞が清潔感を与える。耐陰性が高く空気清浄効果も。', tags: ['花が咲く', '白い花', '耐陰性'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#FFFFFF' },
        { name: 'グズマニア', scientific: 'Guzmania', description: '赤や黄色の星のような花（苞）が数ヶ月楽しめる。パイナップル科。', tags: ['アナナス', 'カラフル', '長持ち'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#FF5722' },
        { name: 'エクメア・ファスキアタ（シマサンゴアナナス）', scientific: 'Aechmea fasciata', description: '銀色の縞模様の葉とピンクの花苞が豪華なアナナス。', tags: ['アナナス', '豪華', '長持ち'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#F48FB1' },
        { name: 'チランジア・キセログラフィカ', scientific: 'Tillandsia xerographica', description: '「エアプランツの王様」。銀白色のカールした葉が美しい。', tags: ['エアプランツ', '王様', '銀葉'], careLevel: 2, match: { sunlight: ['high', 'medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#CFD8DC' },
        { name: 'チランジア・ウスネオイデス（スパニッシュモス）', scientific: 'Tillandsia usneoides', description: 'もじゃもじゃした銀色の髪の毛のようなエアプランツ。', tags: ['エアプランツ', 'ハンギング', 'おしゃれ'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#B0BEC5' },
        { name: 'チランジア・イオナンタ', scientific: 'Tillandsia ionantha', description: '開花時に葉が赤く染まる小型のエアプランツ。', tags: ['エアプランツ', '小型', 'かわいい'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#FF5252' },
        { name: 'フリーセア（インコアナナス）', scientific: 'Vriesea', description: '剣のような平べったい花苞が特徴的。', tags: ['アナナス', 'ユニーク', 'カラフル'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#FFC107' },
        { name: 'ネオレゲリア', scientific: 'Neoregelia', description: '筒状の中心部に水を溜めて育てる。葉色が非常にカラフル。', tags: ['アナナス', 'カラーリーフ', '丈夫'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#E91E63' },
        { name: 'クリプタンサス', scientific: 'Cryptanthus', description: '「アーススター」。地面に星形に広がる小型のアナナス。', tags: ['アナナス', 'テラリウム', '模様'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#8D6E63' },
        { name: 'ビルベルギア（ツツアナナス）', scientific: 'Billbergia', description: '細長い筒状の姿がスマート。独特の模様が入るものも。', tags: ['アナナス', 'スマート', '丈夫'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#558B2F' },
        { name: 'コチョウラン（胡蝶蘭）', scientific: 'Phalaenopsis', description: 'お祝いの定番。実は室内で育てやすく花も長く楽しめる。', tags: ['蘭', '豪華', '花が咲く'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#FFFFFF' },
        { name: 'オンシジウム', scientific: 'Oncidium', description: '黄色い蝶が舞っているような小花をたくさん咲かせる。', tags: ['蘭', '黄色い花', '華やか'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#FFEB3B' },
        { name: 'デンドロビウム', scientific: 'Dendrobium', description: '茎の節々に花をつける。種類が豊富で丈夫な洋蘭。', tags: ['蘭', '丈夫', '花が咲く'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#BA68C8' },
        { name: 'カトレア', scientific: 'Cattleya', description: '「洋蘭の女王」。極めて華やかで香り高い花を咲かせる。', tags: ['蘭', '女王', '香り'], careLevel: 3, match: { sunlight: ['medium', 'high'], experience: ['expert'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#9C27B0' },
        { name: 'パフィオペディラム', scientific: 'Paphiopedilum', description: '袋状の唇弁がユニークな食虫植物のような見た目の蘭。', tags: ['蘭', 'ユニーク', 'シック'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#5D4037' },
        { name: 'バンダ（翡翠蘭）', scientific: 'Vanda', description: '青紫色の網目模様が美しい。根を空中に露出させて育てる。', tags: ['蘭', '青い花', 'ハンギング'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#304FFE' },
        { name: 'シンビジウム', scientific: 'Cymbidium', description: '寒さに強く、冬の贈り物として人気の洋蘭。', tags: ['蘭', '耐寒性', '豪華'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#FF4081' },
        { name: 'ジュエルオーキッド（マコデス・ペトラ）', scientific: 'Macodes petra', description: '葉脈が稲妻のように金色に光る「宝石蘭」。', tags: ['蘭', '宝石', 'テラリウム'], careLevel: 2, match: { sunlight: ['low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#1B5E20' },
        { name: 'フウラン（富貴蘭）', scientific: 'Neofinetia falcata', description: '日本原産の着生蘭。夕方から甘い香りを漂わせる。', tags: ['蘭', '和風', '香り'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#FFFFFF' },
        { name: 'ハイビスカス', scientific: 'Hibiscus rosa-sinensis', description: '南国の象徴。一日花だが次々と大きな花を咲かせる。', tags: ['花が咲く', '南国', '夏'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#D50000' },
        { name: 'ブーゲンビリア', scientific: 'Bougainvillea', description: '鮮やかな色の苞が美しい。南国リゾートの雰囲気。', tags: ['花が咲く', '南国', 'トゲ'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#C2185B' },
        { name: 'クチナシ（ガーデニア）', scientific: 'Gardenia jasminoides', description: '純白の花と濃厚な甘い香りが魅力。', tags: ['花が咲く', '香り', '人気'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#FFFFFF' },
        { name: 'アジサイ（ハイドランジア）', scientific: 'Hydrangea macrophylla', description: '梅雨を彩る花。鉢植えでも人気。水切れに注意。', tags: ['花が咲く', '季節', '水好き'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#2962FF' },
        { name: 'カシワバアジサイ', scientific: 'Hydrangea quercifolia', description: 'カシワのような葉とピラミッド状の花房が特徴。', tags: ['花が咲く', 'おしゃれ', '庭木'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#FFFFFF' },
        { name: 'ミディ胡蝶蘭', scientific: 'Phalaenopsis (Midi)', description: 'テーブルサイズの胡蝶蘭。ギフトにもインテリアにも最適。', tags: ['蘭', 'ミニサイズ', 'かわいい'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#F48FB1' },
        { name: 'デンドロビウム・ギンギアナム', scientific: 'Dendrobium kingianum', description: '小花をたくさんつけ、素晴らしい香りがする。非常に丈夫。', tags: ['蘭', '香り', '丈夫'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#E1BEE7' },
        { name: 'サクララン（ホヤ・カルノーサ）', scientific: 'Hoya carnosa', description: '桜色の手毬のような花。葉は多肉質。', tags: ['ホヤ', '花が咲く', 'つる性'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#F8BBD0' },
        { name: 'ジャスミン（マツリカ）', scientific: 'Jasminum sambac', description: 'ジャスミンティーの香り。素晴らしい芳香花。', tags: ['香り', 'ハーブ', '花が咲く'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#FFFFFF' },
        { name: 'シルクジャスミン（ゲッキツ）', scientific: 'Murraya paniculata', description: '光沢のある葉と、柑橘系の香りの白い花。赤い実もつく。', tags: ['観葉植物', '花が咲く', '香り'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#C8E6C9' },
        // --- Batch 29: Unique & Rare Varieties (30 items) ---
        { name: 'ビカクシダ・リドレイ', scientific: 'Platycerium ridleyi', description: '鹿の角のような胞子葉と、キャベツのような貯水葉が美しい人気種。', tags: ['ビカクシダ', '人気', '板付け'], careLevel: 3, match: { sunlight: ['medium', 'high'], experience: ['expert'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#81C784' },
        { name: 'ビカクシダ・ウィリンキー', scientific: 'Platycerium willinckii', description: '長く垂れ下がる白い葉がエレガントなビカクシダ。', tags: ['ビカクシダ', 'ハンギング', '白い'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#CFD8DC' },
        { name: 'ビカクシダ・グランデ', scientific: 'Platycerium grande', description: '「森の王冠」。非常に巨大になる大型種。', tags: ['ビカクシダ', '大型', '王冠'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#4CAF50' },
        { name: 'リュウビンタイ（再掲・詳細）', scientific: 'Angiopteris lygodiifolia', description: '恐竜時代から生き残っているような古代シダ。', tags: ['シダ', '古代', 'ワイルド'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#33691E' },
        { name: 'バンクシア', scientific: 'Banksia', description: 'ブラシのような独特の花を咲かせ、実も面白い。オージープランツ。', tags: ['オージープランツ', 'ドライフラワー', '個性的'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#FF6F00' },
        { name: 'プロテア', scientific: 'Protea', description: '「花の王様」。巨大でエキゾチックな花が咲く南アフリカの植物。', tags: ['オージープランツ', '王様', '豪華'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#F48FB1' },
        { name: 'グレビレア', scientific: 'Grevillea', description: '蜘蛛のような形の花や美しい切れ込みの葉が魅力。', tags: ['オージープランツ', 'おしゃれ', '花が咲く'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#FFCC80' },
        { name: 'アカシア・ブルーブッシュ', scientific: 'Acacia covenyi', description: 'シルバーブルーの羽のような葉が非常に美しいアカシア。', tags: ['オージープランツ', '銀葉', 'シンボルツリー'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#90A4AE' },
        { name: 'メラレウカ（ティーツリー）', scientific: 'Melaleuca alternifolia', description: '精油の原料。細い葉が涼しげで、雪のような花が咲く。', tags: ['オージープランツ', 'ハーブ', '香り'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#B2DFDB' },
        { name: 'カリステモン（ブラシの木）', scientific: 'Callistemon', description: '真っ赤なボトルブラシのような花が咲く。', tags: ['オージープランツ', '赤い花', 'ユニーク'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#D32F2F' },
        { name: 'ウエストリンギア', scientific: 'Westringia fruticosa', description: 'オーストラリアンローズマリー。薄紫の小花が咲く常緑低木。', tags: ['オージープランツ', '丈夫', '銀葉'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#E0E0E0' },
        { name: 'ドドナエア', scientific: 'Dodonaea viscosa', description: '銅葉が美しい常緑樹。秋から冬にかけて色が濃くなる。', tags: ['オージープランツ', '銅葉', 'シンボルツリー'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#5D4037' },
        { name: 'コルジリネ・レッドスター', scientific: 'Cordyline australis \'Red Star\'', description: '赤褐色の剣のような葉が放射状に広がる。', tags: ['ドライガーデン', '赤葉', 'モダン'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#3E2723' },
        { name: 'ニューサイラン（フォルミウム）', scientific: 'Phormium tenax', description: 'シュッとした葉姿がスタイリッシュ。品種により色が豊富。', tags: ['ドライガーデン', 'モダン', '丈夫'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#546E7A' },
        { name: 'ロストラータ（ユッカ）', scientific: 'Yucca rostrata', description: '青白い放射状の葉と、毛に覆われた幹が最高にクール。', tags: ['ドライガーデン', '人気', '高価'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#78909C' },
        { name: 'アガベ・パリィ（吉祥天）', scientific: 'Agave parryi', description: '青白く整ったロゼットと黒いトゲのコントラストが美しい。', tags: ['アガベ', '美種', '耐寒性'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#B0BEC5' },
        { name: 'ディクソニア', scientific: 'Dicksonia antarctica', description: '木生シダの代表格。太い幹と巨大な葉がジュラシック。', tags: ['シダ', '大型', '古代'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#33691E' },
        { name: ' cycas revoluta（ソテツ）', scientific: 'Cycas revoluta', description: '南国ムード満点の古代植物。非常に丈夫で長寿。', tags: ['大型', 'リゾート', '丈夫'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#2E7D32' },
        { name: 'ザミア（メキシコソテツ）', scientific: 'Zamia furfuracea', description: '丸みのある硬い葉が可愛いソテツの仲間。', tags: ['中型', '丸い葉', 'かわいい'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#81C784' },
        { name: 'パンダガジュマル', scientific: 'Ficus retusa \'Panda\'', description: '丸い葉が密生してパンダの耳のように見えるガジュマル。', tags: ['ゴムの木', 'かわいい', 'レア'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#4CAF50' },
        { name: 'センカクガジュマル', scientific: 'Ficus microcarpa var. nitida', description: '尖閣諸島原産の、葉がひし形で肉厚なガジュマル。', tags: ['ゴムの木', 'レア', '丈夫'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#388E3C' },
        { name: 'フィカス・ベンジャミナ・バロック', scientific: 'Ficus benjamina \'Barok\'', description: 'くるくるとカールした葉が特徴的でおしゃれなゴムの木。', tags: ['ゴムの木', 'カール', '人気'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#2E7D32' },
        { name: 'フィカス・ウンベラータ', scientific: 'Ficus umbellata', description: '大きなハート型の葉がインテリア雑誌で大人気。', tags: ['大型', 'ハート', 'おしゃれ'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#AED581' },
        { name: 'フィカス・アフリカンプリンス', scientific: 'Ficus \'African Prince\'', description: 'かつては輸出禁止だった希少種。大きな葉と気品ある姿。', tags: ['大型', 'レア', '高級'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#1B5E20' },
        { name: 'シェフレラ・アンガスティフォリア', scientific: 'Schefflera angustifolia', description: '細長い葉が涼しげでスタイリッシュなシェフレラ。', tags: ['中型', '繊細', 'スタイリッシュ'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#A5D6A7' },
        { name: 'ポリシャス・フルティコサ', scientific: 'Polyscias fruticosa', description: 'ギザギザの細かい葉が繊細なレースのよう。別名タイワンモミジ。', tags: ['繊細', '和風', 'アジアン'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#2E7D32' },
        { name: 'ブラキキトン・ルペストリス', scientific: 'Brachychiton rupestris', description: '「ボトルツリー」。根元がワインボトルのように太くなる。', tags: ['ユニーク', '塊根', '涼しげ'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#81C784' },
        { name: 'パキラ・ミルキーウェイ', scientific: 'Pachira aquatica \'Milky Way\'', description: '天の川のような白い星屑斑が入る希少なパキラ。', tags: ['パキラ', '斑入り', 'レア'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#DCEDC8' },
        { name: 'モンステラ・デリシオーサ（斑入り）', scientific: 'Monstera deliciosa variegata', description: '白や黄色の斑が入るモンステラ。非常に人気が高く高価。', tags: ['モンステラ', '斑入り', '高級'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#F0F4C3' },
        { name: 'フィロデンドロン・ピンクプリンセス', scientific: 'Philodendron \'Pink Princess\'', description: '黒っぽい葉に鮮やかなピンクの斑が入る。まさにプリンセス。', tags: ['フィロデンドロン', 'ピンク', '人気'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#F8BBD0' },
        // --- Batch 30: Herbs & Kitchen Garden (Edible & Scented) (30 items) ---
        { name: 'ローズマリー', scientific: 'Salvia rosmarinus', description: '爽やかな香りで料理にも使える。非常に丈夫で乾燥に強い。', tags: ['ハーブ', '香り', '料理'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#4CAF50' },
        { name: 'ラベンダー', scientific: 'Lavandula', description: 'リラックス効果のある香り。高温多湿は苦手。', tags: ['ハーブ', '香り', '紫の花'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#7E57C2' },
        { name: 'ミント（スペアミント）', scientific: 'Mentha spicata', description: '清涼感のある香り。繁殖力が凄まじいので地植え注意。', tags: ['ハーブ', '香り', 'お茶'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#66BB6A' },
        { name: 'バジル（スイートバジル）', scientific: 'Ocimum basilicum', description: 'イタリア料理に欠かせない。日当たりと水を好む。', tags: ['ハーブ', '料理', '一年草'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#43A047' },
        { name: 'タイム', scientific: 'Thymus', description: '小さな葉が密生し、地面を這うように広がる。料理の香り付けに。', tags: ['ハーブ', '料理', 'グランドカバー'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#AED581' },
        { name: 'オレガノ', scientific: 'Origanum vulgare', description: 'トマト料理やピザに合う。花も可愛いので観賞用にも。', tags: ['ハーブ', '料理', '花が咲く'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#C5E1A5' },
        { name: 'レモンバーム', scientific: 'Melissa officinalis', description: 'レモンのような香り。ハーブティーに最適。丈夫で増えやすい。', tags: ['ハーブ', '香り', 'お茶'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#DCEDC8' },
        { name: 'レモングラス', scientific: 'Cymbopogon citratus', description: 'ススキのような姿でレモンの香り。エスニック料理に。', tags: ['ハーブ', '香り', '料理'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#CDDC39' },
        { name: 'カモミール（ジャーマン）', scientific: 'Matricaria chamomilla', description: 'リンゴのような甘い香りの花。ハーブティーの定番。', tags: ['ハーブ', '香り', '花が咲く'], careLevel: 2, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#FFF176' },
        { name: 'セージ（コモンセージ）', scientific: 'Salvia officinalis', description: '「長寿のハーブ」。肉料理の臭み消しやソーセージに。', tags: ['ハーブ', '料理', '銀葉'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#B2DFDB' },
        { name: 'ディル', scientific: 'Anethum graveolens', description: '魚料理と相性抜群。繊細な葉が美しい。キアゲハの幼虫が好む。', tags: ['ハーブ', '料理', '繊細'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#A5D6A7' },
        { name: 'イタリアンパセリ', scientific: 'Petroselinum crispum', description: '普通のパセリより苦味が少なく使いやすい。キッチンで育てたい。', tags: ['ハーブ', '料理', 'キッチン'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#4CAF50' },
        { name: 'コリアンダー（パクチー）', scientific: 'Coriandrum sativum', description: '独特の香りが癖になる。根も葉も実も使える。', tags: ['ハーブ', '料理', 'エスニック'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#66BB6A' },
        { name: 'ルッコラ', scientific: 'Eruca vesicaria', description: 'ゴマのような香りとピリッとした辛味。サラダに最高。', tags: ['ハーブ', '野菜', 'サラダ'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#81C784' },
        { name: 'チャイブ', scientific: 'Allium schoenoprasum', description: '西洋アサツキ。ネギの仲間でピンクの可愛い花が咲く。', tags: ['ハーブ', '料理', '花が咲く'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#C8E6C9' },
        { name: 'ワイルドストロベリー', scientific: 'Fragaria vesca', description: '「幸せを呼ぶ」と言われる。小さな甘いイチゴがなる。', tags: ['ハーブ', '実がなる', '縁起物'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#F44336' },
        { name: 'アロエ・アルボレッセンス（キダチアロエ）', scientific: 'Aloe arborescens', description: '「医者いらず」。火傷や切り傷の民間薬として有名。', tags: ['多肉植物', '薬用', '昭和レトロ'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#43A047' },
        { name: 'サンショウ（山椒）', scientific: 'Zanthoxylum piperitum', description: '日本のハーブ。葉も実も香り高い。アゲハチョウが来る。', tags: ['和風', 'ハーブ', '料理'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#33691E' },
        { name: 'ミョウガ（茗荷）', scientific: 'Zingiber mioga', description: '日陰で育つ香味野菜。夏のそうめんの薬味に。', tags: ['野菜', '和風', '耐陰性'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#1B5E20' },
        { name: 'シソ（大葉）', scientific: 'Perilla frutescens', description: '日本の食卓に欠かせない。こぼれ種で勝手に増えるほど丈夫。', tags: ['野菜', '和風', '料理'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#4CAF50' },
        { name: 'ステビア', scientific: 'Stevia rebaudiana', description: '葉に砂糖の300倍の甘みがある天然甘味料。', tags: ['ハーブ', '甘い', 'ふしぎ'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#81C784' },
        { name: 'センテッドゼラニウム（ローズゼラニウム）', scientific: 'Pelargonium graveolens', description: '葉からバラの香りがする。虫除け効果もあるとされる。', tags: ['ハーブ', '香り', '虫除け'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#F06292' },
        { name: 'カレープラント', scientific: 'Helichrysum italicum', description: '葉からカレーの匂いがする不思議なハーブ。銀葉が綺麗。', tags: ['ハーブ', '香り', '銀葉'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#CFD8DC' },
        { name: 'アロマティカス', scientific: 'Coleus amboinicus', description: '多肉質でミントのような甘い香りがする。ゴキブリ除けの噂も。', tags: ['多肉植物', 'ハーブ', '香り'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#AED581' },
        { name: 'ホワイトセージ', scientific: 'Salvia apiana', description: '浄化（スマッジング）に使われる聖なるハーブ。真っ白な葉。', tags: ['ハーブ', '浄化', '銀葉'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#ECEFF1' },
        { name: 'ホーリーバジル（トゥルシー）', scientific: 'Ocimum tenuiflorum', description: 'インドの聖なるハーブ。不老長寿の薬とも言われる。', tags: ['ハーブ', '薬用', '聖なる植物'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#7E57C2' },
        { name: 'ユーカリ・レモン', scientific: 'Eucalyptus citriodora', description: '葉を揉むと強力なレモンの香りがする。虫除けに。', tags: ['大型', '香り', '虫除け'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#C8E6C9' },
        { name: '月桂樹（ローリエ）', scientific: 'Laurus nobilis', description: '煮込み料理に使うローリエの葉。勝利の冠の木。常緑樹。', tags: ['ハーブ', '料理', 'シンボルツリー'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#2E7D32' },
        { name: 'オリーブ', scientific: 'Olea europaea', description: '平和の象徴。銀葉が美しく、実も楽しめる。地中海の雰囲気。', tags: ['大型', 'シンボルツリー', '実がなる'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#90A4AE' },
        { name: 'フェンネル', scientific: 'Foeniculum vulgare', description: '糸のような葉と黄色い花。魚料理のハーブ。背が高くなる。', tags: ['ハーブ', '料理', '大型'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#AED581' },
        // --- Batch 31: Hydroponics & Aquarium Plants (Water & Glass) (30 items) ---
        { name: 'マリモ（西洋マリモ）', scientific: 'Aegagropila linnaei', description: '北海道の阿寒湖などで有名。コロコロして可愛い緑の藻。', tags: ['水生植物', 'かわいい', '癒やし'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#2E7D32' },
        { name: 'アヌビアス・ナナ', scientific: 'Anubias barteri var. nana', description: 'アクアリウムの定番。非常に丈夫で少ない光でも育つ。', tags: ['水草', 'アクアリウム', '耐陰性'], careLevel: 1, match: { sunlight: ['low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#1B5E20' },
        { name: 'ミクロソリウム', scientific: 'Microsorum pteropus', description: 'シダの仲間。流木や石に着生させて水中で楽しむ。', tags: ['水草', 'アクアリウム', 'シダ'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#388E3C' },
        { name: 'ウィローモス', scientific: 'Fontinalis antipyretica', description: '水中の苔。エビの隠れ家や産卵床によく使われる。', tags: ['水草', '苔', 'アクアリウム'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#33691E' },
        { name: 'ホテイアオイ', scientific: 'Pontederia crassipes', description: '金魚鉢に浮かべる定番の浮き草。紫色の美しい花が咲く。', tags: ['水草', '浮き草', '花が咲く'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#BA68C8' },
        { name: 'アマゾンフロッグビット', scientific: 'Limnobium laevigatum', description: '丸い葉を水面に浮かべる可愛い浮き草。メダカの飼育に。', tags: ['水草', '浮き草', 'かわいい'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#81C784' },
        { name: 'ポトス（水耕栽培）', scientific: 'Epipremnum aureum (Hydro)', description: 'ポトスは水差しで簡単に育つ。ガラス瓶で涼しげに。', tags: ['水耕栽培', 'ポトス', '丈夫'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#AED581' },
        { name: 'ミリオンバンブー（水耕栽培）', scientific: 'Dracaena sanderiana (Hydro)', description: '開運の竹。水に挿しておくだけで育つのでデスクに最適。', tags: ['水耕栽培', '縁起物', 'デスク'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#4CAF50' },
        { name: 'ヒヤシンス（水栽培）', scientific: 'Hyacinthus orientalis', description: '球根の水栽培の定番。春に素晴らしい香りの花が咲く。', tags: ['球根', '水栽培', '香り'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#7E57C2' },
        { name: 'クロッカス（水栽培）', scientific: 'Crocus', description: '早春に咲く可愛い花。小さなガラス器で育てられる。', tags: ['球根', '水栽培', 'かわいい'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#FFEB3B' },
        { name: 'アボカド（水耕栽培）', scientific: 'Persea americana', description: '食べた種を水につけて発芽させる。観葉植物として人気。', tags: ['実生', '水耕栽培', 'エコ'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#43A047' },
        { name: 'サボテン水耕栽培', scientific: 'Cactaceae (Hydro)', description: 'サボテンの根を洗い、水につけて育てるおしゃれな方法。', tags: ['サボテン', '水耕栽培', 'おしゃれ'], careLevel: 2, match: { sunlight: ['high', 'medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#80DEEA' },
        { name: 'パキラ（ハイドロカルチャー）', scientific: 'Pachira aquatica (Hydro)', description: '土を使わないハイドロボール栽培で清潔に育てる。', tags: ['清潔', 'ハイドロ', 'パキラ'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#4CAF50' },
        { name: 'ガジュマル（ハイドロカルチャー）', scientific: 'Ficus microcarpa (Hydro)', description: '精霊が宿る木を卓上で清潔に楽しむ。', tags: ['清潔', 'ハイドロ', 'ガジュマル'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#388E3C' },
        { name: 'テーブルヤシ（ハイドロカルチャー）', scientific: 'Chamaedorea elegans (Hydro)', description: '涼しげなヤシをキッチンやトイレの彩りに。', tags: ['清潔', 'ハイドロ', '耐陰性'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#A5D6A7' },
        { name: 'アイビー（水差し）', scientific: 'Hedera helix (Hydro)', description: 'カットしたツルを水に挿しておくだけで何年も生きる。', tags: ['水耕栽培', 'つる性', '丈夫'], careLevel: 1, match: { sunlight: ['any'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#66BB6A' },
        { name: 'スパティフィラム（水耕栽培）', scientific: 'Spathiphyllum (Hydro)', description: '根腐れしにくいので、水耕栽培と相性が非常に良い。', tags: ['水耕栽培', '花が咲く', '耐陰性'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#FFFFFF' },
        { name: 'シンゴニウム（水耕栽培）', scientific: 'Syngonium (Hydro)', description: '水に挿すと白い根が伸びて涼しげなインテリアになる。', tags: ['水耕栽培', 'かわいい', '耐陰性'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#F8BBD0' },
        { name: 'モンステラ（水耕栽培）', scientific: 'Monstera (Hydro)', description: '気根が出た茎を切って水に挿すとダイナミックな飾りに。', tags: ['水耕栽培', '大型', 'モダン'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#388E3C' },
        { name: 'ウォーターマッシュルーム', scientific: 'Hydrocotyle vulgaris', description: 'キノコのような丸い葉が水面から立ち上がる。湿地植物。', tags: ['水辺', 'かわいい', '増える'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#81C784' },
        { name: 'シラサギカヤツリ', scientific: 'Rhynchospora colorata', description: '白鷺が飛んでいるような形の白い苞が美しい湿地植物。', tags: ['水辺', '和風', '涼しげ'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#FFFFFF' },
        { name: 'トクサ', scientific: 'Equisetum hyemale', description: '竹のような真っ直ぐな茎が並ぶ。モダンな和風アレンジに。', tags: ['和風', 'モダン', '水辺'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#2E7D32' },
        { name: 'スイレン（睡蓮）', scientific: 'Nymphaea', description: '水面に浮かぶ花は幻想的。メダカ鉢の主役。', tags: ['水生植物', '花が咲く', 'ビオトープ'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#F06292' },
        { name: 'ハス（蓮）', scientific: 'Nelumbo nucifera', description: '泥の中から清らかな花を咲かせる。仏教のシンボル。', tags: ['水生植物', '花が咲く', '神聖'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#F8BBD0' },
        { name: 'バナナプラント', scientific: 'Nymphoides aquatica', description: 'バナナの房のような緑色の殖芽（根）を持つ水草。', tags: ['水草', 'ユニーク', 'バナナ'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#CDDC39' },
        { name: 'オオサンショウモ', scientific: 'Salvinia molesta', description: 'ベルベットのような質感の浮き草。増えすぎるので注意。', tags: ['浮き草', 'アクアリウム', '増える'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#AED581' },
        { name: 'マツモ（金魚藻）', scientific: 'Ceratophyllum demersum', description: '金魚藻として有名。根がなく水中を漂う。', tags: ['水草', '金魚', '丈夫'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#33691E' },
        { name: 'アナカリス（オオカナダモ）', scientific: 'Egeria densa', description: '学校の理科の実験でも使われる、最強に丈夫な水草。', tags: ['水草', '丈夫', '実験'], careLevel: 1, match: { sunlight: ['any'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#4CAF50' },
        { name: 'バリスネリア', scientific: 'Vallisneria', description: 'テープ状の葉が水流に揺れる様子が美しい。', tags: ['水草', '後景草', '涼しげ'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#2E7D32' },
        { name: 'パールグラス', scientific: 'Hemianthus micranthemoides', description: '真珠のような気泡をつける美しい明るい緑の水草。', tags: ['水草', '気泡', '美しい'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#B2DFDB' },
        // --- Batch 32: Lucky & Feng Shui Plants (Good Fortune) (30 items) ---
        { name: 'パキラ（発財樹）', scientific: 'Pachira aquatica', description: '「発財樹」と呼ばれ、金運アップの植物として有名。商売繁盛に。', tags: ['金運', '風水', '定番'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#4CAF50' },
        { name: 'ガジュマル（多幸の木）', scientific: 'Ficus microcarpa', description: 'キジムナー（精霊）が宿り、多くの幸せをもたらすとされる。', tags: ['幸せ', '縁起物', '精霊'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#388E3C' },
        { name: 'ミリオンバンブー（万年竹）', scientific: 'Dracaena sanderiana', description: '富貴竹とも呼ばれ、開運・長寿の象徴。仕事運アップ。', tags: ['開運', '仕事運', '竹'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#81C784' },
        { name: 'モンステラ（湧き出る水）', scientific: 'Monstera deliciosa', description: 'ハワイ語で「湧き出る水」。金運を湧き出させると言われる。', tags: ['金運', 'ハワイ', '風水'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#2E7D32' },
        { name: 'サンスベリア（魔除け）', scientific: 'Sansevieria trifasciata', description: '鋭い葉が邪気を払うとされる。玄関や鬼門に置くと良い。', tags: ['魔除け', '風水', '空気清浄'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#FDD835' },
        { name: 'ユッカ（青年の木・成長）', scientific: 'Yucca elephantipes', description: '上へ上へと伸びる姿から、成長・発展のシンボルとされる。', tags: ['成長', '仕事運', '開業祝い'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#1B5E20' },
        { name: 'オリーブ（平和・知恵）', scientific: 'Olea europaea', description: '「平和の象徴」。結婚祝いや家庭円満のシンボルとして人気。', tags: ['平和', '結婚祝い', '縁起物'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#90A4AE' },
        { name: 'クワズイモ（出世芋）', scientific: 'Alocasia odora', description: '成長が早く「出世芋」と呼ばれる。仕事運や出世運アップに。', tags: ['出世運', '仕事運', '縁起物'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#A5D6A7' },
        { name: 'ナンテン（難を転ずる）', scientific: 'Nandina domestica', description: '「難を転ずる」に通じ、古くから魔除けとして庭に植えられる。', tags: ['和風', '魔除け', '縁起物'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#D32F2F' },
        { name: 'カネノナルキ（花月）', scientific: 'Crassula ovata', description: 'その名の通り金運の植物。新芽に5円玉を通す仕立てもある。', tags: ['金運', '多肉植物', '昭和'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#388E3C' },
        { name: 'ナギ（梛）', scientific: 'Podocarpus nagi', description: '葉が丈夫で切れないことから「縁結び」「夫婦円満」のお守り。', tags: ['縁結び', '魔除け', '神木'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#2E7D32' },
        { name: 'ワイルドストロベリー（幸運）', scientific: 'Fragaria vesca', description: '実ると幸せが訪れる、結婚できるというジンクスがある。', tags: ['恋愛運', '幸運', 'かわいい'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#F44336' },
        { name: 'ハートカズラ（恋愛運）', scientific: 'Ceropegia woodii', description: '「ラブチェーン」。ハートが連なり、恋愛運アップの植物。', tags: ['恋愛運', 'ハート', 'かわいい'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#BCAAA4' },
        { name: 'アンスリウム（恋愛運）', scientific: 'Anthurium', description: '赤いハートの花言葉は「情熱」。恋愛運を高めるとされる。', tags: ['恋愛運', 'ハート', '情熱'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#D32F2F' },
        { name: 'ドラセナ・マッサンゲアナ（幸福の木）', scientific: 'Dracaena fragrans', description: 'ハワイで「幸福の木」と呼ばれる。新築・開店祝いの定番。', tags: ['幸福', 'お祝い', '定番'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#F0F4C3' },
        { name: 'ゴムの木（陽の気）', scientific: 'Ficus elastica', description: '丸い葉は心を穏やかにし、人間関係運をアップさせるとされる。', tags: ['人間関係', '癒やし', '風水'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#1B5E20' },
        { name: 'ポトス（活性化）', scientific: 'Epipremnum aureum', description: '繁殖力が強く、部屋のエネルギーを活性化させる「自己の活性化」。', tags: ['元気', '風水', '丈夫'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#AED581' },
        { name: 'ストレリチア（輝かしい未来）', scientific: 'Strelitzia', description: '花言葉は「輝かしい未来」。希望や成功をイメージさせる。', tags: ['成功', '未来', 'ポジティブ'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#FF9800' },
        { name: 'コチョウラン（幸福が飛んでくる）', scientific: 'Phalaenopsis', description: '花言葉は「幸福が飛んでくる」。最高級の縁起物。', tags: ['幸福', '高級', 'お祝い'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#FFFFFF' },
        { name: 'ペペロミア（調和）', scientific: 'Peperomia', description: '丸い葉が安らぎを与え、家族の調和を図るとされる。', tags: ['調和', '家族', '癒やし'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#43A047' },
        { name: 'テーブルヤシ（健康運）', scientific: 'Chamaedorea elegans', description: '鋭い葉が気を刺激し、健康運や仕事運を高めるとされる。', tags: ['健康運', '仕事運', 'トイレ'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#A5D6A7' },
        { name: 'サボテン（邪気払い）', scientific: 'Cactaceae', description: 'トゲが邪気を跳ね返す。トラブル回避やストーカー除けに。', tags: ['魔除け', '防御', 'トゲ'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#8D6E63' },
        { name: 'アロエ（健康）', scientific: 'Aloe', description: '「健康」の象徴。怪我や病気を治す力から。', tags: ['健康', '薬用', 'お守り'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#66BB6A' },
        { name: '月桂樹（勝利・栄光）', scientific: 'Laurus nobilis', description: '古代ギリシャで勝者に送られた冠。勝利や栄光のシンボル。', tags: ['勝利', '栄光', 'お守り'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#2E7D32' },
        { name: 'オーガスタ（円満）', scientific: 'Strelitzia nicolai', description: '大きな丸い葉が人間関係を円満にすると言われている。', tags: ['円満', '人間関係', '癒やし'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#4CAF50' },
        { name: 'シャコバサボテン（美吉野）', scientific: 'Schlumbergera', description: '花言葉は「美しい眺め」。明るい未来を予感させる。', tags: ['美', '未来', '花が咲く'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#F06292' },
        { name: 'クロトン（変葉木）', scientific: 'Codiaeum variegatum', description: 'カラフルな葉が陽の気を発し、部屋を明るくする。', tags: ['元気', '陽気', 'カラフル'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#FFC107' },
        { name: 'マツ（松）', scientific: 'Pinus', description: '「不老長寿」の象徴。お正月の縁起物として欠かせない。', tags: ['長寿', '和風', '縁起物'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#2E7D32' },
        { name: 'センリョウ（千両）', scientific: 'Sarcandra glabra', description: '赤い実が豊かさの象徴。お正月の飾り花。', tags: ['金運', 'お正月', '和風'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#D32F2F' },
        { name: 'マンリョウ（万両）', scientific: 'Ardisia crenata', description: '千両よりもさらに実が多く、金運などの縁起が良い。', tags: ['金運', '商売繁盛', '和風'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#C62828' },
        { name: 'オモト（万年青）', scientific: 'Rohdea japonica', description: '「万年青」と書き、長寿や引越しの際の縁起物として有名。', tags: ['長寿', '引越し', '伝統'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#1B5E20' },
        { name: 'サカキ（榊）', scientific: 'Cleyera japonica', description: '神棚に供える神聖な木。神と人間界の境界を示す。', tags: ['神聖', '神道', '和風'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#2E7D32' },
        // --- Batch 33: Japanese Wildflowers & Tea Ceremony Plants (Wabi-Sabi) (30 items) ---
        { name: 'ホトトギス', scientific: 'Tricyrtis hirta', description: '鳥のホトトギスの胸の模様に似た斑点のある花。秋の茶花。', tags: ['山野草', '茶花', '秋'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#9C27B0' },
        { name: 'シュウカイドウ（秋海棠）', scientific: 'Begonia grandis', description: '日本に自生するベゴニアの仲間。半日陰を好む。', tags: ['山野草', '茶花', '耐陰性'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#F48FB1' },
        { name: 'ミズヒキ', scientific: 'Persicaria filiformis', description: '紅白の水引のような細い花穂が伸びる。縁起が良い。', tags: ['山野草', '茶花', '縁起物'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#D32F2F' },
        { name: 'ワレモコウ（吾亦紅）', scientific: 'Sanguisorba officinalis', description: '秋の野原を彩る、赤い小さな花穂。風情がある。', tags: ['山野草', '茶花', '秋'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#8D6E63' },
        { name: 'フクジュソウ（福寿草）', scientific: 'Adonis ramosa', description: '春一番に黄金色の花を咲かせる。お正月の縁起物。', tags: ['山野草', '春', '縁起物'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#FDD835' },
        { name: 'カタクリ', scientific: 'Erythronium japonicum', description: '「春の妖精」。紫色の可憐な花がうつむいて咲く。', tags: ['山野草', '春', '可憐'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#BA68C8' },
        { name: 'ニリンソウ', scientific: 'Anemone flaccida', description: '一本の茎から二輪の花が咲く。春の林床を白く彩る。', tags: ['山野草', '春', '群生'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#FFFFFF' },
        { name: 'イカリソウ', scientific: 'Epimedium grandiflorum', description: '船の錨（いかり）のような独特の形の花。', tags: ['山野草', '茶花', 'ユニーク'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#E1BEE7' },
        { name: 'レンゲショウマ', scientific: 'Anemonopsis macrophylla', description: '「森の妖精」。薄紫のランプのような花が下向きに咲く。', tags: ['山野草', '夏', '美しい'], careLevel: 3, match: { sunlight: ['medium', 'low'], experience: ['expert'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#E1BEE7' },
        { name: 'サギソウ', scientific: 'Pecteilis radiata', description: '白鷺が飛んでいる姿そのものの形をしたラン。湿地性。', tags: ['山野草', '蘭', '湿地'], careLevel: 2, match: { sunlight: ['high'], experience: ['Intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#FFFFFF' },
        { name: 'リンドウ（竜胆）', scientific: 'Gentiana scabra', description: '秋を代表する青紫の花。根は薬用になる。', tags: ['山野草', '秋', '青い花'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#304FFE' },
        { name: 'キキョウ（桔梗）', scientific: 'Platycodon grandiflorus', description: '秋の七草の一つ。星型の青い花が美しい。', tags: ['山野草', '秋', '和風'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#3F51B5' },
        { name: 'ナデシコ（撫子）', scientific: 'Dianthus superbus', description: '「大和撫子」。繊細なフリルのある花びらが特徴。', tags: ['山野草', '秋', '可憐'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#F06292' },
        { name: 'オミナエシ（女郎花）', scientific: 'Patrinia scabiosifolia', description: '秋の七草。黄色い小花を傘状に咲かせる。', tags: ['山野草', '秋', '黄色い花'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#FFEB3B' },
        { name: 'フジバカマ（藤袴）', scientific: 'Eupatorium japonicum', description: '秋の七草。桜餅のような甘い香りがする。アサギマダラが好む。', tags: ['山野草', '秋', '香り'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#E1BEE7' },
        { name: 'ススキ（尾花）', scientific: 'Miscanthus sinensis', description: '秋のお月見に欠かせない。風になびく姿が風流。', tags: ['山野草', '秋', '和風'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#BCAAA4' },
        { name: 'ツワブキ', scientific: 'Farfugium japonicum', description: '日陰でも育ち、晩秋に黄色い花を咲かせる。葉も美しい。', tags: ['山野草', '耐陰性', '常緑'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#FDD835' },
        { name: 'ヤブコウジ（十両）', scientific: 'Ardisia japonica', description: '赤い実が可愛らしい。グランドカバーや盆栽に。', tags: ['山野草', '縁起物', '実がなる'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#D32F2F' },
        { name: 'バイカオウレン', scientific: 'Coptis quinquefolia', description: '早春に梅に似た白い小花を咲かせる。非常に可憐。', tags: ['山野草', '早春', '可憐'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#FFFFFF' },
        { name: 'ユキワリソウ（オオミスミソウ）', scientific: 'Hepatica nobilis', description: '雪解けとともに咲く多彩な色の花。愛好家が多い。', tags: ['山野草', '早春', 'コレクション'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#EC407A' },
        { name: 'エビネ', scientific: 'Calanthe discolor', description: '日本の野生ラン。地味ながら味わい深い花を咲かせる。', tags: ['山野草', '蘭', '和風'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#795548' },
        { name: 'シュンラン', scientific: 'Cymbidium goeringii', description: '春の里山を代表する野生ラン。食用にもなる（蘭茶）。', tags: ['山野草', '蘭', '春'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#AED581' },
        { name: 'アサガオ（朝顔）', scientific: 'Ipomoea nil', description: '日本の夏を代表する花。江戸時代から品種改良が盛ん。', tags: ['一年草', '夏', 'つる性'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#304FFE' },
        { name: 'ドクダミ（八重）', scientific: 'Houttuynia cordata', description: '独特の匂いがあるが、白い花は清楚で美しい。お茶や薬草にも。', tags: ['野草', '薬草', '耐陰性'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#FFFFFF' },
        { name: 'ネジバナ', scientific: 'Spiranthes sinensis', description: '芝生などに生える野生ラン。ピンクの花が螺旋状に咲く。', tags: ['野草', '蘭', 'かわいい'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#F48FB1' },
        { name: 'スミレ', scientific: 'Viola mandshurica', description: 'アスファルトの隙間からでも咲く「ど根性」な春の花。', tags: ['野草', '春', 'かわいい'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#7E57C2' },
        { name: 'タンポポ（ニホンタンポポ）', scientific: 'Taraxacum', description: '春の野原の定番。根が深く非常に生命力が強い。', tags: ['野草', '春', '黄色い花'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#FDD835' },
        { name: 'レンゲソウ', scientific: 'Astragalus sinicus', description: '春の田んぼ一面をピンクに染める。緑肥にもなる。', tags: ['野草', '春', '群生'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#F48FB1' },
        { name: 'シロツメクサ（クローバー）', scientific: 'Trifolium repens', description: '四つ葉を見つけると幸せになれる。花冠を作って遊ぶ。', tags: ['野草', '春', 'グランドカバー'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#FFFFFF' },
        { name: 'カラスウリ', scientific: 'Trichosanthes cucumeroides', description: '夜にレースのような白い花が咲く。秋には赤い実がなる。', tags: ['野草', '夜', '実がなる'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#FF5722' },
        // --- Batch 34: Alpine Plants & Rock Garden (Cool & Hardy) (30 items) ---
        { name: 'コマクサ', scientific: 'Dicentra peregrina', description: '「高山植物の女王」。砂礫地に咲くピンクの馬の顔のような花。', tags: ['高山植物', '女王', '難易度高'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#F48FB1' },
        { name: 'エーデルワイス（あすなろ）', scientific: 'Leontopodium nivale', description: 'アルプスの象徴。星形の白い綿毛のような花。', tags: ['高山植物', 'アルプス', '歌'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#FFFFFF' },
        { name: 'クロユリ', scientific: 'Fritillaria camtschatcensis', description: '「恋の花」とも「呪いの花」とも。黒紫色の神秘的な花。', tags: ['高山植物', '伝説', '黒い花'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#3E2723' },
        { name: 'チングルマ', scientific: 'Geum pentapetalum', description: '白い花が咲き、その後綿毛が風車（稚児車）のようになる。', tags: ['高山植物', '紅葉', '群生'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#FFFFFF' },
        { name: 'ハクサンイチゲ', scientific: 'Anemone narcissiflora', description: '高山のお花畑を作る代表的な白い花。', tags: ['高山植物', 'お花畑', '可憐'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#FFFFFF' },
        { name: 'トリカブト', scientific: 'Aconitum', description: '猛毒で有名だが、紫色の兜のような花は美しい。', tags: ['高山植物', '毒', '青い花'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#304FFE' },
        { name: 'イワベンケイ', scientific: 'Rhodiola rosea', description: '岩場に生える多肉植物。強壮ハーブとしても知られる。', tags: ['高山植物', '多肉植物', '丈夫'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#FDD835' },
        { name: 'ウルップソウ', scientific: 'Lagotis glauca', description: '北海道や北アルプスの一部に咲く希少種。青紫の花穂。', tags: ['高山植物', '希少', '青い花'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#5C6BC0' },
        { name: 'ヒマラヤの青いケシ', scientific: 'Meconopsis betonicifolia', description: '「天上の妖精」。透き通るような青色が神秘的。栽培困難。', tags: ['高山植物', '幻の花', '青い花'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#42A5F5' },
        { name: 'レウイシア', scientific: 'Lewisia cotyledon', description: '北米原産の多肉質な高山植物。花色が非常にカラフル。', tags: ['高山植物', 'ロックガーデン', 'かわいい'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#FF4081' },
        { name: 'アルメリア（ハマカンザシ）', scientific: 'Armeria maritima', description: '簪（かんざし）のようなピンクの丸い花が可愛い。海辺にも育つ。', tags: ['ロックガーデン', 'かわいい', '丈夫'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#F48FB1' },
        { name: 'シレネ・ユニフローラ', scientific: 'Silene uniflora', description: '袋状のガクがユニークな花。這うように広がる。斑入り葉も綺麗。', tags: ['ロックガーデン', 'グランドカバー', 'ユニーク'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#FFFFFF' },
        { name: 'タイム・ロンギカウリス', scientific: 'Thymus longicaulis', description: '春にピンクの絨毯になる。踏圧に強くグランドカバーに最適。', tags: ['ロックガーデン', 'ハーブ', '花畑'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#F06292' },
        { name: 'セダム（マンネングサ）', scientific: 'Sedum', description: '岩場や屋上緑化に使われる。ちぎって撒くだけで増える。', tags: ['ロックガーデン', '多肉植物', '最強'], careLevel: 1, match: { sunlight: ['any'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#AED581' },
        { name: 'ミセバヤ', scientific: 'Hylotelephium sieboldii', description: '古くから日本で愛される多肉植物。枝垂れてピンクの花が咲く。', tags: ['ロックガーデン', '多肉植物', '和風'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#F06292' },
        { name: 'ツメレンゲ', scientific: 'Orostachys japonica', description: '古民家の瓦屋根の上などに生える。花が咲くと枯れる。', tags: ['ロックガーデン', '多肉植物', '和風'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#B0BEC5' },
        { name: 'イワヒバ（岩松）', scientific: 'Selaginella tamariscina', description: '乾燥すると丸まって休眠し、水をもらうと復活するシダ植物。', tags: ['シダ', '古典園芸', '復活'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#388E3C' },
        { name: 'リンドウ（アルペンブルー）', scientific: 'Gentiana acaulis', description: '目の覚めるような濃い青色の花が地面を這うように咲く。', tags: ['高山植物', '青い花', 'ロックガーデン'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#1A237E' },
        { name: 'ウスユキソウ', scientific: 'Leontopodium japonicum', description: '日本のエーデルワイス。薄く雪を被ったような葉が美しい。', tags: ['高山植物', '和風', '銀葉'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#EEEEEE' },
        { name: 'イブキジャコウソウ', scientific: 'Thymus quinquecostatus', description: '日本原産のタイム。踏むと良い香りがする。', tags: ['高山植物', 'ハーブ', '香り'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#F48FB1' },
        { name: 'キリンソウ', scientific: 'Phedimus aizoon', description: '黄色い星型の花が咲く多肉質の野草。非常に丈夫。', tags: ['野草', '多肉植物', '黄色い花'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#FDD835' },
        { name: 'マツムシソウ（スカビオサ）', scientific: 'Scabiosa japonica', description: '秋風に揺れる紫色の花。園芸用としても人気。', tags: ['山野草', '秋', '花が咲く'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#9575CD' },
        { name: 'オキナグサ', scientific: 'Pulsatilla cernua', description: '花後の綿毛が老人の銀髪に見えることから「翁草」。', tags: ['山野草', '綿毛', '和風'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#5D4037' },
        { name: 'ユリ（ヤマユリ）', scientific: 'Lilium auratum', description: '「ユリの王様」。強烈な芳香と豪華な大輪の花。', tags: ['球根', '香り', '豪華'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#FFFFFF' },
        { name: 'ウバユリ', scientific: 'Cardiocrinum cordatum', description: '花の時期には葉が枯れている（歯がない＝姥）ことが名の由来。', tags: ['山野草', 'ユニーク', '林床'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#DCEDC8' },
        { name: 'ショウジョウバカマ', scientific: 'Helonias orientalis', description: '常緑のロゼット葉からピンクの花茎が伸びる。', tags: ['山野草', '湿地', '常緑'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#F06292' },
        { name: 'ヒトリシズカ', scientific: 'Chloranthus japonicus', description: 'ブラシのような白い花穂を一本立てて咲く。', tags: ['山野草', '茶花', '静寂'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#FFFFFF' },
        { name: 'フタリシズカ', scientific: 'Chloranthus serratus', description: '花穂が二本（または数本）並んで咲く。', tags: ['山野草', '茶花', '林床'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#FFFFFF' },
        { name: 'ダイモンジソウ', scientific: 'Saxifraga fortunei', description: '「大」の字のような形の花が咲く。渓流沿いの岩場に生える。', tags: ['山野草', '水辺', '可憐'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#FFFFFF' },
        { name: 'ロックソープワート', scientific: 'Saponaria ocymoides', description: 'ピンクの小花がカーペット状に広がる。石鹸草の仲間。', tags: ['ロックガーデン', 'グランドカバー', '丈夫'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#F48FB1' },
        // --- Batch 35: Moss & Nature Style (Wabi-Sabi Field) (30 items) ---
        { name: 'スナゴケ', scientific: 'Racomitrium canescens', description: '日向に強く、乾燥すると縮れて耐える。屋上緑化にも。', tags: ['苔', '丈夫', '日向'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#AED581' },
        { name: 'ハイゴケ', scientific: 'Hypnum plumaeforme', description: '這うように広がる。苔玉やテラリウムの定番。', tags: ['苔', '苔玉', '定番'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#689F38' },
        { name: 'スギゴケ', scientific: 'Polytrichum juniperinum', description: '杉の苗のような姿。日本庭園の主役。意外と維持が難しい。', tags: ['苔', '和風', '日本庭園'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#1B5E20' },
        { name: 'ホソバオキナゴケ（ヤマゴケ）', scientific: 'Leucobryum juniperoideum', description: '饅頭のようなこんもりした形になる。盆栽の下草に。', tags: ['苔', '盆栽', '和風'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#C8E6C9' },
        { name: 'タマゴケ', scientific: 'Bartramia pomiformis', description: '春に丸い胞子体（朔）をつける姿が可愛い。湿気を好む。', tags: ['苔', 'テラリウム', 'かわいい'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#81C784' },
        { name: 'カモジゴケ', scientific: 'Dicranum scoparium', description: '動物の毛のようなフサフサした質感。乾燥に強い。', tags: ['苔', 'テラリウム', 'フサフサ'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#388E3C' },
        { name: 'ヒノキゴケ', scientific: 'Pyrrhobryum dozyanum', description: '「イタチのシッポ」。大型でフサフサしており人気が高い。', tags: ['苔', 'テラリウム', '大型'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#4CAF50' },
        { name: 'ギンゴケ', scientific: 'Bryum argenteum', description: '都会のコンクリートの隙間によく生えている白っぽい苔。', tags: ['苔', '都会', '丈夫'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#CFD8DC' },
        { name: 'ゼニゴケ', scientific: 'Marchantia polymorpha', description: '庭の厄介者扱いされるが、テラリウムで見ると原始的で面白い。', tags: ['苔', '原始的', '嫌われ者'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#2E7D32' },
        { name: 'ジャゴケ', scientific: 'Conocephalum conicum', description: '蛇の鱗のような模様がある。湿った岩場に生える。', tags: ['苔', 'ワイルド', '爬虫類'], careLevel: 1, match: { sunlight: ['low'], experience: ['beginner'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#1B5E20' },
        { name: 'シノブゴケ', scientific: 'Thuidium', description: 'シダの葉のようにレース状に広がる美しい苔。', tags: ['苔', 'テラリウム', '美しい'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#66BB6A' },
        { name: 'コツボゴケ', scientific: 'Plagiomnium acutum', description: 'キラキラと透き通るような緑の葉が美しい。水を好む。', tags: ['苔', '透明感', '人気'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#76FF03' },
        { name: 'マメヅタ', scientific: 'Lemmaphyllum microphyllum', description: '丸い葉が岩や木を這い上がるシダ植物。苔玉のアクセントに。', tags: ['シダ', 'かわいい', '着生'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#AED581' },
        { name: 'ノキシノブ', scientific: 'Lepisorus thunbergianus', description: '古い家の軒先や樹木に着生する身近なシダ。', tags: ['シダ', '和風', '丈夫'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#558B2F' },
        { name: 'ベニシダ', scientific: 'Dryopteris erythrosora', description: '新芽が赤く、成長すると緑になる。庭の下草によくある。', tags: ['シダ', '紅葉', '丈夫'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#D84315' },
        { name: 'クサソテツ（コゴミ）', scientific: 'Matteuccia struthiopteris', description: '春の山菜「コゴミ」としても有名。綺麗な漏斗状に広がる。', tags: ['シダ', '山菜', '大型'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#7CB342' },
        { name: 'ゼンマイ', scientific: 'Osmunda japonica', description: '春の山菜。渦巻き状の新芽がユーモラス。', tags: ['シダ', '山菜', '渦巻き'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#8D6E63' },
        { name: 'ワラビ', scientific: 'Pteridium aquilinum', description: '日当たりの良い野原に群生する。最強の地下茎を持つ。', tags: ['シダ', '山菜', '群生'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#5D4037' },
        { name: 'ウオノメゴケ（ハナゴケ）', scientific: 'Cladonia rangiferina', description: '「トナカイゴケ」とも。実は苔ではなく地衣類。', tags: ['地衣類', '銀色', 'ジオラマ'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#ECEFF1' },
        { name: 'サルオガセ', scientific: 'Usnea', description: '霧の多い森で木から垂れ下がる地衣類。とろろ昆布のよう。', tags: ['地衣類', '神秘的', '森林'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#CFD8DC' },
        { name: 'チドメグサ', scientific: 'Hydrocotyle sibthorpioides', description: '丸い小さな葉が地面を覆う。雑草扱いされるが可愛い。', tags: ['グランドカバー', '雑草', 'かわいい'], careLevel: 1, match: { sunlight: ['any'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#66BB6A' },
        { name: 'ヒメイワダレソウ（リッピア）', scientific: 'Phyla canescens', description: '踏圧に非常に強く、白い小花が咲く最強のグランドカバー。', tags: ['グランドカバー', '花が咲く', '最強'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#E0E0E0' },
        { name: 'ディコンドラ（ダイコンドラ）', scientific: 'Dichondra repens', description: 'ハート型の葉が密生する。シルバーリーフの品種も人気。', tags: ['グランドカバー', 'ハート', 'シルバー'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#B0BEC5' },
        { name: 'アジュガ（十二単）', scientific: 'Ajuga reptans', description: '日陰でも育ち、青紫の花穂を立てる。銅葉の品種もある。', tags: ['グランドカバー', '耐陰性', '花が咲く'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#3F51B5' },
        { name: 'リュウノヒゲ（ジャノヒゲ）', scientific: 'Ophiopogon japonicus', description: '日本庭園の下草の定番。非常に丈夫で日陰にも強い。', tags: ['グランドカバー', '和風', '丈夫'], careLevel: 1, match: { sunlight: ['any'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#1B5E20' },
        { name: 'ヤブラン', scientific: 'Liriope muscari', description: '秋に紫色の花穂をつける。斑入り葉は明るい印象。', tags: ['グランドカバー', '花が咲く', '丈夫'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#7E57C2' },
        { name: 'フッキソウ（富貴草）', scientific: 'Pachysandra terminalis', description: '「富貴草」。常緑で繁栄を意味し、日陰のグランドカバーに。', tags: ['グランドカバー', '縁起物', '耐陰性'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#388E3C' },
        { name: 'マンネングサ（メキシコマンネングサ）', scientific: 'Sedum mexicanum', description: '鮮やかな黄緑色の葉。道路の植え込みなどによくある。', tags: ['グランドカバー', '多肉植物', '丈夫'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#C6FF00' },
        { name: 'ハツユキカズラ', scientific: 'Trachelospermum asiaticum', description: '新芽がピンクや白に変化し、初雪のように美しい。', tags: ['グランドカバー', 'カラフル', '丈夫'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#F8BBD0' },
        { name: 'ツルニチニチソウ', scientific: 'Vinca major', description: '紫色の風車のような花が咲く蔓植物。斑入りが人気。', tags: ['グランドカバー', '花が咲く', 'つる性'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#7E57C2' },

        // --- Batch 36: World's Giant & Rare Trees (Baobab, Dragon Blood, etc.) (30 items) ---
        { name: 'バオバブ', scientific: 'Adansonia digitata', description: '「星の王子さま」にも登場するアフリカの巨木。幹に大量の水を蓄える。', tags: ['巨木', '珍奇植物', 'アフリカ'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#8D6E63' },
        { name: '竜血樹（ドラゴンブラッド）', scientific: 'Dracaena cinnabari', description: '赤い樹液を流す伝説の木。傘を広げたような独特の樹形。', tags: ['巨木', '珍奇植物', '伝説'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#D32F2F' },
        { name: 'ジャイアント・セコイア', scientific: 'Sequoiadendron giganteum', description: '世界で最も体積が大きくなる木。長寿で威厳がある。', tags: ['巨木', '針葉樹', '長寿'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#5D4037' },
        { name: 'レインボーユーカリ', scientific: 'Eucalyptus deglupta', description: '樹皮が剥がれると虹色が現れる、芸術的な美しさを持つ木。', tags: ['巨木', 'カラフル', '美しい'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#009688' },
        { name: 'タビビトノキ（旅人の木）', scientific: 'Ravenala madagascariensis', description: '葉柄に水を溜め、旅人の喉を潤したという伝説。巨大な扇形。', tags: ['巨木', 'マダガスカル', '南国'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#4CAF50' },
        { name: 'ベンガレンシス（ベンガル菩提樹）', scientific: 'Ficus benghalensis', description: '気根を垂らして広がる「絞め殺しの木」。白い幹と緑の葉が美しい。', tags: ['ゴムの木', '観葉植物', '聖なる木'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#AED581' },
        { name: 'モンキーパズルツリー', scientific: 'Araucaria araucana', description: '「猿も登れない」鋭い葉を持つ、古代から生き残る針葉樹。', tags: ['巨木', '化石植物', 'チリ'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#33691E' },
        { name: 'カポック（シェフレラではない）', scientific: 'Ceiba pentandra', description: '巨大な板根（バンコン）が特徴。綿が採れるパンヤノキ。', tags: ['巨木', '板根', '熱帯'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#8D6E63' },
        { name: 'ボトルツリー', scientific: 'Brachychiton rupestris', description: '幹がワインボトルのように太くなる。オーストラリア原産。', tags: ['巨木', 'ユニーク', 'オオサカ'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#8D6E63' },
        { name: 'アコウ（絞め殺しの木）', scientific: 'Ficus superba', description: '日本の暖地にも自生するイチジクの仲間。タコ足状の根が凄い。', tags: ['巨木', '和風', 'ワイルド'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#6D4C41' },
        { name: 'ジュラシック・ツリー', scientific: 'Wollemia nobilis', description: '世界最古の種子植物の一つ。恐竜時代から生き続ける。', tags: ['巨木', '化石植物', '希少'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#2E7D32' },
        { name: 'ユーカリ・グニー', scientific: 'Eucalyptus gunnii', description: '銀色の丸い葉が可愛い。成長が非常に早く、巨木になる。', tags: ['庭木', '香り', '銀葉'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#B0BEC5' },
        { name: 'ミモザ（ギンヨウアカシア）', scientific: 'Acacia baileyana', description: '春に黄色いポンポンのような花を木一杯に咲かせる。', tags: ['庭木', '春', '黄色い花'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#FDD835' },
        { name: 'ジャカランダ', scientific: 'Jacaranda mimosifolia', description: '「世界三大花木」。紫色の桜のような花を咲かせる。', tags: ['花木', '紫の花', '南国'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#9575CD' },
        { name: 'ホウオウボク（鳳凰木）', scientific: 'Delonix regia', description: '「世界三大花木」。炎のような赤い花とシダのような葉。', tags: ['花木', '赤い花', '南国'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#D32F2F' },
        { name: 'カエンボク（火炎木）', scientific: 'Spathodea campanulata', description: '「世界三大花木」。チューリップのような赤い巨大な花。', tags: ['花木', '赤い花', '南国'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#F44336' },
        { name: 'ナンヨウスギ（アローカリア）', scientific: 'Araucaria heterophylla', description: '整ったピラミッド型に育つ。室内観葉植物としても人気。', tags: ['針葉樹', 'クリスマス', '観葉植物'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#4CAF50' },
        { name: 'ソテツ（蘇鉄）', scientific: 'Cycas revoluta', description: '鉄を食うという伝説。恐竜時代を思わせる原始的な姿。', tags: ['和風', 'ヤシっぽい', '丈夫'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#388E3C' },
        { name: 'カナリーヤシ（フェニックス）', scientific: 'Phoenix canariensis', description: '南国ムード満点。リゾート地によく植えられる巨大なヤシ。', tags: ['ヤシ', '南国', 'リゾート'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#FFB74D' },
        { name: 'ワシントンヤシ', scientific: 'Washingtonia', description: '空高くスッと伸びるヤシ。カリフォルニアの象徴。', tags: ['ヤシ', '西海岸', '大型'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#8D6E63' },
        { name: 'ビロウ（蒲葵）', scientific: 'Livistona chinensis', description: '葉先が垂れ下がる優美なヤシ。和風の庭にも合う。', tags: ['ヤシ', '和風', 'アジアン'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#66BB6A' },
        { name: 'クスノキ（楠）', scientific: 'Cinnamomum camphora', description: '「トトロの木」。防虫効果のある樟脳が採れる。', tags: ['巨木', '和風', '香り'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#2E7D32' },
        { name: 'イチョウ（銀杏）', scientific: 'Ginkgo biloba', description: '「生きた化石」。秋の黄金色の紅葉は圧巻。', tags: ['落葉樹', '紅葉', '化石植物'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#FFEB3B' },
        { name: 'メタセコイア', scientific: 'Metasequoia glyptostroboides', description: '絶滅したと思われていたが中国で発見された「生きた化石」。', tags: ['落葉樹', '紅葉', '化石植物'], careLevel: 2, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#FF7043' },
        { name: 'デイゴ', scientific: 'Erythrina variegata', description: '沖縄の県花。真っ赤な花が南国の空に映える。', tags: ['花木', '沖縄', '赤い花'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#D32F2F' },
        { name: 'プルメリア', scientific: 'Plumeria', description: 'ハワイのレイに使われる。甘く濃厚な香りの可愛い花。', tags: ['花木', '香り', 'ハワイ'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#FFF176' },
        { name: 'センダン', scientific: 'Melia azedarach', description: '「栴檀は双葉より芳し」。初夏に薄紫の小花が雲のように咲く。', tags: ['花木', '和風', '香り'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#E1BEE7' },
        { name: 'ネムノキ', scientific: 'Albizia julibrissin', description: '刷毛のようなピンクの花。夜になると葉を閉じて眠る。', tags: ['花木', '就眠運動', 'エキゾチック'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#F48FB1' },
        { name: 'サルスベリ（百日紅）', scientific: 'Lagerstroemia indica', description: '幹がツルツルしている。夏の間長く咲き続ける。', tags: ['花木', '夏', '庭木'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#EC407A' },
        { name: 'ハナミズキ', scientific: 'Cornus florida', description: '春を告げる薄紅色の花。洋風の庭木として大人気。', tags: ['花木', '春', '人気'], careLevel: 1, match: { sunlight: ['medium', 'high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#F8BBD0' },

        // --- Batch 37: Waterside & Wetland Plants (Aquatic & Marsh) (30 items) ---
        { name: 'マングローブ（オヒルギ）', scientific: 'Bruguiera gymnorhiza', description: '塩水でも育つ不思議な植物。タコ足状の根が特徴。', tags: ['水辺', '沖縄', 'ユニーク'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#2E7D32' },
        { name: 'パピルス', scientific: 'Cyperus papyrus', description: '古代エジプトで紙の原料になった。花火のような姿が涼しげ。', tags: ['水辺', '古代', 'エジプト'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#AED581' },
        { name: 'ハス（蓮）', scientific: 'Nelumbo nucifera', description: '泥の中から清らかな花を咲かせる。仏教のシンボル。', tags: ['水辺', '花', '神聖'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#F8BBD0' },
        { name: 'スイレン（睡蓮）', scientific: 'Nymphaea', description: 'モネの絵画のように水面に浮かんで咲く。', tags: ['水辺', '花', 'ビオトープ'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#FFFFFF' },
        { name: 'オニバス', scientific: 'Euryale ferox', description: '巨大なトゲだらけの葉を水面に広げる。絶滅危惧種。', tags: ['水辺', '巨大', 'ワイルド'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#5D4037' },
        { name: 'ガマ（蒲）', scientific: 'Typha latifolia', description: 'フランクフルトのような茶色の穂が特徴。因幡の白兎伝説。', tags: ['水辺', '和風', 'ユニーク'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#795548' },
        { name: 'ヨシ（葦）', scientific: 'Phragmites australis', description: '「人間は考える葦である」。水質浄化作用がある。', tags: ['水辺', '和風', '浄化'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#D7CCC8' },
        { name: 'トクサ', scientific: 'Equisetum hyemale', description: '「砥草」。竹のような節がある茎が直立する。和モダンに最適。', tags: ['水辺', '和風', 'モダン'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#33691E' },
        { name: 'ミズバショウ（水芭蕉）', scientific: 'Lysichiton camtschatcensis', description: '「夏の思い出」。湿地に白い仏炎苞が咲く姿は尾瀬の象徴。', tags: ['水辺', '尾瀬', '清楚'], careLevel: 3, match: { sunlight: ['medium', 'low'], experience: ['expert'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#FFFFFF' },
        { name: 'ハナショウブ（花菖蒲）', scientific: 'Iris ensata', description: '梅雨の時期にしっとりと咲く。日本画のような美しさ。', tags: ['水辺', '和風', '梅雨'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#304FFE' },
        { name: 'カキツバタ', scientific: 'Iris laevigata', description: '「いずれアヤメかカキツバタ」。水湿地を好む。', tags: ['水辺', '和風', '古典'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#3F51B5' },
        { name: 'コウホネ', scientific: 'Nuphar japonica', description: '水面から黄色い花を突き出して咲かせる。骨のような根茎。', tags: ['水辺', '和風', '黄色い花'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#FDD835' },
        { name: 'アサザ', scientific: 'Nymphoides peltata', description: '黄色のフリルのある花が水面に咲く。絶滅危惧種。', tags: ['水辺', '可憐', 'ビオトープ'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#FDD835' },
        { name: 'ホテイアオイ', scientific: 'Pontederia crassipes', description: '金魚飼育の定番。薄紫の美しい花が咲くが、増えすぎる。', tags: ['水辺', '金魚', '浮き草'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#B39DDB' },
        { name: 'オオカナダモ（アナカリス）', scientific: 'Egeria densa', description: '金魚藻の代表。実験でおなじみ。非常に丈夫。', tags: ['水草', '金魚', '実験'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#4CAF50' },
        { name: 'マツモ', scientific: 'Ceratophyllum demersum', description: '根を持たない浮遊植物。金魚やメダカの産卵床に最適。', tags: ['水草', 'メダカ', '和風'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#388E3C' },
        { name: 'ウィローモス', scientific: 'Fontinalis antipyretica', description: '水中の苔。流木に活着させると自然な雰囲気になる。', tags: ['水草', '苔', 'アクアリウム'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#1B5E20' },
        { name: 'アマゾンソード', scientific: 'Echinodorus grisebachii', description: 'アクアリウムの定番。剣のような葉が茂る。', tags: ['水草', '熱帯魚', '丈夫'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#43A047' },
        { name: 'アヌビアス・ナナ', scientific: 'Anubias barteri var. nana', description: '石や流木に活着する。非常に丈夫で枯れにくい。', tags: ['水草', '耐陰性', '最強'], careLevel: 1, match: { sunlight: ['low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#2E7D32' },
        { name: 'ミクロソリウム', scientific: 'Microsorum pteropus', description: '水生のシダ植物。透明感のある葉が美しい。', tags: ['水草', 'シダ', '陰性水草'], careLevel: 1, match: { sunlight: ['low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#66BB6A' },
        { name: 'グロッソスティグマ', scientific: 'Glossostigma elatinoides', description: '緑の絨毯を作る前景草の人気種。強い光が必要。', tags: ['水草', '絨毯', '美しい'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#76FF03' },
        { name: 'クリプトコリネ', scientific: 'Cryptocoryne', description: '水質や環境によって葉の色や形が変わる。コレクション性あり。', tags: ['水草', '渋い', 'コレクション'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#795548' },
        { name: 'ブセファランドラ', scientific: 'Bucephalandra', description: 'ボルネオ島の固有種。水中でラメのように輝く葉を持つ。', tags: ['水草', '宝石', 'レア'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#006064' },
        { name: 'シラサギカヤツリ', scientific: 'Rhynchospora colorata', description: '白鷺が舞っているような白い苞が特徴。涼しげな水辺植物。', tags: ['水辺', '白い花', '涼しげ'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#FFFFFF' },
        { name: 'ミソハギ', scientific: 'Lythrum anceps', description: 'お盆の迎え火に使われる。紅紫色の花が群生する。', tags: ['水辺', 'お盆', '秋'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#E91E63' },
        { name: 'ハンゲショウ（半夏生）', scientific: 'Saururus chinensis', description: '夏に葉の一部が白く化粧したようになる。', tags: ['水辺', '和風', '白'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#F5F5F5' },
        { name: 'フトイ', scientific: 'Schoenoplectus tabernaemontani', description: '緑色の棒状の茎が林立する。幾何学的でモダン。', tags: ['水辺', 'モダン', '生け花'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#4CAF50' },
        { name: 'ウォーターマッシュルーム', scientific: 'Hydrocotyle vulgaris', description: 'キノコのような丸い葉が可愛い。水陸両用で増えやすい。', tags: ['水辺', 'かわいい', '増える'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#AED581' },
        { name: 'ラセンイ（螺旋藺）', scientific: 'Juncus effusus', description: 'クルクルと螺旋を描いて伸びるカヤツリグサの仲間。', tags: ['水辺', 'ユニーク', 'モダン'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#388E3C' },
        { name: 'ウォータークローバー（ムチカ）', scientific: 'Marsilea mutica', description: '水生の四つ葉のクローバー。実はシダの仲間。', tags: ['水辺', 'かわいい', '幸運'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#81C784' },

        // --- Batch 38: Wayside Weeds Guide (Common & Nostalgic) (30 items) ---
        { name: 'ナズナ（ペンペングサ）', scientific: 'Capsella bursa-pastoris', description: '春の七草の一つ。実を鳴らして遊べる。ハート型の実が可愛い。', tags: ['雑草', '春', '遊び'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#AED581' },
        { name: 'オオバコ', scientific: 'Plantago asiatica', description: '踏まれても生き残る強い草。カエル相撲で遊べる。薬草にもなる。', tags: ['雑草', '遊び', '薬草'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#4CAF50' },
        { name: 'ハコベ', scientific: 'Stellaria media', description: '春の七草。小鳥が好んで食べる。小さな白い星型の花。', tags: ['雑草', '春', '小鳥'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#FFFFFF' },
        { name: 'ホトケノザ', scientific: 'Lamium amplexicaule', description: '春の七草ではない方のホトケノザ。ピンクの花で蜜が吸える。', tags: ['雑草', '春', '遊び'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#F48FB1' },
        { name: 'オオイヌノフグリ', scientific: 'Veronica persica', description: '「星の瞳」。早春に咲くコバルトブルーの可愛い花。', tags: ['雑草', '早春', '青い花'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#2196F3' },
        { name: 'ツクシ（スギナ）', scientific: 'Equisetum arvense', description: '春の訪れを告げる。袴をとって卵とじにして食べることも。', tags: ['雑草', '春', '山菜'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#D7CCC8' },
        { name: 'ツユクサ', scientific: 'Commelina communis', description: '朝咲いて昼にはしぼむ青い花。昔は染料に使われた。', tags: ['雑草', '花', '青い花'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#304FFE' },
        { name: 'カタバミ', scientific: 'Oxalis corniculata', description: 'ハート型の葉。10円玉を磨くとピカピカになる。家紋のモチーフ。', tags: ['雑草', '遊び', '家紋'], careLevel: 1, match: { sunlight: ['any'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#FDD835' },
        { name: 'アカツメクサ', scientific: 'Trifolium pratense', description: '牧草として入ってきた。花で冠を作ったり蜜を吸ったり。', tags: ['雑草', '遊び', 'ハーブ'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#F06292' },
        { name: 'ヨモギ', scientific: 'Artemisia princeps', description: '草餅の材料。お灸のもぐさにもなる万能薬草。', tags: ['雑草', '薬草', '香り'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#4CAF50' },
        { name: 'カラスノエンドウ', scientific: 'Vicia sativa', description: '豆の鞘で笛を作って遊べる。アブラムシがよくつく。', tags: ['雑草', '遊び', '春'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#E91E63' },
        { name: 'スズメノエンドウ', scientific: 'Vicia hirsuta', description: 'カラスノエンドウより小さい。鞘の中に小さな豆が入っている。', tags: ['雑草', '春', 'ミニチュア'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#B0BEC5' },
        { name: 'スズメノカタビラ', scientific: 'Poa annua', description: '世界中に生えているイネ科の雑草。非常に強い。', tags: ['雑草', 'イネ科', '最強'], careLevel: 1, match: { sunlight: ['any'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#AED581' },
        { name: 'エノコログサ（猫じゃらし）', scientific: 'Setaria viridis', description: '猫が喜んで遊ぶ。実は粟（アワ）の原種。', tags: ['雑草', '遊び', 'イネ科'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#8BC34A' },
        { name: 'キンエノコロ', scientific: 'Setaria pumila', description: '穂が金色に輝くエノコログサ。夕日に映えてとても美しい。', tags: ['雑草', '美しい', 'イネ科'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#FDD835' },
        { name: 'メヒシバ', scientific: 'Digitaria ciliaris', description: '芝生に入り込むと厄介な雑草の王様。勢力が強い。', tags: ['雑草', '強い', 'イネ科'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#4CAF50' },
        { name: 'ヒメジョオン', scientific: 'Erigeron annuus', description: '空き地に白い小菊のような花を咲かせる。北米原産の帰化植物。', tags: ['雑草', '花', '帰化植物'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#FFFFFF' },
        { name: 'ハルジオン', scientific: 'Erigeron philadelphicus', description: 'ヒメジョオンと似ているが、蕾が垂れるのが特徴。', tags: ['雑草', '花', '春'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#F48FB1' },
        { name: 'セイタカアワダチソウ', scientific: 'Solidago altissima', description: '秋に黄色い花が一面に咲く。虫媒花で花粉症の原因ではない。', tags: ['雑草', '秋', '黄色い花'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#FDD835' },
        { name: 'ドクダミ（斑入り）', scientific: 'Houttuynia cordata variegata', description: 'カメレオン・プラントとも呼ばれる。カラーリーフとして人気。', tags: ['雑草', 'カラーリーフ', '薬草'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#FFCC80' },
        { name: 'ミズヒキ（斑入り）', scientific: 'Persicaria filiformis variegata', description: '葉に白い斑が入る品種。日陰の庭のアクセントになる。', tags: ['雑草', 'カラーリーフ', '和風'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#EF9A9A' },
        { name: 'ヤブガラシ', scientific: 'Cayratia japonica', description: '藪を枯らすほど繁殖する。貧乏葛とも。駆除が大変。', tags: ['雑草', 'つる性', '最強'], careLevel: 1, match: { sunlight: ['any'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#388E3C' },
        { name: 'ヘクソカズラ', scientific: 'Paederia foetida', description: '葉を揉むと臭いが、花は可愛く「サオトメカズラ」とも呼ばれる。', tags: ['雑草', 'つる性', 'リース'], careLevel: 1, match: { sunlight: ['any'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#F5F5F5' },
        { name: 'イヌタデ（アカマンマ）', scientific: 'Persicaria longiseta', description: 'おままごとの赤飯（赤まんま）に使われる。秋の風物詩。', tags: ['雑草', '遊び', '秋'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#E91E63' },
        { name: 'ノアザミ', scientific: 'Cirsium japonicum', description: '触ると痛いトゲがある。蝶が大好きな花。', tags: ['雑草', '花', '蝶'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#E040FB' },
        { name: 'ワルナスビ', scientific: 'Solanum carolinense', description: '名前の通りトゲがあり、全草毒がある。花は茄子に似ている。', tags: ['雑草', '毒', '要注意'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#FFFFFF' },
        { name: 'ヒガンバナ（彼岸花）', scientific: 'Lycoris radiata', description: '秋のお彼岸の頃に突然咲く。毒があるためモグラ除けになる。', tags: ['雑草', '球根', '秋'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#D50000' },
        { name: 'アメリカフウロ', scientific: 'Geranium carolinianum', description: '小さな可愛い花が咲く。種を飛ばす仕掛けが面白い。', tags: ['雑草', '花', '種'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#F48FB1' },
        { name: 'キュウリグサ', scientific: 'Trigonotis peduncularis', description: '葉を揉むとキュウリの匂いがする。ワスレナグサに似た青い花。', tags: ['雑草', '香り', '可憐'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#42A5F5' },
        { name: 'シロザ', scientific: 'Chenopodium album', description: 'ほうれん草の仲間で食用になる。杖の材料にもなった。', tags: ['雑草', '食用', '杖'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#9E9E9E' },

        // --- Batch 39: Wild Varieties of Vegetables & Fruits (Wild & Original) (30 items) ---
        { name: 'ワイルドトマト', scientific: 'Solanum pimpinellifolium', description: 'トマトの原種。非常に小さく甘味が強い。病気に強く育てやすい。', tags: ['野菜', '原種', '家庭菜園'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#D50000' },
        { name: 'ワイルドストロベリー', scientific: 'Fragaria vesca', description: '「幸せを呼ぶ」と言われる。香り高い小さなイチゴがなる。', tags: ['果樹', 'ハーブ', 'かわいい'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#F44336' },
        { name: 'ヤマブドウ', scientific: 'Vitis coignetiae', description: '日本古来の野生ブドウ。紅葉が美しく、実は酸味が強い。', tags: ['果樹', '紅葉', '和風'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#303F9F' },
        { name: 'アケビ（五葉）', scientific: 'Akebia quinata', description: '秋の味覚。紫色の実が割れると食べ頃。皮も料理に使える。', tags: ['果樹', '秋', '和風'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#7E57C2' },
        { name: 'マタタビ', scientific: 'Actinidia polygama', description: '「猫にまたたび」。キウイフルーツの仲間。葉の一部が白くなる。', tags: ['果樹', '猫', '薬用'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#FFFFFF' },
        { name: 'モミジイチゴ', scientific: 'Rubus palmatus', description: '葉がモミジの形をしている。オレンジ色の実は甘くて美味しい。', tags: ['果樹', '木苺', '美味しい'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#FFAB00' },
        { name: 'クサイチゴ', scientific: 'Rubus hirsutus', description: '背が低く草のように見える。大きな赤い実は甘い。', tags: ['果樹', '木苺', 'グランドカバー'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#D50000' },
        { name: 'ガマズミ', scientific: 'Viburnum dilatatum', description: '秋に赤い宝石のような実をびっしりつける。果実酒に最適。', tags: ['庭木', '実がなる', '紅葉'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#D32F2F' },
        { name: 'サンショウ（山椒）', scientific: 'Zanthoxylum piperitum', description: '葉も実も香辛料になる。アゲハ蝶の幼虫がつくので注意。', tags: ['ハーブ', '和風', 'スパイス'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#4CAF50' },
        { name: 'フキ（蕗）', scientific: 'Petasites japonicus', description: '早春のフキノトウは春の味覚。葉は傘になるほど大きい。', tags: ['野菜', '山菜', '和風'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#AED581' },
        { name: 'ミョウガ（茗荷）', scientific: 'Zingiber mioga', description: '日陰で育つ香味野菜。一度植えると毎年収穫できる。', tags: ['野菜', '耐陰性', '薬味'], careLevel: 1, match: { sunlight: ['low', 'medium'], experience: ['beginner'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#F48FB1' },
        { name: 'ギョウジャニンニク', scientific: 'Allium victorialis', description: '修行僧が食べたスタミナ山菜。成長が遅く貴重。', tags: ['野菜', '山菜', 'スタミナ'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#81C784' },
        { name: 'タラノキ', scientific: 'Aralia elata', description: '「山菜の王様」タラの芽が採れる。トゲがある。', tags: ['野菜', '山菜', '王様'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#4CAF50' },
        { name: 'コシアブラ', scientific: 'Chengiopanax sciadophylloides', description: '「山菜の女王」。透き通るような新芽は天ぷらが絶品。', tags: ['野菜', '山菜', '女王'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#C8E6C9' },
        { name: 'ワサビ（山葵）', scientific: 'Eutrema japonicum', description: '清流で育つが、土植え（畑ワサビ）でも葉や茎を楽しめる。', tags: ['野菜', '薬味', '清流'], careLevel: 3, match: { sunlight: ['low'], experience: ['expert'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#66BB6A' },
        { name: 'ブルーベリー（ワイルド種）', scientific: 'Vaccinium', description: '野生種のブルーベリー（ビルベリーなど）。小粒だが味が濃い。', tags: ['果樹', '目に良い', '紅葉'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#303F9F' },
        { name: 'ラズベリー（木苺）', scientific: 'Rubus idaeus', description: '自家製ジャムに最適。地下茎で増えるので植える場所を選ぶ。', tags: ['果樹', 'ジャム', '可愛い'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#D32F2F' },
        { name: 'ブラックベリー', scientific: 'Rubus fruticosus', description: '強健で豊産性。黒く熟した実は生食でも美味しい。', tags: ['果樹', '丈夫', '豊産'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#212121' },
        { name: 'クワ（マルベリー）', scientific: 'Morus', description: '蚕の餌だが、実は甘くて美味しい。手が紫色になる。', tags: ['果樹', '懐かしい', '養蚕'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#311B92' },
        { name: 'グミ（茱萸）', scientific: 'Elaeagnus', description: '赤い楕円形の実。独特の渋みと甘みがある。', tags: ['庭木', '懐かしい', '実がなる'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#D32F2F' },
        { name: 'ユスラウメ', scientific: 'Prunus tomentosa', description: 'サクランボのような赤い実がたくさんなる。花も綺麗。', tags: ['庭木', '実がなる', '春'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#FFCDD2' },
        { name: 'ジューンベリー', scientific: 'Amelanchier canadensis', description: '6月に赤い実がなる。花、実、紅葉と三度楽しめる。', tags: ['庭木', 'シンボルツリー', '人気'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#B71C1C' },
        { name: 'フェイジョア', scientific: 'Acca sellowiana', description: '南国フルーツだが寒さに強い。花もエディブルフラワーになる。', tags: ['果樹', '花も食べれる', '生垣'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#81C784' },
        { name: 'ザクロ（石榴）', scientific: 'Punica granatum', description: 'ルビーのような実。女性の健康に良いとされる。花も美しい。', tags: ['果樹', '美容', '縁起物'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#C62828' },
        { name: 'イチジク', scientific: 'Ficus carica', description: '「無花果」。完熟の実は家庭菜園でしか味わえない贅沢。', tags: ['果樹', '聖書', '簡単'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#795548' },
        { name: 'キンカン（金柑）', scientific: 'Citrus japonica', description: '皮ごと食べられる小さな柑橘。風邪予防に蜂蜜漬けなど。', tags: ['果樹', '柑橘', '常緑'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#FF6F00' },
        { name: 'レモン', scientific: 'Citrus limon', description: '完全無農薬のレモンは皮まで使える。マイヤーレモンが育てやすい。', tags: ['果樹', '柑橘', '人気'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#FFEB3B' },
        { name: 'オリーブ', scientific: 'Olea europaea', description: '平和の象徴。実は塩漬けやオイルに。異なる2品種が必要。', tags: ['果樹', 'おしゃれ', '平和'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#CFD8DC' },
        { name: 'コーヒーノキ', scientific: 'Coffea arabica', description: '観葉植物として人気だが、うまくいけば赤い実（コーヒーチェリー）がなる。', tags: ['果樹', '観葉植物', 'コーヒー'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#388E3C' },
        { name: 'カカオ', scientific: 'Theobroma cacao', description: 'チョコレートの原料。幹から直接実がなる姿がユニーク。寒さに弱い。', tags: ['果樹', 'チョコ', '熱帯'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#FF6F00' },

        // --- Batch 40: World's Oldest Plants & Living Fossils (Ancient & Primitive) (30 items) ---
        { name: 'ウェルウィッチア（奇想天外）', scientific: 'Welwitschia mirabilis', description: 'ナミブ砂漠の固有種。一生に2枚の葉だけを伸ばし続ける奇妙な植物。', tags: ['珍奇植物', '生きている化石', '長寿'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#4E342E' },
        { name: 'オニソテツ（エンセファラルトス）', scientific: 'Encephalartos woodii', description: '「世界で最も孤独な植物」。野生絶滅し、雄株しか現存しないソテツ。', tags: ['ソテツ', '絶滅危惧', '古代'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#2E7D32' },
        { name: 'コウヤマキ（高野槙）', scientific: 'Sciadopitys verticillata', description: '一属一種の日本固有の針葉樹。世界三大庭園樹の一つ。', tags: ['針葉樹', '日本固有', '仏花'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#1B5E20' },
        { name: 'ディクソニア', scientific: 'Dicksonia antarctica', description: '恐竜時代を彷彿とさせる木生シダ。太い幹から巨大な葉を広げる。', tags: ['シダ', '古代', 'ワイルド'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#33691E' },
        { name: 'ヒカゲノカズラ', scientific: 'Lycopodium clavatum', description: 'シダより原始的な小葉植物。地を這って長く伸びる。神事にも使われる。', tags: ['古代', '和風', '神聖'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#4CAF50' },
        { name: 'マツバラン（松葉蘭）', scientific: 'Psilotum nudum', description: '葉も根もない最も原始的な維管束植物。古典園芸植物として愛好される。', tags: ['古代', '古典園芸', '奇妙'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#CDDC39' },
        { name: 'イワヒバ（セラギネラ）', scientific: 'Selaginella tamariscina', description: 'シダ植物の仲間。乾燥すると丸まって休眠する復活草。', tags: ['シダ', '復活', '古典園芸'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#388E3C' },
        { name: 'リュウビンタイ', scientific: 'Angiopteris lygodiifolia', description: '巨大な葉を広げる原始的なシダ。根元の托葉が竜の鱗のよう。', tags: ['シダ', '大型', '古代'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#1B5E20' },
        { name: 'オオタニワタリ', scientific: 'Asplenium antiquum', description: '葉を放射状に広げ、落ち葉を受けて栄養にする着生シダ。', tags: ['シダ', '着生', 'ジャングル'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#76FF03' },
        { name: 'ビカクシダ・マダガスカリエンセ', scientific: 'Platycerium madagascariense', description: '貯水葉が脳みそのような溝を作る、独特な進化を遂げたビカクシダ。', tags: ['シダ', '珍奇植物', 'マニア向け'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#689F38' },
        { name: 'トクサ（大トクサ）', scientific: 'Equisetum hyemale', description: '石炭紀の大森林を形成したロボク（蘆木）の生き残り。', tags: ['古代', '和風', 'モダン'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#33691E' },
        { name: 'ミズニラ', scientific: 'Isoetes japonica', description: '水生のシダ植物。見た目はネギやニラに似ているが胞子で増える。', tags: ['水草', 'シダ', '絶滅危惧'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#66BB6A' },
        { name: 'アンボレラ', scientific: 'Amborella trichopoda', description: '現存する被子植物の中で最も原始的とされる。ニューカレドニア固有。', tags: ['古代', '希少', '学術的'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#F0F4C3' },
        { name: 'モクレン（木蓮）', scientific: 'Magnolia liliiflora', description: '恐竜時代から変わらぬ姿で咲く、世界最古の花木の一つ。', tags: ['花木', '古代', '香り'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#9C27B0' },
        { name: 'タイサンボク', scientific: 'Magnolia grandiflora', description: '巨大な白い花を咲かせる常緑樹。花の香りが素晴らしい。', tags: ['花木', '古代', '豪華'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#FFFFFF' },
        { name: 'ユリノキ（ハンテンボク）', scientific: 'Liriodendron tulipifera', description: 'チューリップのような花が咲く。葉の形からハンテンボクとも。', tags: ['花木', '古代', '街路樹'], careLevel: 2, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#CDDC39' },
        { name: 'シキミ（樒）', scientific: 'Illicium anisatum', description: '仏事に使われる。モクレンに近い原始的な被子植物。全草有毒。', tags: ['仏事', '古代', '毒'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#F5F5F5' },
        { name: 'センリョウ（千両）', scientific: 'Sarcandra glabra', description: 'お正月の縁起物。実は原始的な特徴を多く残している。', tags: ['縁起物', '古代', '実がなる'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#D32F2F' },
        { name: 'ハス（大賀ハス）', scientific: 'Nelumbo nucifera', description: '2000年前の地層から発見された種子が発芽した奇跡のハス。', tags: ['水辺', '古代', '奇跡'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#F48FB1' },
        { name: 'スイレン（熱帯スイレン）', scientific: 'Nymphaea colorata', description: '被子植物の進化の初期段階で分岐したグループ。鮮やかな花色。', tags: ['水辺', '古代', '美しい'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#7B1FA2' },
        { name: 'コウヨウザン（広葉杉）', scientific: 'Cunninghamia lanceolata', description: '世界最大級の樹木になるスギの仲間。生きた化石の一つ。', tags: ['巨木', '針葉樹', '長寿'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#2E7D32' },
        { name: 'ブンヤ松（アラウカリア）', scientific: 'Araucaria bidwillii', description: 'オーストラリア原産。恐竜が食べたかもしれない巨大な松ぼっくりをつける。', tags: ['針葉樹', '古代', 'オーストラリア'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#1B5E20' },
        { name: 'ナギ（梛）', scientific: 'Nageia nagi', description: '葉脈が縦に平行に走る珍しい針葉樹。神社の御神木に多い。', tags: ['針葉樹', '神木', '縁起物'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#4CAF50' },
        { name: 'イチイ（一位）', scientific: 'Taxus cuspidata', description: '高貴な木とされる。赤い実は甘いが種は有毒。弓の材料。', tags: ['針葉樹', '和風', '実がなる'], careLevel: 2, match: { sunlight: ['medium', 'high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#D32F2F' },
        { name: 'グンネラ（オニブキ）', scientific: 'Gunnera manicata', description: '「恐竜の餌」。人間が隠れられるほど巨大な葉を持つ古代植物。', tags: ['古代', '巨大', 'ワイルド'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#4CAF50' },
        { name: 'トウゲシバ', scientific: 'Huperzia serrata', description: '深山の湿った場所に生える小葉植物。原始的な姿。', tags: ['古代', 'シダ', 'テラリウム'], careLevel: 2, match: { sunlight: ['low', 'medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#66BB6A' },
        { name: 'ナンテン（南天）', scientific: 'Nandina domestica', description: '「難を転ずる」。メギ科の古いタイプの低木。', tags: ['縁起物', '和風', '実がなる'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#D32F2F' },
        { name: 'アケボノスギ（メタセコイア）', scientific: 'Metasequoia glyptostroboides', description: '化石発見から生存が確認された「生きている化石」の代表。', tags: ['巨木', '化石', '紅葉'], careLevel: 2, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#FF7043' },
        { name: 'イチョウ（オハツキイチョウ）', scientific: 'Ginkgo biloba var. epiphylla', description: '葉の上に実がなる珍しい変種。先祖返りの一種とされる。', tags: ['巨木', '化石', '珍奇'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['large'] }, imageColor: '#FFEB3B' },
        { name: 'ヒカゲヘゴ', scientific: 'Cyathea lepifera', description: '沖縄などの亜熱帯に自生する木生シダ。古代の森の雰囲気満点。', tags: ['シダ', '古代', '沖縄'], careLevel: 3, match: { sunlight: ['medium', 'high'], experience: ['expert'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#8BC34A' },

        // --- Batch 41: Final Selection - Bizarre, Mysterious & Deep Sea Image Plants (30 items) ---
        { name: 'ヒスイカズラ（翡翠葛）', scientific: 'Strongylodon macrobotrys', description: '神秘的な翡翠色の花を咲かせるつる植物。', tags: ['珍奇植物', 'つる性', '神秘的'], careLevel: 3, match: { sunlight: ['high', 'medium'], experience: ['expert'], care_frequency: ['daily'], size: ['large'] }, imageColor: '#00BFA5' },
        { name: 'タッカ・シャントリエリ（ブラックキャット）', scientific: 'Tacca chantrieri', description: '黒いコウモリや猫の顔に見える奇妙な花。', tags: ['珍奇植物', '暗黒', 'ユニーク'], careLevel: 3, match: { sunlight: ['medium', 'low'], experience: ['expert'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#212121' },
        { name: 'ユーフォルビア・ラクテア・クリスタタ（マハラジャ）', scientific: 'Euphorbia lactea f. cristata', description: '扇状にうねる姿が美しい。接ぎ木で育てられることが多い。', tags: ['多肉植物', 'ユニーク', '彫刻的'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#D7CCC8' },
        { name: 'リプサリス・カスッサ', scientific: 'Rhipsalis cassutha', description: '細い茎が垂れ下がる姿は海藻のよう。', tags: ['サボテン', 'ハンギング', '癒し'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#C5E1A5' },
        { name: 'ハオルチア・オブツーサ', scientific: 'Haworthia cooperi var. truncata', description: '「雫石」。透明な窓を持つ葉が光を受けて輝く。', tags: ['多肉植物', '透明', '人気'], careLevel: 1, match: { sunlight: ['medium', 'low'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#B2DFDB' },
        { name: 'セネシオ・ペレグリヌス（ドルフィンネックレス）', scientific: 'Senecio peregrinus', description: '葉がイルカの形をしており、連なって泳いでいるように見える。', tags: ['多肉植物', 'ハンギング', '可愛い'], careLevel: 1, match: { sunlight: ['high', 'medium'], experience: ['beginner'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#81C784' },
        { name: 'モニラリア（うさぎの耳）', scientific: 'Monilaria moniliformis', description: '発芽した姿がウサギの耳のようで大人気。休眠から覚めると伸びる。', tags: ['多肉植物', '可愛い', 'ＳＮＳ映え'], careLevel: 2, match: { sunlight: ['high', 'medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#A5D6A7' },
        { name: 'アルブカ・スピラリス（フリズルシズル）', scientific: 'Albuca spiralis', description: 'くるくるとカールした不思議な葉を持つ球根植物。', tags: ['珍奇植物', '球根', 'ユニーク'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#AED581' },
        { name: 'トラキアンドラ・トルチリス', scientific: 'Trachyandra tortilis', description: 'リボンのように規則正しく波打つ葉が芸術的。', tags: ['珍奇植物', '幾何学的', '希少'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#558B2F' },
        { name: 'ユーフォルビア・プラティクラダ（ゾンビプランツ）', scientific: 'Euphorbia platyclada', description: '枯れ枝のような色と平たい形。不気味だが愛嬌がある。', tags: ['珍奇植物', 'キモカワ', 'マニア向け'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#8D6E63' },
        { name: 'ギンリョウソウ（ユウレイタケ）', scientific: 'Monotropastrum humile', description: '葉緑素を持たず、全体が白く透き通っている腐生植物。', tags: ['神秘的', '山野草', '日陰'], careLevel: 3, match: { sunlight: ['low'], experience: ['expert'], care_frequency: ['seasonal'], size: ['small'] }, imageColor: '#F5F5F5' },
        { name: 'ラフレシア', scientific: 'Rafflesia arnoldii', description: '「世界最大の花」。強烈な匂いでハエを誘う寄生植物。栽培はほぼ不可能だが図鑑として。', tags: ['ギネス級', '珍奇', '巨大'], careLevel: 3, match: { sunlight: ['low'], experience: ['expert'], care_frequency: ['none'], size: ['large'] }, imageColor: '#B71C1C' },
        { name: 'ショクダイオオコンニャク（スマトラオオコンニャク）', scientific: 'Amorphophallus titanum', description: '数年に一度、巨大な花序をつける。世界最大級の花。', tags: ['ギネス級', '珍奇', '巨大'], careLevel: 3, match: { sunlight: ['high', 'medium'], experience: ['expert'], care_frequency: ['seasonal'], size: ['large'] }, imageColor: '#880E4F' },
        { name: 'ドラキュラ・シミア（モンキーオーキッド）', scientific: 'Dracula simia', description: '花の模様がサルの顔に見えるラン。', tags: ['蘭', 'ユニーク', '動物顔'], careLevel: 3, match: { sunlight: ['medium', 'low'], experience: ['expert'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#795548' },
        { name: 'パフィオペディラム（レディーススリッパ）', scientific: 'Paphiopedilum', description: '唇弁がスリッパのような袋状になっているラン。食虫植物ではない。', tags: ['蘭', 'エキゾチック', '個性的'], careLevel: 2, match: { sunlight: ['medium', 'low'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#5D4037' },
        { name: 'ウツボカズラ（ネペンテス）', scientific: 'Nepenthes', description: '補虫袋をつける有名な食虫植物。袋の色や形は多様。', tags: ['食虫植物', 'ワイルド', 'ユニーク'], careLevel: 2, match: { sunlight: ['high', 'medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#C62828' },
        { name: 'ムシトリスミレ', scientific: 'Pinguicula', description: '粘液を出して虫を捕らえる葉を持つ。花は可憐なスミレのよう。', tags: ['食虫植物', '花が綺麗', '可愛い'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['weekly'], size: ['small'] }, imageColor: '#BA68C8' },
        { name: 'モウセンゴケ', scientific: 'Drosera', description: '腺毛から粘液を出し、キラキラと輝く食虫植物。', tags: ['食虫植物', '神秘的', 'キラキラ'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#E91E63' },
        { name: 'フクロユキノシタ（セファロタス）', scientific: 'Cephalotus follicularis', description: '地面に小さな補虫袋を並べる。悪魔の壺とも呼ばれる。', tags: ['食虫植物', 'マニア向け', '小型'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['daily'], size: ['small'] }, imageColor: '#4E342E' },
        { name: 'ダーリントンア（コブラリリー）', scientific: 'Darlingtonia californica', description: '鎌首をもたげたコブラのような姿の食虫植物。', tags: ['食虫植物', 'クール', '珍奇'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#2E7D32' },
        { name: 'ヘリアンフォラ', scientific: 'Heliamphora', description: 'ギアナ高地のテーブルマウンテンに自生する、原始的な食虫植物。', tags: ['食虫植物', '神秘的', '高山植物'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#8BC34A' },
        { name: 'ブーファン・ハエマンソイデス', scientific: 'Boophone haemanthoides', description: '巨大な球根から扇状に波打つ葉を出す。', tags: ['珍奇植物', '球根', 'マニア向け'], careLevel: 3, match: { sunlight: ['high'], experience: ['expert'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#BCAAA4' },
        { name: 'ユーフォルビア・オベサ（バスケットボール）', scientific: 'Euphorbia obesa', description: '棘のない真ん丸な姿。木質化すると味わいが出る。', tags: ['多肉植物', '幾何学的', 'シンプル'], careLevel: 1, match: { sunlight: ['high'], experience: ['beginner'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#81C784' },
        { name: 'アストロフィツム・兜丸', scientific: 'Astrophytum asterias', description: 'トゲ座が白い点のようになり、ウニのような姿のサボテン。', tags: ['サボテン', '幾何学的', '和風'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#4CAF50' },
        { name: 'ユーフォルビア・バリダ', scientific: 'Euphorbia valida', description: 'ゼブラ模様の球体に、花柄が硬化して残る姿がユニーク。', tags: ['多肉植物', '縞模様', '丈夫'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['small'] }, imageColor: '#689F38' },
        { name: 'ホヤ・カルノーサ・コンパクタ（ヒンドゥーロープ）', scientific: 'Hoya carnosa "Compacta"', description: '葉がカールしてロープのように見えるホヤ。花も可愛い。', tags: ['ハンギング', 'ユニーク', '花が咲く'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['medium'] }, imageColor: '#66BB6A' },
        { name: 'ディスキディア・ヌンムラリア（ボタン・オーキッド）', scientific: 'Dischidia nummularia', description: '小さな丸い葉が連なる。着生植物で、空気中の水分を好む。', tags: ['ハンギング', '可愛い', '着生'], careLevel: 2, match: { sunlight: ['medium'], experience: ['intermediate'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#AED581' },
        { name: 'ビカクシダ・リドレイ', scientific: 'Platycerium ridleyi', description: '深い溝のある貯水葉が特徴的。ビカクシダの中でも特に人気が高い。', tags: ['シダ', '装飾的', '人気'], careLevel: 3, match: { sunlight: ['medium'], experience: ['expert'], care_frequency: ['daily'], size: ['medium'] }, imageColor: '#7CB342' },
        { name: 'アガベ・チタノタ・ブラックアンドブルー', scientific: 'Agave titanota "Black and Blue"', description: '青白い葉と黒い棘のコントラストが美しい、アガベの人気品種。', tags: ['アガベ', 'クール', '男前プランツ'], careLevel: 2, match: { sunlight: ['high'], experience: ['intermediate'], care_frequency: ['minimal'], size: ['medium'] }, imageColor: '#37474F' },
        { name: 'チランジア・キセログラフィカ', scientific: 'Tillandsia xerographica', description: '「エアプランツの王様」。銀葉が美しく、一つで存在感抜群。', tags: ['エアプランツ', '王様', 'インテリア'], careLevel: 1, match: { sunlight: ['medium'], experience: ['beginner'], care_frequency: ['weekly'], size: ['large'] }, imageColor: '#B0BEC5' },
    ];