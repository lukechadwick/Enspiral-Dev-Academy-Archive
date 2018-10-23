//Exercises

//Minimum
// Your code here.
function min(one, two) {
	return	Math.min(one, two)
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


//Recursion
// Your code here.
function isEven(num) {
    if (num == 0)
      return true;
    else if (num == 1)
      return false;
    else if (num < 0)
      return isEven(-num);
    else
      return isEven(num - 2);
  }
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → ??


//Bean counting
// Your code here.
function countBs(string) {
    var b = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] === "B"){ 
        b += 1;
    }
  }
return b;
}

function countChar(arg1, arg2){
    var c = 0;
  for (let index = 0; index < arg1.length; index++) {
    if (arg1[index] === arg2){ 
        c += 1;
    }
  }
return c;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

