function SayHello(name="") {
    console.log(`Hello ${name}`);
}

function SayHelloAgain(name="") {
    console.log(`Hello again ${name}`);
}

// module.exports = SayHello;
// module.exports = SayHelloAgain;
module.exports = {
    SayHello,
    SayHelloAgain
}