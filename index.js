document.addEventListener('DOMContentLoaded', function() {
  // Seleccionar el popup y el backdrop usando sus clases o IDs
  const popup = document.querySelector('.popup');
  const backdrop = document.querySelector('.popup-backdrop');
  const openButton = document.getElementById('open');
  const closeButton = document.getElementById('close');

  // Función para abrir el popup y el backdrop
  function openPopup() {
      popup.style.display = 'block';  // Hacer visible el popup
      backdrop.style.display = 'block';  // Hacer visible el fondo oscurecido
      document.body.style.overflow = 'hidden'; // Opcional: evita el desplazamiento de la página detrás del popup
  }

  // Función para cerrar el popup y el backdrop
  function closePopup() {
      popup.classList.add('popup_opened');
      popup.style.display = 'none';  // Ocultar el popup
      backdrop.style.display = 'none';  // Ocultar el fondo oscurecido
      document.body.style.overflow = 'auto'; // Opcional: permite el desplazamiento de la página de nuevo
  }

  // Evento de clic para abrir el popup
  openButton.addEventListener('click', openPopup);

  // Evento de clic para cerrar el popup
  closeButton.addEventListener('click', closePopup);

  // También cerrar el popup si se hace clic en el backdrop (opcional)
  backdrop.addEventListener('click', closePopup);
});






