import { Game } from "./game";
//запускаем игру после загрузки документа
window.onload = () => {
    
    const electronika = new Game(1200, 750);
 
    electronika.run();
}
console.log('Работает');
 

