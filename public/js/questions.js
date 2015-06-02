window.Questions = {};

Questions.setupYesButtons = function() {
    $(".questions-list #button-yes").click(function() {
        var currentQuestion = $(this).parents("li");

        hide_question(currentQuestion);
        display_question($(".questions-list li")[$(".questions-list li").index(currentQuestion) + 1]);
    });
};

hide_question = function(element) {
    $(element).removeClass("active");
};

display_question = function(element) {
    $(element).addClass("active");
};

$(function() {
    Questions.setupYesButtons();
});
