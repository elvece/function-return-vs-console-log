//my initial attempt
var i = function(a,b){
  var c = a + b;
  //returns the value inside the function but does not print anything to the screen
  return c;
}

var j = i(2,3);
var k = i(4,5);
//prints to browser
console.log(j,k);

/* Notes from Mike:
create two functions
1. return value
2. console log it
3. do a conditional where
if (function1()===undefined
console.log("function doesnt return value")
else "function returns value")*/

//new attempt
function foo(){
  console.log("testing");
}

function bar(){
  return "test";
}

var resultConsoleLog = foo();
var resultReturn = bar();
console.log(resultReturn);

if (typeof foo() === "undefined") {
  console.log("foo function does not return a value");
} else {
  console.log("foo function returns a value");
}

if (typeof bar() === "undefined") {
  console.log("bar function does not return a value");
} else {
  console.log("bar function returns a value");
}
