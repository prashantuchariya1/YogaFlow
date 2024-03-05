import React from 'react'
import style from './Card_whatWeOffer.module.css'
export default function Card_whatWeOffer({image, logo, heading, detail_1, detail_2, prise, buttonUrl}) {
  return (
    <div className={style.Card_whatWeOffer}>
      <div className={style.container}>
        <div className={style.card_upper_portion}>
          <div className={style.img_top}>
            <img src={image} alt="" />
          </div>
          <div className={style.logo_top}>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className={style.card_lower_portion}>
          <div className={style.text_all_description}>
            <h3 className={style.heading}>{heading}</h3>
            <div className={style.description_line}>

              <i class="fa-solid fa-check"></i>
              <p className={style.line}>{detail_1}</p>
            </div>
            <div className={style.description_line}>

              <i class="fa-solid fa-check"></i>
              <p className={style.line}>{detail_2}</p>
            </div>
          </div>
          <div className={style.prise_text_wrapper}>
            <p className={style.dollar}>{prise}</p>
            <p className={style.per_month}>/per month</p>
          </div>
          <div className={style.btn_wrapper}>
            <a href={buttonUrl}>Get Started</a>
          </div>
        </div>
      </div>
    </div>

  )
}
