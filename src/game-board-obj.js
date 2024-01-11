class GameBoard {
  constructor(size = 20) {
    if (size < 6) {
      //6 IS THE MINIUM SIZE ALLOW OR AUTO PLACE SHIP FUNCTION ENTER IN A INFINITE LOOP
      size = 10;
    }
    this.size = size;
    this.coordinates = new Map();
    this.ships = [];
  }
  showGameBoard() {
    let line = "";
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        let coordValue = this.coordinates.get(this.fromArrayToCoords([i, j]));
        if (coordValue === undefined) {
          line += "-";
        }
        if (coordValue === "attacked-already") {
          line += "X";
        }
        if (coordValue === "missed-attack") {
          line += "*";
        }
        if (coordValue === "ship-area") {
          line += "/";
        }
        if (
          (coordValue !== undefined) &
          (coordValue !== "attacked-already") &
          (coordValue !== "missed-attack") &
          (coordValue !== "ship-area")
        ) {
          line += "O";
        }
      }
      line += "\n";
    }
    console.log(line);
    console.log("\n");
  }
  receiveAttack(arrayCoords) {
    let coords;
    coords = this.fromArrayToCoords([arrayCoords[0], arrayCoords[1]]);

    if (
      this.coordinates.has(coords) &
      (this.coordinates.get(coords) !== "attacked-already") &
      (this.coordinates.get(coords) !== "missed-attack") &
      (this.coordinates.get(coords) !== "ship-area")
    ) {
      this.coordinates.get(coords).hit();
      this.coordinates.set(coords, "attacked-already");
    } else if (
      (this.coordinates.has(coords) === false) |
      (this.coordinates.get(coords) === "ship-area")
    ) {
      this.coordinates.set(coords, "missed-attack");
    }
  }
  placeShip(ship, arrayCoords, defaultPosition = true) {
    if (
      this.isPlaceAvailableForPlacing(ship.length, arrayCoords, defaultPosition)
    ) {
      for (let index = 0; index < ship.length; index++) {
        let coords = undefined;
        if (defaultPosition) {
          coords = this.fromArrayToCoords([
            arrayCoords[0],
            arrayCoords[1] + index,
          ]);
        } else {
          coords = this.fromArrayToCoords([
            arrayCoords[0] + index,
            arrayCoords[1],
          ]);
        }
        this.coordinates.set(coords, ship);
      }
      this.placeShipArea(
        ship.length,
        [arrayCoords[0], arrayCoords[1]],
        defaultPosition,
      );
      this.ships.push(ship);
    }
  }
  placeShipArea(shipSize, arrayCoords, defaultPosition) {
    let startCoord = [];
    let endCoord = [];

    startCoord = [arrayCoords[0] - 1, arrayCoords[1] - 1];
    if (defaultPosition) {
      endCoord = [arrayCoords[0] + 2, arrayCoords[1] + shipSize + 1];
    } else {
      endCoord = [arrayCoords[0] + shipSize + 1, arrayCoords[1] + 2];
    }
    for (let i = startCoord[0]; i < endCoord[0]; i++) {
      for (let j = startCoord[1]; j < endCoord[1]; j++) {
        let coords = this.fromArrayToCoords([i, j]);
        if (!this.coordinates.has(coords)) {
          this.coordinates.set(coords, "ship-area");
        }
      }
    }
  }
  isPlaceAvailableForPlacing(shipSize, arrayCoords, defaultPosition = true) {
    let placeIsAvailable = true;
    for (let index = 0; index < shipSize; index++) {
      let coords = undefined;
      if (defaultPosition) {
        coords = this.fromArrayToCoords([
          arrayCoords[0],
          arrayCoords[1] + index,
        ]);
      } else {
        coords = this.fromArrayToCoords([
          arrayCoords[0] + index,
          arrayCoords[1],
        ]);
      }
      if (this.coordinates.has(coords)) {
        placeIsAvailable = false;
      }
    }
    if (
      (arrayCoords[0] + shipSize > this.size) |
      (arrayCoords[1] >= this.size)
    ) {
      if (!defaultPosition) {
        placeIsAvailable = false;
      }
    }
    if (
      (arrayCoords[0] >= this.size) |
      (arrayCoords[1] + shipSize > this.size)
    ) {
      if (defaultPosition) {
        placeIsAvailable = false;
      }
    }
    return placeIsAvailable;
  }
  isPlaceAvailableForAttack(arrayCoords) {
    if (
      (arrayCoords[0] >= 0) &
      (arrayCoords[0] < this.size) &
      (arrayCoords[1] >= 0) &
      (arrayCoords[1] < this.size)
    ) {
      let coords = this.fromArrayToCoords([arrayCoords[0], arrayCoords[1]]);
      if (
        (this.coordinates.get(coords) !== "missed-attack") &
        (this.coordinates.get(coords) !== "attacked-already")
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  thisCoordinateHasBeenAttack(arrayCoords) {
    let coords = this.fromArrayToCoords([arrayCoords[0], arrayCoords[1]]);
    if (this.coordinates.get(coords) === "attacked-already") {
      return true;
    } else {
      return false;
    }
  }
  fromArrayToCoords(coords) {
    return "x:" + coords[0] + ",y:" + coords[1];
  }
  isAllShipsSunk() {
    for (let index = 0; index < this.ships.length; index++) {
      if (!this.ships[index].isSunk()) {
        return false;
      }
    }
    return true;
  }
}

export { GameBoard };
