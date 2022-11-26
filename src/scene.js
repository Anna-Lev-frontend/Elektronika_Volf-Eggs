export class Scene {
    constructor(game) {
        this.game = game;
    }
    //запуск и перезапуск сцены, чтобы вернуть все параметры в первоначальное состояние, например поставить игрока на стартовую позицию
    init() {
        this.isActive = true;
    }
    //отрисовка сцены
    render(time) {

    }
}