import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function EditProfile ({ onUpdateUser, onClose }) {
const currentUser = useContext(CurrentUserContext);
const [name, setName] = useState('');
const [about, setAbout] = useState('');

useEffect(() => {
  setName(currentUser.name || '');
  setAbout(currentUser.about || '');
}, [currentUser]);

function handleSubmit(e) {
  e.preventDefault();
  onUpdateUser({
    name,
    about
  });
  onClose();
}

  return (
    <form
    className="popup__form"
    name="edit-profile-form"
    id="edit-profile-form"
    noValidate
    onSubmit={handleSubmit}
    >
    <div className="popup__form-item">
      <input
        className={`popup__form-item-name ${name ? 'filled' : '' }`}
        id="profile-name"
        name="name"
        placeholder="Nombre"
        minLength="2"
        maxLength="40"
        required
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="popup__line"></div>
      <span className="popup__form-input-error" id="name-error"></span>
    </div>

    <div className="popup__form-item">
      <input
        className={`popup__form-item-about ${about ? 'filled' : '' }`}
        id="profile-description"
        name="description"
        placeholder="Acerca de mí"
        minLength="2"
        maxLength="200"
        required
        type="text"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
      />
      <div className="popup__line"></div>
      <span className="popup__form-input-error" id="description-error"></span>
    </div>
    <button
      className="popup__form-btn" type="submit">
        Guardar
      </button>
    </form>
  );
}

