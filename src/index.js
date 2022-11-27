import { Game } from "./game";
//запускаем игру после загрузки документа
window.onload = () => {
    
    const electronika = new Game(window.innerWidth, window.innerHeight);
 
    electronika.run();
}
console.log('Работает');
 

