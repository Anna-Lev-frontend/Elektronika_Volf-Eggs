import { Game } from "./game";// входная точка
//запускаем игру после загрузки документа
window.onload = () => {

    
    const autorization = new Autorization();
    autorization.render();

   


}

class Autorization {
    constructor() {
        this.storage = localStorage;
        this._generateTemplate();//это приватный метод, т.к. вызывается и работаем с ним только внутри класса(_)
    }

    _generateTemplate() {
        this.template = document.createElement('section');
        this.template.classList.add('registration');

        const label = document.createElement('label');
        label.classList.add('label');
        label.innerText = 'Имя игрока';


        const input = document.createElement('input');
        input.classList.add('input')
        label.append(input);

        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = 'Далее';
        btn.addEventListener('click', () => {
            this.storage.setItem('name', input.value);
            if(!localStorage.getItem('result')){//забрать по ключу (setItem получить по ключу)
                this.storage.setItem('result', JSON.stringify([]));
            } 
            
            const electronika = new Game(1150, 700);
            electronika.run();// запустили игру
        })


        this.template.append(label, btn);

    }
    render() {// публичный метод, т.к. работаем с ним в разных местах, вне класса
        document.body.append(this.template)

    }
}

console.log('Работает');


