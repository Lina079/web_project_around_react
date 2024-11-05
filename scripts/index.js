import Card from './Card.js';
import { closePopup, openPopup, openImagePopup, closeImagePopup } from './utils.js';
import FormValidator from './formValidator.js';

document.addEventListener('DOMContentLoaded', () => {
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
  const profileName = document.querySelector('.profile__name');
  const profileDescription = document.querySelector('.profile__description');
  const elementArea = document.querySelector(".elements");
  const imagePopup = document.querySelector('.image-popup');
  const imagePopupImage = document.querySelector('.image-popup__image');
  const imagePopupTitle = document.querySelector('.image-popup__title');
  const imagePopupCloseButton = document.querySelector('.image-popup__close-btn');

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

  function generateCard(data) {
    const card = new Card(data, '#element-template', handleCardClick);
    const cardElement = card.generateCard();
    elementArea.append(cardElement);
  }

  initialElements.forEach((item) => generateCard(item));

  function handleCardClick(link, name) {
    openImagePopup(imagePopup, link, name);
  }

  //Cerrar popup de imagen al hacer clic en el boton de cierre
  document.querySelector('.image-popup__close-btn').addEventListener('click', (event) => {
    event.stopPropagation();
    closeImagePopup(imagePopup);
  });

  //Eventos para abrir y cerrar popups genéricos
  openButton.addEventListener('click', (event) => {
    event.stopPropagation();
    openPopup(popup, backdrop);
  });

  closeButton.addEventListener('click', (event) => {
    event.stopPropagation();
    closePopup(popup, backdrop);
  });

  openAddButtonElements.addEventListener('click', (event) => {
    event.stopPropagation();
    openPopup(popupElements, backdropElements);
  });

  closeAddButtonElements.addEventListener('click', (event) => {
    event.stopPropagation();
    closePopup(popupElements, backdropElements);
  });

  //guardar cambios en el perfil
  function saveChanges(event){
    event.preventDefault();
  if (nameInput.value.trim() && aboutInput.value.trim()) {
    profileName.textContent = nameInput.value.trim();
    profileDescription.textContent = aboutInput.value.trim();
    closePopup(popup);
    backdrop.classList.remove('backdrop_visible');
  }
}
    document.querySelector('#popup-form')
    .addEventListener('submit', saveChanges);

  // Agregar nuevo elemento
  document.querySelector('#editform-elements').addEventListener('submit', (event) => {
    event.preventDefault();
    const newCardData = {
      name: titleInput.value.trim(),
      link: placeInput.value.trim()
    };
    if (newCardData.name && newCardData.link) {
      generateCard(newCardData);
      titleInput.value = '';
      placeInput.value = '';
      closePopup(popupElements)
      backdropElements.classList.remove('backdrop_visible');
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

const handleInputColor = (input) => {
  input.style.color = input.value.trim() ? activeColor : inactiveColor;
};

[titleInput, placeInput, nameInput, aboutInput].forEach((input) => {
  input.addEventListener('input', () => handleInputColor(input));
});


  // Configuración y habilitación de validación de formularios
  const formValidatorSettings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__form-input",
    submitButtonSelector: ".popup__form-btn",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__form-input-error",
    errorClass: "popup__error_visible"
  };

  const profileFormValidator = new FormValidator(formValidatorSettings, document.querySelector('#editform'));
  profileFormValidator.enableValidation();

  const elementsFormValidator = new FormValidator(formValidatorSettings, document.querySelector('#editform-elements'));
  elementsFormValidator.enableValidation();
});






















