import React from "react";
// import Stripe from "../components/Stripe"
// import Map from "../components/Map"
import Iframe from 'react-iframe'

export default function Media() {
  return (
    <div className="media">
      <div className="media__header">
        <h2 className="text-size-2 light-yellow letter-spacing-lg">Photo & Video Gallery</h2>
        <h3 className="text-size-3 letter-spacing-sm">
          Take a first hand look at what goes on at Night Market
        </h3>
      </div>

      <Iframe
        url="http://www.youtube.com/embed/xDMP3i36naA"
        width="600px"
        height="600px"
        className="myClassname"
        display="initial"
      />
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/A48YJ1YQD5I"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}
    </div>
  );
}
