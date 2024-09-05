document.addEventListener('DOMContentLoaded', function() {
  const openButton = document.getElementById('open-edit');
  const closeButton = document.getElementById('close-edit');
  const openAddButtonElements = document.querySelector("#addButton-elements");
  const closeAddButtonElements = document.querySelector("#close-addbutton-elements");
  const popup = document.querySelector("#popup-form");
  const backdrop = document.querySelector('.popup-backdrop');
  const popupElements = document.querySelector("#popup-elements");
  const backdropElements = document.querySelector(".popup-backdrop-elements");
  const nameInput = document.getElementById('name');
  const titleInput = document.querySelector("#title");
  const aboutInput = document.getElementById('about');
  const placeInput = document.querySelector("#place");
  const saveButton = document.getElementById('saveButton');
  const saveButtonElements = document.querySelector("#saveButton-elements");
  const profileName = document.querySelector('.profile__name');
  const profileDescription = document.querySelector('.profile__description');
  const heartIcon = document.querySelectorAll(".heart-icon");
  const elementTemplate = document.querySelector("#element-template").content;
  const elementArea = document.querySelector(".elements");

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


  function createElement(name, link){
    const element = elementTemplate.querySelector(".element__container").cloneNode(true);
    const elementImage = element.querySelector(".element__container-photo");
    const elementInfo = element.querySelector(".element__container-name-place");

    elementInfo.textContent = name;
    elementImage.src = link;
    elementImage.alt = name;

    const heartIcon = element.querySelector(".heart-icon");
    if (heartIcon){
        heartIcon.addEventListener('click', function(){
          console.log('Heart icon clicked');
          heartIcon.classList.toggle('active');
        })
    }

    elementArea.append(element);
  }

  initialElements.forEach (function (item){
    createElement(item.name, item.link);
  })


  function openPopup() {
      popup.classList.add('popup_opened');
      backdrop.classList.add('backdrop_visible');
      document.body.style.overflow = 'hidden';
  }

  function openPopupElements(){
    popupElements.classList.add("popup_opened");
    backdropElements.classList.add("backcdrop_visible");
    document.body.style.overflow = 'hidden';
  }



  function closePopup() {
      popup.classList.remove('popup_opened');
      backdrop.classList.remove('backdrop_visible');
      document.body.style.overflow = 'auto';
  }

  function closePoupElements(){
    popupElements.classList.remove('popup_opened');
    backdropElements.classList.remove('backdropElements_visible');
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

  function createNewElements(){
    if (titleInput.value.trim() !== '' ||  placeInput.value.trim() !== '') {
      saveButtonElements.disabled = false;
      saveButtonElements.classList.add('enabled');
    } else {
      saveButtonElements.disabled = true;
      saveButtonElements.classList.remove('enabled');
    }
  }


  openButton.addEventListener('click', openPopup);
  openAddButtonElements.addEventListener('click', openPopupElements);
  closeButton.addEventListener('click', closePopup);
  closeAddButtonElements.addEventListener('click', closePoupElements);
  backdrop.addEventListener('click', closePopup);
  backdropElements.addEventListener('click', closePoupElements)
  nameInput.addEventListener('input', checkForm);
  aboutInput.addEventListener('input', checkForm);
  titleInput.addEventListener('input', createNewElements);
  placeInput.addEventListener('input',createNewElements );
  saveButton.addEventListener('click', saveChanges);


  });






