import "./TagList.scss";
import tags from "../../data/tags.json";
import Tag from "../Tag/Tag";

export default function TagList({ handleSelectedTag, selectedTag }) {
  return (
    <section className="tags">
      <h2 className="tags__title">Filters</h2>
      <ul className="tags__list">
        {tags.map((tag, index) => {
          return (
            <Tag
              handleSelectedTag={handleSelectedTag}
              key={index}
              tag={tag}
              selectedTag={selectedTag}
            />
          );
        })}
      </ul>
    </section>
  );
}
