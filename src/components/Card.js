
export default function Card(card) {

    const handleClick = () => {
        card.onCardClick(card);
    }

    return (
        <article className="element" key={card.cardId}>
            <button className="element__deleteButton" aria-label="удалить" type="button"></button>
            <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
            <div className="element__container">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__likes">
                    <button className="element__likeButton" type="button" aria-label="Понравилось"></button>
                    <span className="element__likeNumber">{card.likes.lenght}</span>
                </div>
            </div>

        </article>

    )

}