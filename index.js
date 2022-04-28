const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// All operands will be stored in array
let tokenArr = [];
// operand or operator or RPN expression
let expression;

/* infinite input function
 * param : none
 * return : none
 */
function readLine() {
  rl.question("> ", function (token) {
    expression = token.split(" ");
    if (expression.length > 1) { // if user input RPN expression
      for (let i = 0; i < expression.length; i++) parseRPN(expression[i], 0);
      console.log(tokenArr[0]);
      readLine()
    } else { // if user input a operand or operator
      parseRPN(token, 1);
    }
  });
}

/* RPN parsing function
 * param : operand or operator or RPN expression
 * return : calculated result
 */
function parseRPN(token, isLog) {
  if (!isNaN(token) && isFinite(token)) {  // if input is number
    let result = parseFloat((token * 10) / 10);
    tokenArr.push(result);
    if (isLog) console.log(result);
    readLine();
  } else { // if input is operator or RPN expression
    // pop operand1 and operand2 in array
    let b = tokenArr.pop();
    let a = tokenArr.pop();

    // checking operator
    if (token === "+") { // add
      let result = parseFloat(a) + parseFloat(b);
      tokenArr.push(result); // pushing result
      if (isLog) console.log(result);
      readLine(); // waiting for input
    } else if (token === "-") { // sub
      let result = parseFloat(a) - parseFloat(b);
      tokenArr.push(result); // pushing result
      if (isLog) console.log(result);
      readLine(); // waiting for input
    } else if (token === "*") { // mul
      let result = parseFloat(a) * parseFloat(b);
      tokenArr.push(result); // pushing result
      if (isLog) console.log(result);
      readLine(); // waiting for input
    } else if (token === "/") { // div
      let result = parseFloat(a) / parseFloat(b);
      tokenArr.push(result); // pushing result
      if (isLog) console.log(result);
      readLine(); // waiting for input
    } else if (token.toLowerCase() === "q") {
      process.exit(0); // exit
    }
  }
}

readLine();

// close event
rl.on("close", function () {
  process.exit(0);
});
