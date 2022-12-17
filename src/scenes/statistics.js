import { Scene } from '../scene';

export class Statistics {
    constructor() {
        const remove = document.querySelector('.popup');//обнуляем popup
        if (remove) {
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
            li.innerText = `${item.name} / ${item.positiv} ${this.getEggPrefecs(item.positiv)}`//position:absolut ,
            ol.append(li);
        })
        popup.append(ol);
        document.body.append(popup);
    }
    getEggPrefecs(value) {
        const eggsPrefecs = [{ value: [1], word: 'яйцо' }, { value: [2, 3, 4], word: 'яйца' }];
        const word = eggsPrefecs
            .find((prefecs) => {
                let lastSymbol = value;
                if (value > 20) {
                    lastSymbol = Number(String(value).slice(1, -1));
                }
                console.log(lastSymbol)
                return prefecs.value.includes(lastSymbol);
            })?.word
        return word ? word : 'яиц'
        //? вернет underfined если такого ключа не существует, значит вернет яиц
    }
}