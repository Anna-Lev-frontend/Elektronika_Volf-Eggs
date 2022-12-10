import { Scene } from '../scene';

export class Statistics extends Scene {
    constructor(game) {
        super(game);
    }
    init() {
        super.init()
    }
    update(time) {
        if (this.game.control.resultEnd) {
            this.finish(Scene.LOADED);// заканчивает сцену для меню и начинаем игру
        }
    }
    render(time) {
        this.update(time)
// буду обращаться к localstorage и забирать результаты и выводить пользователю 
        //отображаем картинку заставку
        this.game.screen.fill('#FFFFFF');//поменять фон
        //как яйца

        super.render(time);
    }
}