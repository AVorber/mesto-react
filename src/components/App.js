import React from 'react';
import avatar from '../images/kusto.jpg';
import logo from '../images/header-logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page">
      <Header logo={logo} />
      <Main avatar={avatar} />
      <Footer />

      <div className="popup popup_type_profile">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form name="editProfile" className="popup__form" noValidate>
            <fieldset className="popup__input-container">
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
                <span className="popup__field-error name-input-error"></span>
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
                  <span className="popup__field-error about-input-error"></span>
                  <button type="submit" className="popup__save-button">Сохранить</button>
            </fieldset>
          </form>
          <button type="button" className="popup__close-button"></button>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <form name="editAvatar" className="popup__form" noValidate>
            <fieldset className="popup__input-container">
              <input
                type="url"
                name="avatarLink"
                className="popup__field popup__avatar-link-input"
                id="avatar-link-input"
                placeholder="Ссылка на аватар"
                required
              />
                <span className="popup__field-error avatar-link-input-error"></span>
                <button type="submit" className="popup__save-button">Сохранить</button>
            </fieldset>
          </form>
          <button type="button" className="popup__close-button"></button>
        </div>
      </div>

      <div className="popup popup_type_card">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form name="addCard" className="popup__form" noValidate>
            <fieldset className="popup__input-container">
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
                <span className="popup__field-error card-name-input-error"></span>
                <input
                  type="url"
                  name="imageLink"
                  className="popup__field popup__image-link-input"
                  id="image-link-input"
                  placeholder="Ссылка на картинку"
                  required
                />
                  <span className="popup__field-error image-link-input-error"></span>
                  <button type="submit" className="popup__save-button">Создать</button>
            </fieldset>
          </form>
          <button type="button" className="popup__close-button"></button>
        </div>
      </div>

      <div className="popup popup_type_image">
        <div className="popup__image-container">
          <figure className="popup__image-wrapper">
            <img src="#" alt="" className="popup__image" />
              <figcaption className="popup__image-title"></figcaption>
          </figure>
          <button type="button" className="popup__close-button"></button>
        </div>
      </div>

      <div className="popup popup_type_confirm">
        <div className="popup__container">
          <h2 className="popup__title">Вы уверены?</h2>
          <form name="deleteCard" className="popup__form" noValidate>
            <button type="submit" className="popup__save-button">Да</button>
          </form>
          <button type="button" className="popup__close-button"></button>
        </div>
      </div>

      <template className="card-template">
        <article className="card">
          <img src="#" alt="" className="card__image" />
            <div className="card__info">
              <h3 className="card__title"></h3>
              <div className="card__like-wrapper">
                <button type="button" className="card__like-button"></button>
                <span className="card__like-counter"></span>
              </div>
            </div>
            <button type="button" className="card__delete-button"></button>
        </article>
      </template>
    </div>
  );
}

export default App;
