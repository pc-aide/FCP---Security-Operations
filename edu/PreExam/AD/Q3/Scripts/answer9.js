// Function to attach event listeners to the solution button for question 9
function attachSolutionButtonListeners_question9(button) {
  button.addEventListener('click', function() {
    // Define the correct answer
    const correctAnswer = 'A';

    // Get selected answer
    const selectedAnswer = document.querySelector('input[name="facebookPolicy"]:checked')?.value;

    // Show correct/incorrect styling for each option
    document.querySelectorAll('input[name="facebookPolicy"]').forEach(input => {
      if (input.value === correctAnswer) {
        input.parentElement.classList.add('highlight');
      } else if (input.checked) {
        input.parentElement.classList.add('incorrect');
      }
    });

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question9');
    if (solutionInfoElement) {
      if (selectedAnswer === correctAnswer) {
        solutionInfoElement.classList.add('highlight');
        window.score += 1; // Increment the score if correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question9');
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
    attachSolutionButtonListeners_question9(button);
  });
});
