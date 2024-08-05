document.addEventListener('DOMContentLoaded', function() {
  const popup = document.querySelector('.popup');
  const backdrop = document.querySelector('.popup-backdrop');
  const openButton = document.getElementById('open');
  const closeButton = document.getElementById('close');


  function openPopup() {
      popup.style.display = 'block';
      backdrop.style.display = 'block';
      document.body.style.overflow = 'hidden';
  }


  function closePopup() {
      popup.classList.add('popup_opened');
      popup.style.display = 'none';
      backdrop.style.display = 'none';
      document.body.style.overflow = 'auto';
  }


  openButton.addEventListener('click', openPopup);


  closeButton.addEventListener('click', closePopup);


  backdrop.addEventListener('click', closePopup);
});






