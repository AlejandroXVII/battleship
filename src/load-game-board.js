function loadGameBoard(gameBoard, $container) {
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
      }
      $container.appendChild($coordBox);
    }
  }
}

export { loadGameBoard };
