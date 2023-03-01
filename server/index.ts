import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { connectDb } from './config/db';
import { cardsRouter } from './items/cards.router';
import { readingRouter } from './items/reading.router';
import { errorHandler } from './middleware/error.middleware';
import { notFoundHandler } from './middleware/not-found.middleware';
import session from 'express-session';
import { testRouter } from './items/cart.test';
import MongoStore from 'connect-mongo';
import { userRouter } from './user/user.router';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

connectDb();
app.set("trust proxy", 1);

// app.use(helmet());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(session({
  secret: "ahsgfjslkdjfan",
  resave: false,
  saveUninitialized: false, // set to false in production
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: {
    sameSite: 'lax',
    maxAge: 1000* 60 * 60 * 24,
    expires: new Date(Date.now() + 3600000 * 24)
  }
}))
app.use(express.json());
app.use("/api/user", userRouter)
app.use("/api/tarot/cards", cardsRouter);
app.use('/api/tarot/reading', readingRouter);
app.use('/api/test/cart', testRouter);
app.use(errorHandler);
app.use(notFoundHandler);



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})
