// Function to attach event listeners to the solution button for question 9
function attachSolutionButtonListeners_question9(button) {
  button.addEventListener('click', function() {
    // Define correct answers
    const correctAnswers = ['C', 'D'];

    // Get selected answers
    const selectedAnswers = Array.from(document.querySelectorAll('input[name="filterSolution"]:checked'))
      .map(input => input.value);

    // Show correct/incorrect styling for each option
    document.querySelectorAll('input[name="filterSolution"]').forEach(input => {
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
    const solutionInfoElement = document.getElementById('solutionInfo_question9');
    if (solutionInfoElement) {
      const allCorrect = correctAnswers.every(answer => selectedAnswers.includes(answer)) &&
                         selectedAnswers.length === correctAnswers.length;

      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if all answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question9');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }

        // Show user's answers if incorrect
        const yourAnswerElement = document.getElementById('yourAnswer_question9');
        if (yourAnswerElement) {
          document.getElementById('yourAnswerOptionA_9').textContent = `A. Configure a separate firewall policy: ${selectedAnswers.includes('A') ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionB_9').textContent = `B. Set the Freeware and Software Downloads category Action to Warning: ${selectedAnswers.includes('B') ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionC_9').textContent = `C. Configure a web override rating: ${selectedAnswers.includes('C') ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionD_9').textContent = `D. Configure a static URL filter entry: ${selectedAnswers.includes('D') ? 'Selected' : 'Not Selected'}`;
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
    attachSolutionButtonListeners_question9(button);
  });
});
