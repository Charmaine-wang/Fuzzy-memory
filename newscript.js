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

const createCards = (array, i) => {
  return `
  <div class="card" data-id="">
    <img class="default" src="./images/sheep.jpeg">
    <img class="flipped" src="">
  </div>

  <div class="card" data-id="">
    <img class="default" src="./images/sheep.jpeg">
    <img class="flipped" src="">
  </div> `
}
//this loggar ut det den är i (eventlistner)
function handleClick() {
  this.classList.add('flipped');
}

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}



const gameBoard = document.querySelector('.game-board');

for (let i = 0; i < images.length; i++) {
  gameBoard.innerHTML += createCards(images, i);
}
const idArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7]


//spread operator
const cards = [...document.querySelectorAll('.card')];

shuffle(idArray);

cards.forEach((card, i) => {
  //handleClick ny funktion
  card.addEventListener('click', handleClick);
  const flippedCards = [...document.querySelectorAll('.flipped')];


  let randomNumbers = idArray[i];

  let randomImage = images[randomNumbers];
  flippedCards[i].setAttribute('src', randomImage.image);
});