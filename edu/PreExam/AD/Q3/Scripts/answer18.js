// Function to attach event listener to the solution button for question 18
function attachSolutionButtonListeners_question18(button) {
  button.addEventListener('click', function() {
    // Define the correct answer
    const correctAnswer = 'A';

    // Get selected answer
    const selectedAnswer = document.querySelector('input[name="appControl"]:checked');

    // Highlight selected answer
    if (selectedAnswer) {
      const selectedValue = selectedAnswer.value;
      const optionElement = document.getElementById(`option${selectedValue}_18`).parentElement;
      
      if (selectedValue === correctAnswer) {
        optionElement.classList.add('highlight');
        window.score += 1; // Increment score only if the correct answer is selected
      } else {
        optionElement.classList.add('incorrect');
      }
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question18');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
    }

    // Show the correct answer if the selected answer is incorrect
    if (!selectedAnswer || selectedAnswer.value !== correctAnswer) {
      const correctAnswerElement = document.getElementById('correctAnswer_question18');
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
    attachSolutionButtonListeners_question18(button);
  });
});
