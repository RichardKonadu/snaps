import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../Form/Form.scss";

const initialFormData = {
  name: "",
  comment: "",
};

export default function Form({ fetchComments }) {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { id } = useParams();

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setFormSubmitted(false);

    let formIsValid = true;
    const errors = {};

    if (!formData.name) {
      formIsValid = false;
      errors["name"] = "You must enter a name for your comment";
    }
    if (!formData.comment) {
      formIsValid = false;
      errors["comment"] = "You must enter a comment for your post";
      console.log(errors);
    }
    if (!formIsValid) {
      setFormErrors(errors);
      return;
    }

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/photos/${id}/comments`,
        formData
      );
      setFormSubmitted(true);
      setFormData(initialFormData);
      setFormErrors({});
      fetchComments();
    } catch (error) {
      throw error;
    }
  };

  return (
    <form onSubmit={submitHandler} className="form" action="">
      <label className="form__label">
        Name{" "}
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={changeHandler}
          className={`form__input ${
            formErrors.name ? "form__input--error" : ""
          }`}
        />
        {formErrors.name && <p className="error">{formErrors.name}</p>}
      </label>
      <label className="form__label">
        Comment{" "}
        <textarea
          name="comment"
          type="text"
          value={formData.comment}
          onChange={changeHandler}
          className={`form__input ${
            formErrors.comment ? "form__input--error" : ""
          }`}
        ></textarea>
        {formErrors.comment && <p className="error">{formErrors.comment}</p>}
      </label>
      <button className="form__btn">Submit</button>
    </form>
  );
}
