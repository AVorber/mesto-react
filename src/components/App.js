import React from 'react';
import avatar from '../images/kusto.jpg';
import logo from '../images/header-logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({isOpened: false, name: null, link: null});

  function closeAllPopup() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard({isOpened: false, name: null, link: null})
  }

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

  return (
    <div className="page">
      <Header logo={logo} />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        title={'Редактировать профиль'}
        popupName={'profile'}
        formName={'editProfile'}
        buttonTitle={'Сохранить'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopup}
      >
        <input
          type="text"
          name="name"
          className="popup__field popup__name-input"
          id="name-input"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__field-error name-input-error" />
        <input
          type="text"
          name="about"
          className="popup__field popup__about-input"
          id="about-input"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__field-error about-input-error" />
      </PopupWithForm>

      <PopupWithForm
        title={'Обновить аватар'}
        popupName={'avatar'}
        formName={'editAvatar'}
        buttonTitle={'Сохранить'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopup}
      >
        <input
          type="url"
          name="avatarLink"
          className="popup__field popup__avatar-link-input"
          id="avatar-link-input"
          placeholder="Ссылка на аватар"
          required
        />
        <span className="popup__field-error avatar-link-input-error" />
      </PopupWithForm>

      <PopupWithForm
        title={'Новое место'}
        popupName={'card'}
        formName={'addCard'}
        buttonTitle={'Создать'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopup}
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
        title={'Вы уверены?'}
        popupName={'confirm'}
        formName={'deleteCard'}
        buttonTitle={'Да'}
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopup}
      />

      <ImagePopup
        {...selectedCard}
        onClose={closeAllPopup}
      />
    </div>
  );
}

export default App;
