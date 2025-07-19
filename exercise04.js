//Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59


function past(h, m, s){
    const myArray = [];
    if(h < 24 && h >= 0){
      myArray.push(h * 60 * 60 * 1000);
    }
    if(m < 60 && m >= 0){
      myArray.push(m * 60 * 1000);
    }
    if(s < 60 && s >= 0){
      myArray.push(s * 1000);
    }
    console.log(myArray);
    const sum = myArray[0] + myArray[1] + myArray[2];
    return sum;
  }