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


function match() {
  first.removeEventListener('click', handleClick);
  second.removeEventListener('click', handleClick);
  clear();
}

function noMatch() {
  disable = true;
  setTimeout(() => {
    first.classList.remove('flip');
    second.classList.remove('flip');
    clear();
  }, 800);
}

function clear() {
  first = null;
  second = null;
  isFlipped = false;
  disable = false;
}


function reload() {
  cards.forEach((card, i) => {
    card.addEventListener('click', handleClick);
    let randomNumber = idArray[i];
    let randomImage = images[randomNumber];
    flippedCards[i].setAttribute('src', randomImage.image);
    card.dataset.id = randomNumber;
  });
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