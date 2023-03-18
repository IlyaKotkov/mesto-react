import Jak from '../images/Jak.jpg'



function Main() {

    //  const handleEditAvatarClick = document.querySelector(".profile__editAvatarButton")
    // const handleEditProfileClick = document.querySelector(".profile__editButton")
    //  const handleAddPlaceClick = document.querySelector(".profile__addButton")
    //  const popupTypeEdit = document.querySelector(".popup_type_edit")
    //  const popupTypeAdd = document.querySelector(".popup_type_add")
    //  const popupTypeEditAvatar = document.querySelector(".popup_type_editAvatar")


    //  handleEditProfileClick.addEventListener("click", () => {
    //      popupTypeEdit.classList.add("popup_opened")
    //  })

    //  handleEditAvatarClick.addEventListener("click", () => {
    //      popupTypeEditAvatar.classList.add("popup_opened")
    //  })

    //  handleAddPlaceClick.addEventListener("click", () => {
    //      popupTypeAdd.classList.add("popup_opened")
    //  })

    return(
        <main className="page__container">
        <section className="profile">
          <div className="profile__container">
            <img
              className="profile__avatar"
              src={Jak}
              alt="Аватар"
            />
            <button className="profile__editAvatarButton" />
            <div className="profile__info">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button
                className="profile__editButton"
                type="button"
                aria-label="Редактировать"
              />
              <p className="profile__description">Исследователь океана</p>
            </div>
          </div>
          <button
            className="profile__addButton"
            type="button"
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