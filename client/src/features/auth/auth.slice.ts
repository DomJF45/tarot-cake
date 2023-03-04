import { createSlice, createAsyncThunk, ThunkAction } from "@reduxjs/toolkit";
import { iHistory } from "../../interfaces/cards/cards.interface";
import { iUser } from "../../interfaces/user/user.interface";
import authService from "./auth.service";

type UserError = {
  message: string;
}

interface UserState {
  user: iUser | null;
  loading: 'idle' | 'pending' | 'success' | 'failed'; 
  message: unknown;
}

const initialState: UserState = {
  user: null,
  loading: 'idle',
  message: '',
}

// service calls

export const login = createAsyncThunk<
  iUser,
  iUser,
  {rejectValue: UserError}
>(
  'user/login',
  async (data, thunkAPI) => {
    try {
      return await authService.login(data); 
    } catch (err: any) {
      return thunkAPI.rejectWithValue({
        message: "Could not log in"
      }); 
    }
  }
);

export const register = createAsyncThunk<iUser | null, iUser, {rejectValue: UserError}>(
  'user/register',
  async (data, thunkAPI) => {
    try {
      return await authService.register(data);
    } catch(err: any) {
      return thunkAPI.rejectWithValue({
        message: "Could not register user"
      })
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset(state) {
      state.user = null;
      state.loading = 'idle';
      state.message = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.loading = 'success';
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = 'failed';
        state.user = null;
        state.message = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.loading = 'pending';
      })

      
      .addCase(register.fulfilled, (state, action) => {
        state.loading = 'success';
        state.user = action.payload;
      }) 
      .addCase(register.rejected, (state, action) => {
        state.loading = 'failed';
        state.user = null;
        state.message = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.loading = 'pending';
      })
  }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

