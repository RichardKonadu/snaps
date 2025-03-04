import "./TagList.scss";
import Tag from "../Tag/Tag";
import { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = "4eca160b-03d9-48da-9c9b-80ca921f8809";

export default function TagList({ handleSelectedTag, selectedTag }) {
  const [tagsData, setTagsData] = useState(null);

  const fetchTags = async () => {
    try {
      const { data } = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/tags?api_key=${API_KEY}`
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
