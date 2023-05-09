import PropTypes from 'prop-types';
import { MdOutlineBookmarkBorder, MdOutlineBookmark } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
	EmailIcon,
	EmailShareButton,
	FacebookIcon,
	FacebookShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	TwitterIcon,
	TwitterShareButton,
	WhatsappIcon,
	WhatsappShareButton,
} from 'react-share';
import { addBookmark, removeBookmark } from 'src/store';
import { useNavigate } from 'react-router-dom';

Card.propTypes = {
	guid: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.string,
	date: PropTypes.string,
	author: PropTypes.string,
	content: PropTypes.string,
};

function Card({ guid, title, url, date, author, content }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const existingBookmarks = useSelector((state) => {
		return state.bookmark;
	});

	const saveBookmark = (guid) => {
		dispatch(addBookmark(guid));
	};

	const updateBookmark = (guid) => {
		dispatch(removeBookmark(guid));
	};

	const handleReadMore = () => {
		navigate('/feedDetails', { state: { data: content } });
	};

	return (
		<div className="card-wrapper">
			<div className="title-wrapper flex-between-center">
				<p className="card-title font-bold">{title}</p>
				{existingBookmarks.indexOf(guid) > -1 && (
					<div
						className="bookmark-icon cursor-pointer"
						onClick={() => updateBookmark(guid)}>
						<MdOutlineBookmark />
					</div>
				)}

				{existingBookmarks.indexOf(guid) < 0 && (
					<div
						className="bookmark-icon cursor-pointer"
						onClick={() => saveBookmark(guid)}>
						<MdOutlineBookmarkBorder />
					</div>
				)}
			</div>
			<div className="info-wrapper flex-between-center mt-2">
				<span>
					<label className="font-bold">Published On:</label>
					{date}
				</span>
				<span className="font-italic">
					<label className="mx-05 font-bold">Author:</label>
					{author}
				</span>
			</div>
			<div className="flex-between-center mt-1">
				<span className="text-underline">
					<a
						className="cursor-pointer"
						onClick={() => handleReadMore(true)}>
						Read More
					</a>
				</span>
				<div className="social-media-wrapper flex-left">
					<span className="fc-primary font-bold">Share:</span>
					<FacebookShareButton
						className="mx-05"
						url={url}
						quote={title}>
						<FacebookIcon
							size={32}
							round
						/>
					</FacebookShareButton>
					<TwitterShareButton
						className="mx-05"
						url={url}
						title={title}>
						<TwitterIcon
							size={32}
							round
						/>
					</TwitterShareButton>
					<LinkedinShareButton
						url={url}
						className="mx-05">
						<LinkedinIcon
							size={32}
							round
						/>
					</LinkedinShareButton>
					<WhatsappShareButton
						className="mx-05"
						url={url}
						title={title}
						separator=":: ">
						<WhatsappIcon
							size={32}
							round
						/>
					</WhatsappShareButton>
					<EmailShareButton
						className="mx-05"
						url={url}
						subject={title}
						body="body">
						<EmailIcon
							size={32}
							round
						/>
					</EmailShareButton>
				</div>
			</div>
		</div>
	);
}

export default Card;
