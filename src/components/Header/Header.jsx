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
    </>
  );
}
