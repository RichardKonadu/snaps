import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import photoData from "./data/photos.json";
import Content from "./components/Content/Content";

function App() {
  const [tagsVisible, setTagsVisible] = useState(false);
  const [photosData, setPhotosData] = useState(photoData);
  const [selectedTag, setSelectedTag] = useState("");

  const handleSelectedTag = (tag) => {
    setSelectedTag(selectedTag === tag ? "" : tag);

    if (selectedTag === tag) {
      setSelectedTag("");
    } else {
      setSelectedTag(tag);
    }
  };

  const handleTagsVisbility = () => {
    setTagsVisible(!tagsVisible);
  };

  return (
    <>
      <Header
        handleTagsVisbility={handleTagsVisbility}
        tagsVisible={tagsVisible}
      />
      <Content
        tagsVisible={tagsVisible}
        photosData={photosData}
        selectedTag={selectedTag}
        handleSelectedTag={handleSelectedTag}
      />
      {/* footer */}
    </>
  );
}

export default App;
