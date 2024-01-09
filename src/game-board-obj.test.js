import { GameBoard } from "./game-board-obj";
import { Ship } from "./ship-obj";

test("Check if placeShip actually place a ship", () => {
  const ship = new Ship(3);
  const gameBoard = new GameBoard();
  expect(gameBoard.isPlaceAvailable(ship.length, [2, 2])).toBe(true);
  gameBoard.placeShip(ship, [2, 2]);
  console.table(gameBoard.coordinates);
  expect(gameBoard.isPlaceAvailable(ship.length, [2, 2])).toBe(false);
});
