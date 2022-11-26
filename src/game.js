import { Screen } from "./screen";
import { Loading } from "./scenes/loading";
import { Menu } from "./scenes/menu"
import { Scene } from "./scene";

export class Game {
    constructor({ width = 670, height = 420 } = {}) {
        //создаем размер экрана
        this.screen = new Screen(width, height);
        //загружаем графику, за нее отвечает класс screen
        this.screen.loadImages({
            console: "img/console.png",
           
        });

        this.scenes = {
            loading: new Loading(this),
            menu: new Menu(this)
        };
        this.currentScene = this.scenes.loading;// добавили нашу сцену в контейнер сцен game,сделали loading текущей сценой, т.к. это первая сцена
        this.currentScene = init();
    }
changeScene(status){
    switch(status){
        case Scene.LOADED:
            return this.scenes.menu;
            break;

            default:
                return this.scenes.menu;
    }
}

    frame(time) {
        //делаем механизм переключения сцен
        if (this.currentScene.status != Scene.WORKING) {
            this.currentScene = this.changeScene(this.currentScene.status);
            this.currentScene.init();
        }
        this.currentScene.render(time);// запускаем текущую сцену
        requestAnimationFrame(time => this.frame(time()));
    }
    run() {
        requestAnimationFrame(time => this.frame(time()));
    }
}
