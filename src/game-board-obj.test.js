import { GameBoard } from "./game-board-obj";
import { Ship } from "./ship-obj";

test("Check if placeShip actually place a ship", () => {
  const ship = new Ship(3);
  const gameBoard = new GameBoard();
  expect(gameBoard.isPlaceAvailableForPlacing(ship.length, [2, 2])).toBe(true);
  gameBoard.placeShip(ship, [2, 2], false);
  expect(gameBoard.isPlaceAvailableForPlacing(ship.length, [2, 2], false)).toBe(
    false,
  );
});
test("Check if is allow to place a ship outside the game board", () => {
  const ship = new Ship(3);
  const gameBoard = new GameBoard();
  expect(gameBoard.isPlaceAvailableForPlacing(ship.length, [21, 2])).toBe(
    false,
  );
  gameBoard.placeShip(ship, [21, 2], false);
  gameBoard.placeShip(ship, [1, 2], false);
  gameBoard.placeShip(ship, [18, 2], false);
  gameBoard.placeShip(ship, [0, 18], true);
  gameBoard.placeShip(ship, [0, 18], false);
  expect(gameBoard.ships.length).toBe(1);
});

test("Check if receiveAttack hit ships and register missed hits ", () => {
  const ship = new Ship(3);
  const gameBoard = new GameBoard();
  expect(gameBoard.isPlaceAvailableForPlacing(ship.length, [2, 2])).toBe(true);
  gameBoard.placeShip(ship, [2, 2], false);
  gameBoard.receiveAttack([2, 2]);
  expect(
    gameBoard.coordinates.get(gameBoard.fromArrayToCoords([2, 2])).numHits,
  ).toBe(undefined);
  gameBoard.receiveAttack([2, 2]);
  expect(
    gameBoard.coordinates.get(gameBoard.fromArrayToCoords([2, 2])).numHits,
  ).toBe(undefined);
  gameBoard.receiveAttack([3, 2]);
  expect(
    gameBoard.coordinates.get(gameBoard.fromArrayToCoords([4, 2])).numHits,
  ).toBe(2);
  gameBoard.receiveAttack([4, 2]);
  gameBoard.receiveAttack([5, 5]);
  expect(gameBoard.coordinates.get(gameBoard.fromArrayToCoords([5, 5]))).toBe(
    "missed-attack",
  );
  expect(gameBoard.ships[0].isSunk()).toBe(true);
});

test("Check if isAllTheShipsSunk method works", () => {
  const ship1 = new Ship(3);
  const ship2 = new Ship(3);
  const gameBoard = new GameBoard();
  gameBoard.placeShip(ship1, [2, 2], true);
  gameBoard.placeShip(ship2, [3, 2], true);
  expect(gameBoard.isAllShipsSunk()).toBe(false);
  gameBoard.receiveAttack([2, 2]);
  gameBoard.receiveAttack([2, 3]);
  gameBoard.receiveAttack([2, 4]);
  expect(gameBoard.isAllShipsSunk()).toBe(false);
  gameBoard.receiveAttack([3, 2]);
  gameBoard.receiveAttack([3, 3]);
  gameBoard.receiveAttack([3, 4]);
  expect(gameBoard.isAllShipsSunk()).toBe(true);
});

test("Check if isPlaceAvailableForAttack method works", () => {
  const ship1 = new Ship(3);
  const ship2 = new Ship(3);
  const gameBoard = new GameBoard();
  gameBoard.placeShip(ship1, [2, 2], true);
  gameBoard.placeShip(ship2, [3, 2], true);
  gameBoard.receiveAttack([3, 2]);
  gameBoard.receiveAttack([5, 5]);
  expect(gameBoard.isPlaceAvailableForAttack([2, 2])).toBe(true);
  expect(gameBoard.isPlaceAvailableForAttack([6, 6])).toBe(true);
  expect(gameBoard.isPlaceAvailableForAttack([3, 2])).toBe(false);
  expect(gameBoard.isPlaceAvailableForAttack([5, 5])).toBe(false);
});

test("Verify ship area", () => {
  const ship1 = new Ship(4);
  const ship2 = new Ship(4);
  const ship3 = new Ship(4);
  const ship4 = new Ship(6);
  const gameBoard = new GameBoard();
  gameBoard.placeShip(ship1, [2, 2], true);
  gameBoard.placeShip(ship2, [5, 5], false);
  gameBoard.placeShip(ship3, [0, 0], true);
  gameBoard.placeShip(ship4, [2, 8], false);
  gameBoard.placeShipArea(ship1.length, [2, 2], true);
  gameBoard.placeShipArea(ship2.length, [5, 5], false);
  gameBoard.placeShipArea(ship3.length, [0, 0], true);
  gameBoard.placeShipArea(ship4.length, [2, 8], false);
  gameBoard.showGameBoard();
  console.log(gameBoard.placeShipArea(ship1.length, [2, 2], true));
  expect(gameBoard.coordinates.get(gameBoard.fromArrayToCoords([2, 1]))).toBe(
    "ship-area",
  );
  expect(gameBoard.coordinates.get(gameBoard.fromArrayToCoords([2, 6]))).toBe(
    "ship-area",
  );
});
