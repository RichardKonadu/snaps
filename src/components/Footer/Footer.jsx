import "../Footer/Footer.scss";
import Facebook from "../../assets/images/icons/Facebook.svg";
import X from "../../assets/images/icons/X_twitter.svg";
import Instagram from "../../assets/images/icons/Instagram.svg";
import Pinterest from "../../assets/images/icons/Pinterest.svg";

export default function Footer() {
  return (
    <div className="footer">
      <h2 className="footer__title">Snaps</h2>
      <p className="footer__content">
        For Photographers <br /> Hire Talent <br />
        Inspiration
      </p>
      <p className="footer__content">
        About <br /> Careers <br />
        Support
      </p>
      <ul className="footer__social">
        <li>
          <a href="#" className="footer__social__icon">
            <img src={Facebook} alt="" />
          </a>
        </li>
        <li>
          {" "}
          <a href="#" className="footer__social__icon">
            <img src={X} alt="" />
          </a>
        </li>
        <li>
          <a href="#" className="footer__social__icon">
            <img src={Instagram} alt="" />
          </a>
        </li>
        <li>
          <a href="#" className="footer__social__icon">
            <img src={Pinterest} alt="" />
          </a>
        </li>
      </ul>
      <div className="footer__copyright">
        <p> &copy; 2024 Snaps</p>
        <p> Terms</p>
        <p> Privacy</p>
        <p> Cookies</p>
      </div>
    </div>
  );
}
