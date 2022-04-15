import React from 'react';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [currentUser, setCurrentUser] = React.useState({});
  const emptyCard = {isOpened: false, name: null, link: null};
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(emptyCard);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard(emptyCard)
  }

  React.useEffect(() => {
    api.getUserInfo()
      .then(data => setCurrentUser(data))
      .catch(err => alert(err))
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  const handleCardClick = card => {
    setSelectedCard({isOpened: true, ...card})
  };

  function handleUpdateUser({name, about}) {
    api.editUserInfo({name, about})
      .then(data => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(err => alert(err))
  }

  function handleUpdateAvatar(avatarLink) {
    api.editUserAvatar(avatarLink)
      .then(data => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(err => alert(err))
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <PopupWithForm
          title='Новое место'
          popupName='card'
          formName='addCard'
          buttonTitle='Создать'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="name"
            className="popup__field popup__card-name-input"
            id="card-name-input"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__field-error card-name-input-error" />
          <input
            type="url"
            name="imageLink"
            className="popup__field popup__image-link-input"
            id="image-link-input"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__field-error image-link-input-error" />
        </PopupWithForm>

        <PopupWithForm
          title='Вы уверены?'
          popupName='confirm'
          formName='deleteCard'
          buttonTitle='Да'
          isOpen={isConfirmPopupOpen}
          onClose={closeAllPopups}
        />

        <ImagePopup
          {...selectedCard}
          onClose={closeAllPopups}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
