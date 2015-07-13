var i = function(a,b){
  var c = a + b;
  //returns the value inside the function but does not print anything to the screen
  return c;
}

var j = i(2,3);
var k = i(4,5);
//prints to browser
console.log(j,k);

/* two functions, 1. return value 2. console log it 3. do a conditional where if (function1()===undefined console.log("function doesnt return value")else "function returns value")
