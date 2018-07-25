$(function(){
  function buildHTML(message){
    var img = message.image ? `<img src="${ message.image }">` : "";

    var html = `<div class="message-contents__message-box">
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
      console.log(html)
      $('.message-contents__message-box').append(html);
      $('.form__message').val('')
      $('.form__submit').prop('disabled', false);
      $('.message-contents').animate({scrollTop: $('.message-contents')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
    })
  });
});
