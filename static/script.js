/* Function to change the front page to game area */
    
function letsPlay() {
    document.getElementById('landing-page').remove()
    var playDiv = document.getElementById('container-1')
    
    playDiv.innerHTML += '<div class="flex-blackjack-row-1"> <img src = "static/images/ui/name.png" alt = "" width = "440" height = "210" > </div > <div class="flex-blackjack-row-2"> <img src="static/images/ui/dealer.jpeg" alt="" width="450" height="238" > </div> <div class="flex-blackjack-row-3"> <div id="dealer-box"> <h2>Dealer: <span id="dealer-blackjack-result">0</span></h2> </div> <div id="your-box"> <h2>You: <span id="your-blackjack-result">0</span></h2> </div> </div> <div class="flex-blackjack-row-4"> <div> <table> <tr> <th>Wins</th> <th>Losses</th> <th>Draws</th> </tr> <tr> <td><span id="wins">0</span></td> <td><span id="losses">0</span></td> <td><span id="draws">0</span></td> </tr> </table ></div><div><button class="btn-lg btn-primary mr-2" id="blackjack-hit-btn" onclick="blackjackHit()" >Hit</button> <button class="btn-lg btn-warning mr-2" id="blackjack-Stand-btn" onclick="blackjackStand()">Stand</button> <button class="btn-lg btn-danger" id="blackjack-deal-btn" onclick="blackjackDeal()">Deal</button> </div> '
}


let blackjackGame = {
    'you': { 'scoreSpan':'#your-blackjack-result', 'div': '#your-box', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
    'cards': ['cardClubs2', 'cardClubs3', 'cardClubs4', 'cardClubs5', 'cardClubs6', 'cardClubs7', 'cardClubs8', 'cardClubs9', 'cardClubs10', 'cardClubsA', 'cardClubsJ', 'cardClubsQ', 'cardClubsK', 'cardDiamonds2', 'cardDiamonds3', 'cardDiamonds4', 'cardDiamonds5', 'cardDiamonds6', 'cardDiamonds7', 'cardDiamonds8', 'cardDiamonds9', 'cardDiamonds10', 'cardDiamondsA', 'cardDiamondsJ', 'cardDiamondsQ', 'cardDiamondsK', 'cardHearts2', 'cardHearts3', 'cardHearts4', 'cardHearts5', 'cardHearts6', 'cardHearts7', 'cardHearts8', 'cardHearts9', 'cardHearts10', 'cardHeartsA', 'cardHeartsJ', 'cardHeartsQ', 'cardHeartsK', 'cardSpades2', 'cardSpades3', 'cardSpades4', 'cardSpades5', 'cardSpades6', 'cardSpades7', 'cardSpades8', 'cardSpades9', 'cardSpades10', 'cardSpadesA', 'cardSpadesJ', 'cardSpadesQ', 'cardSpadesK']
}

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/swish.m4a')

function blackjackHit() {
    let card = randomCard()
    showCard(card, YOU)
}

function randomCard(){
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

    for (let i=0; i<yourImages.length; i++ ){
        yourImages[i].remove();
    }
    for (let i = 0; i < dealerImages.length; i++) {
        dealerImages[i].remove();
    }
}