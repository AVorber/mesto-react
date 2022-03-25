import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

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
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        title='Редактировать профиль'
        popupName='profile'
        formName='editProfile'
        buttonTitle='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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
        title='Обновить аватар'
        popupName='avatar'
        formName='editAvatar'
        buttonTitle='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
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
    </div>
  );
}

export default App;
