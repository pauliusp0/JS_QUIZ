// variables
// === dom elements
const startBtn = document.querySelector('#startBtn');
const nextBtn = document.querySelector('#nextBtn');
const quizQuestion = document.querySelector('#quizQuestion');
const questionElement = document.querySelector('#question');
const answerBtns = document.querySelector('#answersBtns');
const result = document.querySelector('#result');
const testSkills = document.querySelector('#testSkills');
// logic
let questions = [];
let index;
let score = 0;

// fetching data (questions from data folder) to questions array
fetch('../data/css_questions.json')
  .then((response) => response.json())
  .then((data) => questions.push(...data));
// functions

// starting game (after pressing start button)
const startQuiz = () => {
  startBtn.classList.add('hide');

  quizQuestion.classList.remove('hide');
  // reseting score and index
  if (!result.classList.contains('hide')) {
    result.classList.add('hide');
    score = 0;
  }
  index = 0;
  //   testSkills.classList.add('hide');
  setNextQuestion();
};

// resseting next question button and setting new question
const setNextQuestion = () => {
  resetState();
  showQuestion(questions[index]);
};

// selecting answer by clicking button
const selectAnswer = (e) => {
  let correct = e.target.dataset.correct;

  if (correct) {
    e.target.classList.add('correct');
    let text = e.target.innerText;
    e.target.innerHTML += ` <i class='fas fa-check-circle'></i>`;
    score++;
  } else {
    e.target.classList.add('wrong');
    let text = e.target.innerText;
    e.target.innerHTML += ` <i class='fas fa-times-circle'></i>`;
  }

  Array.from(answerBtns.children).forEach((btn) => (btn.disabled = true));

  if (questions.length > index + 1) {
    nextBtn.classList.remove('hide');
  } else {
    startBtn.innerText = 'Restart Quiz';
    startBtn.classList.remove('hide');

    result.classList.remove('hide');
    if (score == 10)
      result.innerHTML = `<p> Congratulations <i class="fas fa-trophy"></i> You answered all questions
      </p>`;
    if (score < 10)
      result.innerHTML = `<p> You answered  ${score} questions from ${questions.length} 
      </p>`;
    if (score <= 2)
      result.innerHTML = `<p> You answered only ${score} questions from ${questions.length} <i class="fas fa-sad-tear"></i>
      </p>`;

    if (score === 0)
      result.innerHTML = `<p> You didint answer any question <i class="fas fa-sad-tear"></i>
      </p>`;
  }
};

// showing question and answers from questions array
const showQuestion = (question) => {
  questionElement.innerText = question.question;
  testSkills.innerText = `Question ${index + 1} of ${questions.length} `;
  question.answers.forEach((answer) => {
    const button = document.createElement('button');

    button.innerText = answer.text;
    button.classList.add('btn', 'btn-css');

    if (answer.correct) button.dataset.correct = answer.correct;

    button.addEventListener('click', selectAnswer);

    answerBtns.appendChild(button);
  });
};

// showing next question (after clicking next button)
const showNextQuestion = () => {
  index++;
  setNextQuestion();
};

// reseting "Next question" button and answer buttons
const resetState = () => {
  nextBtn.classList.add('hide');
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
};

// events
document.addEventListener('DOMContentLoaded', () => {
  startBtn.style.backgroundColor = 'var(--css-color)';
});

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', showNextQuestion);
