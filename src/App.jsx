import { useState } from "react";
import "./App.scss";
import CardList from "./components/CardList/CardList";
import Header from "./components/Header/Header";
import TagList from "./components/TagList/TagList";

function App() {
  const [tagsVisible, setTagsVisible] = useState(false);

  const handleTagsVisbility = () => {
    setTagsVisible(!tagsVisible);
  };

  return (
    <>
      <Header handleTagsVisbility={handleTagsVisbility} />
      {tagsVisible ? <TagList /> : <></>}
      <CardList />
    </>
  );
}

export default App;
