export default class PlanetCalculator {
  constructor (planet, age) {
    this.planet = planet;
    this.age = age;
  }

  earthAge() {
    return `Age in ${this.planet} years = ${this.age}`;
  }

  // mercuryAge() {
  //   return this.planet, Math.round(this.age / .24);
  // }

  // venusAge() {
  //   return `Age in ${this.planet} years = ${Math.round(this.age / .62)}`;
  // }
}