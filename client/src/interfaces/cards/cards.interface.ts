
export interface Card {
  id: number;
  name: string;
  bio: string;
  image: string;
}

export interface iHistory {
  date: string;
  time: string;
  cards: Card[] | undefined;
}

export interface CardState {
  cards: Card[] | undefined;
  history: iHistory[] | undefined;
  loading: 'idle' | 'pending' | 'success' | 'failed';
  message: unknown;
}