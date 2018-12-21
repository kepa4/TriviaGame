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
    var timeout;
    var resultTimeout;
    createQuestion(index);

    function createQuestion(answer) {
      clearInterval(interval);
      time = 20;
      var randomAnswers = [
        `<h3 id="incorrect" >${
          questions[answer].option2
        }</h3><h3 id="incorrect">${
          questions[answer].option1
        }</h3><h3 id="correct">${
          questions[answer].correct
        }</h3><h3 id="incorrect">${questions[answer].option3}</h3>`,
        `<h3 id="incorrect">${questions[answer].option1}</h3><h3 id="correct">${
          questions[answer].correct
        }</h3><h3 id="incorrect">${
          questions[answer].option2
        }</h3><h3 id="incorrect">${questions[answer].option3}</h3>`,
        `<h3 id="correct">${questions[answer].correct}</h3><h3 id="incorrect">${
          questions[answer].option1
        }</h3><h3 id="incorrect">${
          questions[answer].option2
        }</h3><h3 id="incorrect">${questions[answer].option3}</h3>`,
        `<h3 id="incorrect">${
          questions[answer].option2
        }</h3><h3 id="incorrect">${
          questions[answer].option3
        }</h3><h3 id="incorrect">${
          questions[answer].option1
        }</h3><h3 id="correct">${questions[answer].correct}</h3>`,
      ];
      $('answers').empty();
      $('#time').append(`<h2>${time}</h2>`);
      $('#question').empty();
      $('#question').append(`<h2>${questions[index].question}</h2>`);
      $('#answers').append(
        randomAnswers[Math.floor(Math.random() * randomAnswers.length)],
      );
      interval = setInterval(function() {
        time--;
        $('#time').empty();
        $('#time').append(`<h2>${time}</h2>`);
      }, 1000);
      timeout = setTimeout(showFail, 20000);
    }

    function showFail() {
      clearInterval(interval);
      $('#time').empty();
      $('#question').empty();
      $('#answers').empty();
      $('#question').append(
        `<h2>Sorry but you didnt answer in time So you got it wrong</h2>`,
      );
      miss++;
      index++;
      setTimeout(function() {
        createQuestion(index);
      }, 5000);
    }

    $('h3').on('click', function(e) {
      if (e.target.id === 'incorrect') {
        clearInterval(interval);
        $('#time').empty();
        $('#question').empty();
        $('#answers').empty();
        $('#question').append(`<h2>Sorry you got the answer Wrong</h2>`);
        index++;
        miss++;
        setTimeout(function() {
          createQuestion(index);
        }, 5000);
      } else {
        clearInterval(interval);
        $('#time').empty();
        $('#question').empty();
        $('#answers').empty();
        $('#question').append(`<h2>you got the answer right</h2>`);
        index++;
        pass++;
        setTimeout(function() {
          createQuestion(index);
        }, 5000);
      }
    });
  }
});
// Most of the logic is present in the code
// For some reason im having trouble with the clearing the intervals
// questions are cycled through, but get all weird 
