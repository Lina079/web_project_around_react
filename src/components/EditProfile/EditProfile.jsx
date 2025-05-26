export default function EditProfile (){
  return (
    <form
    className="popup__form"
    name="edit-profile-form"
    id="edit-profile-form"
    noValidate
    >
    <div className="popup__form-item">
      <input
        className="popup__form-item-name"
        id="profile-name"
        name="name"
        placeholder="Nombre"
        minLength="2"
        maxLength="40"
        required
        type="text"
      />
      <div className="popup__line"></div>
      <span className="popup__form-input-error" id="name-error"></span>
    </div>

    <div className="popup__form-item">
      <input
        className="popup__form-item-about"
        id="profile-description"
        name="description"
        placeholder="Acerca de mí"
        minLength="2"
        maxLength="200"
        required
        type="text"
      />
      <div className="popup__line"></div>
      <span className="popup__form-input-error" id="description-error"></span>
    </div>
    <button
      className="popup__form-btn" type="submit">
        Guardar
      </button>
    </form>
  )
}