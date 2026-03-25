
import fs from 'fs';
import pdf from 'pdf-parse';

const dataBuffer = fs.readFileSync('src/assets/images/mon_cv.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(err => {
    console.error("Error parsing PDF:", err);
});
