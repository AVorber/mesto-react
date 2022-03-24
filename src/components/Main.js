function Main(props) {
  return (
    <main className="content">
      <section className="profile" aria-label="Профиль пользователя">
        <div className="profile__avatar-container">
          <img src={props.avatar} alt="Аватар пользователя" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title" />
          <p className="profile__subtitle" />
          <button type="button" className="profile__edit-button" />
        </div>
        <button type="button" className="profile__add-button" />
      </section>

      <section className="cards" aria-label="Интересные места России">
      </section>
    </main>
  );
}

export default Main;
