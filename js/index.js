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
  console.log("email" ,xpassword);

// var xemailString = "\"" +"email" +"\"" +"\:" +"\"" +xemail +"\"";
// var xpasswordString = "\"" +"password" +"\"" +"\:" +"\"" +xpassword +"\"";

  var data = JSON.stringify({
    "email": xemail,
    "password": xpassword
  });

//var data = JSON.stringify({
//  "email": "ss@hotmail.com",
//  "password": "Canavar123"
//});

  var xhr = new XMLHttpRequest();
  var xresult = null;
  xhr.withCredentials = true;

  xhr.open("POST", "https://api-v3.mimik360.com/api/oauth/v1/users/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InJlYWQ6c3lzdGVtIHJlYWQ6Y3VzdG9tZXJzIGNyZWF0ZTpjdXN0b21lciBkZWxldGU6Y3VzdG9tZXIgdXBkYXRlOmN1c3RvbWVyIHJlYWQ6Y2xpZW50cyBjcmVhdGU6Y2xpZW50IHJlYWQ6Y2xpZW50IGRlbGV0ZTpjbGllbnQgdXBkYXRlOmNsaWVudCBhZGQ6bWVtYmVyIHJlbW92ZTptZW1iZXIgdXBkYXRlOm1lbWJlciByZWFkOm1lbWJlckxpc3QiLCJpYXQiOjE1MDkxMjgwNTgsImV4cCI6MTUwOTIxNDQ1OCwiYXVkIjoiaHR0cHM6Ly9tc3QtZGV2MS5taW1pa2Rldi5jb20vbVNUL3YxL2NsaWVudHMvR2VuZXJpYy1tU1QiLCJpc3MiOiJodHRwczovL21zdC1kZXYxLm1pbWlrZGV2LmNvbS9tU1QvdjEvb2F1dGgvdG9rZW4iLCJzdWIiOiJyb290QGNsaWVudHMifQ.I12Gpk8AwoaoRWlzFAmpirQ0TcNRktd2DJrALpU2XqA");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.setRequestHeader("postman-token", "762af8b5-c21b-c4e0-1a15-02cae602b0fb");

  xhr.send(data);
  xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
        xresult = this.responseText;
      }
    });

if (xresult !== null) {
  location.reload();
} else {
  alert("USERID and PASSWORD SUCCESFULLY CREATED. Please check your email and confirm the notification before using edgeSDk Application");
    window.location.replace("https://dropbox.com");
  }

});
