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
    url: "https://docs.google.com/forms/hoge/formResponse",
    data: {"entry.123456789": name},
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
