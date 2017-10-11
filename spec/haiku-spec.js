import { Haiku } from './../js/haiku-checker.js';

describe('Haiku', function() {

var haikutest;

  beforeEach(function() {
    haikutest = new Haiku("A wind blows softly");
  });

  it ("takes inputted string and pushes it to an array", function(){
    expect(haikutest.splitter(haikutest.input)).toEqual(this.splitinput);
  });

  it ("takes inputted array and counts one and two letter words as syllables and deletes them.", function(){
    haikutest.splitter(haikutest.input);
    expect(haikutest.filteronetwo()).toEqual(['wind', 'blows', 'softly']);
  });
});
