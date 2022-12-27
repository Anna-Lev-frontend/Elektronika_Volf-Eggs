export class Scene {
    constructor(game) {
        this.game = game;
        this.status = this.constructor.WORKING;
    }
    static get WORKING() { return 'WORKING'; } //статик поля позволяют нам вызывать их у класса глобально (Object.value)
    static get LOADED() { return 'LOADED'; }
    static get START_GAME() { return 'START_GAME'; }
    static get GAME_OVER() { return 'GAME_OVER'; }
   

    //запуск и перезапуск сцены, чтобы вернуть все параметры в первоначальное состояние, например поставить игрока на стартовую позицию
    init() {
        this.status = this.constructor.WORKING;
    }

    //метод для завершения scene
    finish(status){// принимает какокй-то аргумент status И перезаписывает status (сцена)
        this.status = status;
    }

    //отрисовка сцены
    render(time) {
    }
}