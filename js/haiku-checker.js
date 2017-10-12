export class Haiku {
  constructor(input) {
    this.input = input;
    this.splitinput = '';
    this.vowelCount = 0;
    this.constanantCount = 0;
    this.syllables = 0;
    this.currentstring = [];
  }

  splitter(string) {
    let splitarr = (string).split(' ');
    this.splitinput = splitarr;
    return this.splitinput;
  }

  silente(sentence) {
    let something = [];
    let vcount = this.vowelCount;
    sentence.forEach(function(element){
      if(element[element.length-1] === "e"){
        element = element.slice(0, -1);
        something.push(element);
        let vowels = element.match(/[aeiouy]/ig);
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

  vowelcount(sentence){
    let vowcount = this.vowelCount;
    alert("vowcountbefore: " + this.vowelCount);
    sentence.forEach(function(element){
      let vcount = element.match(/[aeiouy]/ig);
      if (vcount != null) {
        vcount = vcount.length;
      } else {
        vcount = 0;
      }
      let dipcount = element.match(/([bcdfghjklmnpqrstvwxz]{1})+([aeiouy]{2})+([bcdfghjklmnpqrstvwxz]{1})/ig);
      if (dipcount != null) {
        dipcount = dipcount.length;
      } else {
        dipcount = 0;
      }
      vowcount += (vcount - dipcount);
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

  checker(newHaiku1) {
    var test = newHaiku1.splitter(newHaiku1.input);
    var test1 = newHaiku1.silente(test);
    var test2 = newHaiku1.vowelcount(test1);
    var test3 = newHaiku1.doubleConstCount(test1);
    return(test3);
  }
//single// /[aeiouy]+[bcdfghjklmnpqrstvwxz]{1}+[aeiouy]/ig
//double// /([aeiouy]{1})+([bcdfghjklmnpqrstvwxz]{2})+([aeiouy]{1})/ig
}
