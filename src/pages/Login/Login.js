import React from 'react'
import LoginAccount from '../../components/compound/LoginPage/LoginAccount/LoginAccount'
import style from './Login.module.css'

import LoginCard from '../../components/atom/LoginPage/LoginCard/LoginCard'
export default function Login() {
  return (
    <>
      <div className={style.login}>

        {/* <LoginCard/> */}


        <LoginAccount />
      </div>
    </>
  )
}
