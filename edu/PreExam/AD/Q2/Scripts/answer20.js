// Function to attach event listeners to the solution button for question 20
function attachSolutionButtonListeners_question20(button) {
  button.addEventListener('click', function() {
    // Define correct answer
    const correctAnswer = 'A';

    // Get selected answer
    const selectedAnswer = document.querySelector('input[name="authIssue"]:checked');

    // Highlight the selected answer
    if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswer) {
        selectedAnswer.parentElement.classList.add('highlight');
      } else {
        selectedAnswer.parentElement.classList.add('incorrect');
      }

      // Show correct answer
      const solutionInfoElement = document.getElementById('solutionInfo_question20');
      if (solutionInfoElement) {
        solutionInfoElement.style.display = 'block';
        const correctAnswersElement = document.getElementById('correctAnswers_question20');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }

      // Increment score if correct
      if (selectedAnswer.value === correctAnswer) {
        window.score += 1; // Increment the score if correct
      }
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question20(button);
  });
});
