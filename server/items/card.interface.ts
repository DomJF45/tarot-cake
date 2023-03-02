export interface BaseCard {
  name: string;
  bio: string;
  image: string;
}

export interface Card extends BaseCard {
  id: number;
}
