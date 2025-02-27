import "../Header/Header.scss";
import icon from "../../assets/images/icons/filter.svg";

export default function Header({ handleTagsVisbility }) {
  return (
    <>
      <nav className="nav">
        <h3>Snaps</h3>
        <button className="filter__btn" onClick={handleTagsVisbility}>
          Filter
          <img src={icon} alt="" />
        </button>
      </nav>
      <p className="hero__title">Our Mission;</p>
      <p className="hero__body">
        Provide photographers a space to share photos of the neighborhoods they
        cherish,
        <span className="hero__ body hero__body--italic">
          {" "}
          expressed in their unique style.
        </span>
      </p>
    </>
  );
}
