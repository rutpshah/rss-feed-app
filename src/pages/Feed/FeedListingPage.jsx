import { useState } from 'react';
import { useEffect } from 'react';
import XMLParser from 'react-xml-parser';
import { getFeeds } from 'src/services/feed-service';
import FeedLoader from 'src/components/FeedLoader';
import { useSelector } from 'react-redux';
import Card from 'src/components/Card';
import './feeds.css';
import { toast } from 'react-toastify';

function FeedListingPage() {
	const [feeds, setFeeds] = useState([]);
	const [initialized, setInitialized] = useState(false);
	const [error, setError] = useState(false);

	const feedUrl = useSelector((state) => {
		return state.selectedFeedProvider;
	});

	const fetchFeeds = async () => {
		setInitialized(false);

		try {
			const response = await getFeeds(feedUrl);
			const parsedData = new XMLParser().parseFromString(response.data);

			const finalItems = parsedData.children[0].children.filter((child) => {
				if (child.name === 'item') {
					return true;
				}
				return false;
			});

			setFeeds(finalItems);
			setError(false);
			setInitialized(true);
		} catch (error) {
			toast.error('Error in parsing feeds');
			setError(true);
			setInitialized(true);
		}
	};

	useEffect(() => {
		if (!initialized) {
			fetchFeeds();
		}
		setInitialized(true);

		return () => {
			setInitialized(false);
		};
	}, []);

	return (
		<div>
			<div className="header-info">
				<p className="primary-heading text-center">Feeds</p>
				<span
					className="material-icons fc-primary update-feeds-icon"
					onClick={() => fetchFeeds()}>
					update
				</span>
			</div>
			{feeds.length > 0 && (
				<div className="feed-list mt-2 mb-2">
					{feeds.map((feedItem, index) => {
						return (
							<Card
								key={index}
								guid={feedItem.children[2]?.value}
								title={feedItem.children[0]?.value}
								url={feedItem.children[1]?.value}
								date={feedItem.children[9]?.value}
								author={feedItem.children[8]?.value}
								content={feedItem.children[11]?.value}
							/>
						);
					})}
				</div>
			)}
			{error && (
				<p className="error-text normal-heading text-center mt-3">
					Error fetching feeds. Please check the configuration.
				</p>
			)}
			{!initialized && <FeedLoader />}
		</div>
	);
}

export default FeedListingPage;
