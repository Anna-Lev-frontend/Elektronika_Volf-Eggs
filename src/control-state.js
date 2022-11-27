export class ControlState {
    constructor() {
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
        //вызов огня, но нам он не нужен
        this.fire = false;
        this.keyMap = new Map([
            [37, 'left'], [39, 'right'], [38, 'up'], [40, 'down'], [32, 'fire']
        ]);
        document.addEventListener('keydown', (event) => this.update(event, true));
        document.addEventListener('keyup', (event) => this.update(event, false));
    }
    //определяем обработчик, который будет менять наше состояние
    update(event, pressed) {
        if (this.keyMap.has(event, this.keyCode)){
            event.preventDefault();
            event.stopPropagation();
            this[this.keyMap.get(event.keyCode)] = pressed;
          
        }
    }
}