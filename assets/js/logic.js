// logic.js

// ...

// Function to save the score
function saveScore() {
    const initials = initialsInput.value.toUpperCase();
    console.log('Saving score...');
    console.log(`Initials: ${initials}`);
    console.log(`Score: ${score}`);
  
    // Create an object to represent a score
    const newScore = {
      initials,
      score,
    };
  
    // Retrieve existing scores from local storage or initialize an empty array
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  
    // Add the new score to the array
    highScores.push(newScore);
  
    // Sort the scores in descending order based on the score value
    highScores.sort((a, b) => b.score - a.score);
  
    // Save the updated scores back to local storage
    localStorage.setItem('highScores', JSON.stringify(highScores));
  
    // Redirect to highscores page after saving the score
    window.location.href = 'highscores.html';
  }
  
  // Function to display high scores
  function displayHighScores() {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const highScoresList = document.getElementById('highscores');
  
    // Clear existing content
    highScoresList.innerHTML = '';
  
    // Display each score in the list
    highScores.forEach((score, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${index + 1}. ${score.initials} - ${score.score}`;
      highScoresList.appendChild(listItem);
    });
  }
  
  // ...
  