import { Link } from "react-router-dom";
import "./Card.scss";

export default function Card({ photo, tagsDrawerVisible }) {
  return (
    <article className={`card ${tagsDrawerVisible ? "card--active" : ""}`}>
      <div className="card__image-wrapper">
        <p className="card__photographer">{photo.photographer}</p>
        <Link to={`/photos/${photo.id}`}>
          <img
            className="card__image"
            src={`${import.meta.env.VITE_BACKEND_URL}/${photo.photo}`}
            alt={photo.photoDescription}
          />
        </Link>
      </div>
      <ul className="card__tags">
        {photo.tags.map((tag) => {
          return (
            <li key={tag} className="card__tags-item">
              {tag}{" "}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
