//import { Ship } from "./ship-obj";

class GameBoard {
  constructor(size = 10) {
    this.size = size;
    this.coordinates = new Map();
  }
  placeShip(ship, arrayCoords) {
    if (true /*this.isPlaceAvailable(ship.length, coords)*/) {
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
    let coords = this.fromArrayToCoords(arrayCoords);
    for (let index = 0; index < shipSize; index++) {
      if (this.coordinates.has([coords[0], coords[1] + index])) {
        placeIsAvailable = false;
      }
    }
    return placeIsAvailable;
  }
  fromArrayToCoords(coords) {
    return { x: coords[0], y: coords[1] };
  }
}

export { GameBoard };
