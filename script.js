'use strict'

const cards = [{

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

const createCard = (array, i) => {
  return `
  <div class="card" data-id=>
    <img class="default" src="./images/front.jpg"/>
    <img class="flipped" src="" alt=""/>
  </div>

  <div class="card" data-id=>
    <img class="default" src="./images/front.jpg"/">
    <img class="flipped" src="" alt="">
  </div>`
};

const gameBoard = document.querySelectorAll('game-board');

for (let i = 0; i < images.length; i++) {
  gameBoard.innerHTML += createCard(cards, i);
}


const length = cards.length;
let previous, current;



// shuffle images
(function shuffle() {
  cardElements.forEach(element => {
    let ramdomPos = Math.floor(Math.random() * 16);
    element.style.order = ramdomPos;
  });
})();

//loop through array card(div)
cardElements.forEach((card, i) => {
  //set an id on div that loop through and count cardsarray. when it end it starts over.
  (card.dataset.id = i % length)
  //fetch img src in html and loop through cards array images, gets different pic
  image[i].setAttribute("src", (cards[i % length].img));
  const cardId = card.dataset.id;
  card.addEventListener('click', handleClick);


})
//
//   function handleClick() {
//     card.classList.add('clicked');
//     previous = current;
//     current = cardId;
//     if (previous == cardId) {
//       let matches = document.querySelectorAll(`[data-id="${previous}"]`);
//       matches.forEach((match) => {
//         match.classList.add('matched');
//         console.log('its a match');
//       })
//
//     } else if (previous !== cardId && current !== previous) {
//       let notMatches = document.querySelectorAll(`[data-id="${previous}"]`);
//       notMatches.forEach((notMatch) => {
//         notMatch.classList.remove('clicked')
//         console.log('not a match');
//       })
//
//
//     }
//   }
//
//
//
// })