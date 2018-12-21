import {questions} from './questions.js';
$(document).ready(function() {
  var index = 0;
  startQuiz();

  function startQuiz() {
    var time = 20;
    var interval;
    var index = 0;
    var miss = 0;
    var pass = 0;
    createQuestion(index);

    function createQuestion(answer) {
      var randomAnswers = [
        `<h3 id="answer">${questions[answer].option2}</h3><h3 id="answer">${questions[answer].option1
        }</h3><h3 id="answer">${
          questions[answer].correct
        }</h3><h3 id="answer">${questions[answer].option3}</h3>`,
        `<h3 id="answer">${questions[answer].option1}</h3><h3 id="answer">${
          questions[answer].correct
        }</h3><h3 id="answer">${
          questions[answer].option2
        }</h3><h3 id="answer">${questions[answer].option3}</h3>`,
        `<h3 id="answer">${questions[answer].correct}</h3><h3 id="answer">${
          questions[answer].option1
        }</h3><h3 id="answer">${
          questions[answer].option2
        }</h3><h3 id="answer">${questions[answer].option2}</h3>`,
        `<h3 id="answer">${questions[answer].option2}</h3><h3 id="answer">${
          questions[answer].option3
        }</h3><h3 id="answer">${
          questions[answer].option1
        }</h3><h3 id="answer">${questions[answer].correct}</h3>`,
      ];

      $('#time').append(`<h3>${time}</h3>`);
      $('#question').empty();
      $('#question').append(`<h3>${questions[index].question}</h3>`);
      $('#answers').append(
        randomAnswers[Math.floor(Math.random() * randomAnswers.length)],
      );
      startTimer();
      setTimeout(showFail, 20000);
      index++;
    }
    function showFail() {
      clearInterval(interval);
      $('#time').empty();
      $('#question').empty();
      $('#answers').empty();
      $('#body').append(
        `<h2>Sorry but you didnt answer in time So you got it wrong</h2>`,
      );
      miss++;
    }

    function startTimer() {
      interval = setInterval(function() {
        time--;
        $('#time').empty();
        $('#time').append(`<h3>${time}</h3>`);
      }, 1000);
    }
  }
});
