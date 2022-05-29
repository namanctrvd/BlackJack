
let blackjackGame = {
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
    'cards': ['cardClubs2', 'cardClubs3', 'cardClubs4', 'cardClubs5', 'cardClubs6', 'cardClubs7', 'cardClubs8', 'cardClubs9', 'cardClubs10', 'cardClubsA', 'cardClubsJ', 'cardClubsQ', 'cardClubsK', 'cardDiamonds2', 'cardDiamonds3', 'cardDiamonds4', 'cardDiamonds5', 'cardDiamonds6', 'cardDiamonds7', 'cardDiamonds8', 'cardDiamonds9', 'cardDiamonds10', 'cardDiamondsA', 'cardDiamondsJ', 'cardDiamondsQ', 'cardDiamondsK', 'cardHearts2', 'cardHearts3', 'cardHearts4', 'cardHearts5', 'cardHearts6', 'cardHearts7', 'cardHearts8', 'cardHearts9', 'cardHearts10', 'cardHeartsA', 'cardHeartsJ', 'cardHeartsQ', 'cardHeartsK', 'cardSpades2', 'cardSpades3', 'cardSpades4', 'cardSpades5', 'cardSpades6', 'cardSpades7', 'cardSpades8', 'cardSpades9', 'cardSpades10', 'cardSpadesA', 'cardSpadesJ', 'cardSpadesQ', 'cardSpadesK'],
    'cardMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '0': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': [1, 11] }
}

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/swish.m4a')

function blackjackHit() {
    let card = randomCard()
    showCard(card, YOU)
    updateScore(card, YOU)
    showScore(YOU)
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 52)
    return blackjackGame['cards'][randomIndex]
}

function showCard(card, activePlayer) {
    let cardImage = document.createElement('img')
    cardImage.src = `static/images/cards/${card}.png`
    document.querySelector(activePlayer['div']).appendChild(cardImage)
    hitSound.play()
}

function blackjackDeal() {
    let yourImages = document.querySelector('#your-box').querySelectorAll('img')
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img')

    for (let i = 0; i < yourImages.length; i++) {
        yourImages[i].remove();
    }
    for (let i = 0; i < dealerImages.length; i++) {
        dealerImages[i].remove();
    }
}

function updateScore(card, activePlayer) {
    activePlayer['score'] += blackjackGame['cardMap'][card.slice(-1)]
}

function showScore(activePlayer) {
    console.log(document.querySelector(activePlayer['scoreSpan']).innerHTML)
    document.querySelector(activePlayer['scoreSpan']).innerHTML = activePlayer['score']
    console.log(document.querySelector(activePlayer['scoreSpan']).innerHTML)
}