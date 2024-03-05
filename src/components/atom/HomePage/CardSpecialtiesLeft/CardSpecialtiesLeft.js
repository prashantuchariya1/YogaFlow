import React from 'react'
import style from './CardSpecialtiesLeft.module.css'
export default function CardSpecialtiesLeft({heading, description}) {
  return (
    <div className={style.container}>
         <div className={style.card_specialties}>
         <div className={style.circle2_responsive}>
              <i class="fa-solid fa-circle-check"></i>
              </div>
              <div className={style.card_text}>
                <p className={`${style.specialties_name} ${style.text}`}>{heading}</p>
                <p className={`${style.specialties_paragraph} ${style.text}`}>{description}</p>
              </div>
              <div className={style.circle}>
              <i class="fa-solid fa-circle-check"></i>
              </div>
            
            </div>
    </div>
  )
}
