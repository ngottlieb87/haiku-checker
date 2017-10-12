import { Haiku } from './../js/haiku-checker.js';

$(document).ready(function() {
  $('form#form').submit(function() {
    event.preventDefault();
    var input1 = $("#input1").val();
    var input2 = $("#input2").val();
    var input3 = $("#input2").val();
    var newHaiku1 = new Haiku(input1);
    var newHaiku2 = new Haiku(input2);
    var newHaiku3 = new Haiku(input3);
    $('#legal').text(newHaiku1.checker(newHaiku1));
  });
});
