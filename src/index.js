import "./style.css";
import { gameLoop } from "./game-loop";
import { loadEmptyGameBoard } from "./load-game-board";
import { Player } from "./player-obj";

//const player = new Player();
//loadEmptyGameBoard(player);
gameLoop();
function reStartGame() {
  document.querySelector("#player").remove();
  document.querySelector("#computer").remove();
  gameLoop();
  document.querySelector("#game-over").close();
}
document.querySelector("#repeat").addEventListener("click", reStartGame);
