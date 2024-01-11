import "./style.css";
import { Player } from "./player-obj";
import { loadGameBoard } from "./load-game-board";
/*
const player1 = new Player();
const player2 = new Player();
player1.autoPlaceAllShips();
player2.autoPlaceAllShips();
player1.addEnemyGameBoard(player2.gameBoard);
player2.addEnemyGameBoard(player1.gameBoard);
let numBattles = 0;
while (
  !player1.enemyGameBoard.isAllShipsSunk() &
  !player2.enemyGameBoard.isAllShipsSunk()
) {
  player1.autoAttack();
  player2.autoAttack();
  numBattles += 1;
  player1.enemyGameBoard.showGameBoard();
  player2.enemyGameBoard.showGameBoard();
}
*/
const player = new Player();
const computer = new Player();
player.autoPlaceAllShips();
computer.autoPlaceAllShips();
player.addEnemyGameBoard(computer.gameBoard);
computer.addEnemyGameBoard(player.gameBoard);
const $playerContainer = document.querySelector("#player");
const $computerContainer = document.querySelector("#computer");
loadGameBoard(player.enemyGameBoard, $playerContainer, false);
loadGameBoard(computer.enemyGameBoard, $computerContainer, true);
