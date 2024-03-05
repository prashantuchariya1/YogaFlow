import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
export default function Navbar() {
  const [data, setData] = useState(null);
  // console.log(data);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/user/loggeduser",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        // console.log(jsonData);
      } catch (error) {
        console.error(error);
      }
    };
    getUserData();
  }, [token]);

  return (
    <div className={style.Navbar}>
      <div className={style.container}>
        <div className={style.logo}>
          <img
            src="https://res.cloudinary.com/do6tjvges/image/upload/v1674043205/docs/yogastic_logo_oo9lns.png"
            alt="logo"
          />
        </div>
        <div className={style.buttons}>
          <div className={style.nav_link_div}>
            <a className={style.nav_link} href="#">
              Home
            </a>{" "}
          </div>
          <div className={style.nav_link_div}>
            <a className={style.nav_link} href="#">
              About Us
            </a>
          </div>
          <div className={style.nav_link_div}>
            <a className={style.nav_link} href="#">
              Services
            </a>
          </div>
          <div className={style.nav_link_div}>
            <a className={style.nav_link} href="#">
              Pages
            </a>
          </div>
          <div className={style.nav_link_div}>
            <a className={style.nav_link} href="#">
              Teams
            </a>
          </div>
          <div className={style.nav_link_div}>
            <a className={style.nav_link} href="#">
              Blog
            </a>
          </div>
          <Link to={data ? "/profile" : "/login"}>
            {" "}
            <div className={`${style.nav_link_div} ${style.btn_wrapper}`}>
              <a className={style.nav_link} href="#">
                {data ? data.user.name : "Login"}
              </a>
            </div>
          </Link>
          {/* <div className={style.btn_wrapper}><a className={style.nav_link} href="#">Contact Us</a></div> */}
        </div>
      </div>
    </div>
  );
}
