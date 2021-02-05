export default class PlanetCalculator {
  constructor (age) {
    this.age = age;
  }

  getMercuryAge() {
    return this.age * .24;
  }
}