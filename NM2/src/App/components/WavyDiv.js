import React from "react";
import "../../index.css";

export default function WavyDiv({header, text, type}) {
    // console.log(text);
  return (
    <React.Fragment>
      <div className={`wavy-div-container wavy-container-size__${type}`}>
        <div className="wavy-div-box">
          <div className="wavy-div-content">
            <h3 className="text-size-3 margin-bottom">{header}</h3>
            <p className="text-size-4 line-height-wide">{text}</p>
          </div>
        </div>
      </div>
      <svg className="width-0">
        <filter id="wavy" >
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.02"
            numOctaves="5"
            seed="2"
          >
            <animate
              attributeName="baseFrequency"
              dur="60s"
              values="0.02;0.05;0.02"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="30" />
        </filter>
      </svg>
    </React.Fragment>
  );
}
