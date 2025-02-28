import "./Card.scss";

export default function Card({ photo }) {
  return (
    <article className="card">
      <p>{photo.photographer}</p>
      <img className="card__image" src={photo.photo} alt="" />

      <ul className="card__tags">
        {photo.tags.map((tag) => {
          return <li className="card__tags__item">{tag}</li>;
        })}
      </ul>
      {/* <h3>name</h3> */}
    </article>
  );
}
