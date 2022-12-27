import { SpriteSheet } from "./sprite-sheet";


export class Player {
    constructor(control) {
        this.xPosition = 'left';
        this.yPosition = 'down';
        this.control = control;
        this.playerSheet = new SpriteSheet({ imageName: 'wolf', imageWidth: 956, imageHeight: 235, spriteWidth: 240, spriteHeight: 240 });

        this.positions = {
            'upleft': { view: this.playerSheet.getSprite(2), x: 400, y: 285 },
            'upright': { view: this.playerSheet.getSprite(4), x: 482, y: 280 },
            'downleft': { view: this.playerSheet.getSprite(1), x: 400, y: 285 },
            'downright': { view: this.playerSheet.getSprite(3), x: 482, y: 280 }
        }
        this.view = this.positions.downleft.view;// начальная позиция волка
        this.view.setXY(this.positions.downleft.x, this.positions.downleft.y);

    }

    update(time) {// метод обновления
        if (this.control.up) {
            this.changeOrientationY("up");
        } 
         if (this.control.down) {
            this.changeOrientationY("down");
        } 
        if (this.control.left) {
            this.changeOrientationX("left");
        } 
        if (this.control.right) {
            this.changeOrientationX("right");
        }
        this.walk()

        // this.update(time);
    }

    walk() {  // метод управления волком, устанавливаем позицию уснатовки героя
        this.view = this.positions[this.currentPosition].view//создали динамический ключ
        this.view.setXY(this.positions[this.currentPosition].x, this.positions[this.currentPosition].y)
    }
    changeOrientationX(orientation) {
        this.xPosition = orientation;//up или down
    }
    changeOrientationY(orientation) {
        this.yPosition = orientation;//right или left
    }
    get currentPosition() {//фунция которая делает вид, что она работает как свойство(get это ключевое слово, как let, function)
        return this.yPosition + this.xPosition;// позиция волка
    }
}
