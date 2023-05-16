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
});