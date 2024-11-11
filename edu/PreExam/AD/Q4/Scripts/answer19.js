// Function to attach event listeners to the solution button for question 19
function attachSolutionButtonListeners_question19(button) {
  button.addEventListener('click', function() {
    // Define the correct answer
    const correctAnswer = 'C';

    // Get selected answer
    const selectedAnswer = document.querySelector('input[name="quickModeSelector"]:checked');

    // Show correct/incorrect styling for the selected option
    if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswer) {
        selectedAnswer.parentElement.classList.add('highlight');
        window.score += 1; // Increment the score if correct
      } else {
        selectedAnswer.parentElement.classList.add('incorrect');
      }
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question19');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
      const correctAnswersElement = document.getElementById('correctAnswers_question19');
      if (selectedAnswer && selectedAnswer.value !== correctAnswer) {
        correctAnswersElement.style.display = 'block';
      }
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question19(button);
  });
});
