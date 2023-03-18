function ImagePopup() {
    return(
        <div className="popup popup_type_image">
        <figure className="popup__image-container">
          <button className="popup__closed" type="button" aria-label="Закрыть" />
          <img className="popup__image" src="#" alt="" />
          <figcaption className="popup__signature" />
        </figure>
      </div>
    )
}

export default ImagePopup