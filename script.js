// enquirer template //

// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "password",
      message: "Set your password",
      name: "password"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    },
    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "Which Pokemon do you choose?",
      choices: ["Bulbasaur", "Squirtle", "Charmander"],
      name: "pokemon"
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm) {
      console.log("\nWelcome " + inquirerResponse.username);
      console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
    }
    else {
      console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    }
  });

// inquirer template above //

// JS logic template below //
// Takes in all of the command line arguments
var inputString = process.argv;

// Parses the command line argument to capture the "operand" (add, subtract, multiply, etc) and the numbers
var operand = inputString[2];
var num1 = inputString[3];
var num2 = inputString[4];

// Here's the variable we will be modifying with the new numbers
var outputNum;

// Determines the operand selected...
// Based on the operand we run the appropriate math on the two numbers
if (operand === "add") {
  outputNum = parseFloat(num1) + parseFloat(num2);
}

else if (operand === "subtract") {
  outputNum = parseFloat(num1) - parseFloat(num2);
}

else if (operand === "multiply") {
  outputNum = parseFloat(num1) * parseFloat(num2);
}

else if (operand === "divide") {
  outputNum = parseFloat(num1) / parseFloat(num2);
}

else if (operand === "remainder") {
  outputNum = parseFloat(num1) % parseFloat(num2);
}

else if (operand === "exp") {
  outputNum = Math.pow(num1, num2);
}

else if (operand === "algebra") {
  outputNum = parseAlgebra(num1);
}

else {
  outputNum = "Not a recognized command";
}


// Prints the outputNumber
console.log(outputNum);

// =======================================================

// BONUS - Algebra
// Here we take in a string expression.
// We assume input is always of the form "ax+b=c"
// And we returns the parsed result

function parseAlgebra(equation) {
  // Getting the index of x in the equation
  var xIndex = equation.indexOf("x");
  // Finding the index of the sign
  var signIndex = xIndex + 1;
  // Getting the index of the equals sign
  var equalIndex = equation.indexOf("=");
  // Getting the numerical value for the first number to appear in the equation
  var firstNum = parseInt(equation.substring(0, xIndex));
  // Getting the sign out of our equation
  var sign = equation[signIndex];
  // Getting the numerical value of the second number in the equation by grabbing the
  // piece of the equation between the operator and equals sign
  var secondNum = parseInt(equation.substring(signIndex + 1, equalIndex));
  // Getting the third number by grabbing the piece of the equation between the equals
  // sign and the end of the equation
  var thirdNum = parseInt(equation.substring(equalIndex + 1, equation.length));
  // Defining a result variable we'll use to hold our solution
  var result;

  // Performing the appropriate operation based on the sign
  if (sign === "+") {
    result = (thirdNum - secondNum) / firstNum;
  }
  else if (sign === "-") {
    result = (thirdNum + secondNum) / firstNum;
  }
  else if (sign === "*") {
    result = (thirdNum / secondNum) / firstNum;
  }
  else if (sign === "/") {
    result = (thirdNum * secondNum) / firstNum;
  }
  return result;
}

// additional JS template below //

// Take in an input value in the form of an integer
var inputNum = parseInt(process.argv[2]);
var multipleNum = parseInt(process.argv[3]);
var sum = 0;

// Go from 6 to the number. Adding up the multipleNum each time (to only get its multiples).
for (var i = multipleNum; i <= inputNum; i += multipleNum) {

  // Each time add i to the sum.
  sum += i;
}

// Print out the sum
console.log(sum);

// Example:
// User Input: node multipleBonus 12 3
// Output: 18 (3 + 6 + 9 + 12 = 30)
