document.addEventListener('DOMContentLoaded', function() {
  const openButton = document.getElementById('open');
  const closeButton = document.getElementById('close');
  const popup = document.querySelector('.popup');
  const backdrop = document.querySelector('.popup-backdrop');
  const nameInput = document.getElementById('name');
  const aboutInput = document.getElementById('about');
  const saveButton = document.getElementById('saveButton');
  const profileName = document.querySelector('.profile__name');
  const profileDescription = document.querySelector('.profile__description');
  const heartIcon = document.querySelectorAll('.element__container-heart');




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

  function checkForm() {
    if (nameInput.value.trim() !== '' ||  aboutInput.value.trim() !== '') {
      saveButton.disabled = false;
      saveButton.classList.add('enabled');
    } else {
      saveButton.disabled = true;
      saveButton.classList.remove('enabled');
    }
  }

  function saveChanges(event) {
    event.preventDefault();
    if (nameInput.value.trim() !== '') {
      profileName.textContent = nameInput.value.trim();
    }
    if (aboutInput.value.trim() !== '') {
      profileDescription.textContent = aboutInput.value.trim();
    }
    closePopup();
  }



  openButton.addEventListener('click', openPopup);
  closeButton.addEventListener('click', closePopup);
  backdrop.addEventListener('click', closePopup);
  nameInput.addEventListener('input', checkForm);
  aboutInput.addEventListener('input', checkForm);
  saveButton.addEventListener('click', saveChanges);

    heartIcon.forEach(function(heartIcon) {
    heartIcon.addEventListener('click', function() {
      heartIcon.classList.toggle('active');
    });
  });

  });






