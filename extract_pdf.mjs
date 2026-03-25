
import fs from 'fs';
import pdf from 'pdf-parse';

const dataBuffer = fs.readFileSync('src/assets/images/mon_cv.pdf');

console.log('Imported pdf:', pdf);

if (typeof pdf === 'function') {
    pdf(dataBuffer).then(function (data) {
        console.log('--- START TEXT ---');
        console.log(data.text);
        console.log('--- END TEXT ---');
    }).catch(err => {
        console.error("Error parsing PDF:", err);
    });
} else {
    console.log('pdf is not a function. Keys:', Object.keys(pdf));
}
