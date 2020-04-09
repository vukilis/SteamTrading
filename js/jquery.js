$(document).ready(function() {
  var scrollTop = $("#myBtn");
  $(window).scroll(function() {
    var topPos = $(this).scrollTop();

    // prikaz
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }

  });

  // to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  });

// scroll
  var services = $("#servicesSection").position();
  var about = $("#aboutSection").position();
  var contact = $("#contactSection").position();

  $('#services').click(function() {
    $('html, body').animate({
      scrollTop: services.top
    }, 500);
    return false;
  });
  $('#about').click(function() {
    $('html, body').animate({
      scrollTop: about.top
    }, 500);
    return false;
  });
  $('#contactLink').click(function() {
    $('html, body').animate({
      scrollTop: contact.top
    }, 500);
    return false;
  });
});

// input fokus
$(document).ready(
  function(){
     $("#searchField, .input, #username, #username2, #password, #password2, #email").focus(
       function(){
         $(this).addClass('inputIn');
       });
     $("#searchField, .input, #username, #username2, #password, #password2, #email").blur(
       function(){
         $(this).removeClass('inputIn');
       });
});

// hover cards
$(".card").hover(
  function(){
    $(this).addClass('cardhover');
  },
  function(){
    $(this).removeClass('cardhover');
  });

// regularni za form
// 1. Login
$('#prijava').click(function(){
		var reUsr= new RegExp(/\b[a-z]{4,15}[\d]{1,5}\b/);
		var usr=$('#username').val().trim();
		var usrGreska=$('#logKorImeGreska');
		var psw=$('#password').val().trim();
		var rePsw=new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
		var pswGreska=$('#logLozGreska');
		if(usr==""){
			usrGreska.html('Unesite korisnicko ime.');

		}
		else if(!reUsr.test(usr)){
			usrGreska.html('Ponovo unesite ime.');
		}
		else{
			usrGreska.html('');
		}
		if(psw==""){
			pswGreska.html('Unesite lozinku.');
		}
		else if(!rePsw.test(psw)){
			pswGreska.html('Ponovo unesite lozinku.');
		}
		else{
			pswGreska.html('');
		}

	});
// 2. Register
  $('#prijava2').click(function(){
  		var reUsr2= new RegExp(/\b[a-z]{4,15}[\d]{1,5}\b/);
  		var usr2=$('#username2').val().trim();
  		var usrGreska2=$('#logKorImeGreska2');
  		var rePsw2=new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
      var psw2=$('#password2').val().trim();
  		var pswGreska2=$('#logLozGreska2');
      var reEmail=/^\w+([\.-]?\w+)*\@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      var email = $("#email").val().trim();
      var emailGreska = $("#emailGreska");
  		if(usr2==""){
  			usrGreska2.html('Unesite korisnicko ime.');
  		}
  		else if(!reUsr2.test(usr2)){
  			usrGreska2.html('Ponovo unesite ime.');
  		}
  		else{
  			usrGreska2.html('');
  		}
  		if(psw2==""){
  			pswGreska2.html('Unesite lozinku.');
  		}
  		else if(!rePsw2.test(psw2)){
  			pswGreska2.html('Ponovo unesite lozinku.');
  		}
  		else{
  			pswGreska2.html('');
  		}
      if(email==""){
  			emailGreska.html('Unesite email.');
  		}
  		else if(!reEmail.test(email)){
  			emailGreska.html('Email nije u dobrom formatu.');
  		}
  		else{
  			emailGreska.html('');
  		}

  	});


    $('.btn').on('click', function() {

    $('.btn').trigger('click');
})
