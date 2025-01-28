import Section from './Section.js';
import Card from './Card.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import FormValidator from './formValidator.js'
import UserInfoProject from './UserInfoProject.js';


document.addEventListener('DOMContentLoaded', () => {
  const openEditProfileButton = document.getElementById('open-edit');
  const openAddCardButton = document.getElementById("addButton-elements");

  const nameInput = document.querySelector("#name");
  const aboutInput = document.querySelector("#about");
  const titleInput = document.querySelector("#title");
  const placeInput = document.querySelector("#place");

  const editForm = document.querySelector('#editform');
  const addCardForm = document.querySelector('#editform-elements');


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

  function createCard(data) {
    const card = new Card(
      data,
      '#element-template',
      (name, link) => {
        popupWithImage.open(name, link);
      }
    );
    return card.generateCard();
  }

   //UserInfo
   const userInfoProject = new UserInfoProject({
    nameSelector: '.profile__name',
    aboutSelector: '.profile__description'
  });

  const popupWithImage = new PopupWithImage('.image-popup');
  popupWithImage.setEventListeners();

  // Función que maneja el clic en una tarjeta (abre la imagen)
  function handleCardClick(name, link) {
    popupWithImage.open(name, link);
  }

  function renderCard(item) {
    const card = new Card(item, '#element-template', handleCardClick);
    const cardElement = card.generateCard();
    section.addItem(cardElement);
  }

  const section = new Section(
    {
      items: initialElements,
      renderer: (item) => {
        const cardElement = createCard(item);
        section.addItem(cardElement);
      }
    },
    '.elements'
  );

  section.renderItems();

  const editProfilePopup = new PopupWithForm({
    popupSelector: '#popup-form',
    handleFormSubmit: (formValues) => {
      userInfoProject.setUserInfoProject({
        name: formValues.name,
        about: formValues.about
      });
    }
  });
  editProfilePopup.setEventListeners();

  openEditProfileButton.addEventListener('click', () => {
    nameInput.value = "";
    aboutInput.value = "";
    editProfilePopup.open();
  });

  const addCardPopup = new PopupWithForm({
    popupSelector: '#popup-elements',
    handleFormSubmit: (formValues) => {
      const newCardElement = createCard({
        name: formValues.title,
        link: formValues.place
      });
      section.addItem(newCardElement);
    }
  });
  addCardPopup.setEventListeners();


  openAddCardButton.addEventListener('click', () => {
    addCardPopup.open();
  });


  const activeColor = 'black';
  const inactiveColor = '#c4c4c4';

  function handleInputColor(input) {
    input.style.color = input.value.trim() ? activeColor : inactiveColor;
  }

  [titleInput, placeInput, nameInput, aboutInput].forEach((input) => {
    input.addEventListener('input', () => handleInputColor(input));
  });

  const formValidatorSettings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__form-input",
    submitButtonSelector: ".popup__form-btn",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__form-input-error",
    errorClass: "popup__error_visible"
  };

  // Validación para el formulario de editar perfil
  const profileFormValidator = new FormValidator(formValidatorSettings, editForm);
  profileFormValidator.enableValidation();

  // Validación para el formulario de agregar tarjeta
  const elementsFormValidator = new FormValidator(formValidatorSettings, addCardForm);
  elementsFormValidator.enableValidation();
});


