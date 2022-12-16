import { Screen } from "./screen";
import { Loading } from "./scenes/loading";
import { Menu } from "./scenes/menu";
import { GameLevel } from "./scenes/game-level";
import { Scene } from "./scene";
import { ControlState } from "./control-state";
import { GameOver } from "./scenes/game-over";

export class Game {// самый главный класс,он управляет всеми компонентами игры (входная точка index.js)
    constructor(width, height) {

        //создаем размер экрана
        this.screen = new Screen(width, height);
        //загружаем графику, за нее отвечает класс screen
        this.screen.loadImages({
            splashScreen: 'img/splashScreen.png',
            tiles: 'img/tiles.png',
            background: 'img/background.png',
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
            wolf: 'img/wolf.png',
            eggs: 'img/eggs.png'
           
        });

        this.control = new ControlState(this.screen, this);
        this.scenes = {
            loading: new Loading(this),
            menu: new Menu(this),
            gameLevel: new GameLevel(this),
            gameOver: new GameOver(this)
        };
        this.time = 2000;
        this.currentScene = this.scenes.loading;// добавили нашу сцену в контейнер сцен game,сделали loading текущей сценой, т.к. это первая сцена
        this.currentScene.init();
        

    }
    changeScene(status) {
        switch (status) {
            case Scene.LOADED:
                return this.scenes.menu;
            case Scene.START_GAME:
                return this.scenes.gameLevel;
            case Scene.GAME_OVER:
                return this.scenes.gameOver;// поменять на statistics
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
        
        requestAnimationFrame(time => this.frame(time));//запихивает анимацию в очередь для отрисовки,бесконечная перерисовка всего сайта, браузер работает 60 кадров в секунду, а 60 кадров на перерисовку это примерно 13 милисекунды (100/60)=1,6, т.е. на каждый кадр уходит 1,6 милисекунды
    }
    run() {
        requestAnimationFrame(time => this.frame(time));
    }
    gameEnd(){
        this.control.startGame = false;// после окончания игры скидываем все по дефолту
        this.control.speedGame = 2000;
        this.currentScene.finish(Scene.GAME_OVER);
        this.scenes.gameLevel = new GameLevel(this)
        // сюда запишем музыку проиграл
        
    }
}
