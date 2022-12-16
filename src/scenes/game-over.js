import { Scene } from "../scene";

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
        this.game.screen.fill('#000000');
        this.game.screen.print(400, 300, 'Чтобы начать игру нажмите пробел');
        this.game.screen.print(400, 400, this.result)
        super.render(time);
    }
}