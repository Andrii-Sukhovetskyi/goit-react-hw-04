import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ modalIsOpen, closeModal, image }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      // style={{
      //   overlay: {
      //     backgroundColor: "rgba(0, 0, 0, 0.75)",
      //   },
      // }}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      {image && <img className={s.modalImg} src={image.urls.regular} alt={image.alt_description} />}
    </Modal>
  );
};

export default ImageModal;