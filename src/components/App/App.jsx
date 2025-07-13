import { useState, useEffect} from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import api from '../../utils/api';
import Footer from '../Footer/Footer';
import './App.css';
import '../../index.css';



function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo()
      .then(userData => {
        setCurrentUser(userData);
      })
      .catch(error => {
        console.error("Error al cargar la info del usuario:", error);
      });
  }, []);

  function handleUpdateUser(data) {
    api.updateUserInfo(data)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
      })
      .catch((error) => {
        console.error("Error al actualizar la info del usuario:", error);
      });
      }

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="page">
        <Header />
        <main className="page__content">
        <Main onUpdateUser={handleUpdateUser} />
        </main>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App


