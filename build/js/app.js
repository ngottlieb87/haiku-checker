(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Haiku = exports.Haiku = function () {
  function Haiku(input) {
    _classCallCheck(this, Haiku);

    this.input = input;
    this.splitinput = '';
    this.vowelCount = 0;
    this.constanantCount = 0;
    this.syllables = 0;
    this.currentstring = [];
  }

  _createClass(Haiku, [{
    key: 'splitter',
    value: function splitter(string) {
      var splitarr = string.split(' ');
      this.splitinput = splitarr;
      return this.splitinput;
    }
  }, {
    key: 'silente',
    value: function silente(sentence) {
      var something = [];
      var vcount = this.vowelCount;
      sentence.forEach(function (element) {
        if (element[element.length - 1] === "e") {
          element = element.slice(0, -1);
          something.push(element);
          var vowels = element.match(/[aeiouy]/ig);
          if (vowels == null) {
            vcount += 1;
          }
        } else {
          something.push(element);
        }
      });
      this.currentstring = something;
      this.vowelCount = vcount;
      return this.currentstring;
    }
  }, {
    key: 'vowelcount',
    value: function vowelcount(sentence) {
      var vowcount = this.vowelCount;
      alert("vowcountbefore: " + this.vowelCount);
      sentence.forEach(function (element) {
        var vcount = element.match(/[aeiouy]/ig);
        if (vcount != null) {
          vcount = vcount.length;
        } else {
          vcount = 0;
        }
        var dipcount = element.match(/([bcdfghjklmnpqrstvwxz]{1})+([aeiouy]{2})+([bcdfghjklmnpqrstvwxz]{1})/ig);
        if (dipcount != null) {
          dipcount = dipcount.length;
        } else {
          dipcount = 0;
        }
        vowcount += vcount - dipcount;
      });
      this.vowelCount = vowcount;
      alert("vowcountafter: " + this.vowelCount);
      return this.vowelCount;
    }

    // doubleConstCount(sentence){
    //   alert("sentence: " + sentence);
    //   let dcCount = 0;
    //   sentence.forEach(function(element){
    //     let res = element.match(/([aeiouy]{1})+([bcdfghjklmnpqrstvwxz]{2})+([aeiouy]{1})/ig);
    //     if (res != null) {
    //       dcCount += res.length;
    //     }
    //   });
    //   this.vowelCount += dcCount;
    //   return this.vowelCount;
    // }

  }, {
    key: 'checker',
    value: function checker(newHaiku1) {
      var test = newHaiku1.splitter(newHaiku1.input);
      var test1 = newHaiku1.silente(test);
      var test2 = newHaiku1.vowelcount(test1);
      var test3 = newHaiku1.doubleConstCount(test1);
      return test3;
    }
    //single// /[aeiouy]+[bcdfghjklmnpqrstvwxz]{1}+[aeiouy]/ig
    //double// /([aeiouy]{1})+([bcdfghjklmnpqrstvwxz]{2})+([aeiouy]{1})/ig

  }]);

  return Haiku;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _haikuChecker = require('./../js/haiku-checker.js');

$(document).ready(function () {
  $('form#form').submit(function () {
    event.preventDefault();
    var input1 = $("#input1").val();
    var input2 = $("#input2").val();
    var input3 = $("#input2").val();
    var newHaiku1 = new _haikuChecker.Haiku(input1);
    var newHaiku2 = new _haikuChecker.Haiku(input2);
    var newHaiku3 = new _haikuChecker.Haiku(input3);
    $('#legal').text(newHaiku1.checker(newHaiku1));
  });
});

},{"./../js/haiku-checker.js":1}]},{},[2]);
