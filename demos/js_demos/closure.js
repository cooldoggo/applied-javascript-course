// when these two conditions are met => closure
// nested function
// variable declared in the outer but referenced in the inner


// function outer() {
//    let t = 2;

//    setTimeout(function() {
//     t = 4;
//    }, 1000);

//    return function inner() {
//     console.log(t);
//    };
// }

// const innerFn = outer();
// innerFn();

// setTimeout(function() {
//   innerFn();
// }, 2000);

//promise.equivalent of the above code
const task1 = () => new Promise(resolve => {
  let t = 2;
  console.log(t);
  resolve(t)
});

const task2 = tValue => new Promise(resolve => {

  setTimeout(() => {
    resolve(tValue + 2);
  }, 1000);
});

const task3 = tValue => console.log(tValue);

// before 2017
task1().then(task2).then(task3);

// after 2017
async function doIt() {
  try {
    const result = await task1();
    const result2 = await(task2(result));
    await task3(result2);
  } catch (err) {
    console.log(err)
  }
}


// classic trouble in Javascript -> "What is the vavleu of 'this'"

function add(a,b) {
  return a + b;
}

const add2 = (x,y) => x + y;