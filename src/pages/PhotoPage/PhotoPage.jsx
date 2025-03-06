import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PhotoPage.scss";

import Comment from "../../components/Comment/Comment";
import LargeCard from "../../components/LargeCard/LargeCard";

const API_KEY = "4eca160b-03d9-48da-9c9b-80ca921f8809";

export default function PhotoPage() {
  const [comments, setComments] = useState("");
  const { photoId } = useParams();
  const fetchComments = async () => {
    try {
      const { data } = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments?api_key=${API_KEY}`
      );
      setComments(data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  if (!comments) {
    return <p>Loading...</p>;
  }

  return (
    <div className="photopage__content">
      <LargeCard />
      <form className="comment__form" action="">
        <label className="comment__form__label">
          Name <input type="text" />
        </label>
        <label className="comment__form__label">
          Comment <input type="text" />
        </label>
        <button className="comment__form__btn">Submit</button>
      </form>
      <div className="comments__wrapper">
        {comments.map((comment, index) => {
          return <Comment key={index} comment={comment} />;
        })}
      </div>
    </div>
  );
}
