import { Player } from "./player-obj";

test("Check if player create correctly", () => {
  const player = new Player();
  expect(player.ships.length).toBe(4);
});
