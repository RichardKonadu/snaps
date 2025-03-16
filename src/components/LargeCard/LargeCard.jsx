import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../LargeCard/LargeCard.scss";
import like from "../../assets/images/icons/Like_Outline.svg";
import axios from "axios";
import { ClipLoader } from "react-spinners";

export default function LargeCard() {
  const [singlePhoto, setSinglePhoto] = useState(null);
  const { id } = useParams();
  const [error, setError] = useState(false);

  const fetchPhoto = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/photos/${id}`
      );
      setSinglePhoto(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  if (error) {
    return <p>Some went wrong!</p>;
  }

  if (!singlePhoto) {
    return <ClipLoader />;
  }

  const date = new Date(singlePhoto.timestamp);

  return (
    <article className="photopage-card">
      <div className="photopage-card__image-wrapper">
        <img
          className="photopage-card__image"
          src={`${import.meta.env.VITE_BACKEND_URL}/${singlePhoto.photo}`}
          alt={singlePhoto.photoDescription}
        />
      </div>
      <ul className="photopage-card__tags">
        {singlePhoto.tags.map((tag) => {
          return (
            <li key={tag} className="photopage-card__tag">
              {tag}{" "}
            </li>
          );
        })}
      </ul>
      <ul className="card__ul">
        <li className="card__likes">
          <img className="card__heart" src={like} alt="like button" />

          {singlePhoto.likes}
        </li>
        <li className="photopage-card__photographer-tablet">
          Photo by {""}
          {singlePhoto.photographer}
        </li>
        <li className="card__date">{date.toLocaleDateString()}</li>
      </ul>
      <p className="photopage-card__photographer">
        Photo by {""}
        {singlePhoto.photographer}
      </p>
    </article>
  );
}
