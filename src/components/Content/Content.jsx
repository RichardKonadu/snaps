import CardList from "../CardList/CardList";
import TagList from "../TagList/TagList";
import "../Content/Content.scss";

export default function Content({
  tagsVisible,
  photosData,
  selectedTag,
  handleSelectedTag,
}) {
  return (
    <div className="content__wrapper">
      {tagsVisible ? (
        <TagList
          handleSelectedTag={handleSelectedTag}
          selectedTag={selectedTag}
        />
      ) : (
        <></>
      )}
      <div className="test">
        <p className="hero__title">Our Mission;</p>
        <p className="hero__body">
          Provide photographers a space to share photos of the neighborhoods
          they cherish,
          <span className="hero__ body hero__body--italic">
            {" "}
            expressed in their unique style.
          </span>
        </p>
        <CardList photosData={photosData} selectedTag={selectedTag} />
      </div>
    </div>
  );
}
