import React from "react";
import LoginCard from "../../../atom/LoginPage/LoginCard/LoginCard";
import style from "./LoginAccount.module.css";
export default function LoginAccount() {
  return (
    <div className={style.CreateAccount}>
      <div className={style.container}>
        <div className={style.cardWrapper}>
          <LoginCard />
        </div>
      </div>
    </div>
  );
}
