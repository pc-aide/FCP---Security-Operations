// Function to attach event listeners to the solution button for question 3
function attachSolutionButtonListeners_question3(button) {
  button.addEventListener('click', function() {
    // Define the correct answer
    const correctAnswer = 'A';

    // Get the selected answer
    const selectedAnswer = document.querySelector('input[name="sdwanAlgorithm"]:checked')?.value;

    // Show correct/incorrect styling for each option
    document.querySelectorAll('input[name="sdwanAlgorithm"]').forEach(input => {
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
    const solutionInfoElement = document.getElementById('solutionInfo_question3');
    if (solutionInfoElement) {
      if (selectedAnswer === correctAnswer) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if the answer is correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question3');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
        
        // Show user's answer if incorrect
        const yourAnswerElement = document.getElementById('yourAnswer_question3');
        if (yourAnswerElement) {
          document.getElementById('yourAnswerOptionA_3').textContent = `A. All traffic from a source IP to a destination IP is sent to the same interface: ${selectedAnswer === 'A' ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionB_3').textContent = `B. Traffic is sent to the link with the lowest latency: ${selectedAnswer === 'B' ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionC_3').textContent = `C. Traffic is distributed based on the number of sessions through each interface: ${selectedAnswer === 'C' ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionD_3').textContent = `D. All traffic from a source IP is sent to the same interface: ${selectedAnswer === 'D' ? 'Selected' : 'Not Selected'}`;
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
    attachSolutionButtonListeners_question3(button);
  });
});
