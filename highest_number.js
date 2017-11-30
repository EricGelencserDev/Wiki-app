// Array of Numbers
var number = [0.01, 9.03, 3.08, 5.24, 1.54];
var max = 1;
var min = 1;

function highestNumber(x){
if(x > max){
  max = x;
  console.log(x);
}
}
number.forEach(highestNumber)

function lowestNumber(min, max){
if (max < min){
  min = a;
  console.log(a);
}
}
number.forEach(lowestNumber);

// Array of Strings
var famSibs = [ "Frank", "Brianne", "Chris", "Sally"];
var famRents = ["Bob", "Susan", "Aaron", "Mary"];

famSibs.sort();
famRents.sort();
famRents.reverse ();
var wholeFam = famRents.concat(famSibs);

wholeFam.sort();
wholeFam.reverse();

function familyName (name){
  if (name ===  ){

  }
}
wholeFam.forEach(familyName);
