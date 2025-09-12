import { getMonth } from "../Date/index";

/**
 * @fileoverview Test unitaires pour la fonction gethMonth.
 * La fonction prend un objet "Date" et retourne le mois en toute lettre (français)
 */

describe("Date helper", () => {
  it("the function return janvier for 2022-01-01 as date", () => {
    const date = new Date("2022-01-01");
    expect(getMonth(date)).toBe("janvier");
  });
  it("the function return juillet for 2022-07-08 as date", () => {
    const date = new Date("2022-07-08");
    expect(getMonth(date)).toBe("juillet");
  });
});
