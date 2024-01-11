function loadGameBoard(player, computer, $playerContainer, $computerContainer) {
  function computerAttack() {
    let arrayCoord = computer.autoAttack();
    let $coordToAttack = document.querySelector(
      `#computer #${CSS.escape(arrayCoord[0])}-${arrayCoord[1]}`,
    );
    computer.gameBoard.showGameBoard();
    $coordToAttack.classList.add("attacked");
    if (computer.enemyGameBoard.isAllShipsSunk()) {
      document.querySelector("#game-over").showModal();
    }
  }
  function loadOneGameBoard(gameBoard, $container, showShips, type) {
    function loadAttack() {
      this.classList.add("attacked");
      let coord = this.id.split("-");
      gameBoard.receiveAttack(coord);
      this.removeEventListener("click", loadAttack);
      if (gameBoard.isAllShipsSunk()) {
        document.querySelector("#game-over").showModal();
      }
      computerAttack();
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
        $coordBox.id = i + "-" + j;
        $container.appendChild($coordBox);
        if (type === "player") {
          $coordBox.addEventListener("click", loadAttack);
        }
      }
    }
  }

  loadOneGameBoard(
    computer.enemyGameBoard,
    $computerContainer,
    true,
    "computer",
  );
  loadOneGameBoard(
    player.enemyGameBoard,
    $playerContainer,
    false,
    "player",
    computerAttack(),
  );
}

export { loadGameBoard };
