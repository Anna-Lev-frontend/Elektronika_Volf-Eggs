import { ImageLoader } from './image-loader'
import { AudioLoader } from './audio-loder';

// этот метод создаем канвас, подгружает изображения, аудио, этот метод занимается рисованием на экране
export class Screen {
    constructor(width, heigth) {
        this.width = width;
        this.heigth = heigth;
        this.canvas = this.createCanvas(width, heigth);
        this.context = this.canvas.getContext('2d');//сохраняем контекс канваса
        this.images = {};
        this.audio = {};
        this.isImagesLoaded = false;
        this.isAudioLoaded = false;
    }
    //загружаем картинки
    loadImages(imageFiles) {

        // для загрузки графики создаем класс loadImages
        const loader = new ImageLoader(imageFiles);// вызов конструктора класса который возвращает объект со свойствами и методами
        loader.load().then((names) => {
            this.images = Object.assign(this.images, loader.images);
            this.isImagesLoaded = true;
        });
    }
    loadAudios(audioFiles) {
        const loader = new AudioLoader(audioFiles);// вызов конструктора класса который возвращает объект со свойствами и методами
        loader.load().then((names) => {
            this.audio = Object.assign(this.audio, loader.audio);
            this.isAudioLoaded = true;
        });
    }
    createCanvas(width, height) {// создаем канвас
        let elements = document.getElementsByTagName('canvas');// берем первый canvas на страничке 
        let canvas = elements[0] || document.createElement('canvas');// или берем новый canvas
        document.body.appendChild(canvas);
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }
    //заливаем сцену черным цветом, чтобы посмотреть как это все работает(заливка canvas)
    fill(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.width, this.heigth);
    }
    print(x, y, text) {
        this.context.fillStyle = "#000000";
        this.context.font = "26px Georgia";
        this.context.fillText(text, x, y);
    }

    // метод отрисовки картинки
    drawImage(x, y, imageName) {
        this.context.drawImage(this.images[imageName], x, y);
    }

    playAudio(audioName) {
        this.audio[audioName].remove();
        document.body.append(this.audio[audioName]);
        this.audio[audioName].play();
    }
    
    stopAudio(audioName){
        this.audio[audioName].remove();
    }

    //метод для отображения спрайта
    drawSprite(sprite) {
        this.context.drawImage(this.images[sprite.imageName],
            sprite.sourceX, sprite.sourceY, sprite.width, sprite.height, sprite.x, sprite.y, sprite.width, sprite.height);
    }
}