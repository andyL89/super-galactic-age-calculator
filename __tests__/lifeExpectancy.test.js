import LifeExpectancy from "../src/js/lifeExpectancy.js";

describe("LifeExpectancy", () => {
  test("Should return a planet, age, and life expectancy on said planet.", () => {
    const newLifeExpectancy = new LifeExpectancy("Earth", 50, 73);
    expect(newLifeExpectancy.planet).toEqual("Earth");
    expect(newLifeExpectancy.age).toEqual(50);
    expect(newLifeExpectancy.expectancy).toEqual(73);
  });

  test("Should return average Earth life expectancy, user's age in Earth years, and how many Earth years they have left to live.", () => {
    const newLifeExpectancy = new LifeExpectancy("Earth", 50, 73);
    expect(newLifeExpectancy.earthExpectancy()).toEqual("Average life expectancy for your demographic on Earth: 73. Your age in Earth years: 50. Earth years left to live: 23");
  });

  test("Should return average Mercury life expectancy, user's age in Mercury years, and how many Mercury years they have left to live.", () => {
    const newLifeExpectancy = new LifeExpectancy("Mercury", 50, 73);
    expect(newLifeExpectancy.mercuryExpectancy()).toEqual("Average life expectancy for your demographic on Mercury: 304. Your age in Mercury years: 208. Mercury years left to live: 96");
  });

  test("Should return average Venus life expectancy, user's age in Venus years, and how many Venus years they have left to live.", () => {
    const newLifeExpectancy = new LifeExpectancy("Venus", 50, 73);
    expect(newLifeExpectancy.venusExpectancy()).toEqual("Average life expectancy for your demographic on Venus: 118. Your age in Venus years: 81. Venus years left to live: 37");
  });

});