import { useState, useEffect, useContext, use } from 'react';
import { CurrentUserContext } from '../../../../contexts/CurrentUserContext';

export default function EditAvatar({ onUpdateAvatar, onClose }) {
  const currentUser = useContext(CurrentUserContext);
  const [avatar, setAvatar] = useState('');
  const [avatarError, setAvatarError] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
   setAvatar('');
    setAvatarError('');
  }, []);

  useEffect(() => {
    setIsValid(
      avatar.trim() !== '' &&
      !avatarError
    );
  }, [avatar, avatarError]);

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
    setAvatarError(e.target.validationMessage);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;
    onUpdateAvatar({ avatar: avatar.trim() });
    onClose();
  }

  return (
    <form
      className="popup__form"
      name="edit-avatar-form"
      id="edit-avatar-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="popup__form-item">
        <input
          className="popup__form-item-avatar"
          id="avatar"
          name="avatar"
          placeholder="URL de la imagen"
          type="url"
          value={avatar}
          onChange={handleAvatarChange}
          required
        />
        <div className="popup__line"></div>
        <span className="popup__form-input-error" id="avatar-error">{avatarError}</span>
      </div>
      <button
      type="submit"
      className="popup__form-btn"
      disabled={!isValid}>
      {isValid ? 'Guardar' : 'Escribe una URL válida'}
      </button>
    </form>
  );

}

