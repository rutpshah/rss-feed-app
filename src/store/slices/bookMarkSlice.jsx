import { createSlice } from '@reduxjs/toolkit';

export const bookMarkSlice = createSlice({
	name: 'bookmark',
	initialState: [],
	reducers: {
		addBookmark(state, action) {
			state.push(action.payload);
		},
		removeBookmark(state, action) {
			state.splice(state.indexOf(action.payload));
		},
	},
});

export const { addBookmark, removeBookmark } = bookMarkSlice.actions;
export const bookMarkReducer = bookMarkSlice.reducer;
