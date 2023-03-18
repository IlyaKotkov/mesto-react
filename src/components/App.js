import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import { useState } from "react";

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />

      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        submit="Сохранить"
        isOpen={isEditProfilePopupOpen}       
      >
        <>
          <input name="name" id="card-popup-name-profile"
            className="popup__input popup__input_type_name"
            type="text"
            placeholder="Имя"

            required
          />
          <span className="card-popup-name-profile-error popup__error" />

          <input
            name="about"
            id="card-popup-job"
            className="popup__input popup__input_type_job"
            type="text"
            placeholder="Деятельность"

            required
          />
          <span className="card-popup-job-error popup__error" />
        </>
      </PopupWithForm> 
     
      <PopupWithForm
        name="add"
        title="Редактировать профиль"
        submit="Сохранить"
        isOpen={isAddPlacePopupOpen}
      >
        <input
          name="name"
          id="card-popup-name"
          className="popup__input popup__input_type_name"
          type="text"
          placeholder="Название"
          minLength={2}
          maxLength={30}
          required=""
        />
        <span className="card-popup-name-error popup__error" />

        <input
          name="link"
          id="card-popup-url"
          className="popup__input popup__input_type_url"
          type="url"
          placeholder="ссылка на картинку"
          required=""
        />
        <span className="card-popup-url-error popup__error" />
      </PopupWithForm>



      <ImagePopup />

      {/* <div className="popup popup_type_delete">
        <div className="popup__container">
          <button className="popup__closed" type="button" aria-label="Закрыть" />
          <h3 className="popup__editHeader">Вы уверены?</h3>
          <form
            className="popup__form"
            id="confirmationForm"
            name="confirmationForm"
          >
            <button className="popup__submit" type="submit">
              Да
            </button>
          </form>
        </div>
      </div> */}

      <div className="popup popup_type_editAvatar">
        <div className="popup__container">
          <button className="popup__closed" type="button" aria-label="Закрыть" />
          <h3 className="popup__editHeader">Обновить аватар</h3>
          <form className="popup__form" id="editAvatarForm" name="editAvatarForm">
            <div className="popup__edit">
              <label className="popup__label">
                <input
                  name="avatarInput"
                  id="avatar-popup-url"
                  className="popup__input popup__input_type_url"
                  type="url"
                  placeholder="ссылка на аватар"
                  required=""
                />
                <span className="avatar-popup-url-error popup__error" />
              </label>
            </div>
            <button className="popup__submit" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
