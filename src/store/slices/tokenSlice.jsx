import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../actions/actions';

export const tokenSlice = createSlice({
	name: 'token',
	initialState: null,
	reducers: {
		setToken(state, action) {
			return action.payload;
		},
		getToken(state) {
			return state;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(logout, () => {
			return null;
		});
	},
});

export const { setToken, getToken } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;
