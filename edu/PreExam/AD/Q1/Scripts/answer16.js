// Function to attach event listeners to the solution button for question 16
function attachSolutionButtonListeners_question16(button) {
  button.addEventListener('click', function() {
    // Define correct answer
    const correctAnswers = ['D'];

    // Get selected answer
    const selectedAnswers = Array.from(document.querySelectorAll('input[name="electionProcess"]:checked'))
      .map(input => input.value);

    // Show correct/incorrect styling for each option
    document.querySelectorAll('input[name="electionProcess"]').forEach(input => {
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
    const solutionInfoElement = document.getElementById('solutionInfo_question16');
    if (solutionInfoElement) {
      const allCorrect = correctAnswers.every(answer => selectedAnswers.includes(answer)) &&
                         selectedAnswers.every(answer => correctAnswers.includes(answer));

      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if all answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question16');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }

        // Show user's answers if incorrect
        const yourAnswerElement = document.getElementById('yourAnswer_question16');
        if (yourAnswerElement) {
          document.getElementById('yourAnswerOptionA_16').textContent = `A. Connected monitored ports > Priority > System uptime > FortiGate serial number: ${selectedAnswers.includes('A') ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionB_16').textContent = `B. Connected monitored ports > System uptime > Priority > FortiGate serial number: ${selectedAnswers.includes('B') ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionC_16').textContent = `C. Connected monitored ports > Priority > HA uptime > FortiGate serial number: ${selectedAnswers.includes('C') ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionD_16').textContent = `D. Connected monitored ports > HA uptime > Priority > FortiGate serial number: ${selectedAnswers.includes('D') ? 'Selected' : 'Not Selected'}`;
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
    attachSolutionButtonListeners_question16(button);
  });
});
