// Function Declaration
function fullName(first : string, last : string) : string {
  return first + " " + last;
}

// Function expression
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last: string) {
  return first + " " + last;
}

var thirdFullName : (first : string, last: string) => string = function (first: string, last : string) {
  return first + " " + last;
}

console.log(fullName('zizo', 'ribeiro'));
console.log(otherFullName('zizo', 'rib'));
console.log(thirdFullName('zizo', 'eiro'));
