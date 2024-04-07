'use strict'

let container = document.querySelector('.container');

let cardContainer = document.querySelector('.card_container');

let deckId;

const generateId = () => {
}

const newDeck = async () => {
    try{
        let card = await fetch("https://www.deckofcardsapi.com/api/deck/new/draw/?count=2");
        let cardData = await card.json();

        console.log(cardData);

        let cardImage = document.createElement('img');
        cardImage.src = cardData.cards[0].image;
        console.log(cardData.cards[0].image)

        deckId = cardData.deck_id;

        cardContainer.appendChild(cardImage);
    } catch(error) {
        alert(error);
    }   
}

newDeck();