import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';

function FeedDetailsPage() {
	const location = useLocation();
	const feedDetails = location?.state.data ? parse(location?.state.data) : '';

	return (
		<div className="feed-details-container">
			<p className="primary-heading text-center">Feed Details</p>
			<div className="mt-3">{feedDetails}</div>
		</div>
	);
}

export default FeedDetailsPage;
