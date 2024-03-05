import React from 'react'
import style from './BlogPost.module.css'
import CardBlogPost from '../../../atom/HomePage/CardBlogPost/CardBlogPost'
import { BlogPostData } from './BlogPostData'
export default function BlogPost() {
  return (
    <div className={style.BlogPost}>
      <div className={style.container}>
        <div className={style.txt_all}>
          <h5>Blog Post</h5>
          <h2>Our News Feed</h2>
          <p>Yoga News and Insights Your Go-To Destination for the  Latest Developments, Latest Yoga Trends, Research, and Community News.

          </p>
        </div>

        <div className={style.card_wrapper}>
        {BlogPostData.map((data, index)=>{
              return(
                <div className={style.card}><CardBlogPost image = {data.image} heading_1 = {data.heading_1} heading_2 = {data.heading_2} buttonUrl = {data.buttonUrl}  /></div>
              )

            })}
          
          

        </div>
        <div className={style.btn_wrapper}>
          <a href="">View All Blogs</a>
        </div>
      </div>
    </div>
  )
}


