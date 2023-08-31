const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args)); //from stack overflow user itzik, january 30th, 2023 https://stackoverflow.com/questions/70541068/instead-change-the-require-of-index-js-to-a-dynamic-import-which-is-available 

const circle = require("./circle");
const square = require("./square");
const triangle = require("./triangle"); 
//this function takes in the shape, shape color, text color, and text and returns the shape that the user chose along with the colors for everything.
function shapeFactory(shape, shapeColor, textColor, text) {
    switch (shape) {
        case 'circle': //switch statement to return circle
            return new circle(shapeColor, textColor, text);
        case 'square': //switch statement to return square
            return new square(shapeColor, textColor, text);
        case 'triangle': //switch statement to return triangle
            return new triangle(shapeColor, textColor, text);
    }
}

module.exports = shapeFactory; 