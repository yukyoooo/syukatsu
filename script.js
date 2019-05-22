$(function(){
  //この中にjQueryを書く

  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('+');

    } else {
      $answer.addClass('open');
      // slideDownメソッドを用いて、$answerを表示してください
      $answer.slideDown();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('-');

    }
  });

  
    
  $.ajax({
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfBWkbWmjhItYthNccyYeLbaVQ9LHMnJ1keqyr9ygfOCk35gw/formResponse",
    data: {"entry.756226874": text-form1,"entry.6154243": text-form2,"entry.1441632183": text-form3},
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function() {
        //Success message
      },
      200: function() {
        //Success Message
      }
    }
  })

  });
