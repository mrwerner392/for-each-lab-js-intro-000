// log each element of an array using forEach
function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

// creates a new array then performs the given callback on the array and returns the new array
function iterate(callback) {
  var sports = ['hockey', 'golf', 'baseball'];
  sports.forEach(callback);
  return sports;
}
