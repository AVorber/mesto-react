import React from "react";
import api from '../utils/api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, initialCards]) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
      setCards(initialCards);
    })
    .catch(err => alert(err))
  }, []);

  return (
    <main className="content">
      <section className="profile" aria-label="Профиль пользователя">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          { userAvatar && (<img className="profile__avatar" alt="Аватар пользователя" src={userAvatar} />) }
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__subtitle">{userDescription}</p>
          <button type="button" className="profile__edit-button" onClick={onEditProfile} />
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace} />
      </section>

      <section className="cards" aria-label="Интересные места России">
        { cards.map(card => ( <Card key={card._id} {...card} onCardClick={onCardClick} /> )) }
      </section>
    </main>
  );
}

export default Main;
