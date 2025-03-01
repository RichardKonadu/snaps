import "../Header/Header.scss";
import icon from "../../assets/images/icons/filter.svg";
import FilterSvg from "../FilterSvg/FilterSvg";

export default function Header({ handleTagsVisbility, tagsVisible }) {
  return (
    <>
      <nav className="nav">
        <h2 className="nav__title">Snaps</h2>
        <button
          className={`filter__btn ${tagsVisible ? "filter__btn--active" : ""}`}
          onClick={handleTagsVisbility}
        >
          <p
            className={`filter__btn__title ${
              tagsVisible ? "filter__btn__title--active" : ""
            }`}
            onClick={handleTagsVisbility}
          >
            Filters
          </p>
          <FilterSvg color={!tagsVisible ? "#1E6655" : "white"} />
        </button>
      </nav>
    </>
  );
}
