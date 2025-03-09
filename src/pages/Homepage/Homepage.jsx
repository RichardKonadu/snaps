import { useState } from "react";
import Content from "../../components/Content/Content";

export default function Homepage({ tagsDrawerVisible }) {
  const [selectedTag, setSelectedTag] = useState("");

  const handleSelectedTag = (tag) => {
    setSelectedTag(selectedTag === tag ? "" : tag);
  };

  return (
    <Content
      tagsDrawerVisible={tagsDrawerVisible}
      selectedTag={selectedTag}
      handleSelectedTag={handleSelectedTag}
    />
  );
}
