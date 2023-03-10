// Instead of writing it like below (which is perfectly fine but...) //
// const sayHello = function () {
//   console.log("Hello, world");
// };

// sayHello();

/* ------------------------------------ - ----------------------------------- */
// Below code is better //
// Instead of having to repeat our code for every time we want to greet a new person, 
// we can simply pass along their name to our sayHello function and the function takes care 
// of the rest for us.

const sayHello = function (name) {
  console.log("Hello, " + name);
};

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");
/* ------------------------------------ - ----------------------------------- */
