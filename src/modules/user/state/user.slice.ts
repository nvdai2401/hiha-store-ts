import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IAuthInfo } from 'definitions/user';

interface IUserState {
  currentUser: IUser;
  errorMessage: string;
  googleSignInLoading: boolean;
  emailSignInLoading: boolean;
  signUpLoading: boolean;
}

const initialState: IUserState = {
  currentUser: {},
  errorMessage: '',
  googleSignInLoading: false,
  emailSignInLoading: false,
  signUpLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    googleSigInStart(state) {
      state.googleSignInLoading = true;
    },
    emailSigInStart(state, action: PayloadAction<IAuthInfo>) {
      state.emailSignInLoading = true;
    },
    sigInSuccess(state, action: PayloadAction<IUser>) {
      state.googleSignInLoading = false;
      state.emailSignInLoading = false;
      state.currentUser = action.payload;
    },
    signInFailure(state, action: PayloadAction<string>) {
      state.googleSignInLoading = false;
      state.emailSignInLoading = false;
      state.errorMessage = action.payload;
    },
    signOutStart(state) {},
    signOutSuccess(state) {
      state.currentUser = {};
      state.errorMessage = '';
    },
    signOutFailure(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
    signUpStart(state, action: PayloadAction<IAuthInfo>) {
      state.signUpLoading = true;
    },
    signUpSuccess(state, action: PayloadAction<any>) {
      state.signUpLoading = false;
    },
    signUpFailure(state, action: PayloadAction<string>) {
      state.signUpLoading = false;
      state.errorMessage = action.payload;
    },
    checkUserSession() {},
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
