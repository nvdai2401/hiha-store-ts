import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  count: number;
}

const initialState: IUserState = { count: 0 };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

export const { increment } = userSlice.actions;
export default userSlice.reducer;
