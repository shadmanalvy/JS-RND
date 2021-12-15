//generate random customer name

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
	var firstName = ["john","harry","steve","jack","thomas","mesut"];

	var lastName = ["kane","terry","gerrard","wilshere","ozil","muller"];

	var name = capFirst(firstName[getRandomInt(0, firstName.length + 1)]) + ' ' + capFirst(lastName[getRandomInt(0, lastName.length + 1)]);
	return name;
}

console.log(generateName());

//set random customer name of 6 letters as environment variable

function RandomName() {
  var custName = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < 6; i++)
    custName += possible.charAt(Math.floor(Math.random() * possible.length));

  return custName;
}

console.log(RandomName());

//pm.environment.set("CustomerName", RandomName());

 //set random book id as env variable
 
 const rndInt = Math.floor(Math.random() * 6) + 1

console.log(rndInt);

 //pm.environment.set("Book ID", rndInt);

//random 4 digit number with starting digits 12

var val = Math.floor(1200 + (1299-1200) * Math.random());
console.log(val);