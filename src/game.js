import { S creen } from "./screen";

export class Game {
    constructor() {
        //создаем размер экрана
        this.screen = new Screen(600, 400)

    }

    frame(time) {
        requestAnimationFrame(time => this.frame(time()));
    }
    run() {
        requestAnimationFrame(time => this.frame(time()));
    }

}