function Letter(letter) {
  this.letter = letter;
  this.isGuessed = false;
  this.placeholder = function placeholder() {
    if (this.isGuessed) return this.letter;
    else return "_";
  };
  this.check = function(argument) {
    if (this.letter == argument.toUpperCase()) this.isGuessed = true;
  };
  this.boolean = function() {
    console.log(this.isGuessed);
  };
}

module.exports = Letter;
