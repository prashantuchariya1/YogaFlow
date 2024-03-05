import React from 'react'
import style from './AboutUs.module.css'
export default function AboutUs() {
  return (
    <div className={style.AboutUs}>
      <div className={style.container}>
        <div className={style.row}>
        <div className={style.image_wrapper}>
          <img className={style.img} src="https://res.cloudinary.com/do6tjvges/image/upload/v1674911009/docs/aboutus_image_mx7q7t.png" alt="" />
          </div>
        <div className={style.txt_all}>
          <h5>ABOUT US</h5>
          <h2>Take Your Yoga to the Next Level</h2>
          <p>Choose us for your yoga training needs because we offer experienced instructors, and a supportive  to help you deepen your practice.</p>
          <h6 className={style.aboutus_line_wrapper}>We offer personalized instruction retreats, and private experienced supportive environment.</h6>
          <div className={style.btn_wrapper}><a href="">Get Started</a></div>
        </div>
        </div>
      </div>
    </div>
  )
}
