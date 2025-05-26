import { useState} from 'react';
import Card from '../Card/Card';
import NewCard from './components/NewCard/NewCard';
import Popup from '../Popup/Popup';
import Profile from '../Profile/Profile';
import EditProfile from '../EditProfile/EditProfile';
import ImagePopup from './components/ImagePopup/ImagePopup';
import EditAvatar from './components/EditAvatar/EditAvatar';
import ConfirmDelete from './components/ConfirmDelete/ConfirmDelete';



  export default function Main() {
    const [cards, setCards] = useState ([
    {
    _id: "1",
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    _id: "2",
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    _id: "3",
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    _id: "4",
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    _id: "5",
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    _id: "6",
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
  ]);

    const [popup, setPopup] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [cardToDelete, setCardToDelete] = useState(null);

    const newCardPopup = {
    title: 'Nuevo lugar',
    children: <NewCard />,
  };

  const editProfilePopup = {
  title: 'Editar perfil',
  children: <EditProfile />,
  };

  const editAvatarPopup = {
    title: 'Cambiar foto de perfil',
    children: <EditAvatar />,
  };

  function handleOpenPopup (popupContent) {
    setPopup(popupContent);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleImageClick(card) {
    setSelectedImage(card);
  }

  function closeImagePopup() {
    setSelectedImage(null);
  }

  function handleDeleteClick(card) {
    setCardToDelete(card);
  }

  function handleConfirmDelete(){
    setCards((prevCards) =>
      prevCards.filter((c) => c._id !== cardToDelete._id)
    );
    setCardToDelete(null);
  }

  return (
    <main className="content page__section">
      <Profile
        onEdit={() => handleOpenPopup(editProfilePopup)}
        onAdd={() => handleOpenPopup(newCardPopup)}
        onEditAvatar={() => handleOpenPopup(editAvatarPopup)}
      />

      <section className="elements">
       {cards.map((card, index) => (
        <Card
        key={index}
        card={card}
        onImageClick={() => handleImageClick(card)}
        onDelete={() => handleDeleteClick(card)}
        />
       ))}
      </section>

      {popup && (
      <Popup onClose={handleClosePopup} title={popup.title}>
      {popup.children}
      </Popup>
    )}
      {selectedImage && (
        <ImagePopup
          link={selectedImage.link}
          name={selectedImage.name}
          onClose={closeImagePopup}
        />
      )}
      {cardToDelete && (
        <Popup onClose={() => setCardToDelete(null)} title="¿Estás seguro?">
          <ConfirmDelete onConfirm={handleConfirmDelete} />
        </Popup>
      )}
      </main>
  );
}





