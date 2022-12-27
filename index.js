import { Game } from "./src/game";// входная точка
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './style.css';

//запускаем игру после загрузки документа, onload вызывается когда весь html прогрузилась и с ней можно работать
window.onload = () => {
    const firebaseConfig = {//конфигурация firebase(из документации), данные специализируются из моего приложения firebase
        apiKey: "AIzaSyD9JpIM1SXr3csWT8lFTz4oMwbTHqj2lo4",
        authDomain: "electronika-f5a48.firebaseapp.com",
        projectId: "electronika-f5a48",
        storageBucket: "electronika-f5a48.appspot.com",
        messagingSenderId: "713424683706",
        appId: "1:713424683706:web:3e4ef7081fd1d195fb3883"
    };
    const app = initializeApp(firebaseConfig);// по факту это наш логин ждля поделючения к firebase
    const auth = getAuth();// авторизация firebase

    const autorization = new Autorization(auth);// создаем инстант класса для регистрации пользователя в игре
    autorization.render();// запускаем
}

class Autorization {
    constructor(auth) {
        this.auth = auth;
        this.storage = localStorage;
        this._generateTemplateAuthorization();//это приватный метод, т.к. вызывается и работаем с ним только внутри класса(_)
    }
    _createInput(labelText, placeholder) {
        const label = document.createElement('label');
        label.classList.add('label')
        label.innerText = labelText;
        const input = document.createElement('input');
        input.classList.add('input')
        input.placeholder = placeholder;
        label.append(input);
        return label;
    }
    _createBtn(btnText, btnClass = '', type) {
        const btn = document.createElement('button');
        btn.innerText = btnText;
        btn.classList.add('btnClass');
        btn.addEventListener('click', () => {
            const password = this.inputPassword.lastChild.value;

            const email = this.inputEmail.lastChild.value;
            if (type === 'registration') {
                createUserWithEmailAndPassword(this.auth, email, password) //функция авторизации
                    .then((userCredential) => {
                        const user = userCredential.user;
                        this.template.remove();
                        this.storage.setItem('user', JSON.stringify(user));
                        if (!localStorage.getItem('result')) {//забрать по ключу 
                            this.storage.setItem('result', JSON.stringify([]));//setItem получить по ключу
                        }
                        const electronika = new Game(1150, 700);
                        electronika.run();// запустили игру
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        const divError = document.createElement('div')
                        divError.classList.add('content-error');
                        divError.append(errorCode)
                        this.template.append(divError);//выводим на страницу нашу ошибку если она есть
                    });
            } else {
                signInWithEmailAndPassword(this.auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        this.template.remove();
                        this.storage.setItem('user', JSON.stringify(user));
                        if (!localStorage.getItem('result')) {//забрать по ключу 
                            this.storage.setItem('result', JSON.stringify([]));//setItem получить по ключу
                        }
                        const electronika = new Game(1150, 700);
                        electronika.run();// запустили игру

                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        const divError = document.createElement('div')
                        divError.classList.add('content-error');
                        divError.append(errorMessage)
                        this.template.append(divError);
                        //this.template.append(errorMessage);
                    });
            }
        })
        return btn;
    }
    _generateTemplateAuthorization() {
        const section = document.createElement('section');
        section.classList.add('authorization');
        this.inputEmail = this._createInput('email', 'введите email')
        this.inputPassword = this._createInput('password', 'введите пароль');

        const div = document.createElement('div');
        div.classList.add('divBtn');

        const btnAuthorization = this._createBtn('Войти', 'btn-auth', 'authorization');

        const btnRegistration = this._createBtn('Зарегистророваться', 'btn-regisrt', 'registration');
        div.append(btnAuthorization, btnRegistration);
        section.append(this.inputEmail, this.inputPassword, div);
        this.template = section;
    }

    render() {// публичный метод, т.к. работаем с ним в разных местах, вне класса
        document.body.append(this.template)
    }

}

