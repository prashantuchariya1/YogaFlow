import React from 'react'
import style from './SliderAtomComponent.module.css'
export default function SliderAtomComponent({feedback,image,name}) {
    console.log(feedback,image,name)
  return (
    <div className={style.SliderComponent}>
        <div className={style.container}>
            
            <div className={style.top_logo}>
            <i class="fa-solid fa-quote-left"></i>
            </div>
            <div className={style.text}>
                <p className={style.txt_feedback}>{feedback}</p>
            </div>
            <div className={style.profile_wrapper}>
                <div className={style.img_user}>
                    <img src={image} alt="" />
                </div>
                <p className={style.name}>{name}</p>
                <p className={style.designation}>Happy client</p>
            </div>
        </div>
    </div>
  )
}
