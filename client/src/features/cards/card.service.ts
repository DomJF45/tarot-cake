import { ThunkAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Card } from '../../interfaces/cards/cards.interface';
import axios from "axios";
import { RejectedWithValueActionFromAsyncThunk } from '@reduxjs/toolkit/dist/matchers';

const API_URL: string = 'http://localhost:4000/api/tarot';

type CardError = {
  message: string
};

export const getCards = createAsyncThunk<
    Card[] | undefined
  >('tarot/reading', 
  async () => {
    try {

      const response = await axios.get<Card[]>(`${API_URL}/reading`);

      if (response.data) {
        return response.data
      }

    } catch (err: any) {
      console.log(err.message);
    }
  }
)
