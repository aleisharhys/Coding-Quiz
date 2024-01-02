// questions.js

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('questions');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start');
const submitBtn = document.getElementById('submit');
const initialsInput = document.getElementById('initials');
const finalScore = document.getElementById('final-score');

// Event listeners
startBtn.addEventListener('click', startQuiz);
submitBtn.addEventListener('click', saveScore);

// Sample Questions
const questions = [
  { question: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Highly Typed Multilevel Language'], answer: 0 },
  { question: 'Which symbol is used for single-line comments in JavaScript?', options: ['//', '/*', '--', '#'], answer: 0 },
  { question: 'What is the result of the expression 3 + 4 * 2 in JavaScript?', options: ['14', '11', '15', '22'], answer: 2 },
  { question: 'In CSS, what property is used to change the text color?', options: ['text-color', 'color', 'font-color', 'text-style'], answer: 1 },
  { question: 'Which keyword is used to declare a constant variable in JavaScript?', options: ['var', 'let', 'const', 'variable'], answer: 2 },
  { question: 'What is the purpose of the `<head>` tag in HTML?', options: ['To define the main content of the page', 'To contain metadata about the document', 'To create a heading in the page', 'To include external JavaScript files'], answer: 1 },
  // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
  startScreen.classList.add('hide');
  quizScreen.classList.remove('hide');
  renderQuestion();
}

// Function to render questions
function renderQuestion() {
  const currentQ = questions[currentQuestion];
  document.getElementById('question-title').textContent = currentQ.question;
  document.getElementById('choices').innerHTML = currentQ.options.map((option, index) => `<button onclick="checkAnswer(${index})">${option}</button>`).join('');
}

// Function to check the answer
function checkAnswer(index) {
  const currentQ = questions[currentQuestion];
  
  if (index === currentQ.answer) {
    score++;
  }

  // Move to the next question or end the quiz
  currentQuestion++;
  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    endQuiz();
  }
}

// Function to end the quiz
function endQuiz() {
  quizScreen.classList.add('hide');
  endScreen.classList.remove('hide');
  document.getElementById('final-score').textContent = score;
}

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
