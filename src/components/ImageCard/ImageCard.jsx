import s from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  return (
    <div>
      <img className={s.card}
        onClick={() => {
          openModal(image);
        }}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;