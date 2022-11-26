import { Screen } from "./screen";
import { Loading } from "./scenes/loading";

export class Game {
    constructor({ width = 670, height = 420 } = {}) {
        //создаем размер экрана
        this.screen = new Screen(width, height);
        //загружаем графику, за нее отвечает класс screen
        this.screen.loadImages({
            // orc: "img/",
            // player: "img/",
            // title: "img/",
            // tiles: "img/"
        });

        this.scenes = {
            loading: new Loading(this)
        };
        this.currentScene = this.scenes.loading;// добавили нашу сцену в контейнер сцен game,сделали loading текущей сценой, т.к. это первая сцена
        this.currentScene = init();
    }
    frame(time) {
        //делаем механизм переключения сцен
        if (this.currentScene.isActive == false) {
            this.currentScene = this.scenes[this.currentScene.nextScene];
            this.currentScene.init();
        }
        this.currentScene.render(time);// запускаем текущую сцену
        requestAnimationFrame(time => this.frame(time()));
    }
    run() {
        requestAnimationFrame(time => this.frame(time()));
    }
}
