// Function to attach event listener to the solution button for question 16
function attachSolutionButtonListeners_question16(button) {
  button.addEventListener('click', function() {
    // Define the correct answer
    const correctAnswer = 'A';

    // Get the selected answer
    const selectedAnswer = document.querySelector('input[name="dpdMode"]:checked');

    // Check if the selected answer is correct
    if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswer) {
        selectedAnswer.parentElement.classList.add('highlight');
        window.score += 1; // Increment the score if correct
      } else {
        selectedAnswer.parentElement.classList.add('incorrect');
        const correctAnswerElement = document.getElementById('correctAnswer_question16');
        if (correctAnswerElement) {
          correctAnswerElement.style.display = 'block';
        }
      }
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question16');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question16(button);
  });
});
