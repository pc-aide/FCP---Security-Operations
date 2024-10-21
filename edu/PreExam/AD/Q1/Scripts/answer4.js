// Function to attach event listeners to the solution button for question 4
function attachSolutionButtonListeners_question4(button) {
  button.addEventListener('click', function() {
    // Define the correct answer
    const correctAnswer = 'A';

    // Get the selected answer
    const selectedAnswer = document.querySelector('input[name="ipsecTemplate"]:checked');

    // Show correct/incorrect styling for the selected option
    const options = document.querySelectorAll('input[name="ipsecTemplate"]');
    options.forEach(input => {
      if (input.checked) {
        if (input.value === correctAnswer) {
          input.parentElement.classList.add('highlight');
        } else {
          input.parentElement.classList.add('incorrect');
        }
      }
    });

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question4');
    if (solutionInfoElement) {
      if (selectedAnswer && selectedAnswer.value === correctAnswer) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if the answer is correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswerElement = document.getElementById('correctAnswers_question4');
        if (correctAnswerElement) {
          correctAnswerElement.style.display = 'block';
        }

        // Show user's answer if incorrect
        const yourAnswerElement = document.getElementById('yourAnswer_question4');
        if (yourAnswerElement) {
          document.getElementById('yourAnswerOptionA_4').textContent = `A. Remote Access: ${selectedAnswer ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionB_4').textContent = `B. Site to Site: ${document.getElementById('optionB_4').checked ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionC_4').textContent = `C. Dial up User: ${document.getElementById('optionC_4').checked ? 'Selected' : 'Not Selected'}`;
          document.getElementById('yourAnswerOptionD_4').textContent = `D. Hub-and-Spoke: ${document.getElementById('optionD_4').checked ? 'Selected' : 'Not Selected'}`;
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
    attachSolutionButtonListeners_question4(button);
  });
});
