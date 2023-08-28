
const color = require('./colors');

const questions = [
    {
        name:'shape',
        message: 'which of these shapes would you like to use?',
        type: 'list',
        choices: ['circle', 'square', 'triangle']
}, //question for choosing shape
{
    name: 'shapeColor',
    message: 'what color would you like your shape to be?',
    type: 'input',
    default: 'black',
    validate: (answer) => {
        let answerLowercase = answer.toLowerCase();
        for (let i = 0; i < colors.length; i++) { //looping through colors array to find matching color
            if (lowerCaseAnswer.indexOf(colors[i]) != -1) { //if the keyword is found the function will return the color and if not it returns -1 which is then used to return the error message
            return true;
        }}
        return console.log("\n Please enter a valid color keyword")
    }
}, // question for choosing color of shape
{
    name: 'textColor',
    message: 'what color would you like your text to be?',
    type: 'input',
    default: 'black',
    when: (answers) => {
    if(answers.textColor === 'colors') {
        return true;
    }
    return false;
},
},
 // question for choosing color of text
{
    name: 'text',
    message: 'what 3 characters would you like to use?',
    type: 'input',
    validate: (answer) => { 
        if (answer.length > 3) {  //checks if the answer is longer than 3 characters and return true if it is not
            return console.log("\n please make your text 3 characters or less");
        }
        return true;
    }}]

module.exports = questions;