import React from "react";
import {Link} from "react-router-dom";
import logoMain from "../../img/svg/logo_main.svg";
// import logoMain2 from "../../img/svg/logo_main_orange.svg";
import Stripe from "../components/Stripe";

export default function Home() {
  return (
    <div className="hero">
      <div className="hero__text-box-logo">
        <img src={logoMain} className="logo__home" alt="Main Logo" />
        <div className="nav__details">
          <h3 className="text-size-3 margin-bottom  letter-spacing-sm">Mondays - Thursdays</h3>
          <div className="line-height-sm">
            <h4 className="text-size-4 letter-spacing-sm">9:00pm - 11:00pm</h4>
            <h4 className="text-size-4 letter-spacing-sm">Central Park</h4>
            <h4 className="text-size-4 letter-spacing-sm">4th St. & C St. Davis, CA</h4>
          </div>
        </div>
      </div>
      <div className="hero__text-box-btns">
        <h1 className="text-size-1 light-yellow letter-spacing-md header">
          <b>Nobody</b> goes to bed hungry.
        </h1>
        <div className="btn__header-container">
          <Stripe >
            <div className="btn__glow-container">
              <button href="#" className="btn__glow-item">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Donate
              </button>
            </div>
          </Stripe>
            <Link to="/contact">
              <div className="btn__glow-container">
                  <button className="btn__glow-item btn__glow-item-1">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Get in touch
                  </button>
              </div>
            </Link>
        </div>
      </div>
    </div>
  );
}
