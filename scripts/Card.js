export default class Card {
  constructor({ name, link }, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate(){
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element__container')
    .cloneNode(true);

    return cardElement;
  }

  _handleOpenImage() {
    this._handleCardClick(this._name, this._link);
  }

  _handleDeleteCard(){
    this._element.remove();
    this._element = null;
  }

  _handleLikeCard() {
    this._element.querySelector('.heart-icon')
    .classList.toggle('active');
  }

 _setEventListeners() {
  // Clic en la imagen para abrir popup
  this._element
    .querySelector('.element__container-photo')
    .addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

  // Clic en el ícono de basura para eliminar tarjeta
  this._element
    .querySelector('.element__trash-icon')
    .addEventListener('click', () => {
      this._handleDeleteCard();
    });

  // Clic en el ícono de corazón para dar "like"
  this._element
    .querySelector('.heart-icon')
    .addEventListener('click', () => {
      this._handleLikeCard();
    });
}

  generateCard (){
    this._element = this._getTemplate();
    this._element.querySelector('.element__container-name-place')
    .textContent = this._name;

    const photoElement = this._element.querySelector('.element__container-photo');
    photoElement.src = this._link;
    photoElement.alt = this._name;

    this._setEventListeners();

    return this._element;
  }
}






