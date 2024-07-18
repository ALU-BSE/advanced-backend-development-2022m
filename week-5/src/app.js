
console.log(__dirname);

global.myVar = 'This is a global variable';
console.log(myVar);

// const sayHello = require('./myModule');

const { SayHello, SayHelloAgain } = require('./myModule');
SayHello('John');
SayHelloAgain('Jane');
//
// sayHello();
// sayHello('John');

