const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args)); //from stack overflow user itzik, january 30th, 2023 https://stackoverflow.com/questions/70541068/instead-change-the-require-of-index-js-to-a-dynamic-import-which-is-available 
const fs = require('fs');
const questions = require('./lib/questions');
const shapeFactory = require('./lib/shapecreation');    
   

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const shape = shapeFactory(answers.shape, answers.shapeColor, answers.textColor, answers.text);
        const svg = shape.area();
        fs.writeFile('logo.svg', svg, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    });
}
