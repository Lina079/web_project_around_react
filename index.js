document.addEventListener('DOMContentLoaded', function() {
  const openButton = document.getElementById('open');
  const closeButton = document.getElementById('close');
  const popup = document.querySelector('.popup');
  const backdrop = document.querySelector('.popup-backdrop');



  function openPopup() {
      popup.classList.add('popup_opened');
      backdrop.classList.add('backdrop_visible');
      document.body.style.overflow = 'hidden';
  }


  function closePopup() {
      popup.classList.remove('popup_opened');
      backdrop.classList.remove('backdrop_visible');
      document.body.style.overflow = 'auto';
  }


  openButton.addEventListener('click', openPopup);


  closeButton.addEventListener('click', closePopup);


  backdrop.addEventListener('click', closePopup);
});






