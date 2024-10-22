// Function to attach event listeners to the solution button for question 6
function attachSolutionButtonListeners_question6(button) {
  button.addEventListener('click', function() {
    // Define correct answers
    const correctAnswers = ['B', 'D'];

    // Get selected answers
    const selectedAnswers = Array.from(document.querySelectorAll('input[name="fixPC3"]:checked'))
      .map(input => input.value);

    // Show correct/incorrect styling for each option
    document.querySelectorAll('input[name="fixPC3"]').forEach(input => {
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
    const solutionInfoElement = document.getElementById('solutionInfo_question6');
    if (solutionInfoElement) {
      const allCorrect = correctAnswers.every(answer => selectedAnswers.includes(answer)) &&
                         selectedAnswers.every(answer => correctAnswers.includes(answer));

      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if all answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question6');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
        
        // Show user's answers if incorrect
        const yourAnswerElement = document.getElementById('yourAnswer_question6');
        if (yourAnswerElement) {
          document.getElementById('yourAnswerOptionA_6').textContent = `A. In the firewall policy configuration, add 10.0.1.3 as an address object: ${selectedAnswers.includes('A') ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionB_6').textContent = `B. In the IP pool configuration, set endip to 192.2.0.12: ${selectedAnswers.includes('B') ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionC_6').textContent = `C. Configure another firewall policy for PC3: ${selectedAnswers.includes('C') ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionD_6').textContent = `D. In the IP pool configuration, set type to overload: ${selectedAnswers.includes('D') ? 'Selected' : 'Not Selected'}`;
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
    attachSolutionButtonListeners_question6(button);
  });
});
