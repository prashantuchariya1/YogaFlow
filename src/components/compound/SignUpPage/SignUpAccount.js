import React from 'react'
import style from './SignUpAccount.module.css'
import SignUpCard from '../../atom/SignUpPage/SignUpCard/SignUpCard'
export default function SignUpAccount() {
  return (
    <div className={style.CreateAccount}>
      <div className={style.container}>
        <div className={style.cardWrapper}>
          <SignUpCard />
        </div>
      </div>
    </div>
  )
}
