import { Scene } from "../scene";
import { SpriteSheet } from "../sprite-sheet";

export class GameLevel extends Scene {
    constructor(game) {
        super(game);
        this.tiles = new SpriteSheet({
            imageName: 'tiles',
            imageWidth: this.width,// уточнить размеры у нее как основной канвас сделан
            imageHeight: this.height
        });
        //this.stairsLeft = this.tiles.getSprite(7);//*******добавляем левую часть курятника
        //this.stairsLeft.setXY(10, 10);
        //*******описываем героя волка в спрайте который стоит нам спиной с 1-7 спрайт
        this.volfLeftBottomTiles = new SpriteSheet({
            imageName: 'volfLeftBottom',
            imageWidth: 832,
            imageHeight: 1344
        });
        this.volfLeftBottom = this.volfLeftBottomTiles.getAnimation([1,2,3,4,5,6,7], 300);// задали кадры с 1-7 и скорость анимации
        //ставим персонажа
        this.volfLeftBottom.setXY(100,10);
    }
    init() {
        super.init();
    }
    update(time){
        this.volfLeftBottom.update(time);
    }
    render(time) {
        this.update(time);
        this.game.screen.fill('#000000');
        this.game.screen.drawSprite(this.stairsLeft);//добавили курятник слева
        this.game.screen.drawSprite(this.volfLeftBottom)//добавили персонажа волка
        super.render(time);
    }
}