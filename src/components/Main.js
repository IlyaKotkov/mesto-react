import Jak from '../images/Jak.jpg'
import React from 'react';
import api from '../utils/Api';

function Main(props) {

  const [userName, setUserName] = React.useState();
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
      .catch(console.error())
  })

  React.useEffect(() => {
    api.getInitialCards()
    .then((data) => {
      data.map((data) => ({
        likes: data.likes,
        name: data.name,
        link: data.link,
        cardId: data._id
      }))
    })
    .catch(console.error())
  })
  

    return(
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
            onClick= {props.onEditAvatar}
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
        <section className="elements" id="elements">
        <template className="element-template" id="element-template" />
        </section>
      </main>
    )
}

export default Main