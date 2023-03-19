import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getInformation()
      .then((data) => {
        setUserName(data.name)
        setUserDescription(data.about)
        setUserAvatar(data.avatar)
      })
      .catch(err => console.log(err))
  })

  React.useEffect(() => {
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
            src={userAvatar}
            alt="Аватар"

          />
          <button
            className="profile__editAvatarButton"
            type="button"
            onClick={props.onEditAvatar}
          />
          <div className="profile__info">
            <h1 className="profile__name" >{userName}</h1>
            <button
              className="profile__editButton"
              type="button"
              onClick={props.onEditProfile}
              aria-label="Редактировать"
            />
            <p className="profile__description">{userDescription}</p>
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
            <Card key={card.cardId} link={card.link} name={card.name} likes={card.likes} onCardClick={props.onCardClick} />
          ))
        }
      </section>
    </main>
  )
}

export default Main