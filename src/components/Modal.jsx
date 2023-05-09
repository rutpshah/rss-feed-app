import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

Modal.propTypes = {
	onClose: PropTypes.func,
};

function Modal({ onClose, children }) {
	return ReactDOM.createPortal(
		<div>
			<div
				onClick={onClose}
				className="modal-wrapper"></div>
			<div className="modal-content-wrapper">
				<div className="modal-content">{parse(children)}</div>
			</div>
		</div>,
		document.querySelector('.modal-container')
	);
}

export default Modal;
