import { Link } from "react-router-dom";
import "./Card.scss";

export default function Card({ photo, tagsDrawerVisible }) {
  return (
    <article className={`card ${tagsDrawerVisible ? "card__active" : ""}`}>
      <div className="card__image__wrapper">
        <p className="card__photographer">{photo.photographer}</p>
        <Link key={photo.id} to={`/photo/${photo.id}`}>
          <img className="card__image" src={photo.photo} alt="" />
        </Link>
      </div>
      <ul className="card__tags">
        {photo.tags.map((tag, index) => {
          return (
            <li key={index} className="card__tags__item">
              {tag}{" "}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
