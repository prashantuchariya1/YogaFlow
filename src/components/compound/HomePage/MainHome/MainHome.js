import React from 'react'
import style from './MainHome.module.css'
import Navbar from '../../../atom/Common/Navbar/Navbar'

import NavbarIphone from '../../../atom/Common/NavbarIphone/NavbarIphone'
import Text_itype from '../../../atom/HomePage/Text_itype/Text_itype'

export default function MainHome() {
  return (
    <div className={style.MainHome}>
      <div className={style.navbar_wrapper}>
        <Navbar />
        <NavbarIphone />
        
      </div>
      <div className={style.container}>

        <div className={style.middle_content}>
          <div className={style.txt_all}>
            <h5>START A HAPPY LIFE</h5>
            <h1>Start Healing Your Mind, <Text_itype/></h1>
            {/* <h1><Text_itype/></h1> */}
            <p>Join us at Yoga Center, heal mind-body-soul. Our teachers guide self-discovery, inner peace, balance.</p>
            <div className={style.btn_wrapper}>
              <a href="">Get Started</a>
              </div>
              
          </div>
          <div className={style.img_banner}>
            <img src="https://res.cloudinary.com/do6tjvges/image/upload/v1675087272/docs/banner_right_image_fvqy2x.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
