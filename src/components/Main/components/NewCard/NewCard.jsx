export default function NewCard() {
  return (
    <form
    className="popup__form"
    name="card-form"
    id="new-card-form"
    noValidate
    >
      <div className="popup__form-item">
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name"
          maxLength="30"
          minLength="1"
          name="card-name"
          placeholder="Título"
          required
          type="text"
        />
        <div className="popup__line"></div>
        <span className="popup__form-input-error" id="card-name-error"></span>
      </div>

      <div className="popup__form-item">
        <input
        className="popup__input popup__input_type_url"
        id="card-link"
        name="link"
        placeholder="Enlace a la imagen"
        required
        type="url"
        />
        <div className="popup__line"></div>
        <span className="popup__error" id="card-link-error"></span>
      </div>

      <button
        className="popup__form-btn" type="submit">
          Crear
        </button>
    </form>
  );
}
