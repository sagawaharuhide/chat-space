$(document).on('turbolinks:load', function(){
  $(function(){
    function buildHTML(message){
      var img = message.image ? `<img src="${ message.image }">` : "";

      var html = `<div class="message-contents__message-box" data-id="${message.id}">
                    <div class="message-contents__message-box__upper-message">
                      <div class="message-name">
                        ${ message.name }
                      </div>
                      <div class="message-date">
                        ${ message.created_at }
                      </div>
                    </div>
                    <div class="message-contents__message-box__lower-message">
                      <div class="message-content">
                        ${ message.content }
                      </div>
                      <div class='message-contents__message-box__lower-message'>
                        ${ img }
                      </div>
                    </div>
                  </div>`
      return html;
    }
    function scroll(){
      $('.message-contents').animate({scrollTop: $('.message-contents')[0].scrollHeight},'fast')
    }
    $('#new_message').on('submit', function(e){
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action');
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(data){
        var html = buildHTML(data);
        if (data.length !== 0){
          $('.message-contents').append(html);
          $('.form__submit').removeAttr('disabled');
          $('#new_message')[0].reset();
          scroll()
        }else{
          $('.form__submit').removeAttr('disabled');
          alert('メッセージを入力してください');
        }
        })
      .fail(function(){
        alert('error');
      })
    });

    var interval = setInterval(update, 5000);
    function update(){
      if (window.location.href.match(/\/groups\/\d+\/messages/)) {
        if($('.message-contents__message-box:last')[0]){
          var message_id = $('.message-contents__message-box:last').data('id');
        }else{
          var message_id = 0
        }
        $.ajax({
          url: location.href,
          type: 'GET',
          data: {
            message: { id: message_id }
          },
          dataType: 'json'
        })
        .done(function(data){
          var insertHTML = '';
          if (data.length !== 0){
            data.forEach(function(data){
              insertHTML += buildHTML(data);
            });
            $('.message-contents').append(insertHTML);
            scroll();
          }
        });
      }
      else{
        clearInterval(interval);
      }
    }
  });
});
