import { SpriteSheet } from "./sprite-sheet";

export class Enemy {

    constructor(control) {
        this.control = control;
        this.lastTime = 0;
        const enemySheet = new SpriteSheet({ imageName: 'eggs', imageWidth: 142, imageHeight: 24, spriteWidth: 50, spriteHeight: 50 });
        this.view = enemySheet.getAnimation([1, 2, 3], 666, false, true);
        
        this.positions = {
            'upleft': [{ x: 330, y: 295 }, { x: 335, y: 290 }, { x: 340, y: 285 }],//1 яйцо
            'upright': [{ x: 775, y: 285 }, {}, {}],
            'downleft': [{ x: 315, y: 385 }, {}, {}],
            'downright': [{ x: 765, y: 385 }, {}, {}]
        }
     
    }
    update(time) {// time это время текущей и будущей отрисовки
    
        if ((time - this.lastTime) > 2000) {
            this.changeDirection();
            this.lastTime = time;
        }
        this.view.update(time);
    }
    changeDirection() {//функция которая рандомно меняет нашу позицию яйца   
        this.key = Object.keys(this.positions)[Math.floor(Math.random() * 4)]//вернет один из четырех позиций яйца (переименрвать currentIndex)
     
        //this.view.setXY(this.positions['upleft'][0].x, this.positions['upleft'][0].y)//key
      this.view.setPositionMap(this.positions['upleft'])//передаем все позиции текущего яйца

      
        
    }


}