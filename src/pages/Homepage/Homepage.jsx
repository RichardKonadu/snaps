import { useState } from "react";
import Content from "../../components/Content/Content";

export default function Homepage({ tagsVisible, handleTagsVisbility }) {
  const [selectedTag, setSelectedTag] = useState("");

  const handleSelectedTag = (tag) => {
    setSelectedTag(selectedTag === tag ? "" : tag);

    if (selectedTag === tag) {
      setSelectedTag("");
    } else {
      setSelectedTag(tag);
    }
  };

  return (
    <Content
      tagsVisible={tagsVisible}
      selectedTag={selectedTag}
      handleSelectedTag={handleSelectedTag}
      handleTagsVisbility={handleTagsVisbility}
    />
  );
}
