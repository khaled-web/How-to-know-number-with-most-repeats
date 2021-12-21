// return number with most repeats
// if two numbers the repeated the same return first
// if none repeated -1

function testRepeat(arr) {
 let max = 1; //repetition
 let position = 0 //index
 let value = -1 // current object item

 let tempNumbers = arr.reduce((acc, cur, index) => {
  acc[cur] = acc[cur] ? {
   ...acc[cur],
   amount: acc[cur]['amount'] + 1
  } : {
   amount: 1,
   index
  }

  let amount = acc[cur].amount;
  let place = acc[cur].index;
  if (amount > max || (amount === max && place <= position && amount > 1)) {
   max = amount;
   position = place;
   value = cur;
  }
  return acc
 }, {})

 return value;
}

console.log(testRepeat([5, 2, 2, 1, 5]))
// return 5

console.log(testRepeat([6, 5, 5, 10, 10, 10]))
// return 10

console.log(testRepeat([3, 4, 1, 6, 10]))
// return -1