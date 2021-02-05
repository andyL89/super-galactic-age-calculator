import LifeExpectancy from "../src/js/lifeExpectancy.js";

describe("LifeExpectancy", () => {
  test("Should return a planet, age, and life expectancy on said planet.", () => {
    const newLifeExpectancy = new LifeExpectancy("Earth", 50, 73);
    expect(newLifeExpectancy.planet).toEqual("Earth");
    expect(newLifeExpectancy.age).toEqual(50);
    expect(newLifeExpectancy.expectancy).toEqual(73);
  });

  test("Should return average Earth life expectancy, user's age in Earth years, and how many Earth years they have left live.", () => {
    const newLifeExpectancy = new LifeExpectancy("Earth", 31, 73);
    expect(newLifeExpectancy.earthExpectancy()).toEqual("Average life expectancy for your demographic on Earth: 73. Your age in Earth years: 31. Earth years left to live: 42");
  });

});