import { Scene } from '../scene';

export class Menu extends Scene {
    constructor(game) {
        super(game);
    }
    init() {
        super.init()
    }
    update(time) {
        if (this.game.control.start) {
            this.finish(Scene.START_GAME);
        }
    }
    render(time) {
        this.update(time)
     
        //отображаем картинку заставку
        //this.game.screen.drawImage(0, 0, 'panda'); НУЖНА ЗАСТАВКА НА ИГРУ

        //для пользователя пишем,чтобы начать игру он должен нажать пробел
        this.game.screen.print(250, 500, 'Нажмите пробел');
        super.render(time);

    }
}
