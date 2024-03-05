import React, { useEffect } from "react";
import { useState } from "react";
import style from "./SignUpCard.module.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
// import sha256 from 'crypto-js/sha256';
export default function SignUpCard() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [tc, setTc] = useState(false);
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");

  useEffect(() => {
    localStorage.removeItem("token");
  },[navigate])

  // const hashedPassword = sha256(password).toString();
  // const hashedpassword_confirmation = sha256(password).toString();
  const handleSubmit = async (event) => {
    event.preventDefault();

     // Check if passwords match
     if (password !== password_confirmation) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match!",
      });
      return; // Stop the function if the passwords don't match
    }

    // Check if terms and conditions are accepted
    if (!tc) {
      Swal.fire({
        icon: "warning",
        title: "Please Agree to Terms",
        text: "You must agree to the terms and conditions to register",
      });
      return; // Stop the function if terms and conditions are not accepted
    }


    try {
      const response = await fetch("http://localhost:8000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email,
          password,
          password_confirmation,
          tc,
          address,
          dob,
          gender,
          facebook,
          twitter,
          instagram,
        }),
      });
      const data = await response.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        Swal.fire({
          icon: "success",
          title: "Welcome!",
          text: `${data.message}`,
        }).then(() => {
          navigate("/");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${data.message}`,
        });
      }
      console.log(data.message);
      // Clear form fields
      setFullName("");
      setEmail("");
      setPassword("");
      setPassword_confirmation("");
      setTc(false);
      setAddress("");
      setDob("");
      setGender("");
      setFacebook("");
      setTwitter("");
      setInstagram("");
    } catch (error) {
      console.error("Error during registration:", error);
      navigate("/signup");
    }
  };

  return (
    <div className={style.SignupCard}>
      <div className={style.container}>
        <div className={style.col}>
          <div className={style.top_section}>
            <Link to="/">YOGA</Link>
            <p>Create an account</p>
          </div>
          <div className={style.Middle_section}>
            <form onSubmit={handleSubmit}>
              <div className={`${style.row5} ${style.row}`}>
                <input
                  value={fullName}
                  name="fullname"
                  type="text"
                  placeholder="Full Name"
                  onChange={(event) => {
                    setFullName(event.target.value);
                  }}
                />
                <i class="fas fa-user"></i>
              </div>
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
              </div>
              <div className={`${style.row4} ${style.row}`}>
                <input
                  value={password_confirmation}
                  name="PasswordCheck"
                  type="password"
                  placeholder="Re-Enter Password"
                  onChange={(event) => {
                    setPassword_confirmation(event.target.value);
                  }}
                />

                <i class="fa fa-cogs" aria-hidden="true"></i>
              </div>
              <div className={`${style.row6} ${style.row}`}>
                <input
                  value={address}
                  name="address"
                  type="text"
                  placeholder="Adderss"
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                />

                <i class="fa fa-home" aria-hidden="true"></i>
              </div>
              <div className={`${style.row7} ${style.row}`}>
                <select
                  value={gender}
                  name="gender"
                  onChange={(event) => {
                    setGender(event.target.value);
                  }}
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <i className="fa fa-users" aria-hidden="true"></i>
              </div>
              <div className={`${style.row8} ${style.row}`}>
                <input
                  value={dob}
                  name="dob"
                  type="date"
                  placeholder="Date of Birth"
                  onChange={(event) => {
                    setDob(event.target.value);
                  }}
                />

                {/* <i class="fa fa-users" aria-hidden="true"></i> */}
              </div>
              <div className={`${style.row3} ${style.row}`}>
                <div className={style.checkbox}>
                  <input
                    checked={tc}
                    type="checkbox"
                    onChange={(event) => {
                      setTc(event.target.checked);
                    }}
                  />
                  <label>Accept terms and condition</label>
                </div>
                {/* <a href="">Forget your password?</a> */}
              </div>
              <div className={style.btn_wrapper}>
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
          <div className={style.bottom_section}>
            <div className={style.line}>
              <div></div>
              <span>Or Signup With</span>
              <div></div>
            </div>
            <div className={style.socialMedia}>
              <i class="fa fa-facebook"></i>
              <i class="fa fa-twitter"></i>
              <i class="fa fa-google"></i>
              <i class="fa fa-linkedin"></i>
            </div>
            <div className={style.txt_register}>
              <span>Already have an account? </span>
              <Link to="/login">
                <a href="">Login here</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
