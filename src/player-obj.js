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
  checkBestAttack(arrayCoords) {
    let nextBestAttack = [];
    //Compare that there are come attack one block close
    if (
      (this.enemyGameBoard.coordinates.get(
        this.enemyGameBoard.fromArrayToCoords([
          arrayCoords[0],
          arrayCoords[1] + 1,
        ]),
      ) ===
        "attacked-already") |
      (this.enemyGameBoard.coordinates.get(
        this.enemyGameBoard.fromArrayToCoords([
          arrayCoords[0],
          arrayCoords[1] - 1,
        ]),
      ) ===
        "attacked-already") |
      (this.enemyGameBoard.coordinates.get(
        this.enemyGameBoard.fromArrayToCoords([
          arrayCoords[0] + 1,
          arrayCoords[1],
        ]),
      ) ===
        "attacked-already") |
      (this.enemyGameBoard.coordinates.get(
        this.enemyGameBoard.fromArrayToCoords([
          arrayCoords[0] - 1,
          arrayCoords[1],
        ]),
      ) ===
        "attacked-already")
    ) {
      //compare that there are a previous horizontal attack
      if (
        (this.enemyGameBoard.coordinates.get(
          this.enemyGameBoard.fromArrayToCoords([
            arrayCoords[0],
            arrayCoords[1] + 1,
          ]),
        ) ===
          "attacked-already") |
        (this.enemyGameBoard.coordinates.get(
          this.enemyGameBoard.fromArrayToCoords([
            arrayCoords[0],
            arrayCoords[1] - 1,
          ]),
        ) ===
          "attacked-already")
      ) {
        for (let index = 1; index < 5; index++) {
          if (
            this.enemyGameBoard.coordinates.get(
              this.enemyGameBoard.fromArrayToCoords([
                arrayCoords[0],
                arrayCoords[1] - index,
              ]),
            ) === "missed-attack"
          ) {
            break;
          }
          if (
            (this.enemyGameBoard.coordinates.get(
              this.enemyGameBoard.fromArrayToCoords([
                arrayCoords[0],
                arrayCoords[1] - index,
              ]),
            ) !==
              "attacked-already") &
            (this.enemyGameBoard.coordinates.get(
              this.enemyGameBoard.fromArrayToCoords([
                arrayCoords[0],
                arrayCoords[1] + index,
              ]),
            ) !==
              "missed-attack")
          ) {
            nextBestAttack.push([arrayCoords[0], arrayCoords[1] - index]);
            break;
          }
        }
        for (let index = 1; index < 5; index++) {
          if (
            this.enemyGameBoard.coordinates.get(
              this.enemyGameBoard.fromArrayToCoords([
                arrayCoords[0],
                arrayCoords[1] + index,
              ]),
            ) === "missed-attack"
          ) {
            break;
          }
          if (
            (this.enemyGameBoard.coordinates.get(
              this.enemyGameBoard.fromArrayToCoords([
                arrayCoords[0],
                arrayCoords[1] + index,
              ]),
            ) !==
              "attacked-already") &
            (this.enemyGameBoard.coordinates.get(
              this.enemyGameBoard.fromArrayToCoords([
                arrayCoords[0],
                arrayCoords[1] + index,
              ]),
            ) !==
              "missed-attack")
          ) {
            nextBestAttack.push([arrayCoords[0], arrayCoords[1] + index]);
            break;
          }
        }
        //compare that there are a previous vertical attack
      } else if (
        (this.enemyGameBoard.coordinates.get(
          this.enemyGameBoard.fromArrayToCoords([
            arrayCoords[0] + 1,
            arrayCoords[1],
          ]),
        ) ===
          "attacked-already") |
        (this.enemyGameBoard.coordinates.get(
          this.enemyGameBoard.fromArrayToCoords([
            arrayCoords[0] - 1,
            arrayCoords[1],
          ]),
        ) ===
          "attacked-already")
      ) {
        for (let index = 1; index < 5; index++) {
          if (
            this.enemyGameBoard.coordinates.get(
              this.enemyGameBoard.fromArrayToCoords([
                arrayCoords[0] - index,
                arrayCoords[1],
              ]),
            ) === "missed-attack"
          ) {
            break;
          }
          if (
            (this.enemyGameBoard.coordinates.get(
              this.enemyGameBoard.fromArrayToCoords([
                arrayCoords[0] - index,
                arrayCoords[1],
              ]),
            ) !==
              "attacked-already") &
            (this.enemyGameBoard.coordinates.get(
              this.enemyGameBoard.fromArrayToCoords([
                arrayCoords[0] - index,
                arrayCoords[1],
              ]),
            ) !==
              "missed-attack")
          ) {
            nextBestAttack.push([arrayCoords[0] - index, arrayCoords[1]]);
            break;
          }
        }
        for (let index = 1; index < 5; index++) {
          if (
            this.enemyGameBoard.coordinates.get(
              this.enemyGameBoard.fromArrayToCoords([
                arrayCoords[0] + index,
                arrayCoords[1],
              ]),
            ) === "missed-attack"
          ) {
            break;
          }
          if (
            (this.enemyGameBoard.coordinates.get(
              this.enemyGameBoard.fromArrayToCoords([
                arrayCoords[0] + index,
                arrayCoords[1],
              ]),
            ) !==
              "attacked-already") &
            (this.enemyGameBoard.coordinates.get(
              this.enemyGameBoard.fromArrayToCoords([
                arrayCoords[0] + index,
                arrayCoords[1],
              ]),
            ) !==
              "missed-attack")
          ) {
            nextBestAttack.push([arrayCoords[0] + index, arrayCoords[1]]);
            break;
          }
        }
      }
    } else {
      nextBestAttack = [
        [arrayCoords[0], arrayCoords[1] - 1],
        [arrayCoords[0], arrayCoords[1] + 1],
        [arrayCoords[0] - 1, arrayCoords[1]],
        [arrayCoords[0] + 1, arrayCoords[1]],
      ];
    }
    console.log(nextBestAttack);
    return nextBestAttack;
  }
  autoAttack() {
    let arrayCoords = [];
    do {
      if (this.futuresAttacks.length > 0) {
        arrayCoords = this.futuresAttacks.shift();
      } else {
        arrayCoords = [
          getRandomInt(0, this.enemyGameBoard.size),
          getRandomInt(0, this.enemyGameBoard.size),
        ];
      }
    } while (!this.enemyGameBoard.isPlaceAvailableForAttack(arrayCoords));
    this.enemyGameBoard.receiveAttack(arrayCoords);
    if (this.enemyGameBoard.thisCoordinateHasBeenAttack(arrayCoords)) {
      this.futuresAttacks = this.checkBestAttack(arrayCoords);
    }
  }
}

export { Player };
