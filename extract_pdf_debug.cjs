
const fs = require('fs');
const pdfModule = require('pdf-parse');

console.log('Resolved path:', require.resolve('pdf-parse'));
console.log('Type of pdfModule:', typeof pdfModule);

const dataBuffer = fs.readFileSync('src/assets/images/mon_cv.pdf');

// Try to find the function
let pdfFunc = null;
if (typeof pdfModule === 'function') {
    pdfFunc = pdfModule;
} else if (typeof pdfModule.default === 'function') {
    pdfFunc = pdfModule.default;
} else if (typeof pdfModule.PDFParse === 'function') {
    pdfFunc = pdfModule.PDFParse;
} else {
    // Maybe it's inside 'lib/pdf-parse.js' if the main entry is weird
    try {
        const lib = require('pdf-parse/lib/pdf-parse.js');
        if (typeof lib === 'function') pdfFunc = lib;
    } catch (e) {
        console.log('Could not require lib/pdf-parse.js');
    }
}

if (pdfFunc) {
    console.log('Found PDF function');
    pdfFunc(dataBuffer).then(function (data) {
        console.log('--- START TEXT ---');
        console.log(data.text);
        console.log('--- END TEXT ---');
    }).catch(err => {
        console.error("Error parsing PDF:", err);
    });
} else {
    console.error("Could not find pdf function. Keys:", Object.keys(pdfModule));
}
