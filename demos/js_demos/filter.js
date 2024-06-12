

const nums = [1,5,2,9,6,4,8,2];

const doubleNums = nums.map(num => num * 2);

// // arrow function
// const greaterThan4 = num => num > 4;

// // function expression
// const greaterThan4 = function (num) { return num > 4; };

// function declaration
function greaterThan4(num) {
  return num > 4;
};

// const numsGreaterThan4 = nums.filter(num => num > 4);

function myFilter(arr, predicateFn) {
  const newArr = [];

  arr.forEach(element => {
    if (predicateFn(element)) {
      newArr.push(element);
    }
  });

  return newArr;
}

console.log(nums);
console.log(doubleNums);
console.log(myFilter(nums, greaterThan4));