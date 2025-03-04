import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import PhotoPage from "./pages/PhotoPage/PhotoPage";

export default function App() {
  const [tagsVisible, setTagsVisible] = useState(false);
  const handleTagsVisbility = () => {
    setTagsVisible(!tagsVisible);
  };

  return (
    <>
      <BrowserRouter>
        <Header
          handleTagsVisbility={handleTagsVisbility}
          tagsVisible={tagsVisible}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                tagsVisible={tagsVisible}
                handleTagsVisbility={handleTagsVisbility}
              />
            }
          />
          <Route path="/photo/:photoId" element={<PhotoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
