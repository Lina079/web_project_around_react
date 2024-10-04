document.addEventListener('DOMContentLoaded', function() {
  const openButton = document.getElementById('open-edit');
  const closeButton = document.getElementById('close-edit');
  const openAddButtonElements = document.querySelector("#addButton-elements");
  const closeAddButtonElements = document.querySelector("#close-addbutton-elements");
  const popup = document.querySelector("#popup-form");
  const popupElements = document.querySelector("#popup-elements");
  const backdrop = document.querySelector('.popup-backdrop');
  const backdropElements = document.querySelector(".popup-backdrop-elements");
  const nameInput = document.querySelector(".popup__form-item-name");
  const aboutInput = document.querySelector(".popup__form-item-about");
  const titleInput = document.querySelector(".popup__form-item-title");
  const placeInput = document.querySelector(".popup__form-item-url");
  const saveButton = document.getElementById('saveButton');
  const saveButtonElements = document.querySelector("#saveButton-elements");
  const profileName = document.querySelector('.profile__name');
  const profileDescription = document.querySelector('.profile__description');
  const elementTemplate = document.querySelector("#element-template").content;
  const elementArea = document.querySelector(".elements");
  const imagePopup = document.querySelector('.image-popup');
  const imagePopupImage = document.querySelector('.image-popup__image');
  const imagePopupTitle = document.querySelector('.image-popup__title');
  const imagePopupCloseButton = document.querySelector('.image-popup__close-btn');
  const imagePopupContent = document.querySelector('.image-popup__content');
  const imagePopupBackdrop = document.querySelector('.image-popup');

  const initialElements = [
    {
      name: "Valle de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
    },
    {
      name: "Montañas Calvas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
    }
  ];

  initialElements.forEach (function (item){
    createElement(item.name, item.link);
  })

    //Crear y añadir elementos al DOM
  function createElement(name, link){
    const element = elementTemplate.cloneNode(true);
    element.querySelector(".element__container-photo").src = link;
    element.querySelector(".element__container-photo").alt = name;
    element.querySelector(".element__container-name-place").textContent = name;
    element.querySelector(".heart-icon").addEventListener('click', function(){
      if (this.classList.contains('active')){
        this.classList.remove('active');
      } else {
        this.classList.add('active');
      };
    });

    // Evento para abrir el popup de imagen al hacer clic en la imagen del lugar
  element.querySelector(".element__container-photo").addEventListener('click', function() {
    openImagePopup(link, name);
  });

   // Evento para el ícono de la papelera
  element.querySelector(".element__trash-icon").addEventListener('click', function () {
    const container = this.closest('.element__container');
    if (container) {
      container.remove();
    }
  });

  elementArea.prepend(element);
}

  //función que maneja los cambios del perfil
  function saveChanges(event){
  event.preventDefault();
  if (nameInput.value.trim() !== '' && aboutInput.value.trim()){
    profileName.textContent = nameInput.value.trim();
    profileDescription.textContent = aboutInput.value.trim();
    closePopup();
  }
}

  nameInput.addEventListener('input', updateButtonState);
  aboutInput.addEventListener('input', updateButtonState);

  function updateButtonState(){
    saveButton.disabled = !nameInput.value.trim() || !aboutInput.value.trim();
    saveButton.classList.toggle('enabled', !saveButton.disabled);

  }

  //Evento para manejar el submit del formulario de perfil
  document.querySelector('#popup-form').addEventListener('submit', saveChanges);

    openButton.addEventListener('click', function(event){
    event.stopPropagation();
    popup.classList.add('popup_opened');
    document.querySelector('.popup-backdrop').classList.add('backdrop_visible');
    document.body.style.overflow = 'hidden';
  });
  closeButton.addEventListener('click', closePopup);


//cerrar popup perfil
function closePopup() {
  popup.classList.remove('popup_opened');
  document.querySelector('.popup-backdrop').classList.remove('backdrop_visible');
  document.body.style.overflow = 'auto';
}

document.addEventListener('click', function(event) {
  if (popup.classList.contains('popup_opened') && !popup.contains(event.target)) {
      closePopup();
  }
});

document.addEventListener('keydown', function(event){
  if (event.key === 'Escape') {
      closePopup();
    }
  });


//Eventos para abrir y cerrar el popup de añadir nuevos elementos
openAddButtonElements.addEventListener('click', function(event){
  event.stopPropagation();
  popupElements.classList.add('popup_opened');
  backdropElements.classList.add('backdrop_visible');
  document.body.style.overflow = 'hidden';
});

function closePopupElements() {
  popupElements.classList.remove('popup_opened');
  backdropElements.classList.remove('backdrop_visible');
  document.body.style.overflow = 'auto';
}

closeAddButtonElements.addEventListener('click', function() {
  closePopupElements();
});

document.addEventListener('click', function(event) {
  if (popupElements.classList.contains('popup_opened') && !popupElements.contains(event.target)) {
      closePopupElements();
  }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopupElements();
    }
});

//activa el color en los inputs
const activeColor = 'black';
const inactiveColor = '#c4c4c4';

titleInput.addEventListener ('input', function() {
titleInput.style.color = titleInput.value.trim() !== '' ? activeColor : inactiveColor;
});
placeInput.addEventListener ('input', function(){
placeInput.style.color = placeInput.value.trim() !== '' ? activeColor : inactiveColor;
});
nameInput.addEventListener('input', function(){
nameInput.style.color = nameInput.value.trim() !== '' ? activeColor : inactiveColor;
});
aboutInput.addEventListener('input', function(){
  aboutInput.style.color = aboutInput.value.trim() !== '' ? activeColor : inactiveColor;
});

//función para manejar el envio del formulario de nuevos elementos
function addNewElements(event) {
  event.preventDefault();
  const titleValue = titleInput.value.trim();
  const placeValue = placeInput.value.trim();
  if (titleValue && placeValue){
    createElement(titleValue, placeValue);
    titleInput.value = '';
    placeInput.value = '';
    closeAddButtonElements.click();
  };
}
document.querySelector('#editform-elements').addEventListener('submit', addNewElements);

function updateCreateButtonState(){
  const isFormValid = titleInput.value.trim() && placeInput.value.trim();
  saveButtonElements.disabled = !isFormValid;
  saveButtonElements.classList.toggle('enabled', isFormValid);
}

titleInput.addEventListener('input', updateCreateButtonState);
placeInput.addEventListener('input', updateCreateButtonState);

// Función para abrir el popup de la imagen del lugar
function openImagePopup(link, name) {
  imagePopupImage.src = link;
  imagePopupTitle.textContent = name;
  imagePopup.classList.add('image-popup_opened');
  document.body.style.overflow = 'hidden';
}

// Función para cerrar el popup de la imagen
function closeImagePopup() {
  imagePopup.classList.remove('image-popup_opened');
  document.body.style.overflow = 'auto';
}

imagePopupCloseButton.addEventListener('click', function(event) {
  event.stopPropagation();
  closeImagePopup();
});


document.addEventListener('click', function(event) {
  if (imagePopup.classList.contains('image-popup_opened') &&
      !imagePopupContent.contains(event.target) &&
      !event.target.closest('.element__container-photo')) {
    closeImagePopup();
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeImagePopup();
  }
});

});





















