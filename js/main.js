let arrowToTop = document.querySelector('.arrowToTop'),
    sidebar = document.querySelector('.sidebar'),
    toggle = document.querySelector('.navbar-burger'),
    newsletter = document.querySelector('#newsletter'),
    subscribeBtn = document.querySelector('#subscribeBtn');

    window.onload = function(){toggle.addEventListener('click', showSideBar), newsletter.addEventListener('blur', newsletterValidatation),
    subscribeBtn.addEventListener('click', newsletterValidatation);}
    let showSideBar = () => {
            sidebar.classList.toggle('sidebar-active'), toggle.classList.toggle('is-active')
        },
    newsletterValidatation = function () {
        let a = newsletter.value,
            b = /^[a-zšđžćč]{4,}(\.)?[a-zšđžćč]{4,}([0-9]{0,5})?\@((gmail)|(outlook)|(msn)|(live)|(hotmail)|(yahoo)|\w)\.com$/,
            c = document.querySelector('#envelope');
        b.test(a) ? c.classList.add('icon-success') : c.classList.add('icon-danger')
    };

// slajder
var slajderIndex = 1;
showSlides(slajderIndex);
// Next/previous kontrole
function plusSlides(n) {
  showSlides(slajderIndex += n);
}

function trenutniSlajd(n) {
  showSlides(slajderIndex = n);
}

function showSlides(n) {
  var i;
  var slajder = document.getElementsByClassName("mySlajder");
  var dots = document.getElementsByClassName("dot");
  if (n > slajder.length) {slajderIndex = 1}
  if (n < 1) {slajderIndex = slajder.length}
  for (i = 0; i < slajder.length; i++) {
      slajder[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slajder[slajderIndex-1].style.display = "block";
  dots[slajderIndex-1].className += " active";
}

// animacija pre ucitavanje strane
