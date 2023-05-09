import { useForm } from 'react-hook-form';
import './settingsPage.css';
import FeedLoader from 'src/components/FeedLoader';
import { useEffect } from 'react';
import { addFeedProvider } from 'src/store';
import { useDispatch } from 'react-redux';
import FeedProviderList from 'src/components/FeedProviderList';
import { toast } from 'react-toastify';

function SettingsPage() {
	const dispatch = useDispatch();
	const addFeedProviderForm = useForm({ mode: 'onTouched' });
	const { register, handleSubmit, formState, reset } = addFeedProviderForm;
	const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful } =
		formState;

	const onSubmit = (data) => {
		dispatch(
			addFeedProvider({
				name: data.feedProvider,
				url: data.feedUrl,
			})
		);
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
			toast.info('Feed provider has been added successfully');
		}
	}, [isSubmitSuccessful]);

	return (
		<div>
			<p className="primary-heading text-center w-100">Settings</p>
			<div className="settings-page-container mt-3">
				<div className="border-300">
					<p className="secondary-heading text-center">
						Add a RSS Feed Provider
					</p>
					<form
						className="mt-3"
						onSubmit={handleSubmit(onSubmit)}
						noValidate>
						<div>
							<label htmlFor="feedProvider">Name</label>
							<input
								className="input form-control"
								type="text"
								{...register('feedProvider', {
									required: 'Please enter feed provider name',
								})}
							/>
							<p className="error-text">
								{isDirty && errors.feedProvider?.message}
							</p>
						</div>

						<div>
							<label htmlFor="feedUrl">Feed URL</label>
							<input
								className="input form-control"
								type="text"
								{...register('feedUrl', {
									required: 'Please enter a feed provider URL',
									pattern: {
										value:
											/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
										message: 'Please enter a valid URL',
									},
								})}
							/>
							<p className="error-text">{isDirty && errors.feedUrl?.message}</p>
						</div>

						<div className="flex-center">
							<button
								type="button"
								disabled={!isDirty || isSubmitting}
								className="primary-button w-fit m-auto mx-1">
								Reset
							</button>
							<button
								disabled={!isDirty || !isValid || isSubmitting}
								className="primary-button w-fit m-auto mx-1">
								Add
							</button>
						</div>
					</form>
				</div>
				<FeedProviderList />
				{isSubmitting && <FeedLoader />}
			</div>
		</div>
	);
}

export default SettingsPage;
