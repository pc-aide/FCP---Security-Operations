// Function to attach event listeners to the solution button for question 13
function attachSolutionButtonListeners_question13(button) {
  button.addEventListener('click', function() {
    // Define the correct answer
    const correctAnswer = 'D';

    // Get the selected answer
    const selectedAnswer = document.querySelector('input[name="webFilterChange"]:checked')?.value;

    // Show correct/incorrect styling for each option
    document.querySelectorAll('input[name="webFilterChange"]').forEach(input => {
      const isChecked = input.value === selectedAnswer;
      const isCorrect = input.value === correctAnswer;

      if (isChecked) {
        if (isCorrect) {
          input.parentElement.classList.add('highlight');
        } else {
          input.parentElement.classList.add('incorrect');
        }
      }
    });

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question13');
    if (solutionInfoElement) {
      if (selectedAnswer === correctAnswer) {
        solutionInfoElement.classList.add('highlight');
        window.score += 1; // Increment the score if correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question13');
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
    attachSolutionButtonListeners_question13(button);
  });
});
