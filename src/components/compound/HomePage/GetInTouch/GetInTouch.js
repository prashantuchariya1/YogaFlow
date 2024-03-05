import React from 'react'
import style from './GetInTouch.module.css'
export default function GetInTouch() {
  return (
    <div className={style.GetInTouch}>
      <div className={style.container}>
        <div className={style.flex_row}><div className={style.empty_flex_container_1}>

        </div>
        <div className={style.left_content}>
          <div className={style.txt_all}>
            <h5>GET IN TOUCH</h5>
            <h2 className={style.heading1}>Get a Free</h2>
            <h2>Consultation Now</h2>

          </div>

          <div className={style.form}>
            <form action="#" className={style.form_tag}>
              <div className={`${style.row1} ${style.row}`}>
                <input className={style.fname} type="text" placeholder='First Name' />
                <input className={style.lname} type="text" placeholder='Last Name' />

              </div>
              <div className={`${style.row2} ${style.row}`}>
                <input className={style.pno} type="text" placeholder='Phone' />
                <input className={style.email} type="text" placeholder='Email' />
              </div>
              <div className={`${style.row3} ${style.row}`}>
                <input className={style.message} type="text" placeholder='Message' />

              </div>
              <div className={style.btn_wrapper}>
                <button type='submit'>Get Started</button>
              </div>

            </form>
            </div>
            </div>
            <div className={style.empty_flex_container_2}>
              </div>
              <div className={style.img_banner}>

            <img src="https://res.cloudinary.com/do6tjvges/image/upload/v1676677085/docs/get_in_touch_video_icon_oiw6gy.png" alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}
