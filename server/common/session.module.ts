import { Card } from "../items/card.interface"
import { iUser } from "../user/user.interface";

export interface iCardHistory {
  card1: Card;
  card2: Card;
  card3: Card;
}

declare module 'express-session' {
  export interface SessionData {
    history: [
      {
        date: string,
        time: string,
        cards: Card[]
      }
    ],
    user: string;
    
  }
}
