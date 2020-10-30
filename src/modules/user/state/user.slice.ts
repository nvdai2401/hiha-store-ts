import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthInfo {
  email: string;
  password: string;
  displayName?: string;
}

interface IUser {
  id?: string;
  displayName?: string;
  email?: string;
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
    googleSigInStart() { },
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
    signOutStart(state) { },
    signOutSuccess(state) {
      state.currentUser = {};
      state.errorMessage = '';
    },
    signOutFailure(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
    signUpStart(state, action: PayloadAction<IAuthInfo>) {
      state.loading = true;
    },
    signUpSuccess(state, action: PayloadAction<any>) { },
    signUpFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    checkUserSession() { },
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
