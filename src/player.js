import { SpriteSheet } from "./sprite-sheet";


export class Player {
    constructor(control) {
this.xPosition = 'left';
this.yPosition = 'down';
        this.control = control;
        this.playerSheet = new SpriteSheet({ imageName: 'wolf', imageWidth: 956, imageHeight: 235, spriteWidth: 240, spriteHeight: 240 });
        
        this.positions = {
            'upleft': { view: this.playerSheet.getSprite(2), x: 400, y: 300 },
            'upright': { view: this.playerSheet.getSprite(4), x: 550, y: 300 },
            'downleft': { view: this.playerSheet.getSprite(1), x: 400, y: 300 },
            'downright': { view: this.playerSheet.getSprite(3), x: 550, y: 300 }
        }
        this.view = this.positions.downleft.view
        this.view.setXY(this.positions.downleft.x, this.positions.downleft.y)

    }

    update(time) {
        if (this.control.up) {
            this.changeOrientationY("up");
            
        } else if (this.control.down) {
            this.changeOrientationY("down");
        } else if (this.control.left) {
            this.changeOrientationX("left");
        } else if (this.control.right) {
            this.changeOrientationX("right");
        }
        this.walk()
        
       // this.update(time);
    }

    walk() {
        console.log(`${this.xPosition + this.yPosition}`)
        this.view = this.positions[`${this.yPosition + this.xPosition}`].view//создали динамический ключ
        
        this.view.setXY(this.positions[`${this.yPosition + this.xPosition}`].x, this.positions[`${this.yPosition + this.xPosition}`].y)
    }
    changeOrientationX(orientation){
        this.xPosition = orientation;
    }
    changeOrientationY(orientation) {
        this.yPosition = orientation;
    }
}
