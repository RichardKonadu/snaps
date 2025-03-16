import "./TagList.scss";
import Tag from "../Tag/Tag";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TagList({ handleSelectedTag, selectedTag }) {
  const [tagsData, setTagsData] = useState(null);

  const fetchTags = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/tags`
      );
      console.log(data[0]);
      setTagsData(data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  if (!tagsData) {
    return;
  }

  return (
    <section className="tags">
      <h2 className="tags__title">Filters</h2>
      <ul className="tags__list">
        {tagsData.map((tag, index) => {
          return (
            <Tag
              key={index}
              handleSelectedTag={handleSelectedTag}
              tag={tag}
              selectedTag={selectedTag}
            />
          );
        })}
      </ul>
    </section>
  );
}
