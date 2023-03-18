import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";

function App() {
  return (
    <div className="page">
    <Header />
    <Main />
    <Footer />
      

      <div className="popup popup_type_edit">
        <div className="popup__container">
          <button className="popup__closed" type="button" aria-label="Закрыть" />
          <h3 className="popup__editHeader" id="card-popup">
            Редактировать профиль
          </h3>
          <form className="popup__form" id="editForm" name="editForm" noValidate="">
            <div className="popup__edit">
              <label className="popup__label">
                <input
                  name="name"
                  id="card-popup-name-profile"
                  className="popup__input popup__input_type_name"
                  type="text"
                  placeholder="Имя"
                  minLength={2}
                  maxLength={40}
                  required=""
                />
                <span className="card-popup-name-profile-error popup__error" />
              </label>
              <label className="popup__label">
                <input
                  name="about"
                  id="card-popup-job"
                  className="popup__input popup__input_type_job"
                  type="text"
                  placeholder="Деятельность"
                  minLength={2}
                  maxLength={200}
                  required=""
                />
                <span className="card-popup-job-error popup__error" />
              </label>
            </div>
            <button className="popup__submit" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_add">
        <div className="popup__container">
          <button className="popup__closed" type="button" aria-label="Закрыть" />
          <h3 className="popup__editHeader">Новое Место</h3>
          <form className="popup__form" id="addForm" name="addForm">
            <div className="popup__edit">
              <label className="popup__label">
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
              </label>
              <label className="popup__label">
                <input
                  name="link"
                  id="card-popup-url"
                  className="popup__input popup__input_type_url"
                  type="url"
                  placeholder="ссылка на картинку"
                  required=""
                />
                <span className="card-popup-url-error popup__error" />
              </label>
            </div>
            <button className="popup__submit" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

<ImagePopup />

      <div className="popup popup_type_delete">
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
      </div>

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
