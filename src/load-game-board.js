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

  document.querySelector(".game-board").remove();
  document.querySelector("#slider").style.display = "none";
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

function loadEmptyGameBoard(player) {
  function insertShipInTheDOM(ship, arrayCoord, defaultPosition) {
    for (let index = 0; index < ship.length; index++) {
      let $coordBox = 0;
      if (defaultPosition) {
        $coordBox = document.querySelector(
          `#content #${CSS.escape(arrayCoord[0])}-${arrayCoord[1] + index}`,
        );
      } else {
        $coordBox = document.querySelector(
          `#content #${CSS.escape(arrayCoord[0] + index)}-${arrayCoord[1]}`,
        );
      }
      $coordBox.classList.add("ship");
      $coordBox.classList.add("show");
    }
  }
  function previewShipInTheDOM(ship, arrayCoord, defaultPosition) {
    for (let index = 0; index < ship.length; index++) {
      let $coordBox = 0;
      if (defaultPosition) {
        $coordBox = document.querySelector(
          `#content #${CSS.escape(arrayCoord[0])}-${arrayCoord[1] + index}`,
        );
      } else {
        $coordBox = document.querySelector(
          `#content #${CSS.escape(arrayCoord[0] + index)}-${arrayCoord[1]}`,
        );
      }
      $coordBox.classList.add("preview");
    }
  }
  function removeShipInTheDOM(ship, arrayCoord, defaultPosition) {
    for (let index = 0; index < ship.length; index++) {
      let $coordBox = 0;
      if (defaultPosition) {
        $coordBox = document.querySelector(
          `#content #${CSS.escape(arrayCoord[0])}-${arrayCoord[1] + index}`,
        );
      } else {
        $coordBox = document.querySelector(
          `#content #${CSS.escape(arrayCoord[0] + index)}-${arrayCoord[1]}`,
        );
      }
      $coordBox.classList.remove("preview");
      //$coordBox.classList.remove("show");
    }
  }
  function placeShip() {
    let arrayCoords = this.id.split("-");
    arrayCoords[0] = Number(arrayCoords[0]);
    arrayCoords[1] = Number(arrayCoords[1]);
    if (
      player.gameBoard.isPlaceAvailableForPlacing(
        player.ships[numShipsLeft].length,
        arrayCoords,
        defaultPosition,
      )
    ) {
      player.gameBoard.placeShip(
        player.ships[numShipsLeft],
        arrayCoords,
        defaultPosition,
      );
      insertShipInTheDOM(
        player.ships[numShipsLeft],
        arrayCoords,
        defaultPosition,
      );
      numShipsLeft -= 1;
    }
    if (numShipsLeft < 0) {
      function dropEvents() {
        let drops = document.querySelectorAll(".game-board-container button");
        drops.forEach((drop) => {
          drop.removeEventListener("click", placeShip);
        });
      }
      dropEvents();
      console.log("finished");
      console.log(player.gameBoard.showGameBoard());
    }
  }
  function previewShip() {
    let arrayCoords = this.id.split("-");
    arrayCoords[0] = Number(arrayCoords[0]);
    arrayCoords[1] = Number(arrayCoords[1]);
    if (numShipsLeft >= 0) {
      if (
        player.gameBoard.isPlaceAvailableForPlacing(
          player.ships[numShipsLeft].length,
          arrayCoords,
          defaultPosition,
        )
      ) {
        previewShipInTheDOM(
          player.ships[numShipsLeft],
          arrayCoords,
          defaultPosition,
        );
      }
    }
  }
  function removePreviewShip() {
    let arrayCoords = this.id.split("-");
    arrayCoords[0] = Number(arrayCoords[0]);
    arrayCoords[1] = Number(arrayCoords[1]);
    if (numShipsLeft >= 0) {
      if (
        player.gameBoard.isPlaceAvailableForPlacing(
          player.ships[numShipsLeft].length,
          arrayCoords,
          defaultPosition,
        )
      ) {
        removeShipInTheDOM(
          player.ships[numShipsLeft],
          arrayCoords,
          defaultPosition,
        );
      }
    }
  }
  let numShipsLeft = 3;
  document.querySelector("#slider").style.display = "grid";
  const $container = document.querySelector("#content");
  const $playerContainer = document.createElement("div");
  $playerContainer.classList.add("game-board-container");
  const $gameBoardContainer = document.createElement("div");
  $gameBoardContainer.classList.add("game-board");
  $gameBoardContainer.appendChild($playerContainer);
  $container.appendChild($gameBoardContainer);
  for (let i = 0; i < player.gameBoard.size; i++) {
    for (let j = 0; j < player.gameBoard.size; j++) {
      let $coordBox = document.createElement("button");
      $coordBox.id = i + "-" + j;
      $playerContainer.appendChild($coordBox);
      $coordBox.addEventListener("click", placeShip);
      $coordBox.addEventListener("mouseover", previewShip);
      $coordBox.addEventListener("mouseout", removePreviewShip);
    }
  }
  const $startButton = document.createElement("button");
  $startButton.textContent = "START";
  $startButton.id = "start-button";
  $gameBoardContainer.appendChild($startButton);
  const $slider = document.querySelector("#slider-input");
  $slider.addEventListener("click", changeDefaultPosition);
  $slider.checked = "true";
  let defaultPosition = false;
  if ($slider.checked) {
    defaultPosition = true;
  }
  function changeDefaultPosition() {
    if ($slider.checked) {
      defaultPosition = true;
    } else {
      defaultPosition = false;
    }
  }
}
export { loadGameBoard, loadEmptyGameBoard };
