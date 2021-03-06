'use strict'

const images = [{

    image: 'images/animal.jpg'
  },
  {
    image: 'images/frog.jpg'
  },
  {

    image: 'images/iguana.jpg'
  },
  {

    image: 'images/pappag.jpeg'
  },
  {

    image: 'images/jellyfish.jpg'
  },
  {

    image: 'images/jellyfish-blue.jpg'
  },
  {

    image: 'images/fish.jpg'
  },
  {

    image: 'images/toucan.jpg'
  }

];


//get big container in html
const button = document.querySelector('.button');
const gameBoard = document.querySelector('.game-board');

//loop through images array into div .game-board
for (let i = 0; i < images.length; i++) {
  gameBoard.innerHTML += createCards(images, i);
}

//spread operator
let idArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7]
let first, second;
let isFlipped, disable = false;
const cards = [...document.querySelectorAll('.card')];
const flippedCards = [...document.querySelectorAll('.flipped')];

shuffle(idArray);

//restart game
reload();
button.addEventListener('click', restartGame);
restartGame();