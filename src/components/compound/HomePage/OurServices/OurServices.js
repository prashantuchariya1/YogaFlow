import React, { useState } from 'react'
import style from './OurServices.module.css'
import OurServiceCard from '../../../atom/HomePage/OurServiceCard/OurServiceCard'
import { OurServiceCardData } from './OurServiceCardData'
import { SliderData } from '../../../atom/HomePage/CardFeedback/SliderData'
export default function OurServices({slides}) {
  // const [current, setCurrent] = useState(0)
  // const length = slides.length;

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  return (
    <div className={style.OurServices}>
      <div className={style.container}>
        <div className={style.row}>

          <div className={style.txt_all}>
            <h5>OUR SERVICES</h5>
            <h2>Practice Whereever You Want Whenever You Need</h2>
            <p>We offer personalized instruction, workshops, retreats, and private sessions with experienced teachers in a supportive environment. </p>
          </div>
          <div className={style.all_cards}>
            {OurServiceCardData.map((slide, index)=>{
              return(
                <div className={style.card}><OurServiceCard image = {slide.image} heading = {slide.heading} description = {slide.description} buttonUrl = {slide.buttonUrl} /></div>
              )

            })}
            {/* <div className={style.card}><OurServiceCard /></div>
            <div className={style.card}><OurServiceCard /></div>
            <div className={style.card}><OurServiceCard /></div>
            <div className={style.card}><OurServiceCard /></div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
