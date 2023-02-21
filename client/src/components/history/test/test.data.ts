import { Card } from "../../cards/card.interface";
import { iHistory } from "../history.interfaces";

export const testCards: Card[] = [
  {id: 12, name: 'The Hanged Man', bio: 'The Hanged Man is the card that suggests ultimate surrender, sacrifice, or being suspended in time.', image: 'https://ik.imagekit.io/wvlrlc0tr/tarot/12.jpg'},
  {id: 1, name: 'The Magician', bio: 'The Magician points to your capabilities and your …ing as this will only hold yourself back further.', image: 'https://ik.imagekit.io/wvlrlc0tr/tarot/1.jpg'},
  {id: 9, name: 'The Hermit', bio: 'The Hermit suggests that you are in a phase of int…, away from the current demands of your position.', image: 'https://ik.imagekit.io/wvlrlc0tr/tarot/9.jpg'}
]

export const testHistory: iHistory[] = [
  {
    date: 'Friday: 2023',
    cards: testCards
  },
  {
    date: 'Friday: 2023',
    cards: testCards
  },
  {
    date: 'Friday: 2023',
    cards: testCards
  }
]