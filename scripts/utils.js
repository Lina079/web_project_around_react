// Función para abrir un popup y gestionar eventos de cierre
export function openPopup(popup, backdrop) {
  popup.classList.add('popup_opened');
  backdrop.classList.add('backdrop_visible');
  document.body.style.overflow = 'hidden';

  // Añadir eventos de cierre al abrir el popup
  document.addEventListener('keydown', closePopupOnEscape);
  document.addEventListener('mousedown', closePopupOnClickOutside);
}

// Función para cerrar un popup y eliminar eventos de cierre
export function closePopup(popup, backdrop) {
  popup.classList.remove('popup_opened');
  backdrop.classList.remove('backdrop_visible');
  document.body.style.overflow = 'auto';

  // Eliminar eventos de cierre al cerrar el popup
  document.removeEventListener('keydown', closePopupOnEscape);
  document.removeEventListener('mousedown', closePopupOnClickOutside);
}

// Función específica para abrir el popup de imagen y configurar su contenido
export function openImagePopup(imagePopup, link, title) {
  imagePopup.querySelector('.image-popup__image').src = link;
  imagePopup.querySelector('.image-popup__title').textContent = title;
  imagePopup.classList.add('image-popup_opened');
  document.body.style.overflow = 'hidden';

  document.addEventListener('keydown', closePopupOnEscape);
  document.addEventListener('mousedown', closePopupOnClickOutside);
}

// Función específica para cerrar el popup de imagen
export function closeImagePopup(imagePopup) {
  imagePopup.classList.remove('image-popup_opened');
  document.body.style.overflow = 'auto';

  document.removeEventListener('keydown', closePopupOnEscape);
  document.removeEventListener('mousedown', closePopupOnClickOutside);
}

// Cerrar popup al presionar Escape
function closePopupOnEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened, .image-popup_opened');
    const backdrop = document.querySelector('.backdrop_visible');
    if (openedPopup) {
      if (openedPopup.classList.contains('image-popup_opened')) {
        closeImagePopup(openedPopup, backdrop);
      } else {
        closePopup(openedPopup, backdrop);
      }
    }
  }
}

// Cerrar popup al hacer clic fuera del contenido
function closePopupOnClickOutside(event) {
  const popupContent = event.target.closest('.popup__container-form, .image-popup__content');
  const openedPopup = document.querySelector('.popup_opened, .image-popup_opened');
  const backdrop = document.querySelector('.backdrop_visible');

  if (!popupContent && openedPopup) {
    if (openedPopup.classList.contains('image-popup_opened')) {
      closeImagePopup(openedPopup, backdrop);
    } else {
      closePopup(openedPopup, backdrop);
    }
  }
}


