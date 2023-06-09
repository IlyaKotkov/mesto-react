import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main({ cards, onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete }) {

  const currentUser = useContext(CurrentUserContext)

  return (
    <main className="page__container">
      <section className="profile">
        <div className="profile__container">
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Аватар"
          />
          <button
            className="profile__editAvatarButton"
            type="button"
            onClick={onEditAvatar}
          />
          <div className="profile__info">
            <h1 className="profile__name" >{currentUser.name}</h1>
            <button
              className="profile__editButton"
              type="button"
              onClick={onEditProfile}
              aria-label="Редактировать"
            />
            <p className="profile__description">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__addButton"
          type="button"
          onClick={onAddPlace}
          aria-label="Добавить"
        />
      </section>

      <section className="elements">
        {
          cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />
          ))
        }
      </section>
    </main>
  )
}
export default Main