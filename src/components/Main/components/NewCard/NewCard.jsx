import { useState } from 'react';

export default function NewCard({ onAddCard }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onAddCard({
      name,
      link
    });
    setName('');
    setLink('');
  }

  return (
    <form
      className="popup__form" onSubmit={handleSubmit} noValidate>
        <div className="popup__form-item">
          <input
            type="text"
            name="name"
            placeholder="Nombre del lugar"
            className="popup__form-item-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            minLength="1"
            maxLength="30"
          />
          <div className="popup__line"></div>
          <span className="popup__form-input-error" id="name-error"></span>
        </div>

        <div className="popup__form-item">
          <input
            type="url"
            name="link"
            placeholder="URL de la imagen"
            className="popup__form-item-input"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
          <div className="popup__line"></div>
          <span className="popup__form-input-error" id="link-error"></span>
        </div>

        <button type="submit" className="popup__form-btn">
          Crear
        </button>
      </form>
  );
}