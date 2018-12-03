'use strict'

const images = [{

    image: 'images/cat.jpeg'
  },
  {
    image: 'images/cow.jpeg'
  },
  {

    image: 'images/doggi.jpeg'
  },
  {

    image: 'images/donk.jpg'
  },
  {

    image: 'images/duck.jpeg'
  },
  {

    image: 'images/leop.jpeg'
  },
  {

    image: 'images/puppy.jpeg'
  },
  {

    image: 'images/wild-animal.jpeg'
  }

];

function createCards(array, i) {
  return `
  <div class="card" data-id="">
    <img class="default" src="./images/peacock-feathers.jpg">
    <img class="flipped" src="">
  </div>

  <div class="card" data-id="">
    <img class="default" src="./images/peacock-feathers.jpg">
    <img class="flipped" src="">
  </div> `
}

//get big container in html
const gameBoard = document.querySelector('.game-board');
const button = document.querySelector('.button')
//loop through images array
for (let i = 0; i < images.length; i++) {
  gameBoard.innerHTML += createCards(images, i);
}
const idArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7]
let isFlipped, disable = false;
let first, second;
//spread operator

const cards = [...document.querySelectorAll('.card')];
const flippedCards = [...document.querySelectorAll('.flipped')];
restartGame();

shuffle(idArray);

reload();
button.addEventListener('click', restartGame);
restartGame();