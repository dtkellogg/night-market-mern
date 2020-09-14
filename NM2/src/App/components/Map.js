import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import logo from "../../img/svg/logo.svg";

export default function Map() {
    const [viewport, setViewport] = React.useState({
      latitude: 38.53941,
      longitude: -121.744511,
      width: "100vw",
      height: "100vh",
      zoom: 14.5,
    });  

    console.log(`mapbox token: ${process.env.REACT_APP_MAPBOX_TOKEN}`)

    return (
      <div className="map">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={
            "pk.eyJ1IjoiZHRrZWxsb2dnIiwiYSI6ImNrZWlzMW9jNDAwYW8yenBmcHM4azQ1NGUifQ.z29ERW4wAUvbgQkoa7By1A"
          }
          mapStyle={"mapbox://styles/dtkellogg/ckeisrodw1jfy19uqag1jvobo"}
          onViewportChange={(viewport) => setViewport(viewport)}
          // scrollZoom={false}
          // zoomEnabled={false}
          // rotateEnabled={false}
          // touchZoomRotate={false}
          dragPan={false}
          // drag={false}
          // userInteractionEnabled={'NO'}
          // showCompass={true}
        >
          <Marker latitude={38.546731} longitude={-121.749011}>
            <div className="text-size-2">Davis Night Market</div>
            <button className="marker-btn">
              <img src={logo} className="Night Market Icon" alt="logo" />
            </button>
          </Marker>
        </ReactMapGL>
      </div>
    );
}