window.Questions = {};

Questions.setupYesButtons = function() {
    $(".questions-list #button-yes").click(function() {
        var currentQuestion = $(this).parents("li");
        var nextItem;

        hideQuestion(currentQuestion);
        if (currentQuestion.next().length) {
            nextItem = currentQuestion.next();
        }  else {
            nextItem = $(".keep-message");
        }
        displayQuestionOrResult(nextItem);
    });
};

Questions.setupNoButtons = function() {
    $(".questions-list #button-no").click(function() {
        var currentQuestion = $(this).parents("li");

        hideQuestion(currentQuestion);
        displayQuestionOrResult($(".toss-message"));
    });
};

hideQuestion = function(element) {
    element.removeClass("active");
};

displayQuestionOrResult = function(element) {
    element.addClass("active");
};

$(function() {
    Questions.setupYesButtons();
    Questions.setupNoButtons();
});
