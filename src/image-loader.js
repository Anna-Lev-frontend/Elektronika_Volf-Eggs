export class ImageLoader {
    constructor() {
        this.imageFiles = this.imageFiles;
        this.images = {};
    }
    load(){
        const promises = [];
        for(let name in this.imageFales){
            promises.push(this.loadImage(name, this.imageFiles[name]));
        }
        return Promise.all(promises);
    }
    //делаем метод для загрузки одной картинки, которая будет возвращать promise
    loadImage(name, src) {
        return new Promise((resolve) => {
            const image = new Image();
            this.images[name] = image;
            image.onload = ()=> resolve(name);
            image.src = src;
        });
    }
}