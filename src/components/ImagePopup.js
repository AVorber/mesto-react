import React from "react";

function ImagePopup({onClose}) {
  return (
    <div className="popup popup_type_image">
      <div className="popup__image-container">
        <figure className="popup__image-wrapper">
          <img src="#" alt="" className="popup__image" />
            <figcaption className="popup__image-title" />
        </figure>
        <button type="button" className="popup__close-button" onClick={onClose} />
      </div>
    </div>
  );
}

export default ImagePopup;
