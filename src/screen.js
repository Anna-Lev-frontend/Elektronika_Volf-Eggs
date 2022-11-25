export class Screen {
    constructor(width, heigth) {
        this.width = width;
        this.heigth = heigth;
        this.canvas = this.createCanvas();
        this.canvas.width = width;
        this.canvas.height = heigth;
        this.contex = this.canvas.getContext('2d');
    }
    createCanvas() {
        let elements = document.getElementsByTagName('canvas');
        if (elements.length > 0) {
            return elements[0];
        }
        let canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
        return canvas;
    }
}