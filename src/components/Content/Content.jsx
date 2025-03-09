import CardList from "../CardList/CardList";
import TagList from "../TagList/TagList";
import "../Content/Content.scss";

export default function Content({
  tagsDrawerVisible,
  selectedTag,
  handleSelectedTag,
}) {
  return (
    <div className="content__wrapper">
      {tagsDrawerVisible ? (
        <TagList
          handleSelectedTag={handleSelectedTag}
          selectedTag={selectedTag}
        />
      ) : (
        <></>
      )}
      <div className="hero">
        <p className="hero__title">Our Mission;</p>
        <h1 className="hero__body">
          Provide photographers a space to share photos of the neighborhoods
          they cherish,
          <span className="hero__body hero__body--italic">
            {" "}
            {""}
            expressed in their unique style.
          </span>
        </h1>
        <CardList
          selectedTag={selectedTag}
          tagsDrawerVisible={tagsDrawerVisible}
        />
      </div>
    </div>
  );
}
