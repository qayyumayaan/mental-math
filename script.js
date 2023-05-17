document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("mainContent").classList.add("d-none");
    document.getElementById("gameContent").classList.remove("d-none");

    generateQuestion();
});

document.getElementById("nextButton").addEventListener("click", function() {
    var userInput = document.getElementById("userInput").value;
    var expressionLabel = document.getElementById("expressionLabel");
    console.log("user input: " + userInput);
    if (checkAnswer(expressionLabel.textContent, userInput)) {
        expressionLabel.textContent = "Correct!";
        expressionLabel.style.color = "green";
    } else {
        expressionLabel.textContent = "Incorrect!";
        expressionLabel.style.color = "red";
    }

    generateQuestion();

    document.getElementById("userInput").value = '';
    document.getElementById("userInput").classList.remove("is-invalid");

    var invalidFeedback = document.querySelector("#inputForm .invalid-feedback");
    if (invalidFeedback) {
        invalidFeedback.style.display = 'none';
    }
});

document.getElementById("endButton").addEventListener("click", function() {
    document.getElementById("numberDisplay").textContent = "Finished!";
    var nextButton = document.getElementById("nextButton");
    nextButton.parentNode.removeChild(nextButton);

    var endButton = document.getElementById("endButton");
    endButton.parentNode.removeChild(endButton);

    var inputForm = document.getElementById("inputForm");
    inputForm.parentNode.removeChild(inputForm);

    var finishedContent = document.getElementById("finishedContent");
    finishedContent.classList.remove("d-none");
});

// Generate a new math question
function generateQuestion() {
    var expressionLabel = document.getElementById("expressionLabel");
    var expression = generateExpression();
    expressionLabel.textContent = `What is the result of ${expression}?`;
    document.getElementById("numberDisplay").textContent = expression;
}

// Generate a random math expression
function generateExpression() {
    const operations = ['*', '/', '+', '-'];
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const operation = operations[Math.floor(Math.random() * operations.length)];

    return `${num1} ${operation} ${num2}`;
}

// Check if the user's answer is correct
function checkAnswer(expression, answer) {
    console.log(expression);
  
    const matches = expression.match(/(\d+)\s*([+\-*/])\s*(\d+)/);
  
    if (matches) {
      const num1 = parseInt(matches[1]);
      const operator = matches[2];
      const num2 = parseInt(matches[3]);
  
      let result;
  
      console.log(num1 + " " + operator + " " + num2);
  
      switch (operator) {
        case "+":
          result = parseFloat(num1) + parseFloat(num2);
          break;
        case "-":
          result = parseFloat(num1) - parseFloat(num2);
          break;
        case "*":
          result = parseFloat(num1) * parseFloat(num2);
          break;
        case "/":
          result = parseFloat(num1) / parseFloat(num2);
          break;
        default:
          return false;
      }
  
      console.log(result);
      console.log();
  
      return parseFloat(answer) === result;
    }
  
    console.log("Expression format is invalid.");
    return false;
  }
