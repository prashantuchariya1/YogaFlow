import React from "react";
import { useState, useEffect } from "react";
import style from "./LoginCard.module.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
export default function LoginCard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    localStorage.removeItem("token");
  },[navigate])

    

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const resp = await response.json();
      console.log(resp.message);

      if (resp.token) {
        localStorage.setItem("token", resp.token);
        Swal.fire({
          icon: "success",
          title: "Welcome!",
          text:`${resp.message}`
        }).then(() => {navigate('/')})
      }
      else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:`${resp.message}`
        });
      }

      // Reset email and password on successful login (based on your logic)
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error('Fetch error:', error);
      // Handle errors, maybe set an error message in state to show to the user
    }
  };

  return (
    <div className={style.LoginCard}>
      <div className={style.container}>
        <div className={style.col}>
          <div className={style.top_section}>
           <Link to="/">YOGA</Link>
            <p>Sign into your account</p>
          </div>
          <div className={style.Middle_section}>
            <div className={style.response}></div>
            <form onSubmit={handleSubmit}>
              <div className={`${style.row1} ${style.row}`}>
                <input
                  value={email}
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
              <div className={`${style.row2} ${style.row}`}>
                <input
                  value={password}
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <i class="fa fa-lock" aria-hidden="true"></i>
                {/* <i class="fa-light fa-envelope"></i> */}
                {/* <i class="fa-thin fa-lock-keyhole"></i> */}
              </div>
              <div className={`${style.row3} ${style.row}`}>
                <div className={style.checkbox}>
                  <input type="checkbox" />
                  <label>Remember me</label>
                </div>
                <a href="">Forget your password?</a>
              </div>
              <div className={style.btn_wrapper}>
                <input type="submit" value="Login" />
              </div>
            </form>
          </div>
          <div className={style.bottom_section}>
            <div className={style.line}>
              <div></div>
              <span>Or Login With</span>
              <div></div>
            </div>
            <div className={style.socialMedia}>
              <i class="fa fa-facebook"></i>
              <i class="fa fa-twitter"></i>
              <i class="fa fa-google"></i>
              <i class="fa fa-linkedin"></i>
            </div>
            <div className={style.txt_register}>
              <span>Don't have an account? </span>
              <Link to="/signup">
                <a href="">Register here</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
