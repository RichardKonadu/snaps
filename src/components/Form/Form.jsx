import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = "4eca160b-03d9-48da-9c9b-80ca921f8809";

export default function Form({ fetchComments }) {
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });

  const [message, setMessage] = useState(false);

  const { photoId } = useParams();

  const postComment = async (name, comment) => {
    try {
      const response = await axios.post(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments?api_key=${API_KEY}`,
        { name, comment }
      );
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //  how do I make it so the new comments show without the page refreshing

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) {
      setMessage("Please fill in all form fields");
      return;
    }
    setFormData({ name: "", comment: "" });
    await postComment(formData.name, formData.comment);
    await fetchComments();
  };

  useEffect(() => {
    setFormData({ name: "", comment: "" });
  }, []);

  return (
    <form onSubmit={handleSubmit} className="comment__form" action="">
      <label className="comment__form__label">
        Name{" "}
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label className="comment__form__label">
        Comment{" "}
        <input
          name="comment"
          type="text"
          value={formData.comment}
          onChange={handleChange}
        />
      </label>
      <button className="comment__form__btn">Submit</button>
      <p>{message && message}</p>
    </form>
  );
}
