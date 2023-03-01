import express, { Request, Response } from 'express';
import * as CardService from './cards.service';
import { BaseCard, Card } from './card.interface';
import { Cards } from './cards.interface';
import { iCardHistory } from '../common/session.module';

export const readingRouter = express.Router();


readingRouter.get("/", async(req: Request, res: Response) => {

  const nums = new Set<number>();
  while (nums.size !== 4) {
    nums.add(Math.floor(Math.random() * 22));
  }

  try {

    const {  } = req.session;

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

readingRouter.post("/save", (req: Request, res: Response) => {
  
  try {
    const { date, time, cards } = req.body;

    const cardHistory = { date, time, cards };
    
    const { history } = req.session;

    console.log(date, cards);
  
    if (req.session.history) {
      req.session.history!.push(cardHistory);
    } else {
      req.session.history = [cardHistory];
    }
    console.log(req.sessionID);
  
    res.send(201);

  } catch (err) {
    console.log(err)
  }

})

readingRouter.get("/history/", (req: Request, res: Response) => {
  

  try {
    const { history } = req.session;
    console.log(history);

    if (!history) {
      res.sendStatus(404);
    } else {
      res.send(history);
    }
  } catch (err) {
    console.log(err);
  }

})
