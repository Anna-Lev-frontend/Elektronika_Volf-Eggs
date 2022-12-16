import { Statistics } from "./scenes/statistics";

export class ControlState {
    constructor(screen, game) {
        this.screen = screen;
        this.game = game;
        this.up = false;// false т.к. кнопки не нажаты
        this.down = false;
        this.left = false;
        this.right = false;
        this.resultEnd = false;
        this.speedGame = 2000;
        this.start = false; //начало игры(кнопка старт)
        this.startGame = false;
        this.keyMap = new Map([
            [37, 'left'], [39, 'right'], [38, 'up'], [40, 'down'], [32, 'start']
        ]);
        this.btnA = false;
        this.btnB = false;
        document.addEventListener('keydown', (event) => this.update(event, true));
        document.addEventListener('keyup', (event) => this.update(event, false));
        this.screen.canvas.addEventListener('mousedown', (event) => this.update(event, true));
        this.screen.canvas.addEventListener('mouseup', (event) => this.update(event, false));

    }
    //определяем обработчик, который будет менять наше состояние
    update(event, pressed) {//event Это объект инстанс класса

        if (event instanceof KeyboardEvent) {//проверяем является ли even инстансам класса клавиатуры
            if (this.keyMap.has(event.keyCode)) {
                event.preventDefault();//отменяем стандартное поведение кнопки, eventa
                event.stopPropagation();//отключаем всплытие вызова всех родителей
                this[this.keyMap.get(event.keyCode)] = pressed;//отвечает по нажатию кнопки навигации
            }
        } else if (event instanceof MouseEvent) {//клик мышки это pointevent, а все остальные действия мышки это mouseevent

            if (event.offsetX >= 950 && event.offsetX <= 1030 && event.offsetY >= 70 && event.offsetY <= 120) {

                if (!this.startGame) {
                    console.log('speed A')
                    this.startGame = true;
                    this.speedGame = 2000;
                }


            } else if (event.offsetX >= 950 && event.offsetX <= 1030 && event.offsetY >= 170 && event.offsetY <= 220) {
                if (!this.startGame) {
                    this.startGame = true;
                    this.speedGame = 1000;
                }

            } else if (event.offsetX >= 950 && event.offsetX <= 1030 && event.offsetY >= 270 && event.offsetY <= 320) {
                if (pressed) {
                    const popup = new Statistics()
                }
            }
            else if (event.offsetX >= 100 && event.offsetX <= 190 && event.offsetY >= 535 && event.offsetY <= 625) {
                this.down = pressed;
                this.left = pressed;

            } else if (event.offsetX >= 935 && event.offsetX <= 1025 && event.offsetY >= 535 && event.offsetY <= 625) {
                this.down = pressed;
                this.right = pressed;

            } else if (event.offsetX >= 100 && event.offsetX <= 190 && event.offsetY >= 415 && event.offsetY <= 505) {

                this.up = pressed;
                this.left = pressed;

            }
            else if (event.offsetX >= 935 && event.offsetX <= 1025 && event.offsetY >= 415 && event.offsetY <= 505) {
                this.up = pressed;
                this.right = pressed;

            }
        }

    }

}