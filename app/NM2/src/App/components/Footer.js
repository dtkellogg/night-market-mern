import React from "react";
import Newsletter from './Newsletter'
import logo from "../../img/svg/logo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__pre-space">
        <button
          className="btn__scroll-top row"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          size={50}
        >
          Top &uarr;
        </button>
      </div>

      <div className="row footer-row-2">
        <div className="footer__about">
          <h4 className="text-size-4 line-height-wide grey-light-5">About</h4>
          <a href="../about/">
            <h5 className="text-size-4_5 line-height-v-sm grey-light-8">
              About Us
            </h5>
          </a>
          <a href="../team">
            <h5 className="text-size-4_5 line-height-v-sm grey-light-8">
              Our Team
            </h5>
          </a>
          <a href="../media">
            <h5 className="text-size-4_5 line-height-v-sm grey-light-8">
              Photo and Video Gallery
            </h5>
          </a>
        </div>
        <div className="footer__about">
          <h4 className="text-size-4 line-height-wide grey-light-5">
            Get Involved
          </h4>
          <a href="../contact/">
            <h5 className="text-size-4_5 line-height-v-sm grey-light-8">
              Volunteer
            </h5>
          </a>
          <a href="../contact/">
            <h5 className="text-size-4_5 line-height-v-sm grey-light-8">
              Donate Food
            </h5>
          </a>
          <a href="../contact/">
            <h5 className="text-size-4_5 line-height-v-sm grey-light-8">
              Donate Money
            </h5>
          </a>
        </div>
        <div className="footer__about">
          <h4 className="text-size-4 line-height-wide grey-light-5">
            Sponsors
          </h4>
          <a href="https://www.dickeys.com/">
            <h5 className="text-size-4_5 line-height-v-sm grey-light-8">
              Dickey's BBQ Pit
            </h5>
          </a>
          <a href="https://davisfood.coop/">
            <h5 className="text-size-4_5 line-height-v-sm grey-light-8">
              Davis Food Co-op
            </h5>
          </a>
          <a href="https://www.google.com/search?q=barista+brew+cafe&oq=barista+brew+cafe&aqs=chrome..69i57j46j0.4509j0j4&sourceid=chrome&ie=UTF-8">
            <h5 className="text-size-4_5 line-height-v-sm grey-light-8">
              Barista Brew Cafe
            </h5>
          </a>
          <a href="https://www.gochickpeas.com/">
            <h5 className="text-size-4_5 line-height-v-sm grey-light-8">
              ChickPeas Kitchen
            </h5>
          </a>
        </div>

        <div className="footer__about">
          <h4 className="text-size-4 line-height-wide grey-light-5">
            Sponsors
          </h4>
          <a href="https://www.centene.com/">
            <h5 className="text-size-4_5 line-height-v-sm grey-light-8">
              Centene Corporation
            </h5>
          </a>
          <a href="https://lettersandscience.ucdavis.edu/">
            <h5 className="text-size-4_5 line-height-v-sm grey-light-8">
              UC Davis College of L&S
            </h5>
          </a>
          <a href="https://uppercrustbaking.com/">
            <h5 className="text-size-4_5 line-height-v-sm grey-light-8">
              The Upper Crust Baking Company
            </h5>
          </a>
        </div>
      </div>

      <div className="row footer-row-3">
        <div className="footer__location_and_links">
          <h3 className="text-size-3 line-height-wide grey-light-5">
            The Davis Night Market
          </h3>
          <h4 className="text-size-4 line-height-wide grey-light-7">
            Mondays-Thursdays
          </h4>
          <h4 className="text-size-4 line-height-sm grey-light-7">
            9:00pm - 11:00pm
          </h4>
          <h4 className="text-size-4 line-height-sm grey-light-7">
            Central Park
          </h4>
          <h4 className="text-size-4 line-height-sm grey-light-7">
            325 C St. Davis, CA
          </h4>
        </div>
        <Newsletter />
      </div>
      <div className="legal_and_social_media_links">
        <div className="legal">
          <span className="legal text-size-5">
            &copy; 2020 by Damian Toshi Kellogg.
          </span>
          <span className="legal text-size-5">All rights reserved.</span>
        </div>
      </div>
      <img src={logo} alt="logo" className="footer__logo" />
    </div>
  );
}