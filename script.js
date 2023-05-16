var oldRandom;
var numCorrect;
var numFalse;
var numTotal;

document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("mainContent").classList.add("d-none");
    document.getElementById("gameContent").classList.remove("d-none");

    oldRandom = Math.floor(Math.random() * 100) + 1;
    document.getElementById("numberDisplay").textContent = oldRandom;
});


document.getElementById("nextButton").addEventListener("click", function() {
    var userInput = document.getElementById("validationServer05").value;
    var answerLabel = document.getElementById("answerLabel");

    if (userInput == oldRandom) {
        answerLabel.textContent = "Correct!";
        answerLabel.style.color = "green";
    } else {
        answerLabel.textContent = "Incorrect!";
        answerLabel.style.color = "red";
    }

    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("numberDisplay").textContent = randomNumber;
    oldRandom = randomNumber;

    document.getElementById("validationServer05").value = '';
    document.getElementById("validationServer05").classList.remove("is-invalid");

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
