
import express, { Request, Response } from 'express';
import session from 'express-session';


// declare module 'express-session' {
//   interface SessionData {
//     cart: {
//       items: iItem[]
//     }
    
//   }
// }
interface iItem {
  item: string;
  quantity: number;
}

const groceryList: iItem[] = [
  {
    item: 'milk',
    quantity: 2
  },
  {
    item: 'cereal',
    quantity: 1,
  },
  {
    item: 'pop-tarts',
    quantity: 1,
  },
]

export const testRouter = express.Router();

// testRouter.get("/", (req: Request, res: Response) => {
//   const { cart } = req.session;
//   if (!cart) {
//     res.send("No cart session");
//   } else {
//     res.send(cart);
//   }
// })


// testRouter.post("/item", (req: Request, res: Response) => {
//   const { item, quantity } = req.body;

//   const cartItem = { item, quantity };

//   const { cart } = req.session;

//   if (cart) {
//     req.session.cart!.items.push(cartItem);
//   } else {
//     req.session.cart = {
//       items: [cartItem],
//     }
//   }
//   res.send(201);

// })

