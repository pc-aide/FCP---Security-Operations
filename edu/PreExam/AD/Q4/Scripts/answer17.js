// Function to attach event listeners to the solution button for question 17
function attachSolutionButtonListeners_question17(button) {
  button.addEventListener('click', function() {
    // Define the correct answer
    const correctAnswer = 'B';

    // Get selected answer
    const selectedAnswer = document.querySelector('input[name="ipsConclusion"]:checked');

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
    const solutionInfoElement = document.getElementById('solutionInfo_question17');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
      const correctAnswersElement = document.getElementById('correctAnswers_question17');
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
    attachSolutionButtonListeners_question17(button);
  });
});
