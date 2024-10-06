let cards = []
let total = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let i = document.getElementById("notice")
let sum = document.getElementById("sum")
let card = document.getElementById("card")
let x = document.getElementById("text")
const pop = document.getElementById("pop")

function getRandomNumber(){
    let a = Math.floor(Math.random()*13) + 1
    if(a === 1){
        return 11
    }
    else if(a > 10){
        return 10
    }
    else{
    return a
    }
}
function start(){
    let firstCard = getRandomNumber() , secondCard = getRandomNumber()
    cards = [firstCard, secondCard]
    total = cards[0] + cards[1]
    isAlive = true
    round()
}

function round(){
    card.textContent = "Card: "
    for(let i=0; i<cards.length; i++){
        card.textContent += cards[i] + " "
    }
    sum.textContent = "Sum: " + total
    if (total  > 21) {
        message = "Bust! You Are Out!"
        isAlive = false
        } 
    else if (total === 21){
        message = "Blackjack! You win!"
        hasBlackJack = true
    }
    else{
        message = "Want To Draw a Card?"
    }
    i.textContent = message
    if(isAlive === false || hasBlackJack === true){
        if(hasBlackJack === true){
            x.innerHTML = "Congrates!!"
        }
        else if (isAlive === false){
            x.innerHTML = "Better Luck Next Time!!"
        }
        popup()
    }
}

function draw(){
    if(isAlive === true && hasBlackJack === false){
        let newCard = getRandomNumber()
        total += newCard
        cards.push(newCard)
        round()
    }
}

function popup(){
    pop.show()
}
function reset(){
    cards.splice(0,cards.length)
    pop.close()
    location.reload()
}