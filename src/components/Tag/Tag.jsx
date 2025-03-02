import "./Tag.scss";

export default function Tag({ tag, handleSelectedTag, selectedTag }) {
  return (
    <>
      <li
        onClick={() => {
          handleSelectedTag(tag);
        }}
        className={`tag__btn ${selectedTag === tag ? "tag__btn--active" : ""}`}
      >
        {tag}
      </li>
    </>
  );
}
