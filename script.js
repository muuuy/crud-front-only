'use strict'

let container = document.querySelector('.container');

const getCards = async () => {
    try{
        let card = await fetch("https://www.deckofcardsapi.com/api/deck/new/draw/?count=2");
        let cardData = await card.json();

        console.log(cardData);

        let cardImage = document.createElement('img');
        cardImage.src = cardData.cards[0].image;
        console.log(cardData.cards[0].image)

        container.appendChild(cardImage);
    } catch(error) {
        alert(error);
    }   
}

getCards();