var cardsblock = document.querySelector("#cards");
var output = "";

for (let i=0; i<objekat.length; i++){
   output += '<div class="filter Allc column ' + objekat[i].klasa + ' is-narrow-mobile is-narrow-tablet is-narrow-fullhd is-narrow-widescreen">';
   output += '<div class="card">';
   output += '<div class="card-image">';
   output += '<img src="'+objekat[i].slika +'" alt="'+objekat[i].ime+'">';
   output += '</div>';
   output += '<div class="card-content has-text-centered">';
   output += '<h1 class="title is-size-6">'+objekat[i].ime+'</h1>';
   output += '<span class="tag is-link">'+objekat[i].broj+'</span>';
   output += '<span class="tag is-link">'+objekat[i].tip+'</span>';
   output += '<span class="tag is-primary price is-rounded">'+objekat[i].cena+'<i class="far fa-gem"></i></span>';
   output += '</div>';
   output += '<div class="card-content has-text-centered"> <button type="button" href="#" data-target="#cardShow" class="showCards button is-uppercase is-info is-inverted is-small has-text-weight-bold">show</button> <button class="kupi button cart is-uppercase is-primary is-inverted is-small has-text-weight-bold" href="#">buy</button></div>';
   output += '</div></div>';
}

cardsblock.innerHTML = output;
