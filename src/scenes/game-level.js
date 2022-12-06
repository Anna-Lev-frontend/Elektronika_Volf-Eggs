import { Scene } from "../scene";
import { SpriteSheet } from "../sprite-sheet";
import { Sprite } from "../sprite";
import { Player } from "../player";
import { Enemy } from "../enemy";

export class GameLevel extends Scene {
    constructor(game) {
        super(game);
        this.btnRed = [{ x: 100, y: 535 }, { x: 935, y: 535 }, { x: 100, y: 415 }, { x: 935, y: 415 }];
        this.btnPink = [{ x: 950, y: 70 }, { x: 950, y: 170 }, { x: 950, y: 270 }];
        this.player = new Player(this.game.control);
        this.enemy = new Enemy(this.game.control);
    }
    init() {
        super.init();
    }
    update(time) {
        this.player.update(time);
        this.enemy.update(time);
    }
    render(time) {
        this.update(time);
        this.game.screen.fill('#FFFF');
        this.game.screen.drawImage(0, 0, 'background');// добавили розовую консоль
        this.btnRed.forEach((item) => {
            this.game.screen.drawImage(item.x, item.y, 'btnRed');// добавили красные кнопки
        });
        this.game.screen.drawImage(263, 295, 'stairsLeft');//левый курятник
        this.game.screen.drawImage(574, 290, 'stairsRight');//правый курятник
        this.game.screen.drawImage(262, 138, 'home');//крыша дома
        this.game.screen.drawImage(745, 135, 'glass');//трава сверху
        this.game.screen.drawImage(262, 205, 'chickenLeftTop')// курица левая сверху
        this.game.screen.drawImage(262, 325,'chickenLeftBottom')// курица левая снизу
        this.game.screen.drawImage(760, 210,'chickenRightTop')//курица правая сверху
        this.game.screen.drawImage(795, 320, 'chickenRightBottom')//курица правая снизу
        this.btnPink.forEach((item) => {
             this.game.screen.drawImage(item.x, item.y, 'btnPink');// добавили розовые кнопки
         });
        this.game.screen.drawSprite(this.player.view)//добавили персонажа волка
        
        if(this.enemy.view){
            this.game.screen.drawSprite(this.enemy.view)//появляется яйцо
            
            this.enemy.view.run();
        }
        super.render(time);
    }
}