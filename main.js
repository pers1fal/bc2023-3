const fs = require('fs');

const inputFile = 'data.json';
const outputFile = 'output.txt';

// Читаємо дані з файлу 'data.json'
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Помилка читання файлу', err);
        return;
    }

    try {
        // Розбираємо JSON-дані
        let jsonData = JSON.parse(data);

        // Витягаємо необхідні дані та об'єднуємо їх
        let necessaryData = jsonData.map(item => `${item.exchangedate}:${item.rate}`);
        let outputData = necessaryData.join('\n');

        // Записуємо дані у файл 'output.txt'
        fs.writeFile(outputFile, outputData, 'utf8', err => {
            if (err) {
                console.error('Помилка запису файлу', err);
                return;
            }
            console.log('Дані записані у файл output.txt');
        });
    } catch (jsonParseError) {
        console.error('Помилка розбору JSON:', jsonParseError);
    }
});
