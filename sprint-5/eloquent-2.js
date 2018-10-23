//Looping a triangle

let tri = "";
while (tri.length <= 7) {
  console.log(tri);
  tri = tri + "#";
}

//FizzBuzz

for (let number = 1; number <= 100; number += 1) {  
    if (number % 3 == 0 && number % 5 == 0) 
    {
      console.log("FizzBuzz");
    }
    else  if (number % 3 == 0) 
    {
      console.log("Fizz");
    }
    else if (number % 5 == 0) 
    {   
      console.log("Buzz");
    }
    else 
    {
      console.log(number);
    }
  }
  
//Chessboard

var cheeseString1 = "";
var cheeseString2 = "";
var gridSize = 8;

for (let number = 0; cheeseString1.length <= gridSize - 1; number += 1) {  
  if (cheeseString1.length <= gridSize) 
  {
	 cheeseString1 += " " + "#";
  }

  if (cheeseString2.length <= gridSize) 
  {
	 cheeseString2 += "#" + " ";
  }  
}

for (let repeats = 0; repeats <= ((gridSize - 1 )/ 2); repeats += 1) 
{  
	console.log(cheeseString1 + "\n" + cheeseString2);
}  