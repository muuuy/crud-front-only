'use strict'

let container = document.querySelector('.container');

let cardContainer = document.querySelector('.card_container');

let createBtn = document.querySelector('.create_deck');
let newCardBtn = document.querySelector('.draw_card');

let deckId;

const onStart = async () => {
    deckId = localStorage.getItem('deckId');
    console.log(deckId);

    if( deckId == null) {
        newDeck("new");
    } else {
        newDeck(deckId);
    }
}

const newDeck = async (id) => {
    try{
        let card = await fetch(`https://www.deckofcardsapi.com/api/deck/${id}/draw/?count=2`);
        let cardData = await card.json();

        console.log(cardData);

        addImage(cardData);
    } catch(error) {
        console.log(error);
    }   
}

const addImage = (cardData) => {
    let cardImage = document.createElement('img');
    cardImage.src = cardData.cards[0].image;
    console.log(cardData.cards[0].image)

    deckId = cardData.deck_id;
    localStorage.setItem('deckId', deckId);

    cardContainer.appendChild(cardImage);
}

createBtn.addEventListener('click', async () => {
    let existingImage = container.querySelector('img')

    if(existingImage != null) {
        existingImage.remove();
    }
    

    newDeck('new');
})

newCardBtn.addEventListener('click', async () => {
    
    try {
        let card = await fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        let cardData = await card.json();

        console.log(cardData);

        addImage(cardData);
    } catch (error) {
        alert(error);
    }
    
})

onStart();