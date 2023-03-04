import { Card, CardState, iHistory } from '../../interfaces/cards/cards.interface';
import { createSlice, ThunkAction, createAsyncThunk } from '@reduxjs/toolkit';
import cardService from './card.service';

type CardError = {
  message: string
};

const initialState: CardState = {
  cards: [],
  loading: 'idle',
  message: ''
}

export const getThreeCards = createAsyncThunk<
Card[] | undefined,
void,
{rejectValue: CardError}
>('tarot/reading', 
async (_: void, thunkAPI) => {
  try {

    return await cardService.getCards();

  } catch (err: any) {
    return thunkAPI.rejectWithValue({
      message: "Cannot get initial three cards"
    })
  }
});
/*
export const saveHistory = createAsyncThunk<
  void, 
  iHistory, 
  {rejectValue: CardError}>(
  'tarot/save',
  async (data, thunkAPI) => {
    try {

      await cardService.saveToHistory(data);

    } catch (err) {
      return thunkAPI.rejectWithValue({
        message: "Could not save cards to history"
      })
    }
  }
);

export const getHistory = createAsyncThunk<
  iHistory[] | undefined,
  void,
  {rejectValue: CardError}>(
  'tarot/history',
  async (_: void, thunkAPI) => {

    try {

      return await cardService.getCardHistory();

    } catch (err) {
      return thunkAPI.rejectWithValue({
        message: "Could not get History"
      })
    }

  }
)
*/

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
      .addCase(getThreeCards.fulfilled, (state, action) => {
        state.loading = 'success';
        state.cards = action.payload;
      })
      .addCase(getThreeCards.rejected, (state, action) => {
        state.loading = 'failed';
        state.cards = [];
        state.message = action.payload;
      })
      .addCase(getThreeCards.pending, (state) => {
        state.loading = 'pending';
      })
      /*
      .addCase(saveHistory.fulfilled, (state) => {
        state.loading = 'success';
      })
      .addCase(saveHistory.rejected, (state, action) => {
        state.loading = 'failed';
        state.message = action.payload;
      })
      .addCase(saveHistory.pending, (state) => {
        state.loading = 'pending';
      })

      .addCase(getHistory.fulfilled, (state, action) => {
        state.history = action.payload?.reverse();
        state.loading = 'success';
      })
      .addCase(getHistory.rejected, (state, action) => {
        state.loading = 'failed';
        state.message = action.payload;
      })
      .addCase(getHistory.pending, (state) => {
        state.loading = 'pending';
      })
      */
  }
})

export const { reset } = cardSlice.actions;
export default cardSlice.reducer;
