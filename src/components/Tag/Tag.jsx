import "./Tag.scss";

export default function Tag({ location, handleSelectedTag, selectedTag }) {
  return (
    <>
      <li
        onClick={() => {
          handleSelectedTag(location);
        }}
        className={`tag__btn ${
          selectedTag === location ? "tag__btn tag__btn--active" : ""
        }`}
      >
        {location}
      </li>
    </>
  );
}
