import { TestScheduler } from "jest";
import PlanetCalculator from "../src/js/calculator.js";

describe("PlanetCalculator", () => {
  test("Should return a planet calculator with planet and age created.", () => {
    const newPlanet = new PlanetCalculator("Earth", 50);
    expect(newPlanet.planet).toEqual("Earth");
    expect(newPlanet.age).toEqual(50);
  });

  test("Should return a planet calculator with Earth and age created.", () => {
    const newPlanet = new PlanetCalculator("Earth", 50);
    expect(newPlanet.earthAge()).toEqual("Age in Earth years = 50");
  });

  // test("Should return a planet calculator with Mercury and age created.", () => {
  //   const newPlanet = new PlanetCalculator("Mercury", 50);
  //   expect(newPlanet.mercuryAge()).toEqual("Mercury", 208);
  // });

  // test("Should return a planet calculator with Venus age created.", () => {
  //   const newPlanet = new PlanetCalculator(50);
  //   expect(newPlanet.getVenusAge()).toEqual(81);
  // });

  // test("Should return a planet calculator with Mars age created.", () => {
  //   const newPlanet = new PlanetCalculator(50);
  //   expect(newPlanet.getVenusAge()).toEqual(81);
  // });

});