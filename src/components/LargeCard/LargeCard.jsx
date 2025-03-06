import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../LargeCard/LargeCard.scss";
import like from "../../assets/images/icons/Like_Outline.svg";
import axios from "axios";

const API_KEY = "4eca160b-03d9-48da-9c9b-80ca921f8809";

export default function LargeCard() {
  const [singlePhoto, setSinglePhoto] = useState(null);
  const { photoId } = useParams();

  const fetchPhoto = async () => {
    try {
      const { data } = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}?api_key=${API_KEY}`
      );
      setSinglePhoto(data);
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
          src={singlePhoto.photo}
          alt=""
        />
      </div>
      <ul className="photopage__card__tags">
        {singlePhoto.tags.map((tag, index) => {
          return (
            <li key={index} className="photopage__card__tags__item">
              {tag}{" "}
            </li>
          );
        })}
      </ul>
      <ul className="photopage__card__ul__wrapper">
        <li>
          <img src={like} alt="like button" />
          {singlePhoto.likes}
        </li>
        <li>{date.toDateString()}</li>
      </ul>
      <p>
        Photo by {""}
        {singlePhoto.photographer}
      </p>
    </article>
  );
}
