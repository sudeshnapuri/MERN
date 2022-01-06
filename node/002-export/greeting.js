// creating a variable to export

const greeting = "Hello World!";

// creating a function to export

const printGreeting = () => {
    console.log("Hello world, i've been exported");
}

// export both variable and function as module objects
// module.exports.<name_exported_variable> = <name_of_variable>
module.exports.greetingString = greeting;

module.exports.greetingFunc = printGreeting;