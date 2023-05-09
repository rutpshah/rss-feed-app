import { Radio } from 'react-loader-spinner';

function FeedLoader() {
	return (
		<div className="w-100 loader-wrapper">
			<Radio
				visible={true}
				colors={['#242d52', '#f25f3a', '#f25f3a']}
				height="100"
				width="100"
				ariaLabel="radio-loading"
				wrapperStyle={{
					background: '#fff',
					borderRadius: '100%',
					padding: '1rem',
				}}
				wrapperClass="radio-wrapper"
			/>
		</div>
	);
}

export default FeedLoader;
