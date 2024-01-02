// logic.js

// ...

// Function to end the quiz
function endQuiz() {
    clearInterval(timer);
    quizScreen.classList.add('hide');
    endScreen.classList.remove('hide');
    document.getElementById('final-score').textContent = score;
  
    // Redirect to highscores page after a short delay (adjust as needed)
    setTimeout(() => {
      window.location.href = 'highscores.html';
    }, 2000);
  }
  
  // ...
  