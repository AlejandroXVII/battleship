function loadGameBoard(gameBoard, $container, showShips) {
  function loadAttack() {
    this.classList.add("attacked");
    let coord = this.id.split(",");
    gameBoard.receiveAttack(coord);
    console.log(coord);
    gameBoard.showGameBoard();
    this.removeEventListener("click", loadAttack);
  }
  for (let i = 0; i < gameBoard.size; i++) {
    for (let j = 0; j < gameBoard.size; j++) {
      let $coordBox = document.createElement("button");
      if (gameBoard.coordinates.has(gameBoard.fromArrayToCoords([i, j]))) {
        if (
          gameBoard.coordinates.get(gameBoard.fromArrayToCoords([i, j])) ===
          "ship-area"
        ) {
          $coordBox.classList.add("ship-area");
        } else {
          $coordBox.classList.add("ship");
        }
        if (showShips) {
          $coordBox.classList.add("show");
          $coordBox.classList.add("show");
        }
      }
      $coordBox.id = i + "," + j;
      $container.appendChild($coordBox);
      $coordBox.addEventListener("click", loadAttack);
    }
  }
}

export { loadGameBoard };
