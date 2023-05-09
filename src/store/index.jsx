import { configureStore } from '@reduxjs/toolkit';
import {
	addBookmark,
	bookMarkReducer,
	removeBookmark,
} from './slices/bookMarkSlice';
import { getToken, setToken, tokenReducer } from './slices/tokenSlice';
import { logout } from './actions/actions';
import {
	addFeedProvider,
	removeFeedProvider,
	feedProviderReducer,
} from './slices/feedProvidersSlice';
import {
	selectedFeedProviderReducer,
	setSelectedFeedProvider,
	getSelectedFeedProvider,
} from './slices/selectedFeedProviderSlice';
import { throttle } from 'lodash';

const getState = () => {
	const savedState = localStorage.getItem('state');
	if (!savedState) {
		return;
	}

	return JSON.parse(savedState);
};

const setState = (state) => {
	localStorage.setItem('state', JSON.stringify(state));
};

const store = configureStore({
	reducer: {
		bookmark: bookMarkReducer,
		token: tokenReducer,
		feedProvider: feedProviderReducer,
		selectedFeedProvider: selectedFeedProviderReducer,
	},
	preloadedState: getState(),
});

store.subscribe(
	throttle(() => {
		setState(store.getState());
	})
);

export {
	store,
	setToken,
	getToken,
	addBookmark,
	removeBookmark,
	logout,
	addFeedProvider,
	removeFeedProvider,
	feedProviderReducer,
	selectedFeedProviderReducer,
	setSelectedFeedProvider,
	getSelectedFeedProvider,
};
