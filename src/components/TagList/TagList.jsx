import "./TagList.scss";
import tags from "../../data/tags.json";
import Tag from "../Tag/Tag";
import Header from "../Header/Header";

export default function TagDrawer({}) {
  return (
    <section className="tags">
      <h2>Filters</h2>
      <ul className="tags__list">
        {tags.map((tag, index) => {
          return <Tag key={index} location={tag} />;
        })}
      </ul>
    </section>
  );
}
