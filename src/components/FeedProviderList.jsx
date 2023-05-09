import { useDispatch, useSelector } from 'react-redux';
import { removeFeedProvider, setSelectedFeedProvider } from 'src/store';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function FeedProviderList() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const feedProviders = useSelector((state) => {
		return state.feedProvider;
	});

	const setFeedProvider = (providerUrl) => {
		dispatch(setSelectedFeedProvider(providerUrl));
		navigate('/feeds');
	};

	const deleteFeedProvider = (providerId) => {
		dispatch(removeFeedProvider(providerId));
		toast.info('Feed provider has been removed successfully');
	};

	return (
		<div className="feed-provider-list-container border-300">
			<p className="secondary-heading text-center">Feed Provider List</p>
			{feedProviders.map((provider) => {
				return (
					<div
						key={provider.id}
						className="feed-provider-wrapper">
						<div className="mt-1">
							<p className="font-bold">{provider.name}</p>
							<p className="mt-1">{provider.url}</p>
						</div>

						<div className="button-wrapper mt-2">
							<button
								className="primary-button"
								onClick={() => {
									setFeedProvider(provider.url);
								}}>
								Open
							</button>
							<button
								className="primary-button mx-1"
								disabled={feedProviders.length === 1}
								onClick={() => {
									deleteFeedProvider(provider.id);
								}}>
								Delete
							</button>
						</div>
					</div>
				);
			})}

			{feedProviders.length < 1 && (
				<p className="text-center mt-3">No Data available</p>
			)}
		</div>
	);
}

export default FeedProviderList;
