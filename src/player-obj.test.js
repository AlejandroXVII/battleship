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
  }
  console.table(player.enemyGameBoard.coordinates);
  expect(player.enemyGameBoard.isAllShipsSunk()).toBe(true);
});
