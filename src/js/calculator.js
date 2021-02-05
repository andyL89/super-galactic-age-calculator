export default class PlanetCalculator {
  constructor (age) {
    this.age = age;
  }

  getMercuryAge() {
    return Math.round(this.age / .24);
  }

  getVenusAge() {
    // return Math.round(this.age / .62);
  }
}