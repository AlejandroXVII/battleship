import "./style.css";
import { Player } from "./player-obj";
import { loadGameBoard } from "./load-game-board";

const $playerContainer = document.createElement("div");
$playerContainer.classList.add("game-board-container");
$playerContainer.id = "player";
const $computerContainer = document.createElement("div");
$computerContainer.classList.add("game-board-container");
$computerContainer.id = "computer";
document.querySelector("#content").appendChild($playerContainer);
document.querySelector("#content").appendChild($computerContainer);
const player = new Player();
const computer = new Player();
player.autoPlaceAllShips();
computer.autoPlaceAllShips();
player.addEnemyGameBoard(computer.gameBoard);
computer.addEnemyGameBoard(player.gameBoard);
loadGameBoard(player, computer, $playerContainer, $computerContainer);
