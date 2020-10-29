import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthInfo {
  email: string;
  password: string;
}

interface IUser {
  id?: string;
  displayName?: string;
  email?: string;
  createAt?: {
    seconds: number;
    nanoseconds: number;
  };
}

interface IUserState {
  currentUser: IUser;
  errorMessage: string;
  loading: boolean;
}

const initialState: IUserState = {
  currentUser: {},
  errorMessage: '',
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    googleSigInStart(state) {
      state.loading = true;
    },
    emailSigInStart(state, action: PayloadAction<IAuthInfo>) {
      state.loading = true;
    },
    sigInSuccess(state, action: PayloadAction<IUser>) {
      state.loading = false;
      state.currentUser = action.payload;
    },
    signInFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    signOutStart(state) {
      state.loading = true;
    },
    signOutSuccess(state) {
      state.loading = false;
    },
    signOutFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    signUpStart(state) {
      state.loading = true;
    },
    signUpSuccess(state) {
      state.loading = false;
    },
    signUpFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    checkUserSession(state) { },
  },
});

export const {
  googleSigInStart,
  emailSigInStart,
  sigInSuccess,
  signInFailure,
  signOutStart,
  signOutSuccess,
  signOutFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure,
  checkUserSession,
} = userSlice.actions;
export default userSlice.reducer;
