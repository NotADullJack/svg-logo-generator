const shapes = require("./shapes") 

class Triangle extends shapes {
    constructor(shapesColor, textColor, text) {
        super(shapesColor, textColor, text);
  }

  area() {
   `<svg height="200" width="300" style="background-color:white">
   <polygon points="150,25 50,175 250,175" style="fill:${this.shapesColor}" />
   <text x="50%" y="70%" fill="${this.textColor}" dominant-baseline="middle" text-anchor="middle" style="font-size:50px; font-family:serif">SVG</text>
 </svg>`
  }
}
   module.exports = Triangle;


// circle is a child class of shapes and inherits all the properties of shapes. templete literals are used to fill in the text color and shape color into the svg code. 