import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<GoogleOAuthProvider clientId="766713413918-q0lot0ms03gs8f7q34snb4h0650dv104.apps.googleusercontent.com">
				<Provider store={store}>
					<App />
				</Provider>
			</GoogleOAuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);
