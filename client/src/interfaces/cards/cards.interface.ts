
export interface Card {
  id: number;
  name: string;
  bio: string;
  image: string;
}

export interface iHistory {
  date: string,
  cards: Card[]
}

export interface CardState {
  cards: Card[] | undefined,
  loading: 'idle' | 'pending' | 'success' | 'failed'
}