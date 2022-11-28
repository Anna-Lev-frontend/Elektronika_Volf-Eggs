import { Sprite } from "./sprite";

export class Animation extends Sprite {
    constructor({ imageName, frames, speed, repeat = true, autorun = true, width = 64, heiht = 64 }) {
        super({
            imageName: imageName,
            sourceX: frames[0].sx,
            sourceY: frames[0].sy,
            //width: width
            //height: height
        });
        this.frames = frames;
        this.speed = speed;
        this.repeat = repeat;
        this.running = autorun;
        this.lastTime = 0;
        this.currentFrame = 0;
        this.totalFrames = this.frames.length;
    }
    //добавляем метод для установки текущего фрейма
    setFrame(index) {
        this.currentFrame = index;
        this.sourceX = this.frames[index].sx;
        this.sourceY = this.frames[index].sy;
    }
    //добавляем методы для запуска и остановки анимации
    run() {
        //временно прописыаем if
        if(!this.running){
        this.setFrame(0);
        this.running = true;
        }
    }
    stop() {
        this.running = false;
    }
    //создаем метод для определения следующего фрейма, он определит конец анимации и запустит сначало или остановит анимацию
    nextFrame() {
        if ((this.currentFrame + 1) == this.totalFrames) {
            if (this.repeat) {
                this.setFrame(0);
                return;
            }
            this.stop();
            return;
        }
        this.setFrame(this.currentFrame + 1)
    }
    //создаем метод, который будет обновлять нашу анимацию в цикле
    update(time) {
        if (!this.running) {
            return;
        }
        if (this.lastTime == 0) {
            this.lastTime = time;
            return;
        }
        if ((time - this.lastTime) > this.speed) {
            this.nextFrame();
            this.lastTime = time //временно убираем += this.speed
        }
    }
}
