import { googleLogout } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from 'src/store';

function NavBar() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const token = useSelector((state) => {
		return state.token;
	});

	const handleLogout = () => {
		googleLogout();
		dispatch(logout());
		navigate('/login');
	};

	const topNavigation = (path) => {
		navigate(path);
	};

	return (
		<div className="navbar-container">
			<div
				className="icon flex-center cursor-pointer"
				onClick={() => (token ? topNavigation('/feeds') : '')}>
				<span className="material-icons fc-primary fs-900">rss_feed</span>
				<span className="fc-primary ml-1">RSS Feed App</span>
			</div>

			{token && (
				<div className="right-nav">
					<span
						className="material-icons fc-primary cursor-pointer"
						onClick={() => topNavigation('/settings')}>
						settings
					</span>
					<span
						className="material-icons fc-primary cursor-pointer"
						onClick={handleLogout}>
						logout
					</span>
				</div>
			)}
		</div>
	);
}

export default NavBar;
