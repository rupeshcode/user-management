import React from "react";
import scss from "./footer.module.scss";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={scss.footer}>
      <div className={scss.flogo_copy}>
        <img
          className={scss.logo}
          src="../assets/images/flogo.png"
          alt="Logo"
        />
        <h6>
          copyright &copy; 2023 ,{" "}
          <span className={scss.txtclr}>Clothes.com</span>{" "}
        </h6>
      </div>
      <div className={scss.listt}>
        <div className={scss.listt_text}>Get To Know Us</div>

        <ul className="acl">
          <li>
            <a className={scss.about_contact_us} href="/menswear/aboutus">
              About Us
            </a>
          </li>
          <li>
            <Link className={scss.about_contact_us} href="/menswear/contactus">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <div className={scss.social}>
        <div className={scss.social_text}>Connect with Us</div>
        <ul className={scss.social_icon}>
          <Link href="/whatsapp">
            <BsWhatsapp className={scss.iconclr} />
          </Link>
          <Link href="/instagram">
            <BsInstagram className={scss.iconclr} />
          </Link>
          <Link href="/facebook">
            <BsFacebook className={scss.iconclr} />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
