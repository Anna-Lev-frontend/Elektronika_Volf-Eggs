import { Scene } from "../scene";
import { SpriteSheet } from "../sprite-sheet";

export class GameLevel extends Scene {
    constructor(game) {
        super(game);
        this.tiles = new SpriteSheet({
            imageName: 'tiles',
            imageWidth: this.width,// уточнить размеры 
            imageHeight: this.height
        });
        this.tree = this.tiles.getSprite(7)//*******добавляем дерево, которое находится под №7 на рисунке
        this.tree.setXY(10, 10);
        //*******описываем героя в спрайте который стоит нам спиной с 1-7 спрайт
        this.orcTiles = new SpriteSheet({
            imageName: 'orc',
            imageWidth: 832,
            imageHeight: 1344
        });
        this.orc = this.orcTiles.getAnimation([1,2,3,4,5,6,7], 300);// задали кадры с 1-7 и скорость анимации
    }
    init() {
        super.init();
    }
    update(time){
        this.orc.update(time);
    }
    render(time) {
        this.update(time);
        this.game.screen.fill('#000000');
        this.game.screen.drawSprite(this.tree);//добавили дерево
        this.game.screen.drawSprite(this.orc)//добавили персонажа орка
        super.render(time);
    }
}