import React, {useContext} from "react";
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const {_id, name, about, avatar} = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards()])
    .then(([initialCards]) => {
      setCards(initialCards);
    })
    .catch(err => alert(err))
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === _id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => {
        setCards(state => state.map(c => c._id === card._id ? newCard : c));
      })
      .catch(err => alert(err))
  }
  
  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards(cards => cards.filter(c => c._id !== card._id))
      })
      .catch(err => alert(err))
  }

  return (
    <main className="content">
      <section className="profile" aria-label="Профиль пользователя">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          { avatar && (<img className="profile__avatar" alt="Аватар пользователя" src={avatar} />) }
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{name}</h1>
          <p className="profile__subtitle">{about}</p>
          <button type="button" className="profile__edit-button" onClick={onEditProfile} />
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace} />
      </section>

      <section className="cards" aria-label="Интересные места России">
        { cards.map(card => (
          <Card
            key={card._id} {...card}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        )) }
      </section>
    </main>
  );
}

export default Main;
