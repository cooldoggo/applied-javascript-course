
"use strict";

//keyword-style functions use call-site
function doIt() {

  console.log(this); // output => cool

    // function inner() {
    //   console.log(this); // output => undefined
    // }

    // arrow functions use lexical this instead call-site this
    const inner = () => console.log(this); // output => cool
    inner();



  
}


// doIt(); // undefined

const cool = {
  id: 2,
  doIt: doIt,
}

cool.doIt(); // this is the cool object

// console.log(cool.doIt === doIt); // true



// must use a keyword-style function so I can call-site this

Array.prototype.map2 = function () {
  console.log("map2");
  console.log(this);
}

const nums = [1,2,3,4];
nums.map2()