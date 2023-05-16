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
    const result = eval(expression);
    return parseFloat(answer) === result;
  }
  
  // Example usage
  const expression = generateExpression();
  const userAnswer = prompt(`What is the result of ${expression}?`);
  
  if (checkAnswer(expression, userAnswer)) {
    alert('Correct answer!');
  } else {
    alert('Incorrect answer. Try again!');
  }
  