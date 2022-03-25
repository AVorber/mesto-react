import React from 'react';

const Card = ({name, link, likes}) => {
  return (
    <article className="card">
      <img src={link} alt="" className="card__image" />
        <div className="card__info">
          <h3 className="card__title">{name}</h3>
          <div className="card__like-wrapper">
            <button type="button" className="card__like-button" />
            <span className="card__like-counter">{likes.length}</span>
          </div>
        </div>
        <button type="button" className="card__delete-button" />
    </article>
  );
};

export default Card;
