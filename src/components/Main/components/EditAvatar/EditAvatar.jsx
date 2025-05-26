export default function EditAvatar(){
  return(
    <form
    className="popup__form"
    name="edit-avatar-form"
    id="edit-avatar-form"
    noValidate
    >
      <div className="popup__form-item">
        <input
          className="popup__form-item-url"
          id="avatar-url"
          name="avatar"
          placeholder="URL de la imagen"
          type="url"
          required
          />
          <div className="popup__line"></div>
        <span className="popup__form-input-error" id="avatar-url-error"></span>
      </div>

      <button className="popup__form-btn" type="submit">
        Guardar
      </button>
    </form>
      );
}
