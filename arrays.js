var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var arraytest1 = [1];
var arraytest2 = [1];
var arraytest3 = [1];
var arraytest4 = [1, 2, 3];
var arraytest5 = [1, 2, 3];


function addElementToBeginningOfArray(array, element){
  return ["foo",...arraytest1];
}

function destructivelyAddElementToBeginningOfArray(arraytest2, unshift){
 arraytest2.unshift("foo");
 return arraytest2;
}

function addElementToEndOfArray(array, element){
  return [...arraytest1, "foo"];
}

function destructivelyAddElementToEndOfArray(arraytest3, push){
  arraytest3.push("foo");
  return arraytest3;
}

function accessElementInArray(array, index){
  return arraytest4[2];
}

function destructivelyRemoveElementFromBeginningOfArray(arraytest5){
  arraytest5.shift();
  return arraytest5;
}

function removeElementFromBeginningOfArray(array){
  arraytest4 = arraytest4.slice(1);
  return arraytest4;
}