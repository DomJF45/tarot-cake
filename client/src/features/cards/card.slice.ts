import { Card, CardState } from '../../interfaces/cards/cards.interface';
import { createSlice } from '@reduxjs/toolkit';
import * as CardService from './card.service';

const initialState: CardState = {
  cards: [],
  loading: 'idle'
}

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    reset(state) {
      state.cards = [];
      state.loading = 'idle';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(CardService.getCards.fulfilled, (state, action) => {
        state.loading = 'success';
        state.cards = action.payload;
      })
      .addCase(CardService.getCards.rejected, (state, action) => {
        state.loading = 'failed';
        state.cards = [];
      })
      .addCase(CardService.getCards.pending, (state, action) => {
        state.loading = 'pending';
      })
  }
})

export const { reset } = cardSlice.actions;
export default cardSlice.reducer;