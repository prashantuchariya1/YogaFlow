import React from "react";
import style from "./OurSpecialities.module.css";
import CardSpecialtiesLeft from "../../../atom/HomePage/CardSpecialtiesLeft/CardSpecialtiesLeft";
import CardSpecialtiesRight from "../../../atom/HomePage/CardSpecialtiesRight/CardSpecialtiesRight";
import { OurSpecialitiesData } from "./OurSpecialitiesData";
export default function OurSpecialities() {
  const css ={
    backgroundColor: "red"
  }
  return (
    <div className={style.OurSpecialities}>
      <div className={style.container}>
        <div className={style.txt_all}>
          <h5>OUR SPECIALTIES</h5>
          <h2>Why Choose Us</h2>
          <p>
            Choose us for your yoga training needs because we offer experienced
            instructors, personalized attention, and a supportive community.
          </p>
        </div>

        <div className={style.image_design}>
          <div className={style.left_card_container}>
            <div className={style.left_all_text}>
              {OurSpecialitiesData.slice(0, 4).map((data, index) => {
                return (
                  <div className={`style.left${index + 1}`}>
                    <CardSpecialtiesLeft heading={data.heading} description={data.description}/>
                  </div>
                );
              })}
            </div>
            <div className={style.left_circle_border}>
              <img
                src="https://res.cloudinary.com/do6tjvges/image/upload/v1675258223/docs/specialties_left_line_rydmkx.png"
                alt=""
              />
            </div>
          </div>
          <div className={style.image}>
            <img
              src="https://res.cloudinary.com/do6tjvges/image/upload/v1675017862/docs/specialties_image_thcejy.png"
              alt=""
            />
          </div>
          <div className={style.right_card_container}>
            <div className={style.right_all_text}>
              {OurSpecialitiesData.slice(4, 8).map((data, index) => {
                return (
                  <div className={`style.right${index + 1}`}>
                    <CardSpecialtiesRight
                      heading={data.heading}
                      description={data.description}
                    />
                  </div>
                );
              })}
            </div>
            <div className={style.right_circle_border}>
              <img
                src="https://res.cloudinary.com/do6tjvges/image/upload/v1675258223/docs/specialties_right_line_mg6mea.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
