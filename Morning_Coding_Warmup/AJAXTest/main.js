'use strict';

$(document).ready(init);

var pokemon;

function init() {
  console.log('ok!');
  $('#get').click(getClicked);

  $.ajax("http://pokeapi.co/api/v1/pokedex/1/")
  .done(function(data){
    pokemon = data.pokemon;
  })
  .fail(function(error){
    console.log(error);
  });
}

function getClicked(){
  var pokemonName = $('#pokemon').val();
  var selectedPokemon = pokemon.filter(function(ob){
    return ob.name === pokemonName;
  })[0];

  $.ajax("http://pokeapi.co/" + selectedPokemon.resource_uri) // request info for one pokemon
  .done(function(pokemon){ // data received for pokemon
    $.get("http://pokeapi.co/" + pokemon.sprites[0].resource_uri) // request image info
    .done(function(data){ // image info received
      drawPokemon(pokemon, "http://pokeapi.co" + data.image);
    });
  });
}

function drawPokemon(pokemon, imgUrl){
  var $card = $('<div>').addClass('card');
  var $image = $('<img>').attr('src', imgUrl);
  var $name = $('<div>').text(pokemon.name);
  var $id = $('<div>').text('ID: ' + pokemon.national_id);
  var $attack = $('<div>').text('Attack: ' + pokemon.attack);
  var $defense = $('<div>').text('Defense: ' + pokemon.defense);
  $card.append($image, $name, $id, $attack, $defense);
  $('#holder').append($card);
}