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
  expect(gameBoard.ships.length).toBe(2);
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
