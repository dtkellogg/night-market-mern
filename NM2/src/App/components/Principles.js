import React from 'react'
import Principle1 from '../../img/team/principles_1_Converted.jpg'
import Principle2 from '../../img/team/principles_2_Converted.jpg'
import Principle3 from '../../img/team/principles_3_Converted.jpg'
import WavyDiv from "./WavyDiv";


export default function Principle() {
    return (
      <div className="principles" id="#principles">
        <div className="principles__header">
          <h2 className="text-size-2 light-yellow">Our Principles</h2>
          <p className="text-size-3 margin-left-right-md">
            Sustainable practices to fight food insecurity and waste
          </p>
        </div>
        
        <div className="principles__item">
          <div className="#">
            <img
              src={Principle1}
              alt="Principles Pic"
              className="principles__img"
            />
          </div>
          {/* <div className="principles__text"> */}
            <WavyDiv
              header={"Promoting Sustainability"}
              text={
                "We strive to maintain sustainable practices throughout every step of our project implementation. We use bikes equipped with carts to transport food so as to minimize our carbon emissions and promote the use of bicycles as transportation. We also aim to repackage food in the least wasteful and most sustainable way: using only compostable packaging."
              }
              type={"principles"}
            />
          {/* </div> */}
        </div>
        <div className="principles__item">
          <img
            src={Principle2}
            alt="Principle Pic"
            className="principles__img"
          />
          {/* <div className="principles__text"> */}
            <WavyDiv
              header={"Creating Community"}
              text={
                "We strive to promote community ties and growth by creating a welcoming environment with music, colorful lights, and a safe space for people to interact. We want to make our service is attractive to food insecure individuals who might not otherwise participate due to the stigma associated with food donations."
              }
              type={"principles"}
            />
          {/* </div> */}
        </div>

        <div className="principles__item">
          <img
            src={Principle3}
            alt="Principle Pic"
            className="principles__img"
          />
          {/* <div className="principles__text"> */}
          <WavyDiv
            header={"Reducing Food Waste and Food Insecurity"}
            text={
              "The Davis Night Market recovers food that would otherwise go to waste from Davis restaurants, bakeries and grocery stores, and make it available for anyone in need."
            }
            type={"principles"}
            className="principles__item-3"
          />
          {/* </div> */}
        </div>
      </div>
    );
}