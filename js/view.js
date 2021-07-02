const FRONT = "card_front"
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"

let id = 0;

startGame();

function startGame() {
    initializeCards(game.createCardsFromTechs());
}

function initializeCards(cards) {
    let gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = '';
    game.cards.forEach(card => {
        let cardElement = document.createElement('div');
        id += 1;
        cardElement.id = id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    })
}

function createCardContent(card, cardElement) {
    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);
}

function createCardFace(face, card, element) {
    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if (face === FRONT) {
        cardElementFace.innerHTML = id;
    } else {
        cardElementFace.innerHTML = id;
    }
    element.appendChild(cardElementFace);
}

function flipCard() {
    if (!this.classList.contains("flip")) {
        this.classList.add("flip")
    } else {
        this.classList.remove("flip");
    }
}