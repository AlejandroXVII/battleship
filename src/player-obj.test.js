import { Player } from "./player-obj";

test("Check if player create correctly", () => {
  const player = new Player();
  expect(player.ships.length).toBe(4);
});

test("Check place all the ships correctly", () => {
  const player = new Player();
  player.autoPlaceAllShips();
  expect(player.gameBoard.ships.length).toBe(4);
});

test("Check the computer is able to sunk all the ships", () => {
  const player = new Player();
  const player2 = new Player();
  player2.autoPlaceAllShips();
  player.addEnemyGameBoard(player2.gameBoard);
  while (!player.enemyGameBoard.isAllShipsSunk()) {
    player.autoAttack();
    player.enemyGameBoard.showGameBoard();
  }
  expect(player.enemyGameBoard.isAllShipsSunk()).toBe(true);
});

test.skip("Emulate a fake battle between computer players", () => {
  const player1 = new Player();
  const player2 = new Player();
  player1.autoPlaceAllShips();
  player2.autoPlaceAllShips();
  player1.addEnemyGameBoard(player2.gameBoard);
  player2.addEnemyGameBoard(player1.gameBoard);
  while (
    !player1.enemyGameBoard.isAllShipsSunk() &
    !player2.enemyGameBoard.isAllShipsSunk()
  ) {
    player1.autoAttack();
    player2.autoAttack();
  }
  console.table(player1.enemyGameBoard.coordinates);
  console.table(player2.enemyGameBoard.coordinates);
  expect(player2.enemyGameBoard.isAllShipsSunk()).toBeBoolean();
});
