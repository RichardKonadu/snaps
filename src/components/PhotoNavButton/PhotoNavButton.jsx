import { Link } from "react-router-dom";
import arrowSvg from "../../assets/images/icons/Arrow.svg";
import "../PhotoNavButton/PhotoNavButton.scss";

export default function PhotoNavButton() {
  return (
    <Link to={"/"}>
      <button className="photo-nav__btn">
        {" "}
        <img src={arrowSvg} alt="" />
        Home
      </button>
    </Link>
  );
}
