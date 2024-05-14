import ReactModal from 'react-modal';
import css from './ImageModal.module.css'


const ImageModal = ({ image, isOpen, onClose }) => {
    return (
        <>
            <ReactModal
                className={css.container}
                isOpen={isOpen}

                onRequestClose={onClose}

                ariaHideApp={false}
            >

                <img className={css.img} src={image.urls.regular} alt={image.alt_description} />
            </ReactModal >
        </>
    )
}

export default ImageModal;