import React, {Component} from "react";
import App from '../App'
import imagespool from '../imagesPool'
import ReactCardFlip from 'react-card-flip'
import { useEffect, useState } from 'react';
import { Button } from "./Button";
import './generate.css';




let textButton = document.getElementById('btn');
let generateButton = document.getElementById('genBtn');
let regenButton = document.getElementById('regen');
let card1 = document.getElementById('cards1');
let card2 = document.getElementById('cards2');
let card3 = document.getElementById('cards3');
let text = document.getElementById('test');

let face = false;
let back = false;

let prophecy1 = false;
let prophecy2 = false;
let prophecy3 = false;

let used = 1;
let unused = -1;
let temp = 0;
let usedArray = [];
let cards = [];

export default class Generate extends Component {
    
    render(){
        return(
            <div>
                <div className="cards">
                    
                    <span id="cards1" style={{display: 'none'}}>
                        <img id="image1" src="rider-waite-deck/back.png" onClick={showCardOne} /> 
                        
                        <h2 className='past'>Past</h2>
                        <p className='info1' id='i1'></p>
                    </span>

                    <span id="cards2" style={{display: 'none'}}> 
                        <img id="image2" src="rider-waite-deck/back.png" onClick={showCardTwo}/>
                        
                        <h2 className='present'>Present</h2>
                        <p className='info2' id='i2'></p>
                    </span>

                    <span id="cards3" style={{display: 'none'}}> 
                        <img id="image3" src="rider-waite-deck/back.png" onClick={showCardThree} /> 
                        
                        <h2 className='future'>Future</h2>
                        <p className='info3' id ='i3'></p>
                    </span>

                </div>




                <div id="generate" style={{textAlign: 'center'}}>
                    <button id="genBtn" onClick={generateCards}>
                        Decide Your Fate...
                    </button>
                    
                </div>

                <div id="redo" style={{textAlign: 'center'}}>
                <button id="regen" style={{display: 'none'}} onClick={regenerateCards}>
                    Regenerate
                </button>
                

        </div>

            </div>
            
        );
    }
}



function choseCards() {
    // assigns used array to unused
    for (let i = 0; i < 3; i++) {
        usedArray[i] = unused;
    }
    // array assigns cards
    for (let i = 0; i < 3; i++) {
        // assigns temp random number
        do {
            temp = Math.floor(Math.random() * 78)
        } while (usedArray[temp] === used) // catches used number
        usedArray[temp] = used; // assigns number not used
        cards[i] = 'rider-waite-deck/' + temp +'.jpg'// assigns card
        
    }
    return cards;

}

function generateCards() {
    document.getElementById('cards1').style.display="inline";
    document.getElementById('cards2').style.display="inline";
    document.getElementById('cards3').style.display="inline";
    choseCards();
    generateName();

    document.getElementById('regen').style.display = "inline";
    document.getElementById('genBtn').style.display = "none";
    
}

/*
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div>
          This is the front of the card.
          <button onClick={handleClick}>Click to flip</button>
        </div>

        <div>
          This is the back of the card.
          <button onClick={handleClick}>Click to flip</button>
        </div>
      </ReactCardFlip>

*/


function showCardOne() {
    //const 
    document.getElementById('image1').src  = cards[0];
    document.getElementById('i1').innerHTML = `${info[0]}`;
    document.getElementById('i1').style.display = 'block';
    
}


function showCardTwo() {
    document.getElementById('image2').src  = cards[1];
    document.getElementById('i2').innerHTML = `${info[1]}`;
    document.getElementById('i2').style.display = 'block';
}

function showCardThree() {
    
    document.getElementById('image3').src  = cards[2];
    document.getElementById('i3').innerHTML = `${info[2]}`;
    document.getElementById('i3').style.display = 'block';
}

function regenerateCards() {
    
    document.getElementById('image1').src  = 'rider-waite-deck/back.png';
    document.getElementById('image2').src  = 'rider-waite-deck/back.png';
    document.getElementById('image3').src  = 'rider-waite-deck/back.png';

    document.getElementById('i1').style.display = 'none';
    document.getElementById('i2').style.display = 'none';
    document.getElementById('i3').style.display = 'none';

    choseCards();
    generateName();

}


let info = [];

