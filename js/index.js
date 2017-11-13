$('.form').find('input, textarea').on('keyup blur focus', function (e) {

  var $this = $(this),
  label = $this.prev('label');

  if (e.type === 'keyup') {
    if ($this.val() === '') {
      label.removeClass('active highlight');
    } else {
      label.addClass('active highlight');
    }
  } else if (e.type === 'blur') {
    if( $this.val() === '' ) {
      label.removeClass('active highlight');
    } else {
      label.removeClass('highlight');
    }
  } else if (e.type === 'focus') {

    if( $this.val() === '' ) {
      label.removeClass('highlight');
    }
    else if( $this.val() !== '' ) {
      label.addClass('highlight');
    }
  }

});

$('.tab a').on('click', function (e) {

  e.preventDefault();
  console.log("naber");

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  target = $(this).attr('href');
  $('.tab-content > div').not(target).hide();

  $(target).fadeIn(600);

});


$('.form').on('submit',function( e ) {
  e. preventDefault();
  console.log("Started");
  $(this).parent().addClass('active');
  var xemail = $.trim($("input[type='email']").val());
  console.log("email" ,xemail);
  var xpassword = $.trim($("input[type='password']").val());
  console.log("password" ,xpassword);

  // var xemailString = "\"" +"email" +"\"" +"\:" +"\"" +xemail +"\"";
  // var xpasswordString = "\"" +"password" +"\"" +"\:" +"\"" +xpassword +"\"";
  var errorText ="SUCCESS";
  var xdata = JSON.stringify({
    "email": xemail,
    "password": xpassword

  });
//  var options = {
//   key  : fs.readFileSync('key.pem'),
//   cert : fs.readFileSync('cert.pem')
//};

//var fs = require("fs");
//cert : fs.readFileSync('cert.pem');

//  var url = "https://api-v3.mimik360.com/api/oauth/v1/users/";
var url = "https://52.34.122.227:8000/";
  fetch(url, {
    method: 'post',
    headers: {
      'Content-Type':  "application/json"
    },
    credentials: 'include',
    body: xdata,
  })
.then(function(response) {
  if (response.status<200 || response.status > 300) {
    console.log("Response HTTP Error : " + response.status + " Text" + response.statusText);
    switch (response.status) {
    case 400:
        errorText = "Email format is incorrect or password is short then 6 characters. ";
        break;
    case 405:
        errorText = "Email crated but not confirmed.";
        break;
    case 401:
        errorText = "System Error. Unauthorized security token used.";
        break;
    case 409:
        errorText = " Email already registered.";
        break;
    case 404:
        errorText = "System Error. Page can not be found.";
        break;
    default:
        errorText = "System Erorr. Error code " +response.status;
        break;
  }
    location.reload();
    alert("Registration failed. " +errorText );
  }
  else {
    console.log("ok");
    window.location.replace("./confirm.html");
  }
  }).catch(function(error) {
        console.log("Catched an Error");
        location.reload();
        console.log(error);
  });
});
