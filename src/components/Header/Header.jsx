import "../Header/Header.scss";
import FilterSvg from "../FilterSvg/FilterSvg";
import { Link, useParams } from "react-router-dom";

export default function Header({ handleTagsVisbility, tagsVisible }) {
  return (
    <>
      <nav className="nav">
        <Link to={"/"}>
          <h2 className="nav__title">Snaps</h2>
        </Link>
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
