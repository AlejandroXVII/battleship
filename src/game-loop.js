import { Player } from "./player-obj";
import { loadGameBoard, loadEmptyGameBoard } from "./load-game-board";

function gameLoop() {
  function battle() {
    if (player.gameBoard.ships.length > 3) {
      console.log(player);
      const computer = new Player();
      const $playerContainer = document.createElement("div");
      $playerContainer.classList.add("game-board-container");
      $playerContainer.id = "player";
      const $computerContainer = document.createElement("div");
      $computerContainer.classList.add("game-board-container");
      $computerContainer.id = "computer";
      document.querySelector("#content").appendChild($playerContainer);
      document.querySelector("#content").appendChild($computerContainer);

      computer.autoPlaceAllShips();
      player.addEnemyGameBoard(computer.gameBoard);
      computer.addEnemyGameBoard(player.gameBoard);
      loadGameBoard(player, computer, $playerContainer, $computerContainer);
    }
  }
  const player = new Player();
  loadEmptyGameBoard(player);

  document.querySelector("#start-button").addEventListener("click", battle);
}

export { gameLoop };
