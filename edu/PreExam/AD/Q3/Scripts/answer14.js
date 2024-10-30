// Function to attach event listener to the solution button for question 14
function attachSolutionButtonListeners_question14(button) {
  button.addEventListener('click', function() {
    // Define the correct answer
    const correctAnswer = 'A';

    // Get the selected answer
    const selectedAnswer = document.querySelector('input[name="vpnSetting"]:checked')?.value;

    // Show correct/incorrect styling for each option
    document.querySelectorAll('input[name="vpnSetting"]').forEach(input => {
      const isCorrect = input.value === correctAnswer;

      if (input.checked) {
        if (isCorrect) {
          input.parentElement.classList.add('highlight');
        } else {
          input.parentElement.classList.add('incorrect');
        }
      }
    });

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question14');
    if (solutionInfoElement) {
      if (selectedAnswer === correctAnswer) {
        solutionInfoElement.classList.add('highlight');
        window.score += 1; // Increment the score if correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswerElement = document.getElementById('correctAnswer_question14');
        if (correctAnswerElement) {
          correctAnswerElement.style.display = 'block';
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
    attachSolutionButtonListeners_question14(button);
  });
});
