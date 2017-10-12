import { Haiku } from './../js/haiku-checker.js';

describe('Haiku', function() {

let haikutest;

  beforeEach(function() {
    haikutest = new Haiku("The red loop balloon");
  });

  it ("takes inputted string and pushes it to an array", function(){
    expect(haikutest.splitter(haikutest.input)).toEqual(haikutest.splitinput);
  });

  it ("removes silent e off the end of the word", function(){
    let split = haikutest.splitter(haikutest.input);
    expect(haikutest.silente(split)).toEqual(['Th','red','loop','balloon']);
  });

  it ("Counts number of vowels in a string and subtracts dipthongs if > 1.", function(){
    let split = haikutest.splitter(haikutest.input);
    let splitminuse = haikutest.silente(split);
    expect(haikutest.vowelcount(splitminuse)).toEqual(5);
  });

  it ("Counts number of constanants in a word and increases syllable count", function(){
    let split = haikutest.splitter(haikutest.input);
    let splitConst = haikutest.silente(split);
    expect(haikutest.doubleConstCount(splitConst)).toEqual(2);
  });

});
