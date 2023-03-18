function PopupWithForm(name, title, isOpen, onClose, onSubmit, children) {
     return (

        <div className={`popup popup_type${name} ${isOpen ? "popup_opened" : ""}`}>
        <div className="popup__container">
          <button className="popup__closed" type="button" onClick={onClose}/>
          <h3 className="popup__editHeader" id="card-popup">
            {title}
          </h3>
          <form className={`popup__form popup_type${name}`} name={name} onSubmit={onSubmit} noValidate>
            {children}
            <button className="popup__submit" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
    )
}

export default PopupWithForm