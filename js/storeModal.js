var buttons = document.querySelectorAll('.modal-toggle');
var modals = document.querySelectorAll('.modal-window');

for(let i=0; i < buttons.length; i++){
  buttons[i].addEventListener('click', function(){
    var id = document.querySelector(this.getAttribute('data-target'));
    id.style.display = 'block';
  });
}

var closeModalButtons = document.querySelectorAll('.close-modal');

for(let i=0; i < closeModalButtons.length; i++){
  closeModalButtons[i].addEventListener('click', function(){
    for(let j=0; j < modals.length; j++){
     modals[j].style.display = 'none';
  }});
}

window.addEventListener('click', function(e){
  for(let i=0; i< modals.length; i++){
    if(e.target == modals[i]){
      modals[i].style.display = 'none';
    }
  }
});
