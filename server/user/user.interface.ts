import { Card } from "../items/card.interface";
import { Types } from 'mongoose'

export interface iHistory {
  date: string,
  time: string,
  cards: Card[]
}

export interface iUser {
  id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  history: iHistory[]; 
}
