import React from "react";
import Principle1 from "../../img/team/involved_1_Converted.jpg";
import Principle2 from "../../img/team/involved_2_Converted.jpg";
import Principle3 from "../../img/team/involved_3_Converted.jpg";
import Stripe from "./Stripe";

export default function Involved() {
  return (
    <div className="involved">
      <div className="involved__header">
        <h2 className="text-size-2 light-yellow">Get Involved</h2>
        <p className="text-size-3">
          Contribute to the Night Market
        </p>
      </div>
      <div className="involved__items-container">
        <div className="involved__item">
          <img src={Principle1} alt="Involved Pic" className="involved__img" />
          <div className="involved__text">
            <h3 className="text-size-3">Donate Money</h3>
            <p className="text-size-4 involved__text-p">Every dollar counts.</p>
            <Stripe >
              <button className="btn btn__involved">Donate</button>
            </Stripe>
          </div>
        </div>
        <div className="involved__item">
          <img src={Principle2} alt="Involved Pic" className="involved__img" />
          <div className="involved__text">
            <h3 className="text-size-3">Donate Food</h3>
            <p className="text-size-4 involved__text-p">
              For restaurants and local business.
            </p>
            <a href='/contact' className="btn btn__involved">Get in Touch</a>
          </div>
        </div>
        <div className="involved__item">
          <img src={Principle3} alt="Involved Pic" className="involved__img" />
          <div className="involved__text">
            <h3 className="text-size-3">Volunteer</h3>
            <p className="text-size-4 involved__text-p">
              Your time is valuable.
            </p>
            <a href='/contact' className="btn btn__involved">Get in Touch</a>
          </div>
        </div>
      </div>
    </div>
  );
}
