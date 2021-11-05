$(document).ready(function() {
  if ($('.JS--contact-form').length !== 0) {
    $('.JS--contact-form').each(function () { 
      $(this).submit(function(e) {
        e.preventDefault();
        var name = $(this).find('#name').val();
        var email = $(this).find('#email').val();
        var tel = $(this).find('#tel').val();
     
        $(this).find(".error").remove();
        $(this).find('#name').removeClass('invalid');
        $(this).find('#tel').removeClass('invalid');
        $(this).find('#email').removeClass('invalid');
     
        if (name.length< 1) {
          $(this).find('#name').after('<span class="error">This field is required</span>');
          $(this).find('#name').addClass('invalid');
        }
        if (tel.length< 1) {
          $(this).find('#tel').after('<span class="error">This field is required</span>');
          $(this).find('#tel').addClass('invalid');
        }
        if (email.length< 1) {
          $(this).find('#email').after('<span class="error">This field is required</span>');
          $(this).find('#email').addClass('invalid');
        } else {
          var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          var validEmail = regEx.test(email);
          if (!validEmail) {
            $(this).find('#email').after('<span class="error">Enter a valid email</span>');
            $(this).find('#email').addClass('invalid');
          }
        }
      });
    })}
  });
