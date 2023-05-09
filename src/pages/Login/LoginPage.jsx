import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import './login.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setToken } from 'src/store';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const login = useGoogleLogin({
		auto_select: true,
		onSuccess: async (tokenResponse) => {
			if (tokenResponse.access_token) {
				dispatch(setToken(tokenResponse.access_token));
				await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
					headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
				});
				navigate('/feeds');
			} else {
				googleLogout();
				toast.error('Error in Google Authentication');
			}
		},
		onError: () => {
			toast.error('Invalid session or Incorrect username/password');
		},
	});

	return (
		<div className="login-container text-center even-columns">
			<div className="wrapper"></div>
			<div className="flex-center">
				<div>
					<p className="primary-heading">Welcome to RSS Feed App</p>
					<p className="normal-heading">
						Please login with your Google account to continue
					</p>
					<button
						role="login"
						className="primary-button google-login-btn"
						onClick={() => login()}>
						Login
					</button>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
