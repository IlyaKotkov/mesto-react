function PopupWithForm(props) {
     
  

  
  return (
        <div className={props.isOpen ? `popup popup_type${props.name} "popup_opened"` : `popup popup_type${props.name}`}>
        <div className="popup__container">
          <button className="popup__closed" type="button" />
          <h2 className="popup__editHeader">{props.title}</h2>
          <form className="popup__form" name={props.name} noValidate>
          <div className="popup__edit">
          <label className="popup__label">
              {props.children}
              </label>
            </div>
            <button className="popup__submit" type="submit">
              {props.submit}
            </button>
          </form>
        </div>
      </div>
    )
}

export default PopupWithForm