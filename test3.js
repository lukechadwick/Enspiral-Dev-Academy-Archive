function alphabeticalOrder(arr) {
  // Add your code below this line
    return arr.items.sort(function(a, b) {
    return a - b;
  });
  
  // Add your code above this line
}
var boop = alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

console.log(boop);