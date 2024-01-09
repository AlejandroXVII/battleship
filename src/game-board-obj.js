class GameBoard {
  constructor(size = 20) {
    this.size = size;
    this.coordinates = new Map();
    this.ships = [];
  }
  receiveAttack(arrayCoords) {
    let coords = this.fromArrayToCoords([arrayCoords[0], arrayCoords[1]]);
    if (
      this.coordinates.has(coords) &
      (this.coordinates.get(coords) !== "attacked-already") &
      (this.coordinates.get(coords) !== "missed-attack")
    ) {
      this.coordinates.get(coords).hit();
      this.coordinates.set(coords, "attacked-already");
    } else if (this.coordinates.has(coords) === false) {
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
      this.ships.push(ship);
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
      ((arrayCoords[1] > this.size) & !defaultPosition) |
      ((arrayCoords[0] > this.size) |
        ((arrayCoords[1] + shipSize > this.size) & defaultPosition))
    ) {
      placeIsAvailable = false;
    }
    return placeIsAvailable;
  }
  fromArrayToCoords(coords) {
    return "x:" + coords[0] + ",y:" + coords[1];
  }
}

export { GameBoard };
