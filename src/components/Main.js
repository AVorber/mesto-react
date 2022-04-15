import React, {useContext} from "react";
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const {name, about, avatar} = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards()])
    .then(([initialCards]) => {
      setCards(initialCards);
    })
    .catch(err => alert(err))
  }, []);

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
        { cards.map(card => ( <Card key={card._id} {...card} onCardClick={onCardClick} /> )) }
      </section>
    </main>
  );
}

export default Main;
