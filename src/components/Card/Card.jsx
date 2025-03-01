import "./Card.scss";

export default function Card({ photo }) {
  return (
    <article className="card">
      <div className="card__image__wrapper">
        <p className="card__photographer">{photo.photographer}</p>
        <img className="card__image" src={photo.photo} alt="" />
      </div>
      <ul className="card__tags">
        {photo.tags.map((tag) => {
          return <li className="card__tags__item">{tag}</li>;
        })}
      </ul>
      {/* <h3>name</h3> */}
    </article>
  );
}
