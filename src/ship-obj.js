class Ship {
  constructor(length) {
    this.length = length;
    this.numHits = 0;
  }
  hit() {
    if (this.isSunk() === false) {
      this.numHits += 1;
    }
  }
  isSunk() {
    if (this.numHits < this.length) {
      return false;
    } else {
      return true;
    }
  }
}

export { Ship };
