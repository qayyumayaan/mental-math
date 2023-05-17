document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("mainContent").classList.add("d-none");
    document.getElementById("gameContent").classList.remove("d-none");

    generateQuestion();
});

document.getElementById("nextButton").addEventListener("click", function() {
    var userInput = document.getElementById("userInput").value;
    var expressionLabel = document.getElementById("expressionLabel");

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


// Get the input field
var userInput = document.getElementById("userInput");

// Add event listener for keydown event
userInput.addEventListener("keydown", function(event) {
  // Check if the key code is for the enter key
  if (event.keyCode === 13) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Trigger the evaluation of the input
    evaluateInput();
  }
});

// Function to evaluate the input
function evaluateInput() {
  // Get the user input value
  var input = userInput.value;

  var expressionLabel = document.getElementById("expressionLabel");

  if (checkAnswer(expressionLabel.textContent, input)) {
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
}

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
    let expression;
    let result;
    let isValid = false;

    while (!isValid) {
        const num1 = Math.floor(Math.random() * 15) + 1;
        const num2 = Math.floor(Math.random() * 15) + 1;
        const operation = operations[Math.floor(Math.random() * operations.length)];
        expression = `${num1} ${operation} ${num2}`;
        result = eval(expression);
        isValid = Number.isInteger(result);
    }

    return expression;
}

// Check if the user's answer is correct
function checkAnswer(expression, answer) {

    const matches = expression.match(/(\d+)\s*([+\-*/])\s*(\d+)/);
  
    if (matches) {
      const num1 = parseInt(matches[1]);
      const operator = matches[2];
      const num2 = parseInt(matches[3]);
  
      let result;
    
      switch (operator) {
        case "+":
          result = parseInt(num1) + parseInt(num2);
          break;
        case "-":
          result = parseInt(num1) - parseInt(num2);
          break;
        case "*":
          result = parseInt(num1) * parseInt(num2);
          break;
        case "/":
          result = parseInt(num1) / parseInt(num2);
          break;
        default:
          return false;
      }
  
      return parseInt(answer) === result;
    }
  
    console.log("Expression format is invalid. " + "num1: " + num1 + " operator: " + operator + " num2: " + num2 + " original expression: " + expression);
    return false;
  }
