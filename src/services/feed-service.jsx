import axios from 'axios';

export const getFeeds = (feedUrl) => {
	return axios.get(`https://cors-anywhere.herokuapp.com/${feedUrl}`, {
		headers: new URL(feedUrl).hostname,
	});
};
