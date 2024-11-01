// Function to attach event listeners to the solution button for question 11
function attachSolutionButtonListeners_question11(button) {
  button.addEventListener('click', function() {
    // Define the correct answer
    const correctAnswer = 'B';

    // Get selected answer
    const selectedAnswer = document.querySelector('input[name="vpnConfiguration"]:checked');

    // Show correct/incorrect styling for the selected option
    if (selectedAnswer) {
      const isCorrect = selectedAnswer.value === correctAnswer;

      if (isCorrect) {
        selectedAnswer.parentElement.classList.add('highlight');
        window.score += 1; // Increment the score if correct
      } else {
        selectedAnswer.parentElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question11');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question11');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question11(button);
  });
});
