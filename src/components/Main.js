import {useEffect, useState, useContext} from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {

  const [cards, setCards] = useState([])
  const currentUser = useContext(CurrentUserContext)

  useEffect(() => {
      api.getInitialCards()
      .then((data) => {
        setCards(
          data.map((data) => ({
            likes: data.likes,
            name: data.name,
            link: data.link,
            cardId: data._id
          }))
        )
      })
      .catch(err => console.log(err))
  }, [])

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
            onClick={props.onEditAvatar}
          />
          <div className="profile__info">
            <h1 className="profile__name" >{currentUser.name}</h1>
            <button
              className="profile__editButton"
              type="button"
              onClick={props.onEditProfile}
              aria-label="Редактировать"
            />
            <p className="profile__description">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__addButton"
          type="button"
          onClick={props.onAddPlace}
          aria-label="Добавить"
        />
      </section>

      <section className="elements">
        {
          cards.map((card) => (
            <Card key={card._id} card={card}  onCardClick={props.onCardClick} onCardLike={props.onCardLike} />
          ))
        }
      </section>
    </main>
  )
  
}

export default Main