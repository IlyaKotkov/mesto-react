import Jak from '../images/Jak.jpg'



function Main(props) {

    
    return(
        <main className="page__container">
        <section className="profile">
          <div className="profile__container">
            <img
              className="profile__avatar"
              src={Jak}
              alt="Аватар"
            />
            <button 
            className="profile__editAvatarButton" 
            type="button" 
            onClick= {props.onEditAvatar}
            />
            <div className="profile__info">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button
                className="profile__editButton"
                type="button"
                onClick={props.onEditProfile}
                aria-label="Редактировать"
              />
              <p className="profile__description">Исследователь океана</p>
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