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
            panda: 'img/mini-panda.png',
            // account: 'img/account.png',
            // btnRed: 'img/btnRed.png',
            // btnWhite: 'img/btnWhite.png',
            // chick: 'img/chick.png',
            // consoleNew: 'img/consoleNew.png',
            // chickenLeftBottom: 'img/chickenLeftBottom.png',
            // chickenLeftTop: 'img/chickenLeftTop.png',
            // chickenRightBottom: 'img/chickenRightBottom.png',
            // chickenRightTop: 'img/chickenRightTop.png',
            // chickRun: 'img/chickRun.png',
            // egg1: 'img/egg1.png',
            // egg2: 'img/egg2.png',
            // egg3: 'img/egg3.png',
            // egg4: 'img/egg4.png',
            // eggBroken: 'img/eggBroken.png',
            // eggTrush: 'img/eggTrush.png',
            // glass: 'img/glass.png',
            // hare: 'img/hare.png',
            // home: 'img/home.png',
            stairsLeft: 'img/stairsLeft.png',
            // stairsRight: 'img/stairsRight.png',
            volfLeftBottom: 'img/volfLeftBottom.png',
            // volfLeftTop: 'img/volfLeftTop.png',
            // volfRightBottom: 'img/volfRightBottom.png',
            // volfRightTop: 'img/volfvolfRightTop.png',   
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
            console.log(this.currentScene.status)
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
