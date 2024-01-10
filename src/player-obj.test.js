import { Player } from "./player-obj";
import { GameBoard } from "./game-board-obj";
import { Ship } from "./ship-obj";

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
  expect(player.enemyGameBoard.isAllShipsSunk()).toBe(true);
});

test("Verify check method", () => {
  const ship = new Ship(3);
  const gameBoard = new GameBoard();
  gameBoard.placeShip(ship, [3, 3], true);
  gameBoard.placeShip(ship, [5, 5], false);
  const player = new Player();
  player.addEnemyGameBoard(gameBoard);
  player.enemyGameBoard.receiveAttack([3, 4]);
  expect(player.checkBestAttack([3, 4])).toStrictEqual([
    [3, 3],
    [3, 5],
    [2, 4],
    [4, 4],
  ]);
  player.enemyGameBoard.receiveAttack([3, 3]);
  expect(player.checkBestAttack([3, 4])).toStrictEqual([
    [3, 2],
    [3, 5],
  ]);
  player.enemyGameBoard.receiveAttack([3, 5]);
  expect(player.checkBestAttack([3, 4])).toStrictEqual([
    [3, 2],
    [3, 6],
  ]);
  player.enemyGameBoard.receiveAttack([6, 5]);
  player.enemyGameBoard.receiveAttack([5, 5]);
  gameBoard.showGameBoard();
  expect(player.checkBestAttack([6, 5])).toStrictEqual([
    [4, 5],
    [7, 5],
  ]);
  player.enemyGameBoard.receiveAttack([7, 5]);
  expect(player.checkBestAttack([6, 5])).toStrictEqual([
    [4, 5],
    [8, 5],
  ]);
  player.enemyGameBoard.receiveAttack([8, 5]);
  expect(player.checkBestAttack([6, 5])).toStrictEqual([[4, 5]]);
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
