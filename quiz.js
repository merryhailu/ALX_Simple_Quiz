

function checkAnswer() {
    const correctAnswer = 4;
    const selectedRadio = document.querySelector('input[type="radio"][name="quiz"]:checked');
    const userAnswer = selectedRadio.value;

    if (userAnswer === correctAnswer) {

        document.getElementById('feedback').textContent = "Correct! Well Done.";
    }
    else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
};



const submitButton = document.getElementById('submit-answer');

submitButton.addEventListener('click', checkAnswer);
