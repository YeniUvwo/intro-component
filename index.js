$(document).ready(function() {

  $(document).on("click", ".btn", function(){
    $(this).addClass("clicked");
  });

  $('.btn').click(function(e) {
      // e.preventDefault();

      // $('.form-control').removeClass('error');
      // $('.error-message').hide();

    var firstName = $("#fName").val().trim();
    if (firstName === '') {
      $(".fNameMessage").show();
      $("#fName").addClass('error');
    }

    var lastName = $("#lName").val().trim();
    if (lastName === '') {
      $(".lNameMessage").show();
      $("#lName").addClass('error');
    }

    var email = $("#email").val().trim();
    if (email === '') {
      $(".emailMessage").show();
      $("#email").addClass('error');
    } else if (!validateEmail(email)) {
        $('.emailMessage').text('Looks like this is not an email');
        $('.emailMessage').show();
        $('#email').addClass('error');
    }

    var password = $("#password").val().trim();
    if (password === '') {
      $(".passwordMessage").show();
      $("#password").addClass('error');
    }
  });

    $('.form-control').focus(function() {
      $(this).removeClass('error');
      $(this).siblings('.error-message').hide();
    }); 

    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
})
  
  
  
  