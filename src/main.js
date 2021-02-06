import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import LifeExpectancy from "../src/js/lifeExpectancy.js";


$(document).ready(function() {
  $("#btn1").submit(function (event){
    event.preventDefault();
    const planet = parseInt($('#length1').val());
    const age = parseInt($('#earth-age').val());
    const expectancy = parseInt($('#length3').val());
    const newLifeExpectancy = new LifeExpectancy(planet, age, expectancy);
    const responseEarth = newLifeExpectancy.earthAge();
    $('#response').append(`<p>${response}</p>`);
  });
});