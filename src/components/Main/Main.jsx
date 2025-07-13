import { useState, useEffect, useContext} from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Card from '../Card/Card';
import NewCard from './components/NewCard/NewCard';
import Popup from '../Popup/Popup';
import Profile from '../Profile/Profile';
import EditProfile from '../EditProfile/EditProfile';
import ImagePopup from './components/ImagePopup/ImagePopup';
import EditAvatar from '../EditAvatar/EditAvatar';
import ConfirmDelete from './components/ConfirmDelete/ConfirmDelete';
import api from '../../utils/api';

  export default function Main({ onUpdateUser }) {
    const [cards, setCards] = useState([]);
    const [popup, setPopup] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [cardToDelete, setCardToDelete] = useState(null);
    const { currentUser, setCurrentUser} = useContext(CurrentUserContext);

    useEffect(() =>{
      api.getCardList()
        .then((cardsData) => {
          setCards(cardsData);
        })
        .catch((error) => {
          console.error('Error al cargar las tarjetas desde la API:', error);
        });
    }, []);

    const newCardPopup = {
    title: 'Nuevo lugar',
    children: <NewCard />,
  };

  const editProfilePopup = {
  title: 'Editar perfil',
  children:
  <EditProfile
  onUpdateUser= { onUpdateUser }
  onClose={() => setPopup(null)}  />
  };

  const editAvatarPopup = {
    title: 'Cambiar foto de perfil',
    children: (
    <EditAvatar
    onUpdateAvatar={handleUpdateAvatar}
    onClose={() => setPopup (null)}
     />
  ),
  };

  function handleConfirmDelete(){
    setCards((prevCards) =>
      prevCards.filter((c) => c._id !== cardToDelete._id)
    );
    setCardToDelete(null);
  };

  function handleUpdateAvatar({ avatar }) {
    api.setUserAvatar({ avatar })
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
  })
      .catch((error) => {
        console.error('Error al actualizar el avatar:', error);
      });
  }

  return (
    <main className="content page__section">
      <Profile
        onEdit={() => setPopup(editProfilePopup)}
        onAdd={() => setPopup(newCardPopup)}
        onEditAvatar={() => setPopup(editAvatarPopup)}
      />

      <section className="elements">
       {cards.map((card) => (
        <Card
        key={card._id}
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






