import { SpriteSheet } from "./sprite-sheet";

export class Enemy {

    constructor(control, speed = 2000) {
        this.control = control;
        this.lastTime = 0;
        this.speed = speed;
        const enemySheet = new SpriteSheet({ imageName: 'eggs', imageWidth: 142, imageHeight: 24, spriteWidth: 50, spriteHeight: 50 });
        this.view = enemySheet.getAnimation([1, 2, 3], Math.floor(this.speed /3), false, true);
       
        this.positions = {
            'upleft': [{ x: 330, y: 295 }, { x: 340, y: 305 }, { x: 350, y: 315 }],//1 яйцо
            'upright': [{ x: 775, y: 285 }, { x: 745, y: 295 }, { x: 715, y: 310 }],
            'downleft': [{ x: 330, y: 400 }, { x: 340, y: 405 }, { x: 350, y: 415 }],
            'downright': [{ x: 760, y: 395 }, { x: 730, y: 405 }, { x: 700, y: 420 }]
        }
        this.currentPosition = null; //позиция яйца this.key одно и тоже

    }
    update(time) {// time это время текущей и будущей отрисовки

        if ((time - this.lastTime) > this.speed) { //яйцо живет 2 сек
            this.currentPosition = this.key;
            this.changeDirection();
            this.lastTime = time;
        } else {
            this.currentPosition = null;
        }
        this.view.update(time);
    }
    changeDirection() {//функция которая рандомно меняет нашу позицию яйца   
        this.key = Object.keys(this.positions)[Math.floor(Math.random() * 4)]//вернет один из четырех позиций яйца (переименрвать currentIndex)

        //this.view.setXY(this.positions['upleft'][0].x, this.positions['upleft'][0].y)//key
        this.view.setPositionMap(this.positions[this.key])//передаем все позиции текущего яйца
    }


}