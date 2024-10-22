// Function to attach event listeners to the solution button for question 19
function attachSolutionButtonListeners_question19(button) {
  button.addEventListener('click', function() {
    // Define correct answer
    const correctAnswer = 'B';

    // Get selected answer
    const selectedAnswer = document.querySelector('input[name="sdwanZone"]:checked')?.value;

    // Show correct/incorrect styling for each option
    document.querySelectorAll('input[name="sdwanZone"]').forEach(input => {
      const isChecked = selectedAnswer === input.value;
      const isCorrect = correctAnswer === input.value;

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
      const allCorrect = selectedAnswer === correctAnswer;

      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question19');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }

        // Show user's answer if incorrect
        const yourAnswerElement = document.getElementById('yourAnswer_question19');
        if (yourAnswerElement) {
          document.getElementById('yourAnswerOptionA_19').textContent = `A. The underlay zone contains port1 and port2: ${selectedAnswer === 'A' ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionB_19').textContent = `B. The d-wan zone contains no member: ${selectedAnswer === 'B' ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionC_19').textContent = `C. The d-wan zone cannot be deleted: ${selectedAnswer === 'C' ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionD_19').textContent = `D. The virtual-wan-link zone contains no member: ${selectedAnswer === 'D' ? 'Selected' : 'Not Selected'}`;
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
    attachSolutionButtonListeners_question19(button);
  });
});
