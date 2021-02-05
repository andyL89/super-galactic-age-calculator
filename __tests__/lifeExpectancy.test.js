import LifeExpectancy from "../src/js/lifeExpectancy.js";

describe("LifeExpectancy", () => {
  test("Should return a planet, age, life expectancy, and years left to live on said planet.", () => {
    const newLifeExpectancy = new LifeExpectancy("Earth", 50, 73, 23);
    expect(newLifeExpectancy.planet).toEqual("Earth");
    expect(newLifeExpectancy.age).toEqual(50);
    expect(newLifeExpectancy.expectancy).toEqual(73);
    expect(newLifeExpectancy.yearsLeft).toEqual(23);
  });

  

});