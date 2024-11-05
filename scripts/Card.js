export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
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
    this._handleCardClick(this._link, this._name);
  }

  _handleDeleteCard(){
    this._element.remove();
    this._element = null;
  }

  _handleLikeCard() {
    this._element.querySelector('.heart-icon')
    .classList.toggle('active');
  }

  _setEventListeners(){
    this._element.querySelector('.element__container-photo')
    .addEventListener('click', () =>
    {this._handleCardClick(this._link, this._name)});
    this._element.querySelector('.element__trash-icon')
    .addEventListener('click', () => {this._handleDeleteCard()});
    this._element.querySelector('.heart-icon')
    .addEventListener('click', () => {this._handleLikeCard()});
  }

  generateCard (){
    this._element = this._getTemplate();
    this._element.querySelector('.element__container-name-place')
    .textContent = this._name;
    this._element.querySelector('.element__container-photo').src = this._link;
    this._element.querySelector('.element__container-photo').alt = this._name;

    this._setEventListeners();

    return this._element;
  }
}



