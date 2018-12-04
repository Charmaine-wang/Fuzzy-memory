//function that will be in .game-board
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

//shuffel card
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


function handleClick() {
  if (disable || this === second) return
  this.classList.add('flip');
  if (!isFlipped) {
    isFlipped = true;
    first = this;
    return
  }
  second = this;
  first.dataset.id === second.dataset.id ? match() : noMatch();
}

//if its a match, stay
function match() {
  first.removeEventListener('click', handleClick);
  second.removeEventListener('click', handleClick);
  clear();
}

//if not a match, flip card
function noMatch() {
  disable = true;
  setTimeout(() => {
    first.classList.remove('flip');
    second.classList.remove('flip');
    clear();
  }, 800);
}


function reload() {
  cards.forEach((card, i) => {
    card.addEventListener('click', handleClick);
    let randomNumber = idArray[i];
    let randomImage = images[randomNumber];
    card.dataset.id = randomNumber
    flippedCards[i].setAttribute('src', randomImage.image);
  });
}


function clear() {
  isFlipped = false;
  disable = false;
  first = null;
  second = null;
}



function restartGame() {
  cards.forEach((card) => {
    card.classList.remove('flip');
    card.addEventListener('click', handleClick);

    shuffle(idArray);
    reload();
    clear();
  })

}