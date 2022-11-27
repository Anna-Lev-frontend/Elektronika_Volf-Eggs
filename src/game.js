import { Screen } from "./screen";
import { Loading } from "./scenes/loading";
import { Menu } from "./scenes/menu";
import { GameLevel } from "./scenes/game-level";
import { Scene } from "./scene";
import { ControlState } from "./control-state";

export class Game {
    constructor(width, height) {
        console.log(width,height)
        //создаем размер экрана
        this.screen = new Screen(width, height);
        //загружаем графику, за нее отвечает класс screen
        this.screen.loadImages({
            //consoleNew: "img/consoleNew.png",
            // gorila: './img/mini-gorila.png',
            // lemur: './img/mini-lemur.png',
            panda: 'img/mini-panda.png',
           // eagle: './img/mini-eagle.png'
        });
        this.control = new ControlState();
        this.scenes = {
            loading: new Loading(this),
            menu: new Menu(this),
            gameLevel: new GameLevel(this)
        };
        this.currentScene = this.scenes.loading;// добавили нашу сцену в контейнер сцен game,сделали loading текущей сценой, т.к. это первая сцена
        this.currentScene.init();
    }
    changeScene(status) {
        switch (status) {
            case Scene.LOADED:
                return this.scenes.menu;
            case Scene.START_GAME:
                return this.scenes.gameLevel;
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
        requestAnimationFrame(time => this.frame(time));//запихивает анимацию в очередь для отрисовки
    }
    run() {
        requestAnimationFrame(time => this.frame(time));
    }
}
