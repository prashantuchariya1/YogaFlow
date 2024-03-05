import React from 'react'
import style from './CardSpecialtiesRight.module.css'
export default function CardSpecialtiesRight({heading, description}) {
  return (
    <div className={style.container}>
         <div className={style.card_specialties}>
              <div className={style.circle}>
              <i class="fa-solid fa-circle-check"></i>
              </div>
              <div className={style.card_text}>
                <p className={`${style.specialties_name} ${style.text}`}>{heading}</p>
                <p className={`${style.specialties_paragraph} ${style.text}`}>{description}</p>
              </div> 
            </div>
    </div>
  )
}
