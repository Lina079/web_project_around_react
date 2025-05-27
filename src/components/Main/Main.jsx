import { useState} from 'react';
import initialCards from '../../utils/cardsData';
import Card from '../Card/Card';
import NewCard from './components/NewCard/NewCard';
import Popup from '../Popup/Popup';
import Profile from '../Profile/Profile';
import EditProfile from '../EditProfile/EditProfile';
import ImagePopup from './components/ImagePopup/ImagePopup';
import EditAvatar from './components/EditAvatar/EditAvatar';
import ConfirmDelete from './components/ConfirmDelete/ConfirmDelete';

  export default function Main() {
    const [cards, setCards] = useState(initialCards);
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

  function handleConfirmDelete(){
    setCards((prevCards) =>
      prevCards.filter((c) => c._id !== cardToDelete._id)
    );
    setCardToDelete(null);
  }

  return (
    <main className="content page__section">
      <Profile
        onEdit={() => setPopup(editProfilePopup)}
        onAdd={() => setPopup(newCardPopup)}
        onEditAvatar={() => setPopup(editAvatarPopup)}
      />

      <section className="elements">
       {cards.map((card, index) => (
        <Card
        key={index}
        card={card}
        onImageClick={setSelectedImage}
        onDelete={() => setCardToDelete(card)}
        />
       ))}
      </section>

      {popup && (
      <Popup onClose={() => setPopup(null)} title={popup.title}>
      {popup.children}
      </Popup>
    )}
      {selectedImage && (
        <ImagePopup
          link={selectedImage.link}
          name={selectedImage.name}
          onClose={() => setSelectedImage(null)}
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






