import React from "react";
import Group from "../../img/team/group1Converted.jpg";
import WavyDiv from "./WavyDiv"

export default function About() {
  return (
    <div className="about">
      <div className="about__header">
        <h2 className="text-size-2 light-yellow letter-spacing-lg">
          About the Davis Night Market
        </h2>
        <h3 className="text-size-3 letter-spacing-sm margin-left-right-md">
          Sustainable practices to fight food insecurity and waste
        </h3>
      </div>
      <div className="about__item">
                <img src={Group} alt="About Pic" className="about__img" />
        {/* <div className="about__text"> */}
          <WavyDiv
            header={
              "The Davis Night Market was established in 2019 in Davis, CA."
            }
            text={
              "Our mission is to reduce food waste and increase food security in Davis while fostering a sense of community."
            }
            type={"about"}
          />
        {/* </div> */}
      </div>
    </div>
  );
}
