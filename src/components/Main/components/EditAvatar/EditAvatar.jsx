import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../../../contexts/CurrentUserContext';

export default function EditAvatar({ onUpdateAvatar, onClose }) {
  const currentUser = useContext(CurrentUserContext);
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    setAvatar(currentUser.avatar || '');
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Avatar URL:', avatar);
    onUpdateAvatar({
      avatar
    });
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
          onChange={(e) => setAvatar(e.target.value)}
          required
        />
        <div className="popup__line"></div>
        <span className="popup__form-input-error" id="avatar-error"></span>
      </div>
      <button type="submit" className="popup__form-btn">
        Guardar
      </button>
    </form>
  );
}

