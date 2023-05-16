document.getElementById("startButton").addEventListener("click", function() {
    // Hide the main content and show the game content
    document.getElementById("mainContent").classList.add("d-none");
    document.getElementById("gameContent").classList.remove("d-none");

    // Generate and display a random number
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("numberDisplay").textContent = randomNumber;
});

document.getElementById("generateButton").addEventListener("click", function() {
    // Generate and display a new random number
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("numberDisplay").textContent = randomNumber;
});

document.getElementById("endButton").addEventListener("click", function() {
    document.getElementById("numberDisplay").textContent = "Finished!";
    var generateButton = document.getElementById("generateButton");
    generateButton.parentNode.removeChild(generateButton);

    var endButton = document.getElementById("endButton");
    endButton.parentNode.removeChild(endButton);

    var inputForm = document.getElementById("inputForm");
    inputForm.parentNode.removeChild(inputForm);

    var finishedContent = document.getElementById("finishedContent");
    finishedContent.classList.remove("d-none");
});

const input = document.getElementById("validationServer05");
              
input.addEventListener("input", function() {
  const value = input.value.trim(); 

  if (isNaN(value)) {
    input.classList.add("is-invalid"); 
  } else {
    input.classList.remove("is-invalid"); 
  }
});