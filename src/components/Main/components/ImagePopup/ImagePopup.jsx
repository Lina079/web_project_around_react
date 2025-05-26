export default function ImagePopup({ link, name, onClose }) {
  return (
    <div className={`image-popup ${link ? "image-popup_opened" : ""}`}>
      <div className="image-popup__content">
        <button
        aria-label="Cerrar"
        className="popup__close-btn"
        type="button"
        onClick={onClose}
        >
          &times;
        </button>
        <img
        src={link}
        alt="Imagen ampliada"
        className="image-popup__image" />
        <p className="image-popup__title">{name}</p>
      </div>
      </div>
  );
}