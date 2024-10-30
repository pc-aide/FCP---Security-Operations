// Function to attach event listener to the solution button for question 17
function attachSolutionButtonListeners_question17(button) {
  button.addEventListener('click', function() {
    // Define the correct answers
    const correctAnswers = ['B', 'D'];

    // Get all selected answers
    const selectedAnswers = Array.from(document.querySelectorAll('input[name="conserveMode"]:checked')).map(input => input.value);

    // Check if selected answers match correct answers exactly
    const isCorrect = selectedAnswers.length === correctAnswers.length &&
                      selectedAnswers.every(answer => correctAnswers.includes(answer));

    // Highlight selected answers
    selectedAnswers.forEach(answer => {
      const optionElement = document.getElementById(`option${answer}_17`).parentElement;
      if (correctAnswers.includes(answer)) {
        optionElement.classList.add('highlight');
      } else {
        optionElement.classList.add('incorrect');
      }
    });

    // Add 1 point only if all correct answers are selected without any incorrect ones
    if (isCorrect) {
      window.score += 1;
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question17');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
    }

    // Show the correct answers if any selected answer is incorrect
    if (!isCorrect) {
      const correctAnswerElement = document.getElementById('correctAnswer_question17');
      if (correctAnswerElement) {
        correctAnswerElement.style.display = 'block';
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
