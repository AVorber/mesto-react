import React from "react";

function Main({avatar, onEditProfile, onAddPlace, onEditAvatar}) {
  return (
    <main className="content">
      <section className="profile" aria-label="Профиль пользователя">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img src={avatar} alt="Аватар пользователя" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title" />
          <p className="profile__subtitle" />
          <button type="button" className="profile__edit-button" onClick={onEditProfile} />
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace} />
      </section>

      <section className="cards" aria-label="Интересные места России">
      </section>
    </main>
  );
}

export default Main;
