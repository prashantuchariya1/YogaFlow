import React from "react";
import style from "./CardFooter.module.css";
export default function CardFooter() {
  return (
    <div className={style.CardFooter}>
      <div className={style.container}>
        <div className={style.card_wrapper}>
          <div className={style.row}>
            <div className={style.subscribe_content}>
              <h5>subscribe now</h5>
              <h2>Get the Latest Updates With Our Newletter</h2>
            <form action="">
              <div className={style.input_field}>
              <input type="email" placeholder="Enter You Email"/>
              </div>
              <button className={style.btn}>Subscribe</button>
            </form>
            </div>
            <div className={style.img_left_container}>
              <img className={style.subscribe_image} src="https://res.cloudinary.com/do6tjvges/image/upload/v1675809049/docs/subscribe_image_ulala7.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
