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



(function shuffle() {
  cardElements.forEach(element => {
    let ramdomPos = Math.floor(Math.random() * 16);
    element.style.order = ramdomPos;
  });
})();


cardElements.forEach((card, i) => {
  (card.dataset.id = i % length)
  image[i].setAttribute("src", (cards[i % length].img));
  const cardId = card.dataset.id;
  card.addEventListener('click', handleClick);




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