import { TestScheduler } from "jest";
import PlanetAgeCalculator from "../src/js/calculator.js";

describe("PlanetAgeCalculator", () => {
  test("Should return a planet calculator with planet and age created.", () => {
    const newPlanet = new PlanetAgeCalculator("Earth", 50);
    expect(newPlanet.planet).toEqual("Earth");
    expect(newPlanet.age).toEqual(50);
  });

  test("Should return a planet calculator with Earth and age created.", () => {
    const newPlanet = new PlanetAgeCalculator("Earth", 50);
    expect(newPlanet.earthAge()).toEqual("Age in Earth years = 50");
  });

  test("Should return a planet calculator with Mercury and age created.", () => {
    const newPlanet = new PlanetAgeCalculator("Mercury", 50);
    expect(newPlanet.mercuryAge()).toEqual("Age in Mercury years = 208");
  });

  test("Should return a planet calculator with Venus age created.", () => {
    const newPlanet = new PlanetAgeCalculator("Venus", 50);
    expect(newPlanet.venusAge()).toEqual("Age in Venus years = 81");
  });

  test("Should return a planet calculator with Mars age created.", () => {
    const newPlanet = new PlanetAgeCalculator("Mars", 50);
    expect(newPlanet.marsAge()).toEqual("Age in Mars years = 27");
  });

  test("Should return a planet calculator with Jupiter age created.", () => {
    const newPlanet = new PlanetAgeCalculator("Jupiter", 50);
    expect(newPlanet.jupiterAge()).toEqual("Age in Jupiter years = 4");
  });

});