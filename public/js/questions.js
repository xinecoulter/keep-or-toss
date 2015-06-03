window.Questions = {};

Questions.setupStartButtons = function() {
    $("button#button-start").click(function() {
        hideItem($(".keep-message"));
        hideItem($(".toss-message"));
        hideItem($(this).parents(".button-start-container"));
        displayItem($(".questions-list li").first());
    });
};

Questions.setupYesButtons = function() {
    $(".questions-list #button-yes").click(function() {
        var currentQuestion = $(this).parents("li");
        var nextItem;

        hideItem(currentQuestion);
        if (currentQuestion.next().length) {
            nextItem = currentQuestion.next();
        }  else {
            nextItem = $(".keep-message");
            displayItem($("#button-restart-container"));
        }
        displayItem(nextItem);
    });
};

Questions.setupNoButtons = function() {
    $(".questions-list #button-no").click(function() {
        var currentQuestion = $(this).parents("li");

        hideItem(currentQuestion);
        displayItem($(".toss-message"));
        displayItem($("#button-restart-container"));
    });
};

hideItem = function(element) {
    element.removeClass("active");
};

displayItem = function(element) {
    element.addClass("active");
};

$(function() {
    Questions.setupStartButtons();
    Questions.setupYesButtons();
    Questions.setupNoButtons();
});
