import React from 'react'
import style from './FeedBack.module.css'
import { ImageSlider } from '../../../atom/HomePage/CardFeedback/ImageSlider'
import { SliderData } from '../../../atom/HomePage/CardFeedback/SliderData'
export default function FeedBack() {
  return (
    <div className={style.FeedBack}>
      <div className={style.container}>
        <ImageSlider slides={SliderData}/>

      </div>
    </div>
  )
}
