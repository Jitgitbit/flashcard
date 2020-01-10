console.log('testje');
const rollerDeck = function(){

  // FLASHCARD CONTENT
  let qAndA = [
    {
      question: 'Which color does a banana have ?',
      answer: 'Yellow !',
    },
    {
      question: 'How many hours are there in a day ?',
      answer: '24 !',
    },
    {
      question: 'Which planet is larger, Earth or Mars ?',
      answer: 'Earth !',
    },
    {
      question: 'Which planet is closer to the Sun, Earth or Venus ?',
      answer: 'Venus !',
    },
    {
      question: 'Where do polar bears come from ?',
      answer: 'The Arctic region !',
    },
    {
      question: 'Where do penguins come from ?',
      answer: 'Antarctica !',
    },
    {
      question: 'Which type of sugar does milk contain ?',
      answer: 'Lactose !',
    },
    {
      question: 'What does "Full stack" stand for ?',
      answer: 'Front and Back-end !',
    },
    {
      question: 'How much blood does a human have on average ?',
      answer: '5.1 Liters !',
    },
    {
      question: 'Combining blue and yellow gives which color ?',
      answer: 'Green !',
    },
  ];

  // ASSIGNING ELEMENTS TO VARIABLES
  let cardContent = document.getElementById("card-content");
  let flipButton = document.getElementById("flip");
  let nextButton = document.getElementById("next");
  let previousButton = document.getElementById("previous");
  let randomButton = document.getElementById("random");

  // ADDS EVENT HANDLER TO BUTTONS
  flipButton.onclick = flipCard;
  nextButton.onclick = nextCard;
  previousButton.onclick = previousCard;
  randomButton.onclick = randomCard;

  // INITIAL VALUES
  cardContent.innerText = qAndA[0].question;
  let place = 0;

  // FLIP FLASHCARD
  function flipCard() {
    if (cardContent.innerText === qAndA[place].question) {
      cardContent.innerText = qAndA[place].answer;
    } else {
      cardContent.innerText = qAndA[place].question;
    }
  }

  // ADVANCE TO NEXT CARD
  function nextCard() {
    if (place < qAndA.length - 1) {
      place = place + 1;
    }
    cardContent.innerText = qAndA[place].question;
  }

  // ADVANCE TO PREVIOUS CARD
  function previousCard() {
    if (place > 0) {
      place = place - 1;
    }
    cardContent.innerText = qAndA[place].question;
  }

  // ADVANCE TO RANDOM CARD
  function randomCard() {
    let oldPlace = place;
    while (oldPlace === place || place === undefined) {
      let random = Math.floor(Math.random() * (qAndA.length + 1));
      place = random;
    }
    cardContent.innerText = qAndA[place].question;
  }
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  rollerDeck();
} else {
  document.addEventListener("DOMContentLoaded", rollerDeck);
};
