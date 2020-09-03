import React from "react";
import { members, sponsors } from "../../data.js";
// import Sidebar from "./Sidebar";
// import Helena from '../img/team/Helena.webp'

export default function Team() {
  return (
    <div className="team">
      {/* <Sidebar
        title="Team Members"
        list={members.map((member) => member.name)}
      /> */}
      <div className="team__members">
        <div className="team__header">
          <h2 className="text-size-2 light-yellow">Meet our Lovely Team Members!</h2>
          <h3 className="text-size-3">Making the world better one dinner at a time</h3>
        </div>
        <ul className="team__list">
          {members.map(({ name, avatar }) => {
            return (
              <li key={name} className="team__item">
                <img
                  src={avatar}
                  alt="Teammember Avatar"
                  className="team__img"
                />
                <b></b>
                <h3 className="text-size-3_5">{name}</h3>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="sponsors">
        <div className='sponsor__header'>
          <h2 className="text-size-2">And our sponsors...</h2>
        </div>
        <ul className="sponsor__list">
          {sponsors.map(({ name, avatar }) => {
            return (
              <li key={name} className={`sponsor__item ${name}`}>
                <img
                  src={avatar}
                  alt="Sponsor Avatar"
                  className="sponsor__img"
                />
                <b></b>
                <h3 className="text-size-3_5">{name}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}