import "../Header/Header.scss";

import { Link, useLocation } from "react-router-dom";
import HomeNavButton from "../HomeNavButton/HomeNavButton";
import PhotoNavButton from "../PhotoNavButton/PhotoNavButton";

export default function Header({
  handleTagsDrawerVisbility,
  tagsDrawerVisible,
}) {
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
            handleTagsDrawerVisbility={handleTagsDrawerVisbility}
            tagsDrawerVisible={tagsDrawerVisible}
          />
        )}
      </nav>
    </>
  );
}
