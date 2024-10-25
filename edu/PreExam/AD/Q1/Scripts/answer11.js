// Function to attach event listeners to the solution button for question 11
function attachSolutionButtonListeners_question11(button) {
  button.addEventListener('click', function() {
    // Define the correct answer
    const correctAnswer = 'D';

    // Get the selected answer
    const selectedAnswer = document.querySelector('input[name="routingOption"]:checked')?.value;

    // Show correct/incorrect styling for each option
    document.querySelectorAll('input[name="routingOption"]').forEach(input => {
      const isCorrect = input.value === correctAnswer;
      const isSelected = input.value === selectedAnswer;
      
      if (isSelected) {
        if (isCorrect) {
          input.parentElement.classList.add('highlight');
        } else {
          input.parentElement.classList.add('incorrect');
        }
      }
    });

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question11');
    if (solutionInfoElement) {
      if (selectedAnswer === correctAnswer) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if the answer is correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question11');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
        
        // Show user's answer if incorrect
        const yourAnswerElement = document.getElementById('yourAnswer_question11');
        if (yourAnswerElement) {
          yourAnswerElement.textContent = `Your Answer: ${selectedAnswer || 'No Answer Selected'}`;
          yourAnswerElement.style.display = 'block';
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
    attachSolutionButtonListeners_question11(button);
  });
});
