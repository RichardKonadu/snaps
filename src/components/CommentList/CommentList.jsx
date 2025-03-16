import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../../components/Comment/Comment";
import Form from "../Form/Form";
import "../CommentList/CommentList.scss";
import { ClipLoader } from "react-spinners";

export default function CommentList() {
  const [comments, setComments] = useState("");
  const { id } = useParams();

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/photos/${id}/comments`
      );
      const sortedComments = data.sort((a, b) => b.timestamp - a.timestamp);
      setComments(sortedComments);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  if (!comments) {
    return <ClipLoader />;
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
