import "./style.css";
import { Player } from "./player-obj";

const player = new Player();
const player2 = new Player();
player2.autoPlaceAllShips();
player.addEnemyGameBoard(player2.gameBoard);
while (!player.enemyGameBoard.isAllShipsSunk()) {
  player.autoAttack();
  player.enemyGameBoard.showGameBoard();
}
