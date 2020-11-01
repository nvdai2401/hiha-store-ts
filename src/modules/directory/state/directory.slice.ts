import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISection } from 'common/definitions/directory';

interface IDirectoryState {
  sections: ISection[];
  errorMessage: string;
  loading: boolean;
}

const initialState: IDirectoryState = {
  sections: [],
  errorMessage: '',
  loading: false,
};

const directorySlice = createSlice({
  name: 'directory',
  initialState,
  reducers: {
    fetchDirectorySectionsStart(state) {
      state.loading = true;
    },
    fetchDirectorySectionsSuccess(state, action: PayloadAction<ISection[]>) {
      state.loading = false;
      state.sections = action.payload;
    },
    fetchDirectorySectionsFailure(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  fetchDirectorySectionsStart,
  fetchDirectorySectionsSuccess,
  fetchDirectorySectionsFailure,
} = directorySlice.actions;
export default directorySlice.reducer;
