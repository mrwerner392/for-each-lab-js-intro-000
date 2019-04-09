// log each element of an array using forEach
function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

// performs the given callback on each element of a new array then returns the array
function iterate(callback) {
  var sports = ['hockey', 'golf', 'baseball'];
  sports.forEach(callback);
  return sports;
}

// performs the given callback on each element of the given array
function doToArray(array, callback) {
  array.forEach(callback);
}
