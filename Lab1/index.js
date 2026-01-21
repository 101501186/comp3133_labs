const fs = require('fs');
const csv = require('csv-parser');

const inputFilePath = 'input_countries.csv';
const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';

console.log(`Processing data from ${inputFilePath}`);

// Delete output files if they exist
if (fs.existsSync(canadaFile)) fs.unlinkSync(canadaFile);
if (fs.existsSync(usaFile)) fs.unlinkSync(usaFile);

// Write headers
fs.writeFileSync(canadaFile, 'country,year,population\n');
fs.writeFileSync(usaFile, 'country,year,population\n');

fs.createReadStream(inputFilePath)
    .pipe(
        csv({
            mapHeaders: ({ header }) => header.trim().toLowerCase()
        })
    )
    .on('data', (row) => {
        const country = row.country?.trim().toLowerCase();

        if (country === 'canada') {
            fs.appendFileSync(
                canadaFile,
                `${row.country},${row.year},${row.population}\n`
            );
        }

        if (country === 'united states') {
            fs.appendFileSync(
                usaFile,
                `${row.country},${row.year},${row.population}\n`
            );
        }
    })
    .on('end', () => {
        console.log('CSV file processed successfully');
    });
