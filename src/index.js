import { Game } from "./game";
//запускаем игру
window.onload = () => {
    const electronika = new Game();
    electronika.run();
}
console.log('Работает');
 

