import { iHistory } from "../cards/cards.interface";

export interface iUser {
  name?: string;
  email?: string;
  password?: string;
  history?: iHistory[];
}