function generateName() {
    for (let i = 0; i < 3; i++) {
        if (cards[i] === 'rider-waite-deck/' + 0 +'.jpg') {
            info[i] = 'The Fool';
        }
        else if (cards[i] === 'rider-waite-deck/' + 1 +'.jpg') {
            info[i] = 'The Magician';
        }
        else if (cards[i] === 'rider-waite-deck/' + 2 +'.jpg') {
            info[i] = 'The High Priestess';
        }
        else if (cards[i] === 'rider-waite-deck/' + 3 +'.jpg') {
            info[i] = 'The Empress';
        }
        else if (cards[i] === 'rider-waite-deck/' + 4 +'.jpg') {
            info[i] = 'The Emperor';
        }
        else if (cards[i] === 'rider-waite-deck/' + 5 +'.jpg') {
            info[i] = 'The Hierophant';
        }
        else if (cards[i] === 'rider-waite-deck/' + 6 +'.jpg') {
            info[i] = 'The Lovers';
        }
        else if (cards[i] === 'rider-waite-deck/' + 7 +'.jpg') {
            info[i] = 'The Chariot';
        }
        else if (cards[i] === 'rider-waite-deck/' + 8 +'.jpg') {
            info[i] = 'Strength';
        }
        else if (cards[i] === 'rider-waite-deck/' + 9 +'.jpg') {
            info[i] = 'The Hermit';
        }
        else if (cards[i] === 'rider-waite-deck/' + 10 +'.jpg') {
            info[i] = 'Wheel of Fortune';
        }
        else if (cards[i] === 'rider-waite-deck/' + 11 +'.jpg') {
            info[i] = 'Justice';
        }
        else if (cards[i] === 'rider-waite-deck/' + 12 +'.jpg') {
            info[i] = 'The Hanged Man';
        }
        else if (cards[i] === 'rider-waite-deck/' + 13 +'.jpg') {
            info[i] = 'Death';
        }
        else if (cards[i] === 'rider-waite-deck/' + 14 +'.jpg') {
            info[i] = 'Temperance';
        }
        else if (cards[i] === 'rider-waite-deck/' + 15 +'.jpg') {
            info[i] = 'The Devil';
        }
        else if (cards[i] === 'rider-waite-deck/' + 16 +'.jpg') {
            info[i] = 'The Tower';
        }
        else if (cards[i] === 'rider-waite-deck/' + 17 +'.jpg') {
            info[i] = 'The Star';
        }
        else if (cards[i] === 'rider-waite-deck/' + 18 +'.jpg') {
            info[i] = 'The Moon';
        }
        else if (cards[i] === 'rider-waite-deck/' + 19 +'.jpg') {
            info[i] = 'The Sun';
        }
        else if (cards[i] === 'rider-waite-deck/' + 20 +'.jpg') {
            info[i] = 'Judgement';
        }
        else if (cards[i] === 'rider-waite-deck/' + 21 +'.jpg') {
            info[i] = 'The World';
        }
        else if (cards[i] === 'rider-waite-deck/' + 22 +'.jpg') {
            info[i] = 'Ace of Wands';
        }
        else if (cards[i] === 'rider-waite-deck/' + 23 +'.jpg') {
            info[i] = 'Two of Wands';
        }
        else if (cards[i] === 'rider-waite-deck/' + 24 +'.jpg') {
            info[i] = 'Three of Wands';
        }
        else if (cards[i] === 'rider-waite-deck/' + 25 +'.jpg') {
            info[i] = 'Four of Wands';
        }
        else if (cards[i] === 'rider-waite-deck/' + 26 +'.jpg') {
            info[i] = 'Five of Wands';
        }
        else if (cards[i] === 'rider-waite-deck/' + 27 +'.jpg') {
            info[i] = 'Six of Wands';
        }
        else if (cards[i] === 'rider-waite-deck/' + 28 +'.jpg') {
            info[i] = 'Seven of Wands';
        }
        else if (cards[i] === 'rider-waite-deck/' + 29 +'.jpg') {
            info[i] = 'Eight of Wands';
        }
        else if (cards[i] === 'rider-waite-deck/' + 30 +'.jpg') {
            info[i] = 'Nine of Wands';
        }
        else if (cards[i] === 'rider-waite-deck/' + 31 +'.jpg') {
            info[i] = 'Ten of Wands';
        }
        else if (cards[i] === 'rider-waite-deck/' + 32 +'.jpg') {
            info[i] = 'Page of Wands';
        }
        else if (cards[i] === 'rider-waite-deck/' + 33 +'.jpg') {
            info[i] = 'Knight of Wands';
        }
        else if (cards[i] === 'rider-waite-deck/' + 34 +'.jpg') {
            info[i] = 'Queen of Wands';
        }
        else if (cards[i] === 'rider-waite-deck/' + 35 +'.jpg') {
            info[i] = 'King of Wands';
        }
        else if (cards[i] === 'rider-waite-deck/' + 36 +'.jpg') {
            info[i] = 'Ace of Cups';
        }
        else if (cards[i] === 'rider-waite-deck/' + 37 +'.jpg') {
            info[i] = 'Two of Cups';
        }
        else if (cards[i] === 'rider-waite-deck/' + 38 +'.jpg') {
            info[i] = 'Three of Cups';
        }
        else if (cards[i] === 'rider-waite-deck/' + 39 +'.jpg') {
            info[i] = 'Four of Cups';
        }
        else if (cards[i] === 'rider-waite-deck/' + 40 +'.jpg') {
            info[i] = 'Five of Cups';
        }
        else if (cards[i] === 'rider-waite-deck/' + 41 +'.jpg') {
            info[i] = 'Six of Cups';
        }
        else if (cards[i] === 'rider-waite-deck/' + 42 +'.jpg') {
            info[i] = 'Seven of Cups';
        }
        else if (cards[i] === 'rider-waite-deck/' + 43 +'.jpg') {
            info[i] = 'Eight of Cups';
        }
        else if (cards[i] === 'rider-waite-deck/' + 44 +'.jpg') {
            info[i] = 'Nine of Cups';
        }
        else if (cards[i] === 'rider-waite-deck/' + 45 +'.jpg') {
            info[i] = 'Ten of Cups';
        }
        else if (cards[i] === 'rider-waite-deck/' + 46 +'.jpg') {
            info[i] = 'Page of Cups';
        }
        else if (cards[i] === 'rider-waite-deck/' + 47 +'.jpg') {
            info[i] = 'Knight of Cups';
        }
        else if (cards[i] === 'rider-waite-deck/' + 48 +'.jpg') {
            info[i] = 'Queen of Cups';
        }
        else if (cards[i] === 'rider-waite-deck/' + 49 +'.jpg') {
            info[i] = 'King of Cups';
        }
        else if (cards[i] === 'rider-waite-deck/' + 50 +'.jpg') {
            info[i] = 'Ace of Swords';
        }
        else if (cards[i] === 'rider-waite-deck/' + 51 +'.jpg') {
            info[i] = 'Two of Swords';
        }
        else if (cards[i] === 'rider-waite-deck/' + 52 +'.jpg') {
            info[i] = 'Three of Swords';
        }
        else if (cards[i] === 'rider-waite-deck/' + 53 +'.jpg') {
            info[i] = 'Four of Swords';
        }
        else if (cards[i] === 'rider-waite-deck/' + 54 +'.jpg') {
            info[i] = 'Five of Swords';
        }
        else if (cards[i] === 'rider-waite-deck/' + 55 +'.jpg') {
            info[i] = 'Six of Swords';
        }
        else if (cards[i] === 'rider-waite-deck/' + 56 +'.jpg') {
            info[i] = 'Seven of Swords';
        }
        else if (cards[i] === 'rider-waite-deck/' + 57 +'.jpg') {
            info[i] = 'Eight of Swords';
        }
        else if (cards[i] === 'rider-waite-deck/' + 58 +'.jpg') {
            info[i] = 'Nine of Swords';
        }
        else if (cards[i] === 'rider-waite-deck/' + 59 +'.jpg') {
            info[i] = 'Ten of Swords';
        }
        else if (cards[i] === 'rider-waite-deck/' + 60 +'.jpg') {
            info[i] = 'Page of Swords';
        }
        else if (cards[i] === 'rider-waite-deck/' + 61 +'.jpg') {
            info[i] = 'Knight of Swords';
        }
        else if (cards[i] === 'rider-waite-deck/' + 62 +'.jpg') {
            info[i] = 'Queen of Swords';
        }
        else if (cards[i] === 'rider-waite-deck/' + 63 +'.jpg') {
            info[i] = 'King of Swords';
        }
        else if (cards[i] === 'rider-waite-deck/' + 64 +'.jpg') {
            info[i] = 'Ace of Pentacles';
        }
        else if (cards[i] === 'rider-waite-deck/' + 65 +'.jpg') {
            info[i] = 'Two of Pentacles';
        }
        else if (cards[i] === 'rider-waite-deck/' + 66 +'.jpg') {
            info[i] = 'Three of Pentacles';
        }
        else if (cards[i] === 'rider-waite-deck/' + 67 +'.jpg') {
            info[i] = 'Four of Pentacles';
        }
        else if (cards[i] === 'rider-waite-deck/' + 68 +'.jpg') {
            info[i] = 'Five of Pentacles';
        }
        else if (cards[i] === 'rider-waite-deck/' + 69 +'.jpg') {
            info[i] = 'Six of Pentacles';
        }
        else if (cards[i] === 'rider-waite-deck/' + 70 +'.jpg') {
            info[i] = 'Seven of Pentacles';
        }
        else if (cards[i] === 'rider-waite-deck/' + 71 +'.jpg') {
            info[i] = 'Eight of Pentacles';
        }
        else if (cards[i] === 'rider-waite-deck/' + 72 +'.jpg') {
            info[i] = 'Nine of Pentacles';
        }
        else if (cards[i] === 'rider-waite-deck/' + 73 +'.jpg') {
            info[i] = 'Ten of Pentacles';
        }
        else if (cards[i] === 'rider-waite-deck/' + 74 +'.jpg') {
            info[i] = 'Page of Pentacles';
        }
        else if (cards[i] === 'rider-waite-deck/' + 75 +'.jpg') {
            info[i] = 'Knight of Pentacles';
        }
        else if (cards[i] === 'rider-waite-deck/' + 76 +'.jpg') {
            info[i] = 'Queen of Pentacles';
        }
        else if (cards[i] === 'rider-waite-deck/' + 77 +'.jpg') {
            info[i] = 'King of Pentacles';
        }
    }
    return info;
}

