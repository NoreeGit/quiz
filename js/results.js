const resultContainer = document.getElementById('results-summary');
const finalScore = localStorage.getItem('quizScore');
resultContainer.innerHTML = `<p>You scored ${finalScore} out of ${30}.</p>`;
