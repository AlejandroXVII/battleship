import { Ship } from "./ship-obj";

test("Check that ship is create correctly", () => {
  const ship = new Ship(3);
  expect(ship.length).toBe(3);
});

test("Check that ship sunk", () => {
  const ship = new Ship(3);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
