export class Sprite {// после загрузки картинок вы все превращали в спрайты, чтобы мы могли упрпавлять ею и задавать позицию и параметры
    constructor({ imageName, sourceX, sourceY, width = 64, height = 64 }) {
        this.imageName = imageName;
        this.sourceX = sourceX;
        this.sourceY = sourceY;
        this.width = width;
        this.height = height;
        this.x = 0; //положение по умолчанию на холсте
        this.y = 0;
    }
    //перемещение спрайта по экрану
    setXY(x,y){
        this.x = x;
        this.y = y;
    }
}