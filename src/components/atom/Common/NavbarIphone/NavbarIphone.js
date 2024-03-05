import React,{useState, useEffect} from 'react'
import style from './NavbarIphone.module.css'
import {RiAdminLine} from "react-icons/ri";
import {BsCart3} from "react-icons/bs";
import {IoSearch} from "react-icons/io5";
import { Link } from 'react-router-dom';


export default function NavbarIphone() {
    const [show, setShow] = useState(false)
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


  const styleIcons = { color: "#737373", fontSize: "1.2em" }
    const searchIcon = { color: "#737373", fontSize: "1.2em" }
  return (
    <div className={style.siteNavbar}>
        <div className={style.container}>
            <div className={style.hamburger}  onClick={()=>setShow(prev => !prev)}>
                <div className={style.bar1} style={{transform:show? "rotate(-45deg) translate(-8px, 3px)": "none" }}></div>
                <div className={style.bar2} style={{opacity: show? "0":"1"}}></div>
                <div className={style.bar3} style={{transform:show? "rotate(45deg) translate(-8px, -3px)": "none" }}></div>
            </div>
            <div className={style.icon}><p>YOGASTIC</p> </div>
            <div className={style.SocialmediaIcon}>
            <div className={style.socialLogoChild}><a href="#"><RiAdminLine style={styleIcons}/></a></div>
          {/* <div className={style.socialLogoChild}><a href="#"><BsCart3  style={styleIcons}/></a></div> */}
            </div>



        </div>
            <div className={style.iphoneMenu} style={{display:show?"block":"none"}}>
                <div className={style.iphoneMenuContainer}>
                <div className={style.search}>
                    <div className={style.searchIcon}><IoSearch style={searchIcon}/></div>
          <input className={style.navSearch} type="text" placeholder="Search Yogastic.com" />
          
        </div>
                <div className={style.iphoneMenuItemContainer}></div>
          <div className={style.iphoneMenuItem}><a href="#" className={style.iphoneMenuItemAnchor}>Home</a> </div>
          <div className={style.iphoneMenuItem}><a href="#" className={style.iphoneMenuItemAnchor}>About Us</a></div>
          <div className={style.iphoneMenuItem}><a href="#" className={style.iphoneMenuItemAnchor}>Services</a></div>
          <div className={style.iphoneMenuItem}><a href="#" className={style.iphoneMenuItemAnchor}>Pages</a></div>
          <div className={style.iphoneMenuItem}><a href="#" className={style.iphoneMenuItemAnchor}>Teams</a></div>
          <div className={style.iphoneMenuItem}><a href="#" className={style.iphoneMenuItemAnchor}>Blogs</a></div>
          <div className={style.iphoneMenuItem}><Link to={data ? "/profile" : "/login"}><a href="#" className={style.iphoneMenuItemAnchor}>{data ? data.user.name : "Login"}</a></Link></div>
        
                </div>
            </div>
        


    </div>
  )
}
