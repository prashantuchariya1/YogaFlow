import React from "react";
import style from "./Footer.module.css";
import CardFooter from "../../HomePage/CardFooter/CardFooter";
export default function Footer() {
  return (
    <div className={style.Footer}>
        <div className={style.card_wrapper} >

        <div className={style.card}>
        <CardFooter/>
        </div>
        </div>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.logo}>
            <img src="https://res.cloudinary.com/do6tjvges/image/upload/v1675857149/footer_logo_leso91.png" />
          </div>
          <div className={style.about_wrapper}>
            <div className={style.about_content}>
              <h4>About Us</h4>
              <p>
              Join us at Yoga Center, heal mind body soul. Our teachers and guide self-discovery...
              </p>
              <div className={style.social_icons}>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in mr-0"></i>
              </div>
            </div>
          </div>
          <div className={style.quick_links_wrapper}>
            <div className={style.quick_links_content}>
              <h4>Quick Links</h4>
              <div className={style.quick_list}>
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Services</a>
                <a href="">Team</a>
                <a href="">Contact Us</a>
              </div>
            </div>
          </div>
          <div className={style.contact_info_wrapper}>
            <div className={style.contact_info_content}>
              <h4>Contact Info</h4>

              <div className={style.contact_list}>
                <a className={style.phoneLogo} href="">+91954713658</a>
                <a className={style.emailLogo} href="">Info@yogastic.com</a>
                <a className={style.addressLogo} href="">21 King Street Delhi, 3000, India</a>
              </div>
            </div>
          </div>
        </div>
        <div className={style.copyright}>
          <p>Copyright 2022, Yogastic.com All Rights Reserved.</p>
        </div>
        
      </div>
    </div>
  );
}
