import { Scene } from "../scene";
// это конец игры
export class GameOver extends Scene {
    constructor(game) {
        super(game);
        this.result;
    }
    init() {
        super.init();
    }
    update(time) {
        if (this.game.control.start) {
            this.finish(Scene.START_GAME);// заканчивает сцену для меню и начинаем игру
        }
    }
    render(time) {
        this.update(time)
        this.game.screen.fill('#87CEEB');
        this.game.screen.drawImage(0, 30, 'hare');
        this.game.screen.drawImage(750, 600, 'eggTrush');
        this.game.screen.print(400, 300, 'Чтобы начать игру нажмите пробел');
        this.game.screen.print(470, 400, `Итого собрано(шт): ${this.result}`);
        this.game.screen.stopAudio('chikens');
        this.game.screen.playAudio('finish');//музыка на конец игры
        super.render(time);
    }
}