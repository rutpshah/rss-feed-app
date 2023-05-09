import { createSlice, nanoid } from '@reduxjs/toolkit';

export const feedProviderSlice = createSlice({
	name: 'feedProvider',
	initialState: [
		{
			id: nanoid(),
			name: 'Medium',
			url: 'https://medium.com/feed/the-economist/',
		},
	],
	reducers: {
		addFeedProvider(state, action) {
			state.push({
				id: nanoid(),
				name: action.payload.name,
				url: action.payload.url,
			});
		},
		removeFeedProvider(state, action) {
			const updatedData = state.filter((feedProvider) => {
				return feedProvider.id !== action.payload;
			});
			return updatedData;
		},
	},
});

export const { addFeedProvider, removeFeedProvider } =
	feedProviderSlice.actions;
export const feedProviderReducer = feedProviderSlice.reducer;
