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
    return;
  }

  filteronetwo() {
    // console.log(this.constanantCount);
    // console.log(this.splitinput);
    let arr = [];
    let count = this.vowelCount;
    this.splitinput.forEach(function(element) {
      if (element.length >= 2) {
        count += 1;
        arr.push(element);
        return;
      }
    });
    this.constanantCount = count;
    this.currentstring.push(arr);
    console.log("arr: " + this.currentstring);
    console.log("count: " + count);
    console.log("YESSSSS: " + this.constanantCount);
    return this.currentstring;
  }
}
