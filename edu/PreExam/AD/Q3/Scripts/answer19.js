// Function to attach event listeners to the solution button for question 19
function attachSolutionButtonListeners_question19(button) {
  button.addEventListener('click', function() {
    // Define correct answers
    const correctAnswers = ['A', 'C', 'E'];

    // Get selected answers
    const selectedAnswers = Array.from(document.querySelectorAll('input[name="sdwanRouting"]:checked')).map(input => input.value);

    // Show correct/incorrect styling for each option
    document.querySelectorAll('input[name="sdwanRouting"]').forEach(input => {
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
    const solutionInfoElement = document.getElementById('solutionInfo_question19');
    if (solutionInfoElement) {
      const allCorrect = correctAnswers.every(answer => selectedAnswers.includes(answer)) && selectedAnswers.length === correctAnswers.length;

      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        window.score += 1; // Increment the score if correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question19');
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
    attachSolutionButtonListeners_question19(button);
  });
});
