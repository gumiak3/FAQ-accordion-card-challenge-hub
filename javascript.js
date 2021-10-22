$(function() {
    var question1 = $('#question1');
    var answer1 = $('#answer1');
    var img1 = $('#img1');
    var header1 = $('#header1');

    var question2 = $('#question2');
    var answer2 = $('#answer2');
    var img2 = $('#img2');
    var header2 = $('#header2');

    var question3 = $('#question3');
    var answer3 = $('#answer3');
    var img3 = $('#img3');
    var header3 = $('#header3');

    var question4 = $('#question4');
    var answer4 = $('#answer4');
    var img4 = $('#img4');
    var header4 = $('#header4');

    var question5 = $('#question5');
    var answer5 = $('#answer5');
    var img5 = $('#img5');
    var header5 = $('#header5');
    question1.click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            answer1.removeClass('active');
            answer1.slideUp();
            header1.removeClass('active');
            img1.removeClass('active');
            img1.addClass('back');

        }else{
            answer1.removeClass('back');
            img1.removeClass('back');
            answer1.addClass('active');
            answer1.slideDown();
            $(this).addClass('active');
            img1.addClass('active');
            header1.addClass('active');
        }
    });
    question2.click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            answer2.removeClass('active');
            answer2.slideUp();
            img2.removeClass('active');
            header2.removeClass('active');
            img2.addClass('back');
        }else{
            img2.removeClass('back');
            answer2.addClass('active');
            answer2.slideDown();
            $(this).addClass('active');
            img2.addClass('active');
            header2.addClass('active');
        }  
    });
    question3.click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            answer3.removeClass('active');
            answer3.slideUp();
            img3.removeClass('active');
            header3.removeClass('active');
            img3.addClass('back');
        }else{
            img3.removeClass('back');
            answer3.addClass('active');
            answer3.slideDown();
            $(this).addClass('active');
            img3.addClass('active');
            header3.addClass('active');
        }  
    });
    question4.click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            answer4.removeClass('active');
            answer4.slideUp();
            img4.removeClass('active');
            header4.removeClass('active');
            img4.addClass('back');
        }else{
            img4.removeClass('back');
            answer4.addClass('active');
            answer4.slideDown();
            $(this).addClass('active');
            img4.addClass('active');
            header4.addClass('active');
        }  
    });
    question5.click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            answer5.removeClass('active');
            answer5.slideUp();
            img5.removeClass('active');
            header5.removeClass('active');
            img5.addClass('back');
        }else{
            img5.removeClass('back');
            answer5.addClass('active');
            answer5.slideDown();
            $(this).addClass('active');
            img5.addClass('active');
            header5.addClass('active');
        }  
    });
});