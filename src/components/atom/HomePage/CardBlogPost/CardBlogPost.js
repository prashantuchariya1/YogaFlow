import React from 'react'
import style from './CardBlogPost.module.css'
export default function CardBlogPost({image, heading_1, heading_2, buttonUrl }) {
  return (
    <div className={style.CardBlogPost}>
      <div className={style.container}>
        <div className={style.image_container}>
          <img className={style.img_background} src={image} alt="" />
        </div>
        <div className={style.blog_posts_image_content}>
          <p>{heading_1}</p>
          <h4>{heading_2}</h4>
          <div className={style.icon_wrapper}>
            <a href={buttonUrl}><i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}
