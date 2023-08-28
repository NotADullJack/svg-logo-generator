const shapes = require("./shapes") 

class square extends shapes {
    constructor(shapesColor, textColor, text) {
        super(shapesColor, textColor, text);
  }

  area() {
   `<svg height="200" width="300" style="background-color:white">
   <rect x="75" y="25" width="150" height="150" style="${this.shapesColor}"/>
        <text x="50%" y="52%" fill="${this.textColor}" dominant-baseline="middle" text-anchor="middle" style="font-size:50px; font-family:serif">SVG</text>
   </svg>`
  }
}
module.exports = square; 

// circle is a child class of shapes and inherits all the properties of shapes. templete literals are used to fill in the text color and shape color into the svg code.