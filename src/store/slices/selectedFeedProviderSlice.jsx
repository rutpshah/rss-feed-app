import { createSlice } from '@reduxjs/toolkit';

export const selectedFeedProviderSlice = createSlice({
	name: 'selectedFeedProvider',
	initialState: 'https://medium.com/feed/the-economist/',
	reducers: {
		setSelectedFeedProvider(state, action) {
			return action.payload;
		},
		getSelectedFeedProvider(state) {
			return state;
		},
	},
});

export const { setSelectedFeedProvider, getSelectedFeedProvider } =
	selectedFeedProviderSlice.actions;
export const selectedFeedProviderReducer = selectedFeedProviderSlice.reducer;
