// Function to attach event listeners to the solution button for question 1
function attachSolutionButtonListeners_question1(button) {
  button.addEventListener('click', function() {
    // Define correct answers
    const correctAnswers = ['C', 'D'];

    // Get selected answers
    const selectedAnswers = Array.from(document.querySelectorAll('input[name="routingOption"]:checked'))
      .map(input => input.value);

    // Show correct/incorrect styling for each option
    document.querySelectorAll('input[name="routingOption"]').forEach(input => {
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
    const solutionInfoElement = document.getElementById('solutionInfo_question1');
    if (solutionInfoElement) {
      const allCorrect = correctAnswers.every(answer => selectedAnswers.includes(answer)) &&
                         selectedAnswers.every(answer => correctAnswers.includes(answer));

      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if all answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question1');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
        
        // Show user's answers if incorrect
        const yourAnswerElement = document.getElementById('yourAnswer_question1');
        if (yourAnswerElement) {
          document.getElementById('yourAnswerOptionA_1').textContent = `A. All of the entries in the routing database table are installed in the FortiGate routing table: ${selectedAnswers.includes('A') ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionB_1').textContent = `B. The port2 interface is marked as inactive: ${selectedAnswers.includes('B') ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionC_1').textContent = `C. Both default routes have different administrative distances: ${selectedAnswers.includes('C') ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionD_1').textContent = `D. The default route on port2 is marked as the standby route: ${selectedAnswers.includes('D') ? 'Selected' : 'Not Selected'}`;
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
    attachSolutionButtonListeners_question1(button);
  });
});
