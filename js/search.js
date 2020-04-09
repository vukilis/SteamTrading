// search cards
var searchField = document.querySelector('#searchField');

searchField.addEventListener('keyup', function(){
  var text = this.value.toUpperCase();
  var inner = document.querySelectorAll('.title');
  var card = document.querySelectorAll('.card');

  for(var i=0; i < inner.length; i++){
    if(inner[i].innerHTML.toUpperCase().indexOf(text) > -1){
      card[i].style.display = "";
    }else{
      card[i].style.display = 'none';
    }
  }
});

// buy korpica
var countVal = document.querySelector('.inner-badge');
var buyButtons = document.querySelectorAll('.kupi');

for(let i = 0; i < buyButtons.length; i++){
  buyButtons[i].addEventListener('click', function(){
    var num = Number(countVal.innerHTML);
    num++;
    countVal.innerHTML = num;
  });
}
