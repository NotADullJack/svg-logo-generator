
const {prompt} = require('inquirer');
const fs = require('fs'); 
const shapeFactory = require('./lib/shapecreation');
const questions = require('./lib/questions');  

   

function init() {
    prompt(questions) 
    .then((answers) => {
        console.log(answers)
        const shape = shapeFactory(answers.shape, answers.shapeColor, answers.textColor, answers.text);
        const svg = shape.area();
        fs.writeFile('logo.svg', svg, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    });
}

init();