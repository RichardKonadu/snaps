import FilterSvg from "../FilterSvg/FilterSvg";
import "../HomeNavButton/HomeNavButton.scss";

export default function HomeNavButton({
  handleTagsDrawerVisbility,
  tagsDrawerVisible,
}) {
  return (
    <button
      className={`filter-btn ${tagsDrawerVisible ? "filter-btn--active" : ""}`}
      onClick={handleTagsDrawerVisbility}
    >
      <p
        className={`filter-btn__title ${
          tagsDrawerVisible ? "filter-btn__title--active" : ""
        }`}
        onClick={handleTagsDrawerVisbility}
      >
        Filters
      </p>
      <FilterSvg color={!tagsDrawerVisible ? "#1E6655" : "white"} />
    </button>
  );
}
