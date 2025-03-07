import "../Header/Header.scss";

import { Link, useLocation } from "react-router-dom";
import HomeNavButton from "../HomeNavButton/HomeNavButton";
import PhotoNavButton from "../PhotoNavButton/PhotoNavButton";

export default function Header({ handleTagsVisbility, tagsVisible }) {
  const location = useLocation();

  return (
    <>
      <nav className="nav">
        <Link to={"/"}>
          <h2 className="nav__title">Snaps</h2>
        </Link>
        {location.pathname !== "/" ? (
          <PhotoNavButton />
        ) : (
          <HomeNavButton
            handleTagsVisbility={handleTagsVisbility}
            tagsVisible={tagsVisible}
          />
        )}
      </nav>
    </>
  );
}
