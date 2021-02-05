import { TestScheduler } from "jest";
import PlanetCalculator from "../src/js/calculator.js";

describe("PlanetCalculator", () => {
  test("Should return a planet calculator with age created.", () => {
    const newPlanet = new PlanetCalculator(50);
    expect(newPlanet.age).toEqual(50);
  });

  test("Should return a planet calculator with Mercury age created.", () => {
    const newPlanet = new PlanetCalculator(50);
    expect(newPlanet.getMercuryAge()).toEqual(208);
  });

  test("Should return a planet calculator with Venus age created.", () => {
    const newPlanet = new PlanetCalculator(50);
    expect(newPlanet.getVenusAge()).toEqual(81);
  });

});