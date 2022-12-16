import { Scene } from '../scene';

export class Statistics {
    constructor() {
        const remove = document.querySelector('.popup');//обнуляем popup
        if(remove){
            remove.remove()
        }

        const popup = document.createElement('section');
        popup.classList.add('popup');
        const ol = document.createElement('ol');
        ol.classList.add('ol');

        const resultGame = JSON.parse(localStorage.getItem('result'));
        resultGame.forEach((item) => {
            const li = document.createElement('li')
            li.classList.add('li');
            li.innerText = item.name + item.positiv//position:absolut ,
            ol.append(li);
        })
        popup.append(ol);
        document.body.append(popup);

    }
}