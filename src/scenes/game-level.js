import { Scene } from "../scene";
import { SpriteSheet } from "../sprite-sheet";
import { Sprite } from "../sprite";
import { Player } from "../player";

export class GameLevel extends Scene {
    constructor(game) {
        super(game);
        this.btnRed = [{ x: 100, y: 575 }, { x: 1010, y: 575 }, { x: 100, y: 450 }, { x: 1010, y: 450 }];
        this.btnPink = [{ x: 1010, y: 70 }, { x: 1010, y: 170 }, { x: 1010, y: 270 }];
        this.player = new Player(this.game.control);
        
    }
    init() {
        super.init();

    }
    update(time) {
        this.player.update(time);
    }
    render(time) {
        this.update(time);
        this.game.screen.fill('#FFFF');

        this.game.screen.drawImage(0, 0, 'background');// добавили розовую консоль
        this.btnRed.forEach((item) => {
            this.game.screen.drawImage(item.x, item.y, 'btnRed');// добавили красные кнопки
        });
        this.game.screen.drawImage(280, 300, 'stairsLeft');//левый курятник
        this.game.screen.drawImage(636, 300, 'stairsRight');//правый курятник
        this.game.screen.drawImage(279, 143, 'home');//крыша дома
        this.game.screen.drawImage(805, 142, 'glass');//трава сверху
        this.game.screen.drawImage(280, 211, 'chickenLeftTop')// курица левая сверху
        this.game.screen.drawImage(280, 325,'chickenLeftBottom')// курица левая снизу
        this.game.screen.drawImage(819, 220,'chickenRightTop')//курица правая сверху
        this.game.screen.drawImage(857, 330, 'chickenRightBottom')//курица правая снизу
        this.btnPink.forEach((item) => {
             this.game.screen.drawImage(item.x, item.y, 'btnPink');// добавили розовые кнопки
         });
        this.game.screen.drawSprite(this.player.view)//добавили персонажа волка
        super.render(time);
    }
}