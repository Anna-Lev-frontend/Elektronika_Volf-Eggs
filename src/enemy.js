import { SpriteSheet } from "./sprite-sheet";

export class Enemy {

    constructor(control, speed = 2000) {
        this.control = control;
        this.lastTime = 0;
        this.speed = speed;
        this.enemySheet = new SpriteSheet({ imageName: 'eggs', imageWidth: 145, imageHeight: 33, spriteWidth: 36, spriteHeight: 36 });
        

        this.positions = {
            'upleft': [{ x: 340, y: 300 }, { x: 350, y: 310 }, { x: 360, y: 315 }, { x: 380, y: 320 }],//1 яйцо
            'upright': [{ x: 775, y: 275 }, { x: 745, y: 285 }, { x: 715, y: 300 }, { x: 685, y: 325 }],
            'downleft': [{ x: 300, y: 370 }, { x: 330, y: 390 }, { x: 350, y: 405 }, { x: 380, y: 420 }],
            'downright': [{ x: 775, y: 375 }, { x: 745, y: 385 }, { x: 715, y: 405 }, { x: 685, y: 425 }]
        }
        this.currentPosition = null; //это позиция яйца (this.key одно и тоже)

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
        this.view = this.enemySheet.getAnimation([1, 2, 3, 4],this.speed / 4, false, true);
        this.key = Object.keys(this.positions)[Math.floor(Math.random() * 4)]//вернет один из четырех позиций яйца 

        //this.view.setXY(this.positions['upleft'][0].x, this.positions['upleft'][0].y)//key
        this.view.setPositionMap(this.positions[this.key])//передаем все позиции текущего яйца
    }


}