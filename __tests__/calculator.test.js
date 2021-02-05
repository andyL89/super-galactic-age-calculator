import { TestScheduler } from "jest";
import Calculator from "../src/js/calculator.js";

describe("Calculator", () => {
  test("Should return a calculator with age created.", () => {
    const newCalculator = new Calculator("age");
    expect(newCalculator.age).toEqual("age");
  });

  test("Should return a calculator with Earth age created.", () => {
    const getEarthAge = new Calculator(50);
    expect(getEarthAge.age).toEqual(50);
  });

});