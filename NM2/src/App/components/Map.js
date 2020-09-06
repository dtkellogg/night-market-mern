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
            process.env.REACT_APP_MAPBOX_TOKEN
          }
          mapStyle={process.env.REACT_APP_MAPBOX_STYLES}
          onViewportChange={(viewport) => setViewport(viewport)}
          scrollZoom={false}
        >
          <Marker latitude={38.546921} longitude={-121.745411}>
            <div className="text-size-3">Davis Night Market</div>
            <button className="marker-btn">
              <img src={logo} className="Night Market Icon" alt="logo" />
            </button>
          </Marker>
        </ReactMapGL>
      </div>
    );
}