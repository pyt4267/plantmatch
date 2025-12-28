const fs = require('fs');
const path = require('path');
const { createCanvas, registerFont } = require('canvas');

// Load plants from data/plants.js
const scriptContent = fs.readFileSync(path.join(__dirname, '../data/plants.js'), 'utf8');
// Extract the plants array using regex
const plantsMatch = scriptContent.match(/const plants = \[([\s\S]*?)\];/);
if (!plantsMatch) {
    console.error('Could not find plants array in data/plants.js');
    process.exit(1);
}

let plantsArrayStr = plantsMatch[1]; // No need to replace sunlight map here as it's just raw data usually
// The rest of the regex parsing below should still work if the format inside [] is the same.

// Actually, regex extraction of each object might be safer and cleaner than eval.
const plants = [];
const objectRegex = /\{ name: '(.*?)', scientific: '(.*?)', description: '(.*?)', tags: \[(.*?)\], careLevel: (.*?), .*? imageColor: '(.*?)' \}/g;
let match;

while ((match = objectRegex.exec(plantsMatch[1])) !== null) {
    plants.push({
        name: match[1],
        scientific: match[2],
        description: match[3],
        tags: match[4].replace(/'/g, '').split(', '),
        careLevel: match[5],
        imageColor: match[6]
    });
}

console.log(`Found ${plants.length} plants.`);

// Configuration
const WIDTH = 1000;
const HEIGHT = 1500;
const OUTPUT_DIR = path.join(__dirname, '../pin_output');

async function generatePin(plant, index) {
    const canvas = createCanvas(WIDTH, HEIGHT);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = plant.imageColor;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Overlay for readability
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillRect(50, 50, WIDTH - 100, HEIGHT - 100);

    // Title
    ctx.fillStyle = '#1b5e20';
    ctx.font = 'bold 80px sans-serif'; // Default font
    ctx.textAlign = 'center';
    ctx.fillText(plant.name, WIDTH / 2, 400);

    // Scientific Name
    ctx.fillStyle = '#555';
    ctx.font = 'italic 40px sans-serif';
    ctx.fillText(plant.scientific, WIDTH / 2, 480);

    // Illustration Placeholder (Emoji)
    ctx.font = '300px sans-serif';
    ctx.fillText('🪴', WIDTH / 2, 850);

    // Tags
    ctx.fillStyle = '#333';
    ctx.font = '30px sans-serif';
    const tagText = plant.tags.map(t => `#${t}`).join('  ');
    ctx.fillText(tagText, WIDTH / 2, 1100);

    // CTA
    ctx.fillStyle = '#e91e63';
    ctx.font = 'bold 40px sans-serif';
    ctx.fillText('相性診断であなたに合うかチェック！', WIDTH / 2, 1300);
    ctx.fillText('plantmatch.one', WIDTH / 2, 1360);

    // Save
    const buffer = canvas.toBuffer('image/png');
    const filename = `pin_${index}_${plant.name.replace(/\s/g, '_')}.png`;
    fs.writeFileSync(path.join(OUTPUT_DIR, filename), buffer);
    console.log(`Generated: ${filename}`);
}

// CSV Writer Helper
const createCsvWriter = require('fs').createWriteStream;

async function generateBatch(count = 10) {
    const csvStream = createCsvWriter(path.join(OUTPUT_DIR, 'pinterest_upload.csv'), { flags: 'w' });
    csvStream.write('Title,Description,Link,Image_Filename\n');

    const targetPlants = plants.slice(0, count);

    for (let i = 0; i < targetPlants.length; i++) {
        const plant = targetPlants[i];
        const filename = `pin_${i}_${plant.name.replace(/\s/g, '_')}.png`;

        await generatePin(plant, i);

        // Generate Metadata
        const title = `【相性診断】あなたに合うのは『${plant.name}』かも？ #観葉植物`;
        const desc = `${plant.description} 初心者向けの育てやすさレベル: ${plant.careLevel}。 ${plant.tags.map(t => '#' + t).join(' ')} #RuruPlantMatch`;
        const link = `https://plantmatch.one/?plant=${encodeURIComponent(plant.scientific)}`; // Hypothetical dynamic link

        // Escape quotes for CSV
        const csvRow = `"${title}","${desc}","${link}","${filename}"\n`;
        csvStream.write(csvRow);
    }

    csvStream.end();
    console.log(`Generated ${count} pins and pinterest_upload.csv`);
}

// Run for first 20 plants
generateBatch(20);
