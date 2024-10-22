// Function to attach event listeners to the solution button for question 12
function attachSolutionButtonListeners_question12(button) {
  button.addEventListener('click', function() {
    // Define correct answers
    const correctAnswers = ['C'];

    // Get selected answers
    const selectedAnswers = Array.from(document.querySelectorAll('input[name="vpnSetting"]:checked'))
      .map(input => input.value);

    // Show correct/incorrect styling for each option
    document.querySelectorAll('input[name="vpnSetting"]').forEach(input => {
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
    const solutionInfoElement = document.getElementById('solutionInfo_question12');
    if (solutionInfoElement) {
      const allCorrect = correctAnswers.every(answer => selectedAnswers.includes(answer)) &&
                         selectedAnswers.every(answer => correctAnswers.includes(answer));

      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if all answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question12');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }

        // Show user's answers if incorrect
        const yourAnswerElement = document.getElementById('yourAnswer_question12');
        if (yourAnswerElement) {
          document.getElementById('yourAnswerOptionA_12').textContent = `A. SSL VPN idle-timeout: ${selectedAnswers.includes('A') ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionB_12').textContent = `B. SSL VPN login-timeout: ${selectedAnswers.includes('B') ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionC_12').textContent = `C. SSL VPN dtls-hello-timeout: ${selectedAnswers.includes('C') ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionD_12').textContent = `D. SSL VPN session-ttl: ${selectedAnswers.includes('D') ? 'Selected' : 'Not Selected'}`;
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
    attachSolutionButtonListeners_question12(button);
  });
});
