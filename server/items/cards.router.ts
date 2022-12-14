import express, { Request, Response } from 'express';
import * as CardService from "./cards.service";
import { BaseCard, Card } from './card.interface';

export const cardsRouter = express.Router();

// GET cards

cardsRouter.get("/", async(req: Request, res: Response) => {
  try {
    const cards: Card[] = await CardService.findAll();
    res.status(200).send(cards);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
})

// GET card by id
cardsRouter.get("/:id", async(req: Request, res: Response) => {
  try {
    const card: Card = await CardService.find(parseInt(req.params.id, 10));
    if (card) {
      res.status(200).send(card);
    } 
    res.status(404).send("Card not found");
  } catch (err: any) {
    res.status(500).send(err.message);
  }
})


