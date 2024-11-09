// Function to attach event listener to the solution button for question 15
function attachSolutionButtonListeners_question15(button) {
  button.addEventListener('click', function() {
    // Define correct answers
    const correctAnswers = ['A', 'B', 'E'];

    // Get selected answers
    const selectedAnswers = Array.from(document.querySelectorAll('input[name="cliCommands"]:checked')).map(input => input.value);

    // Show correct/incorrect styling for each option
    document.querySelectorAll('input[name="cliCommands"]').forEach(input => {
      const isChecked = selectedAnswers.includes(input.value);
      const isCorrect = correctAnswers.includes(input.value);

      if (isChecked) {
        if (isCorrect) {
          input.parentElement.classList.add('highlight');
        } else {
          input.parentElement.classList.add('incorrect');
        }
      }
    });

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question15');
    if (solutionInfoElement) {
      const allCorrect = correctAnswers.every(answer => selectedAnswers.includes(answer)) && selectedAnswers.length === correctAnswers.length;

      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        window.score += 1; // Increment the score if correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question15');
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
    attachSolutionButtonListeners_question15(button);
  });
});
