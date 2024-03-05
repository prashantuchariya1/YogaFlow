import React from 'react'
import style from './WeOffer.module.css'
import Card_whatWeOffer from '../../../atom/HomePage/Card_whatWeOffer/Card_whatWeOffer'
import { WeOfferData } from './WeOfferData'
export default function WeOffer() {
  return (
    <div className={style.WeOffer}>
      <div className={style.container}>
        <div className={style.txt_all}>
          <h5>WHAT WE OFFER</h5>
          <h2>Our Pricing Plans</h2>
          <p>Exploring the Various Flexible Pricing Plans for Yoga Center Memberships finding the Right Fit for Your Practice and Budget.</p>
        </div>
        <div className={style.cards}>
        {WeOfferData.map((data, index)=>{
              return(
                <Card_whatWeOffer image = {data.image} logo = {data.logo} heading = {data.heading} detail_1 = {data.detail_1} detail_2 = {data.detail_2} prise = {data.prise} buttonUrl = {data.buttonUrl} />
              )

            })}
          {/* <Card_whatWeOffer />
          <Card_whatWeOffer />
          <Card_whatWeOffer /> */}
        </div>


      </div>
    </div>
  )
}
