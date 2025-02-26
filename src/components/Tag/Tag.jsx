import "./Tag.scss";

export default function Tag({ location }) {
  return (
    <>
      <button className="tag__btn">{location}</button>
    </>
  );
}
