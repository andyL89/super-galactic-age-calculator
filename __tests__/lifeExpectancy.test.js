import LifeExpectancy from "../src/js/lifeExpectancy.js";

describe("LifeExpectancy", () => {
  test("Should return a planet, age, and life expectancy on said planet.", () => {
    const newLifeExpectancy = new LifeExpectancy("Earth", 50, 73);
    expect(newLifeExpectancy.planet).toEqual("Earth");
    expect(newLifeExpectancy.age).toEqual(50);
    expect(newLifeExpectancy.expectancy).toEqual(73);
  });

  test("Should return average Earth life expectancy, user's age in Earth years, and how many Earth years they have left to live based on average life expectancy.", () => {
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

  test("Should return average Mars life expectancy, user's age in Mars years, and how many Mars years they have left to live.", () => {
    const newLifeExpectancy = new LifeExpectancy("Mars", 50, 73);
    expect(newLifeExpectancy.marsExpectancy()).toEqual("Average life expectancy for your demographic on Mars: 39. Your age in Mars years: 27. Mars years left to live: 12");
  });

  test("Should return average Jupiter life expectancy, user's age in Jupiter years, and how many Jupiter years they have left to live.", () => {
    const newLifeExpectancy = new LifeExpectancy("Jupiter", 50, 73);
    expect(newLifeExpectancy.jupiterExpectancy()).toEqual("Average life expectancy for your demographic on Jupiter: 6. Your age in Jupiter years: 4. Jupiter years left to live: 2");
  });

  test("Should return average Earth life expectancy, user's age in Earth years, and how many years they have lived beyond average life expectancy.", () => {
    const newLifeExpectancy = new LifeExpectancy("Earth", 75, 73);
    expect(newLifeExpectancy.earthExpectancy()).toEqual("Average life expectancy for your demographic on Earth: 73. Your age in Earth years: 75. Years lived beyond average life expectancy: 2");
  });

  test("Should return average Mercury life expectancy, user's age in Mercury years, and how many years they have lived beyond average life expectancy.", () => {
    const newLifeExpectancy = new LifeExpectancy("Mercury", 75, 73);
    expect(newLifeExpectancy.mercuryExpectancy()).toEqual("Average life expectancy for your demographic on Mercury: 304. Your age in Mercury years: 313. Years lived beyond average life expectancy: 8");
  });

  test("Should return average Venus life expectancy, user's age in Venus years, and how many years they have lived beyond average life expectancy.", () => {
    const newLifeExpectancy = new LifeExpectancy("Venus", 75, 73);
    expect(newLifeExpectancy.venusExpectancy()).toEqual("Average life expectancy for your demographic on Venus: 118. Your age in Venus years: 121. Years lived beyond average life expectancy: 3");
  });

  test("Should return average Mars life expectancy, user's age in Mars years, and how many years they have lived beyond average life expectancy.", () => {
    const newLifeExpectancy = new LifeExpectancy("Mars", 75, 73);
    expect(newLifeExpectancy.marsExpectancy()).toEqual("Average life expectancy for your demographic on Mars: 39. Your age in Mars years: 40. Years lived beyond average life expectancy: 1");
  });

  test("Should return average Jupiter life expectancy, user's age in Jupiter years, and how many years they have lived beyond average life expectancy.", () => {
    const newLifeExpectancy = new LifeExpectancy("Jupiter", 100, 73);
    expect(newLifeExpectancy.jupiterExpectancy()).toEqual("Average life expectancy for your demographic on Jupiter: 6. Your age in Jupiter years: 8. Years lived beyond average life expectancy: 2");
  });

});