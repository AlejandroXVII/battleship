//import { Ship } from "./ship-obj";

class GameBoard {
  constructor(size = 10) {
    this.size = size;
    this.coordinates = new Map();
  }
  placeShip(ship, arrayCoords) {
    if (this.isPlaceAvailable(ship.length, arrayCoords)) {
      for (let index = 0; index < ship.length; index++) {
        let coords = this.fromArrayToCoords([
          arrayCoords[0],
          arrayCoords[1] + index,
        ]);
        this.coordinates.set(coords, ship);
      }
    }
  }
  isPlaceAvailable(shipSize, arrayCoords) {
    let placeIsAvailable = true;
    for (let index = 0; index < shipSize; index++) {
      let coords = this.fromArrayToCoords([
        arrayCoords[0],
        arrayCoords[1] + index,
      ]);
      if (this.coordinates.has(coords)) {
        placeIsAvailable = false;
      }
    }
    return placeIsAvailable;
  }
  fromArrayToCoords(coords) {
    return "x:" + coords[0] + ",y:" + coords[1];
  }
}

export { GameBoard };
