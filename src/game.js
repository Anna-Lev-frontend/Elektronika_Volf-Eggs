import { Screen } from "./screen";
import { Loading } from "./scenes/loading";
import { Menu } from "./scenes/menu";
import { GameLevel } from "./scenes/game-level";
import { Scene } from "./scene";
import { ControlState } from "./control-state";

export class Game {
    constructor(width, height) {
       
        //создаем размер экрана
        this.screen = new Screen(width, height);
        //загружаем графику, за нее отвечает класс screen
        this.screen.loadImages({
            tiles: 'img/tiles.png',
            background: 'img/background.jpg',
            btnRed: 'img/btnRed.png',  
            btnPink: 'img/btnPink.png',
            stairsLeft: 'img/stairsLeft.png',
            stairsRight: 'img/stairsRight.png',
            home: 'img/home.png',
            chickenLeftTop: 'img/chickenLeftTop.png',
            chickenLeftBottom: 'img/chickenLeftBottom.png',
            chickenRightTop: 'img/chickenRightTop.png',
            chickenRightBottom: 'img/chickenRightBottom.png',
            glass: 'img/glass.png',
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
