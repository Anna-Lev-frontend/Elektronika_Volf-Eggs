import { ImageLoader } from './image-loader'

export class Screen {
    constructor(width, heigth) {
        this.width = width;
        this.heigth = heigth;
        this.canvas = this.createCanvas(width, heigth);
        this.contex = this.canvas.getContext('2d');
        this.images = {};
        this.isImagesLoaded = false;
    }
    //загружаем картинки
    loadImages(imageFiles) {
        // для загрузки графики создаем класс loadImages
        const loader = new ImageLoader(imageFiles);
        loader.load().then((names) => {
            this.images = Object.assign(this.images, loader.images);
            this.isImagesLoaded = true;
            console.log(names);
        });
    }

    createCanvas(width, height) {
        let elements = document.getElementsByTagName('canvas');
        let canvas = elements[0] || document.createElement('canvas');
        document.body.appendChild(canvas);
        canvas.width = width;
        canvas.height = heigth;
        return canvas;
    }
    //заливаем сцену черным цветом, чтобы посмотреть как это все работает(заливка canvas)
    fill(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.width, this.heigth);
    }
    print(x, y, text) {
        this.context.fillStyle = '#FFFFFF';
        this.context.font = '22px Georgia';
        this.context.fill(text, x, y)
    }

    // метод отрисовки картинки
    drawImage(x, y, imageName) {
        this.context.drawImage(this.images[imageName], x, y)
    }

}