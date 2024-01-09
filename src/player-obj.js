import { GameBoard } from "./game-board-obj";
import { Ship } from "./ship-obj";

class Player {
  constructor(name = "user", numShips = 4) {
    this.name = name;
    this.gameBoard = new GameBoard();
    this.ships = [];
    for (let index = 0; index < numShips; index++) {
      this.ships.push(new Ship(2 + index));
    }
  }
  placeAllShips() {
    gameBoard.placeShip(ships[0], [2, 2], false);
    gameBoard.placeShip(ships[1], [5, 5], true);
    gameBoard.placeShip(ships[2], [10, 10], false);
    gameBoard.placeShip(ships[3], [15, 2], true);
  }
}

export { Player };
