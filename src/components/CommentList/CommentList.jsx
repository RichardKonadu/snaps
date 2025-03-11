import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../../components/Comment/Comment";
import Form from "../Form/Form";
import "../CommentList/CommentList.scss";

const API_KEY = "4eca160b-03d9-48da-9c9b-80ca921f8809";

export default function CommentList() {
  const [comments, setComments] = useState("");
  const { photoId } = useParams();

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/photos/${photoId}/comments`
      );
      const sortedComments = data.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
      setComments(sortedComments);
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
    <>
      <Form fetchComments={fetchComments} />
      <div className="comments__wrapper">
        <h3 className="comments__title">
          {comments.length > 1
            ? `${comments.length} Comments`
            : `${comments.length} Comment`}
        </h3>
        {comments.map((comment, index) => {
          return <Comment key={index} comment={comment} />;
        })}
      </div>
    </>
  );
}
