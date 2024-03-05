import React from 'react'
import style from './SignUp.module.css'
import SignUpAccount from '../../components/compound/SignUpPage/SignUpAccount'
export default function SignUp() {
  return (
    <div className={style.signup}>
        <SignUpAccount/>
    </div>
  )
}
