export default class LifeExpectancy {
  constructor(planet, age, expectancy) {
    this.planet = planet;
    this.age = age;
    this.expectancy = expectancy;
  }

  earthExpectancy() {
    if (this.age > this.expectancy) {
      return `Average life expectancy for your demographic on ${this.planet}: ${this.expectancy}. Your age in ${this.planet} years: ${this.age}. Years lived beyond average life expectancy: ${Math.round(this.age - this.expectancy)}`;
    } else {
      return `Average life expectancy for your demographic on ${this.planet}: ${this.expectancy}. Your age in ${this.planet} years: ${this.age}. ${this.planet} years left to live: ${Math.round(this.expectancy - this.age)}`;
    }
  }

  mercuryExpectancy() {
    if (Math.round((this.age / .24) > (this.expectancy / .24))) {
      return `Average life expectancy for your demographic on ${this.planet}: ${Math.round(this.expectancy / .24)}. Your age in ${this.planet} years: ${Math.round(this.age / .24)}. Years lived beyond average life expectancy: ${Math.round((this.age - this.expectancy) / .24)}`;
    } else {
      return `Average life expectancy for your demographic on ${this.planet}: ${Math.round(this.expectancy / .24)}. Your age in ${this.planet} years: ${Math.round(this.age / .24)}. ${this.planet} years left to live: ${Math.round((this.expectancy - this.age) / .24)}`;
    }
  }

  venusExpectancy() {
    if (Math.round((this.age / .62) > (this.expectancy / .62))) {
      return `Average life expectancy for your demographic on ${this.planet}: ${Math.round(this.expectancy / .62)}. Your age in ${this.planet} years: ${Math.round(this.age / .62)}. Years lived beyond average life expectancy: ${Math.round((this.age - this.expectancy) / .62)}.`;
    } else {
      return `Average life expectancy for your demographic on ${this.planet}: ${Math.round(this.expectancy / .62)}. Your age in ${this.planet} years: ${Math.round(this.age / .62)}. ${this.planet} years left to live: ${Math.round((this.expectancy - this.age) / .62)}`;
    }
  }

  marsExpectancy() {
    return `Average life expectancy for your demographic on ${this.planet}: ${Math.round(this.expectancy / 1.88)}. Your age in ${this.planet} years: ${Math.round(this.age / 1.88)}. ${this.planet} years left to live: ${Math.round((this.expectancy - this.age) / 1.88)}`;
  }

  jupiterExpectancy() {
    return `Average life expectancy for your demographic on ${this.planet}: ${Math.round(this.expectancy / 11.86)}. Your age in ${this.planet} years: ${Math.round(this.age / 11.86)}. ${this.planet} years left to live: ${Math.round((this.expectancy - this.age) / 11.86)}`;
  }



}