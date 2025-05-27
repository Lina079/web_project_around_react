export default function Card({ card, onImageClick, onDelete }) {
  const { name } = card;
  return (
    <div className="element__container">
      <img
      src={card.link}
      alt={card.name}
      className="element__photo"
      onClick={() => onImageClick(card)}
      />
      <button
        className="element__trash-icon"
        aria-label="delete card"
        type="button"
        onClick={onDelete}
        />
      <div className="element__container-info">
        <h2 className="element__container-name-place">{name}</h2>
        <div className="element__container-heart heart-icon"></div>
      </div>
    </div>
  );
}