import { TestScheduler } from "jest";
import Calculator from "../src/js/calculator.js";

describe("Calculator", () => {
  test("Should return a calculator with planet created.", () => {
    const newCalculator = new Calculator("planet");
    expect(newCalculator.planet).toEqual("planet");
  });
});