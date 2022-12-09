export class ControlState {
    constructor(screen) {
        this.screen = screen;
        this.up = false;
        this.down = false;
        this.left = false;// false т.к. кнопки не нажаты
        this.right = false;
        //начало игры(кнопка старт)
        this.start = false;
        this.keyMap = new Map([
            [37, 'left'], [39, 'right'], [38, 'up'], [40, 'down'], [32, 'start']
        ]);
        this.btnA = false;
        this.btnB = false;
        document.addEventListener('keydown', (event) => this.update(event, true));
        document.addEventListener('keyup', (event) => this.update(event, false));
        this.screen.canvas.addEventListener('click', (event) => this.update(event, false))
    }
    //определяем обработчик, который будет менять наше состояние
    update(event, pressed) {//event Это объект, инстанс класса
        if (event instanceof KeyboardEvent) {//поверяем является ли even инстансам класса keyboardevent
            if (this.keyMap.has(event.keyCode)) {
                event.preventDefault();
                event.stopPropagation();
                this[this.keyMap.get(event.keyCode)] = pressed;
            }
        } else if (event instanceof PointerEvent) {//клик мышки это Pointevent
            
            if (event.offsetX >= 950 && event.offsetX <= 1030 && event.offsetY >= 70 && event.offsetY <= 120) {
                console.log(event,'игра А');
            } else if (event.offsetX >= 950 && event.offsetX <= 1030 && event.offsetY >= 170 && event.offsetY <= 220){
                console.log(event,'Игра В');
            } else if (event.offsetX >= 950 && event.offsetX <= 1030 && event.offsetY >= 270 && event.offsetY <= 320) {
                console.log(event, 'Меню');
            }
        }

    }

}