import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from 'src/store';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

AuthGuard.propTypes = {
	component: PropTypes.element,
};

function AuthGuard({ component }) {
	const navigate = useNavigate();
	const token = useSelector((state) => {
		return state.token;
	});

	useEffect(() => {
		if (!token) {
			navigate(`/login`);
		}
	}, []);

	return getToken() ? <>{component}</> : <></>;
}

export default AuthGuard;
