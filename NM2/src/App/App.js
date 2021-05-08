import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group"
import "../index.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Map from "./components/Map";

// require('dotenv').config();

console.log(`Mapbox Taken (app.js reactside): ${process.env.MAPBOX_TOKEN}`)

// import group from "./img/svg/group.svg";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Media = React.lazy(() => import("./pages/Media"));
const Team = React.lazy(() => import("./pages/Team"));
const Contact = React.lazy(() => import("./pages/Contact"));


export default function App() {
  const location = useLocation()
  console.log(location)

  return (
    <React.Fragment>
      <div className="container__main">
        <Nav />
        <div class="stars"></div>
        <div class="twinkling"></div>
        <div class="clouds"></div>
        <div className="container__body">
          <React.Suspense fallback={<Loading />}>
            <TransitionGroup>
              <CSSTransition timeout={250} classNames="fade" key={location.key}>
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/team" component={Team} />
                  <Route path="/media" component={Media} />
                  <Route path="/contact" component={Contact} />
                  <Route
                    render={() => (
                      <h2 className="text-size-2 _404">404: Page not found</h2>
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </React.Suspense>
        </div>
        <div className="map__overlay" />
        <Map />
        <Footer className="footer" />
      </div>
    </React.Fragment>
  );
}
