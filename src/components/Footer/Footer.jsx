import "../Footer/Footer.scss";
import Facebook from "../../assets/images/icons/Facebook.svg";
import X from "../../assets/images/icons/X_twitter.svg";
import Instagram from "../../assets/images/icons/Instagram.svg";
import Pinterest from "../../assets/images/icons/Pinterest.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <h2 className="footer__title">Snaps</h2>
        <div className="footer__content__wrapper">
          <p className="footer__content">
            For photographers <br /> Hire talent <br />
            Inspiration
          </p>
          <p className="footer__content">
            About <br /> Careers <br />
            Support
          </p>
          <ul className="footer__social__desktop">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="footer__social__icon"
              >
                <img
                  className="footer__social__icon__image
            "
                  src={Facebook}
                  alt="Facebook"
                />
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.twitter.com/"
                target="_blank"
                className="footer__social__icon"
              >
                <img
                  className="footer__social__icon__image
            "
                  src={X}
                  alt="Twitter"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="footer__social__icon"
              >
                <img
                  className="footer__social__icon__image
            "
                  src={Instagram}
                  alt="Instagram"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.com/"
                target="_blank"
                className="footer__social__icon"
              >
                <img
                  className="footer__social__icon__image
            "
                  src={Pinterest}
                  alt="Pinterest"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ul className="footer__social">
        <li>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="footer__social__icon"
          >
            <img
              className="footer__social__icon__image
            "
              src={Facebook}
              alt="Facebook"
            />
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://www.twitter.com/"
            target="_blank"
            className="footer__social__icon"
          >
            <img
              className="footer__social__icon__image
            "
              src={X}
              alt="Twitter"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="footer__social__icon"
          >
            <img
              className="footer__social__icon__image
            "
              src={Instagram}
              alt="Instagram"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            className="footer__social__icon"
          >
            <img
              className="footer__social__icon__image
            "
              src={Pinterest}
              alt="Pinterest"
            />
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
