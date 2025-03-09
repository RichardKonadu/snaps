import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import PhotoPage from "./pages/PhotoPage/PhotoPage";

export default function App() {
  const [tagsDrawerVisible, setTagsDrawerVisible] = useState(false);
  const handleTagsDrawerVisbility = () => {
    setTagsDrawerVisible(!tagsDrawerVisible);
  };

  return (
    <>
      <BrowserRouter>
        <Header
          handleTagsDrawerVisbility={handleTagsDrawerVisbility}
          tagsDrawerVisible={tagsDrawerVisible}
        />
        <Routes>
          <Route
            path="/"
            element={<Homepage tagsDrawerVisible={tagsDrawerVisible} />}
          />
          <Route path="/photo/:photoId" element={<PhotoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
