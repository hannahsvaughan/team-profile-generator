const fs = require('fs');

function writeFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, error => {
            //if there is an error, reject the promise
            if (error) {
                reject(error);
                return;
            } resolve({
                ok: true,
                message: 'File created! Inside the "dist" folder, your index.html file was created.'
            });
        });
    });
};


//copies CSS file to dist folder w/ new html file
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            } resolve({
                ok: true,
                message: 'File copied successfully!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };