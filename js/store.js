let toggle = document.querySelector('.navbar-burger'),
sidebar = document.querySelector('.sidebar');
window.onload = () => {toggle.addEventListener('click', showSideBar),
  document.getElementById("All").checked = true;
  }
  let showSideBar = () => {
          sidebar.classList.toggle('sidebar-active'), toggle.classList.toggle('is-active')
      };

  $(document).ready( () => {
  setTimeout(() => {
    alertify.prompt('Steam Cards Survey', 'What is your Steam level?', '', (evt, value) => {
      if (value != "") {
        alertify.notify('Thank you :)  ', 'customSuccess', 2)
      } else {
        alertify.notify('Ah :( okay, next time', 'customDanger', 2)
      }

    }, () => {
      alertify.notify('Ah :( okay, next time', 'customDanger', 2)
    })
  }, 2000)})

// search filter


// dinamicki Filter
var category = [
  {
    all : "All",
    normal : "Normal",
    foil : "Foil",
    rare : "Rare"
  }
]
ispisCategory = function(){
  var ul = "<ul>";
      for (let i=0; i<category.length; i++){
          ul += `<li><input type="radio" name="genre" class=" mt checkboxGenre" id="All" value="All"/> ${category[i].all}</li>`;
          ul += `<li><input type="radio" name="genre" class=" mt checkboxGenre" id="Normal" value="Normal"/> ${category[i].normal}</li>`;
          ul += `<li><input type="radio" name="genre" class=" mt checkboxGenre" id="Foil" value="Foil"/> ${category[i].foil}</li>`;
          ul += `<li><input type="radio" name="genre" class=" mt checkboxGenre" id="Rare" value="Rare"/> ${category[i].rare}</li>`;
}
 ul += "</ul>";

   document.querySelector("#category").innerHTML = ul;
 }
 ispisCategory();



// filter
$('#All').click(function(){
  if(this.checked){
    $('.normalc').show(500), $('.foilc').show(500), $('.rarec').show(500);
  }
  else{
    $('.filter').hide(500);
  }
});
$('#Normal').click(function(){
    if(this.checked){
      $('.normalc').show(500), $('.foilc').hide(500), $('.rarec').hide(500);
    }
    else{
      $('.filter').show(500);
    }
});
$('#Foil').click(function(){
    if(this.checked){
      $('.foilc').show(500), $('.normalc').hide(500), $('.rarec').hide(500);
    }
    else{
      $('.filter').show(500);
    }
});
$('#Rare').click(function(){
    if(this.checked){
      $('.rarec').show(500), $('.foilc').hide(500), $('.normalc').hide(500);
    }
    else{
      $('.filter').show(500);
    }
});
