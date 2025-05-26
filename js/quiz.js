let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreDisplay = document.createElement('div');
scoreDisplay.id = "score-display";
scoreDisplay.style.fontWeight = "bold";
scoreDisplay.style.marginBottom = "1em";
questionContainer.before(scoreDisplay); // insert above question container

function startQuiz() {
  questions.sort(() => Math.random() - 0.5);
  questions.splice(5); // Keep only the first 5 questions
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  const question = questions[currentQuestionIndex];

  // Display progress
  const progressElement = document.createElement('p');
  progressElement.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  questionContainer.innerHTML = '';
  questionContainer.appendChild(progressElement);

  // Display question
  const questionElement = document.createElement('h2');
  questionElement.innerText = question.question;
  questionContainer.appendChild(questionElement);

  // Display image if present
  if (question.image) {
    const imageElement = document.createElement('img');
    imageElement.src = question.image;
    imageElement.alt = "Question image";
    questionContainer.appendChild(imageElement);
  }

  // Update score display
  scoreDisplay.innerText = `Score: ${score}`;

  // Display answer options
  if (question.type === "text") {
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'text-answer';
    input.placeholder = 'Type your answer here...';
    answerButtons.appendChild(input);
  } else {
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectAnswer(answer));
      answerButtons.appendChild(button);
    });
  }
}

function resetState() {
  nextButton.style.display = 'none';
  answerButtons.innerHTML = '';
}

function selectAnswer(answer) {
  if (answer.correct) {
    score++;
  }
  nextButton.style.display = 'inline-block';
}

nextButton.addEventListener('click', () => {
  const currentQuestion = questions[currentQuestionIndex];
  if (currentQuestion.type === "text") {
    const userInput = document.getElementById('text-answer').value.trim().toLowerCase();
    const correctAnswer = currentQuestion.correctAnswer.trim().toLowerCase();
    if (userInput === correctAnswer) {
      score++;
    }
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    localStorage.setItem('quizScore', score);
    window.location.href = 'results.html';
  }
});

startQuiz();
