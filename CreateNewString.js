//Write a JavaScript program to create a new string adding "Py" in front of a given string. 
//If the given string begins with "Py" then return the original string

function stringCheck(str) {
  if (str === null || str === undefined || str.substring(0, 2) === 'Se') 
  {
    return str;
  }
  return "Se"+str;
}

console.log(stringCheck("Several"));
console.log(stringCheck("ven"));
console.log(stringCheck(""));