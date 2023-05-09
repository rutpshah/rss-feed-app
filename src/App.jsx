import './styles/reset.css';
import './styles/common.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import SettingsPage from './pages/Settings/SettingsPage';
import NavBar from './components/Navbar';
import FeedListingPage from './pages/Feed/FeedListingPage';
import { Route, Router, Routes } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import AuthGuard from './components/AuthGuard';
import { ToastContainer } from 'react-toastify';
import FeedDetailsPage from './pages/Feed/FeedDetailsPage';

function App() {
	return (
		<>
			<div className="w-100">
				<NavBar />
			</div>
			<div className="main-container even-columns">
				<Routes>
					<Route
						path="/"
						element={<LoginPage />}
					/>
					<Route
						path="/login"
						element={<LoginPage />}
					/>
					<Route
						path="/feeds"
						element={<AuthGuard component={<FeedListingPage />} />}
					/>
					<Route
						path="/feedDetails"
						element={<AuthGuard component={<FeedDetailsPage />} />}
					/>
					<Route
						path="/settings"
						element={<AuthGuard component={<SettingsPage />} />}
					/>
				</Routes>
			</div>
			<ToastContainer
				position="bottom-center"
				autoClose={3000}
				hideProgressBar
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover
				theme="light"
			/>
		</>
	);
}

export default App;
