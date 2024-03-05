import React from 'react'
import style from './OurServiceCard.module.css'
export default function OurServiceCard({image, heading, description, buttonUrl}) {
  return (

    <div className={style.card}>
      <div className={style.image}><img src= {image} alt="" /></div>
      <div className={style.txt_all}>
        <div className={style.txt_heading}><p>{heading}</p></div>
        <div className={style.txt_description}><p>{description}</p></div>
      </div>
      <div className={style.btn_wrapper}>
        <a href={buttonUrl}><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
      </div>
    </div>


  )
}
