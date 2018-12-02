'use strict'
const cards = [{
    id: 'bild1',
    img: 'images/cat.jpeg'
  },
  {
    id: 'bild2',
    img: 'images/cow.jpeg'
  },
  {
    id: 'bild3',
    img: 'images/doggi.jpeg'
  },
  {
    id: 'bild4',
    img: 'images/donk.jpg'
  },
  {
    id: 'bild5',
    img: 'images/duck.jpeg'
  },
  {
    id: 'bild6',
    img: 'images/leop.jpeg'
  },
  {
    id: 'bild7',
    img: 'images/puppy.jpeg'
  },
  {
    id: 'bild8',
    img: 'images/wild-animal.jpeg'
  },

];



const cardElements = [...document.querySelectorAll('.card')];
const image = [...document.querySelectorAll('.image')];
const length = cards.length
cardElements.forEach((card, i) => {
  (card.dataset.id = i % length)
  image[i].setAttribute("src", (cards[i % length].img));

  card.addEventListener('click', handleClick);

  function handleClick() {
    console.log('i was clicked' + card.dataset.id)
  }
})