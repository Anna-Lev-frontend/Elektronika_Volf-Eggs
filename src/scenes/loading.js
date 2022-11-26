import { Scene } from '../scene';

export class Loading extends Scene {
    constructor(game) {
        super(game);
        this.nextScene = 'menu'
    }
    render(time){
        this.game.screen.fill('#000000');
        this.game.screen.print('50, 70, Загрузка...')
        super.render(time)
    }
}