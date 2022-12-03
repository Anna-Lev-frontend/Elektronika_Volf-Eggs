import { Game } from "./game";
//запускаем игру после загрузки документа
window.onload = () => {
    
    const electronika = new Game(1150, 700);
 
    electronika.run();
}
console.log('Работает');
 

