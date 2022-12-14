import express, { Request, Response } from 'express';
import * as CardService from './cards.service';
import { BaseCard, Card } from './card.interface';

export const readingRouter = express.Router();

readingRouter.get("/", async(req: Request, res: Response) => {

  const nums = new Set<number>();
  while (nums.size !== 4) {
    nums.add(Math.floor(Math.random() * 22));
  }

  try {

    const iterator = nums.values();
    const num1 = iterator.next().value;
    const num2 = iterator.next().value;
    const num3 = iterator.next().value;

    const card1: Card = await CardService.find(num1);
    const card2: Card = await CardService.find(num2);
    const card3: Card = await CardService.find(num3);

    if (card1 && card2 && card3) {
      const cards: Card[] = [card1, card2, card3];
      res.status(200).send(cards)
    } else {

      res.status(404).send("Cards not found")
    }

  } catch (err: any) {
    res.status(500).send(err.message)
  }
})