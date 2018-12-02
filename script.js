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
const length = cards.length;
let previous, current;



cardElements.forEach((card, i) => {
  (card.dataset.id = i % length)
  image[i].setAttribute("src", (cards[i % length].img));
  const cardId = card.dataset.id;
  card.addEventListener('click', handleClick);


  function shuffle(cards) {
    var currentIndex = cards.length,
      temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }

    return cards;
  }

  function handleClick() {
    card.classList.add('clicked');
    previous = current;
    current = cardId;
    if (previous == cardId) {
      let matches = document.querySelectorAll(`[data-id="${previous}"]`);
      matches.forEach((match) => {
        match.classList.add('matched');
        console.log('its a match');
      })

    } else if (previous !== cardId && current !== previous) {
      let notMatches = document.querySelectorAll(`[data-id="${previous}"]`);
      notMatches.forEach((notMatch) => {
        notMatch.classList.remove('clicked')
        console.log('not a match');
      })


    }
  }


})