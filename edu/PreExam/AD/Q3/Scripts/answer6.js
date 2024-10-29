// Function to attach event listeners to the solution button for question 6
function attachSolutionButtonListeners_question6(button) {
  button.addEventListener('click', function() {
    // Define the correct answer
    const correctAnswer = 'B';

    // Get selected answer
    const selectedAnswer = document.querySelector('input[name="haOutcome"]:checked');

    // Show correct/incorrect styling for the selected option
    document.querySelectorAll('input[name="haOutcome"]').forEach(input => {
      const isCorrect = correctAnswer === input.value;
      if (selectedAnswer && selectedAnswer.value === input.value) {
        if (isCorrect) {
          input.parentElement.classList.add('highlight');
        } else {
          input.parentElement.classList.add('incorrect');
        }
      }
    });

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question6');
    if (solutionInfoElement) {
      const isCorrect = selectedAnswer && selectedAnswer.value === correctAnswer;

      if (isCorrect) {
        solutionInfoElement.classList.add('highlight');
        window.score += 1; // Increment the score if correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question6');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question6(button);
  });
});
