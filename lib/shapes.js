const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args)); //from stack overflow user itzik, january 30th, 2023 https://stackoverflow.com/questions/70541068/instead-change-the-require-of-index-js-to-a-dynamic-import-which-is-available 

class shapes  { 
    constructor(shapesColor, textColor, text) { 
        this.shapesColor = shapesColor;
        this.textColor = textColor;
        this.text = text;
    }
}
module.exports = shapes;