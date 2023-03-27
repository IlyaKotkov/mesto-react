import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import {useEffect, useState} from 'react';
import api from '../utils/Api';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null)
  const [currentUser, setCurrentUser] = useState({
    "name": '',
    "about": '',
    "avatar": '',
    "_id": '',
    "cohort": ''
  })
  const [cards, setCards] = useState([])

  useEffect(() => {
    Promise.all([
      api.getInformation(),
      api.getInitialCards()
    ])
      .then((values) => {
        setCurrentUser(values[0])
        setCards([...values[1]])
      })
      .catch(err => console.log(err))
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  const handleUpdateUser = (data) => {
    api.editUserInfo(data).then(updateUser => {
      setCurrentUser(updateUser)
      closeAllPopups()
    })
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null)
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.setLike(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id ))
      closeAllPopups()
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main
        cards={cards}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <Footer />

      <EditProfilePopup
      isOpen={isEditProfilePopupOpen} 
      onClose={closeAllPopups}
      onUpdateUser={handleUpdateUser}
      />

      <PopupWithForm
        name="add"
        title="Редактировать профиль"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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

      <PopupWithForm
        name="editAvatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          name="avatarInput"
          id="avatar-popup-url"
          className="popup__input popup__input_type_url"
          type="url"
          placeholder="ссылка на аватар"
          required=""
        />
        <span className="avatar-popup-url-error popup__error" />
      </PopupWithForm>

      <ImagePopup
        onClose={closeAllPopups}
        card={selectedCard}
      />

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

    </div>
    </CurrentUserContext.Provider>
  );
}


