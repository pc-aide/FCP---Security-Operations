// Function to attach event listeners to the solution button for question 18
function attachSolutionButtonListeners_question18(button) {
  button.addEventListener('click', function() {
    // Define correct answer
    const correctAnswer = 'D';

    // Get selected answer
    const selectedAnswer = document.querySelector('input[name="firewallPolicy"]:checked').value;

    // Show correct/incorrect styling for each option
    document.querySelectorAll('input[name="firewallPolicy"]').forEach(input => {
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
    const solutionInfoElement = document.getElementById('solutionInfo_question18');
    if (solutionInfoElement) {
      const allCorrect = selectedAnswer === correctAnswer;

      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question18');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }

        // Show user's answer if incorrect
        const yourAnswerElement = document.getElementById('yourAnswer_question18');
        if (yourAnswerElement) {
          document.getElementById('yourAnswerOptionA_18').textContent = `A. The Implicit group can include more than one deny firewall policy: ${selectedAnswer === 'A' ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionB_18').textContent = `B. The firewall policies are listed by ID sequence view: ${selectedAnswer === 'B' ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionC_18').textContent = `C. The firewall policies are listed by ingress and egress interfaces pairing view: ${selectedAnswer === 'C' ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionD_18').textContent = `D. LAN to WAN, WAN to LAN, and Implicit are sequence grouping view lists: ${selectedAnswer === 'D' ? 'Selected' : 'Not Selected'}`;
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
    attachSolutionButtonListeners_question18(button);
  });
});
