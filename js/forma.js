//forma
// 1.login
  function proveraReg (){
     var ime = document.querySelector("#regUsr").value.trim();
     var lozinka = document.querySelector("#rePsw").value.trim();
     var lozinkaPonovo = document.querySelector("#regPsw1").value.trim();

     var imeGreska = document.querySelector("#usrGreska");
     var lozinkaGreska = document.querySelector("#pswGreska");
     var lozinkaPonovoGreska = document.querySelector("#psw1Greska");

     var reUsr=/^[a-z]{5,15}[\d]{1,5}$/;
     var rePsw=/^[\d\w]{4,13}$/;

     if(ime==""){
        imeGreska.innerHTML="Polje za ime je obavezno.";
     }else if(!reUsr.test(ime)){
        imeGreska.innerHTML="Ime nije u dobrom formatu.";
     }else{
        imeGreska.innerHTML="";
     }

     if(lozinka==""){
        lozinkaGreska.innerHTML="Polje za lozinku je obavezno.";
     }else if(!rePsw.test(lozinka)){
      	lozinkaGreska.innerHTML="Lozinka nije u dobrom formatu.";
     }else{
      	lozinkaGreska.innerHTML="";
    }
     if(lozinkaPonovo!=lozinka){
        lozinkaPonovoGreska.innerHTML="Ponovite lozinku.";
  	 }else if(lozinkaPonovo==""){
        lozinkaPonovoGreska.innerHTML="Ponovite lozinku.";
     }else{
        lozinkaPonovoGreska.innerHTML="";
    }
  }
// 2. Register
  function proveraReg2 (){
     var ime2 = document.querySelector("#regUsr2").value.trim();
     var lozinka2 = document.querySelector("#rePsw2").value.trim();
     var lozinkaPonovo2 = document.querySelector("#regPsw2").value.trim();
     var email = document.querySelector("#email").value.trim();

     var imeGreska2 = document.querySelector("#usrGreska2");
     var lozinkaGreska2 = document.querySelector("#pswGreska2");
     var lozinkaPonovoGreska2 = document.querySelector("#psw1Greska2");
     var emailGreska = document.querySelector("#emailGreska");

     var reUsr2=/^[a-z]{5,15}[\d]{1,5}$/;
     var rePsw2=/^[\d\w]{4,13}$/;
     var reEmail=/^\w+([\.-]?\w+)*\@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

     if(ime2==""){
        imeGreska2.innerHTML="Polje za ime je obavezno.";
     }else if(!reUsr2.test(ime2)){
        imeGreska2.innerHTML="Ime nije u dobrom formatu.";
     }else{
        imeGreska2.innerHTML="";
     }

     if(lozinka2==""){
        lozinkaGreska2.innerHTML="Polje za lozinku je obavezno.";
     }else if(!rePsw2.test(lozinka2)){
      	lozinkaGreska2.innerHTML="Lozinka nije u dobrom formatu.";
     }else{
      	lozinkaGreska2.innerHTML="";
    }
     if(lozinkaPonovo2!=lozinka2){
        lozinkaPonovoGreska2.innerHTML="Ponovite lozinku.";
  	 }else if(lozinkaPonovo2==""){
        lozinkaPonovoGreska2.innerHTML="Ponovite lozinku.";
     }else{
        lozinkaPonovoGreska2.innerHTML="";
    }
    if(email==""){
			emailGreska.innerHTML="Email nije u dobrom formatu.";
		}else if(!reEmail.test(email)){
			emailGreska.innerHTML="Polje za mail je obavezno.";
		}else{
			emailGreska.innerHTML="";
		}
  }
