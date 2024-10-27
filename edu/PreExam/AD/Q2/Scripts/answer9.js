// Function to attach event listeners to the solution button for question 9
function attachSolutionButtonListeners_question9(button) {
  button.addEventListener('click', function() {
    // Define correct answer
    const correctAnswer = 'A';

    // Get selected answer
    const selectedAnswer = document.querySelector('input[name="dhcpIssue"]:checked');

    // Show correct/incorrect styling for the selected option
    if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswer) {
        selectedAnswer.parentElement.classList.add('highlight');
      } else {
        selectedAnswer.parentElement.classList.add('incorrect');
      }
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question9');
    if (solutionInfoElement) {
      const correctAnswersElement = document.getElementById('correctAnswers_question9');
      if (selectedAnswer && selectedAnswer.value !== correctAnswer) {
        solutionInfoElement.classList.add('incorrect');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      } else {
        solutionInfoElement.classList.add('highlight');
        window.score += 1; // Increment the score if correct
      }
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question9(button);
  });
});
