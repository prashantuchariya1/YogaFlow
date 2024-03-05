import React, { useEffect, useState } from "react";
import Navbar from "../../atom/Common/Navbar/Navbar";
import NavbarIphone from "../../atom/Common/NavbarIphone/NavbarIphone";
import style from "./Profile.module.css";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  // console.log(data);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
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
        navigate("/");
      }
    };
    getUserData();
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className={style.Profile}>
      <div className={style.navbar_wrapper}>
        <Navbar />
        <NavbarIphone />
      </div>
      <div className={style.container}>
        <div className={style.flex_Wrapper}>
          <div className={style.col_1}>
            
          </div>
          <div className={style.col_2}>
            <h2>{"Welcome " +data?.user?.name.charAt(0).toUpperCase(0)+data?.user?.name.slice(1)+ "!"}</h2>
            <div className={style.userDetails}>
              <div className={`${style.row1} ${style.row}`}>
                <span className={style.label}>Email Id:</span>
                <span className={`${style.pno} ${style.data}`}>{data?.user?.email.charAt(0).toUpperCase(0)+data?.user?.email.slice(1)}</span>
              </div>

              <div className={`${style.row2} ${style.row}`}>
                <span className={style.label}>Address:</span>
                <span className={`${style.add} ${style.data}`}>{data?.user?.address.charAt(0).toUpperCase(0)+data?.user?.address.slice(1)}</span>
              </div>
              <div className={`${style.row3} ${style.row}`}>
                <span className={style.label}>Birthday:</span>
                <span className={`${style.birthday} ${style.data}`}>{data?.user?.dob}</span>
              </div>
              <div className={`${style.row4} ${style.row}`}>
                <span className={style.label}>Gender:</span>
                <span className={`${style.gender} ${style.data}`}>{data?.user?.gender.charAt(0).toUpperCase(0)+data?.user?.gender.slice(1)}</span>
              </div>
            </div>
            <div className={style.btn_wrapper}>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
