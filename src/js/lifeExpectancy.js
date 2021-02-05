export default class LifeExpectancy {
  constructor (planet, age, expectancy) {
    this.planet = planet;
    this.age = age;
    this.expectancy = expectancy;
  }

  earthExpectancy () {
    return `Average life expectancy for your demographic on Earth: ${this.expectancy}. Your age in ${this.planet} years: ${this.age}. ${this.planet} years left to live: ${Math.round(this.expectancy - this.age)}`;
  }

  mercuryExpectancy () {
    return `Average life expectancy for your demographic on Mercury: ${Math.round(this.expectancy / .24)}. Your age in ${this.planet} years: ${Math.round(this.age / .24)}. ${this.planet} years left to live: ${Math.round((this.expectancy - this.age) / .24)}`;
  }

}