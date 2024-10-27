// Function to attach event listeners to the solution button for question 6
function attachSolutionButtonListeners_question6(button) {
  button.addEventListener('click', function() {
    // Define the correct answer
    const correctAnswer = 'D';

    // Get selected answer
    const selectedAnswer = document.querySelector('input[name="inspectionMode"]:checked')?.value;

    // Show correct/incorrect styling for each option
    document.querySelectorAll('input[name="inspectionMode"]').forEach(input => {
      if (input.value === correctAnswer) {
        input.parentElement.classList.add('highlight');
      } else if (input.value === selectedAnswer) {
        input.parentElement.classList.add('incorrect');
      }
    });

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question6');
    if (solutionInfoElement) {
      if (selectedAnswer === correctAnswer) {
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
