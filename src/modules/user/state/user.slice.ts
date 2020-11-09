import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IAuthInfo } from 'common/definitions/user';

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
    signOutStart() { },
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
    checkUserSession() { },
  },
});

export const GOOGLE_SIGN_IN_START = `${userSlice.name}/googleSigInStart`;
export const EMAIL_SIGN_IN_START = `${userSlice.name}/emailSigInStart`;
export const SIGN_IN_SUCCESS = `${userSlice.name}/sigInSuccess`;
export const CHECK_USER_SESSION = `${userSlice.name}/checkUserSession`;
export const SIGN_OUT_START = `${userSlice.name}/signOutStart`;
export const SIGN_OUT_SUCCESS = `${userSlice.name}/signOutSuccess`;
export const SIGN_UP_START = `${userSlice.name}/signUpStart`;
export const SIGN_UP_SUCCESS = `${userSlice.name}/signUpSuccess`;

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
