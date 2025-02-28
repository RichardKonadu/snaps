import "./Tag.scss";

export default function Tag({ location, handleSelectedTag }) {
  return (
    <>
      <li
        onClick={() => {
          handleSelectedTag(location);
        }}
        className="tag__btn"
      >
        {location}
      </li>
    </>
  );
}
