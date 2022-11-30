import { Scene } from "../scene";
import { SpriteSheet } from "../sprite-sheet";
import { Sprite } from "../sprite";

export class GameLevel extends Scene {
    constructor(game) {
        super(game);
        // this.tiles = new SpriteSheet({
        //     imageName: 'tiles',
        //     imageWidth: 1920,
        //     imageHeight: 1080
        // });
        this.btnRed = [{ x: 100, y: 575 }, { x: 1010, y: 575 }, { x: 100, y: 450 }, { x: 1010, y: 450 }];
        this.btnPink = [{ x: 1010, y: 70 }, { x: 1010, y: 170 }, { x: 1010, y: 270 }];
        //this.stairsLeft = [{ x: 400 }, { y: 700 }];
        // this.stairsLeft = this.tiles.getSprite(7);//*******добавляем левую часть курятника
        // this.stairsLeft.setXY(500, 500);
        //*******описываем героя волка в спрайте который стоит нам спиной с 1-7 спрайт
        // this.volfLeftBottomTiles = new SpriteSheet({
        //     imageName: 'volfLeftBottom',
        //     imageWidth: 832,
        //     imageHeight: 1344
        // });
        // this.volfLeftBottom = this.volfLeftBottomTiles.getAnimation([1,2,3,4], 300);// задали кадры с 1-4 и скорость анимации
        // //ставим персонажа
        // this.volfLeftBottom.setXY(100,10);
    }
    init() {
        super.init();

    }
    update(time) {
        //this.volfLeftBottom.update(time);
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
        //this.game.screen.drawSprite(this.volfLeftBottom)//добавили персонажа волка
        super.render(time);
    }
}