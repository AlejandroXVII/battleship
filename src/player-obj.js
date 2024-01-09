import { GameBoard } from "./game-board-obj";
import { Ship } from "./ship-obj";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
function randomBoolean() {
  return Math.random() < 0.5;
}

class Player {
  constructor(name = "user", numShips = 4) {
    this.name = name;
    this.gameBoard = new GameBoard();
    this.enemyGameBoard = undefined;
    this.ships = [];
    this.futuresAttacks = [];
    this.lastHit = [];
    for (let index = 0; index < numShips; index++) {
      this.ships.push(new Ship(2 + index));
    }
  }
  addEnemyGameBoard(enemyGameBoard) {
    this.enemyGameBoard = enemyGameBoard;
  }
  autoPlaceAllShips() {
    for (let index = 0; index < this.ships.length; index++) {
      let arrayCoords = [];
      let orientation = false;
      do {
        arrayCoords = [
          getRandomInt(0, this.gameBoard.size - 2 - index),
          getRandomInt(0, this.gameBoard.size - 2 - index),
        ];
        orientation = randomBoolean();
      } while (
        !this.gameBoard.isPlaceAvailableForPlacing(
          this.ships[index].length,
          arrayCoords,
          orientation,
        )
      );
      this.gameBoard.placeShip(this.ships[index], arrayCoords, orientation);
    }
  }
  autoAttack() {
    let arrayCoords = [];
    let randomHit = false;
    do {
      if (this.futuresAttacks.length > 0) {
        arrayCoords = this.futuresAttacks.shift();
      } else {
        arrayCoords = [
          getRandomInt(0, this.enemyGameBoard.size),
          getRandomInt(0, this.enemyGameBoard.size),
        ];
        randomHit = true;
      }
    } while (!this.enemyGameBoard.isPlaceAvailableForAttack(arrayCoords));
    this.enemyGameBoard.receiveAttack(arrayCoords);
    if (this.enemyGameBoard.thisCoordinateHasBeenAttack(arrayCoords)) {
      if (randomHit) {
        this.futuresAttacks = [];
        this.futuresAttacks.push([arrayCoords[0] + 1, arrayCoords[1]]);
        this.futuresAttacks.push([arrayCoords[0] - 1, arrayCoords[1]]);
        this.futuresAttacks.push([arrayCoords[0], arrayCoords[1] + 1]);
        this.futuresAttacks.push([arrayCoords[0], arrayCoords[1] - 1]);
        this.lastHit.push(arrayCoords);
      } else if (this.lastHit.length < 6) {
        this.lastHit.push(arrayCoords);
        if (arrayCoords[0] === this.lastHit[0][0]) {
          this.futuresAttacks = [];
          this.futuresAttacks.push([arrayCoords[0], this.lastHit[0][1] + 1]);
          this.futuresAttacks.push([arrayCoords[0], this.lastHit[0][1] - 1]);
          this.futuresAttacks.push([
            arrayCoords[0],
            this.lastHit[this.lastHit.length - 1][1] + 1,
          ]);
          this.futuresAttacks.push([
            arrayCoords[0],
            this.lastHit[this.lastHit.length - 1][1] - 1,
          ]);
        } else if (arrayCoords[1] === this.lastHit[0][1]) {
          this.futuresAttacks = [];
          this.futuresAttacks.push([arrayCoords[0] + 1, arrayCoords[1]]);
          this.futuresAttacks.push([arrayCoords[0] - 1, arrayCoords[1]]);
          this.futuresAttacks.push([this.lastHit[0][0] + 1, arrayCoords[1]]);
          this.futuresAttacks.push([this.lastHit[0][0] - 1, arrayCoords[1]]);
          this.futuresAttacks.push([
            this.lastHit[this.lastHit.length - 1][0] + 1,
            arrayCoords[1],
          ]);
          this.futuresAttacks.push([
            this.lastHit[this.lastHit.length - 1][0] - 1,
            arrayCoords[1],
          ]);
        } else {
          this.lastHit = [];
          this.futuresAttacks = [];
        }
      }
    }
  }
}

export { Player };
