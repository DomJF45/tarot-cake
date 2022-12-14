import { BaseCard, Card } from "./card.interface";
import { Cards } from './cards.interface';
import { cards } from "./cards.data";

// finds all from cards
export const findAll = async (): Promise<Card[]> => Object.values(cards);

// finds card by id, returns a promise of type Card at cards[id]
export const find = async (id: number): Promise<Card> => cards[id];

