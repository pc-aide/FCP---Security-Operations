// Function to attach event listeners to the solution button for question 2
function attachSolutionButtonListeners_question2(button) {
  button.addEventListener('click', function() {
    // Define correct answers
    const correctAnswers = ['B', 'C', 'D'];

    // Get selected answers
    const selectedAnswers = Array.from(document.querySelectorAll('input[name="sslInspectionOption"]:checked'))
      .map(input => input.value);

    // Show correct/incorrect styling for each option
    document.querySelectorAll('input[name="sslInspectionOption"]').forEach(input => {
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
    const solutionInfoElement = document.getElementById('solutionInfo_question2');
    if (solutionInfoElement) {
      const allCorrect = correctAnswers.every(answer => selectedAnswers.includes(answer)) &&
                         selectedAnswers.every(answer => correctAnswers.includes(answer));

      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if all answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question2');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
        
        // Show user's answers if incorrect
        const yourAnswerElement = document.getElementById('yourAnswer_question2');
        if (yourAnswerElement) {
          document.getElementById('yourAnswerOptionA_2').textContent = `A. The host field in the HTTP header: ${selectedAnswers.includes('A') ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionB_2').textContent = `B. The server name indication (SNI) extension in the client hello message: ${selectedAnswers.includes('B') ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionC_2').textContent = `C. The subject alternative name (SAN) field in the server certificate: ${selectedAnswers.includes('C') ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionD_2').textContent = `D. The subject field in the server certificate: ${selectedAnswers.includes('D') ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionE_2').textContent = `E. The serial number in the server certificate: ${selectedAnswers.includes('E') ? 'Selected' : 'Not Selected'}`;
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
    attachSolutionButtonListeners_question2(button);
  });
});
