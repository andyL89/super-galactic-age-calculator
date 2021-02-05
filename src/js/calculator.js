export default class PlanetAgeCalculator {
  constructor (planet, age) {
    this.planet = planet;
    this.age = age;
  }
  
  earthAge() {
    return `Age in ${this.planet} years = ${this.age}`;
  }
  
  mercuryAge() {
    return `Age in ${this.planet} years = ${Math.round(this.age / .24)}`;
  }
  
  venusAge() {
    return `Age in ${this.planet} years = ${Math.round(this.age / .62)}`;
  }
  
  marsAge() {
    return `Age in ${this.planet} years = ${Math.round(this.age / 1.88)}`;
  }
  
  jupiterAge() {
    return `Age in ${this.planet} years = ${Math.round(this.age / 11.86)}`;
  }
}