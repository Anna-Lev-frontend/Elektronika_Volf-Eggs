import { SpriteSheet } from "./sprite-sheet";

export class Enemy {

    constructor(control) {
        this.control = control;
        this.lastTime = 0;
        this.enemySheet = new SpriteSheet({ imageName: 'eggs', imageWidth: 142, imageHeight: 24, spriteWidth: 50, spriteHeight: 50 });
        this.positions = {
            'upleft': { view: this.enemySheet.getSprite(1), x: 330, y: 295 },//1 яйцо
            'upright': { view: this.enemySheet.getSprite(1), x: 775, y: 285 },
            'downleft': { view: this.enemySheet.getSprite(1), x: 315, y: 385 },
            'downright': { view: this.enemySheet.getSprite(3), x: 765, y: 385 }
        }
    }
    update(time) {// time это время текущей и будущей отрисовки
        if ((time - this.lastTime) > 2000) {
            this.changeDirection();

            this.lastTime = time;
        }
    }
    changeDirection() {//функция которая рандомно меняет нашу позицию яйца
        console.log('egg')
        const key = Object.keys(this.positions)[Math.floor(Math.random() * 4)]//вернет один из четырех позиций яйца
        this.view = this.positions[key].view//вернуть key
        this.view.setXY(this.positions[key].x, this.positions[key].y)//key
    }


}