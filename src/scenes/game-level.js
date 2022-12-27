import { Scene } from "../scene";
import { SpriteSheet } from "../sprite-sheet";
import { Sprite } from "../sprite";
import { Player } from "../player";
import { Enemy } from "../enemy";

export class GameLevel extends Scene {// наследуемся от класса scene и создаем новы класс gamelavel
    constructor(game) {
        super(game);
        this.btnRed = [{ x: 100, y: 535 }, { x: 935, y: 535 }, { x: 100, y: 415 }, { x: 935, y: 415 }];
        this.btnPink = [{ x: 950, y: 70 }, { x: 950, y: 170 }, { x: 950, y: 270 }];
        this.player = new Player(this.game.control);//инстант класса player
        this.enemy = new Enemy(this.game.control);
        this.countEggs = { positiv: 0, negativ: 0 }// счетчик на разбитые и не разбитые яйца
    }
    init() {// init это метод инициализации (включение, старт)
        super.init();// super это класс от которого наследуемся
    }
    update(time) {//update (обновляет) перерисовку
        if (this.countEggs.negativ === 3) {// если будет 3 разбитых яйца 
            this.game.scenes.gameOver.result = this.countEggs.positiv;
            const userName = JSON.parse(localStorage.getItem('user')).email;
            const result = JSON.parse(localStorage.getItem('result'))//сюда записываем массив с результатами игры

            const findUser = result.find((item) => {
                return item.name === userName;
            })

            if (!findUser) {// если не нашли пользователя
                result.push({ name: userName, positiv: this.countEggs.positiv });
            } else {//если пользователя нашли
                findUser.positiv = this.countEggs.positiv;
            }
            localStorage.setItem('result', JSON.stringify(result));
            this.game.gameEnd();
        }
        this.player.update(time);
        this.enemy.update(time);

        if (this.player.currentPosition === this.enemy.currentPosition) {
            this.countEggs.positiv += 1;// словил яйцо
            this.game.screen.playAudio('chikens');
        } else if (this.player.currentPosition !== this.enemy.currentPosition && this.enemy.currentPosition) {
            this.countEggs.negativ += 1;// не словил яйцо
            this.game.screen.stopAudio('chikens');
            this.game.screen.playAudio('broken');
            this.game.screen.playAudio('chikens');
        }

    }
    render(time) {// render метод все отрисовывает
        if (this.game.control.startGame) {// игра не будет запускаться, пока переменная из класса control не будет true
            this.update(time);
            super.render(time);
        }

        this.game.screen.fill('#FFFFFF');
        this.game.screen.stopAudio('start');
        this.game.screen.stopAudio('finish');
        //this.game.screen.playAudio('chikens');
        this.game.screen.drawImage(0, 0, 'background');// добавили розовую консоль
        this.btnRed.forEach((item) => {
            this.game.screen.drawImage(item.x, item.y, 'btnRed');// добавили красные кнопки
        });
        this.game.screen.drawImage(263, 295, 'stairsLeft');//левый курятник
        this.game.screen.drawImage(574, 290, 'stairsRight');//правый курятник
        this.game.screen.drawImage(262, 138, 'home');//крыша дома
        this.game.screen.drawImage(745, 135, 'glass');//трава сверху
        this.game.screen.drawImage(262, 205, 'chickenLeftTop')// курица левая сверху
        this.game.screen.drawImage(262, 325, 'chickenLeftBottom')// курица левая снизу
        this.game.screen.drawImage(760, 210, 'chickenRightTop')//курица правая сверху
        this.game.screen.drawImage(795, 320, 'chickenRightBottom')//курица правая снизу
        this.btnPink.forEach((item) => {
            this.game.screen.drawImage(item.x, item.y, 'btnPink');// добавили розовые кнопки
        });
        this.game.screen.drawSprite(this.player.view)//добавили персонажа волка

        if (this.enemy.view) {
            this.game.screen.drawSprite(this.enemy.view)//появляется яйцо
            this.enemy.view.run();
        }
        this.game.screen.print(550, 200, `${this.countEggs.positiv}/${this.countEggs.negativ}`);//счетчик

        this.game.screen.print(960, 150, 'Игра А');//подпись на кнопке
        this.game.screen.print(960, 250, 'Игра B');
        this.game.screen.print(960, 350, 'Меню');

    }

}