import FilterSvg from "../FilterSvg/FilterSvg";
import "../HomeNavButton/HomeNavButton.scss";

export default function HomeNavButton({ handleTagsVisbility, tagsVisible }) {
  return (
    <button
      className={`filter-btn ${tagsVisible ? "filter-btn--active" : ""}`}
      onClick={handleTagsVisbility}
    >
      <p
        className={`filter-btn__title ${
          tagsVisible ? "filter-btn__title--active" : ""
        }`}
        onClick={handleTagsVisbility}
      >
        Filters
      </p>
      <FilterSvg color={!tagsVisible ? "#1E6655" : "white"} />
    </button>
  );
}
