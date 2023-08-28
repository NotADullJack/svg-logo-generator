const shapes = require("./shapes")

class circle extends shapes {
    constructor(shapesColor, textColor, text) {
        super(shapesColor, textColor, text);
    }
    render() {
        return `
        <svg height="200" width="300" style="background-color:white">
        <circle cx="150" cy="100" r="75" style="${this.shapesColor}"/>
         <text x="50%" y="52%" fill="${this.textColor}" dominant-baseline="middle" text-anchor="middle" style="font-size:50px; font-family:serif">SVG</text>
    </svg>
        `
    }
}
//exports the circle class to be used elsewhere
module.exports = circle;

// circle is a child class of shapes and inherits all the properties of shapes. templete literals are used to fill in the text color and shape color into the svg code. 



