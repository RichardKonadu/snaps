import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../LargeCard/LargeCard.scss";
import like from "../../assets/images/icons/Like_Outline.svg";
import axios from "axios";

export default function LargeCard() {
  const [singlePhoto, setSinglePhoto] = useState(null);
  const { id } = useParams();

  const fetchPhoto = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/photos/${id}`
      );
      setSinglePhoto(data); // update state
      console.log(data); // check the updated state
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  if (!singlePhoto) {
    return <p>Loading.....</p>;
  }

  const date = new Date(singlePhoto.timestamp);

  return (
    <article className="photopage__card">
      <div className="photopage__card__image__wrapper">
        <img
          className="photopage__card__image"
          src={`${import.meta.env.VITE_BACKEND_URL}/${singlePhoto.photo}`}
          alt=""
        />
      </div>
      <ul className="photopage__card__tags">
        {singlePhoto.tags.map((tag, id) => {
          return (
            <li key={id} className="photopage__card__tags__item">
              {tag}{" "}
            </li>
          );
        })}
      </ul>
      <ul className="photopage__card__ul__wrapper">
        <li className="photopage__card__likes">
          <img
            className="photopage__card__heart"
            src={like}
            alt="like button"
          />

          {singlePhoto.likes}
        </li>
        <li className="photopage__card__photographer__tablet">
          Photo by {""}
          {singlePhoto.photographer}
        </li>
        <li className="photopage__card__date">{date.toLocaleDateString()}</li>
      </ul>
      <p className="photopage__card__photographer">
        Photo by {""}
        {singlePhoto.photographer}
      </p>
    </article>
  );
}
