function PopupWithForm(props) {
     
  

  
  return (
        <div className={`popup${props.isOpen ? ' popup popup_opened' : ''}`}>
        <div className="popup__container">
          <button className="popup__closed" type="button"  onClick={props.onClose}/>
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