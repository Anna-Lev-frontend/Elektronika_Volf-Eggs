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
            this.finish(Scene.START_GAME);// заканчивает сцену для меню и начинаем игру
        }
    }
    render(time) {
        this.update(time)
     
        //отображаем картинку заставку
        //this.game.screen.drawImage(0, 0, 'splashScreen'); //НУЖНА ЗАСТАВКА НА ИГРУ

        //для пользователя пишем,чтобы начать игру он должен нажать пробел
        this.game.screen.print(500, 300, 'Нажмите пробел');
        super.render(time);

    }
}
