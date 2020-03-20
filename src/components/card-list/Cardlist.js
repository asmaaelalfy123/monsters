import React from "react";

import CardName from "../card/cardname";

import "./cardlist.css";

export default function Cardlist({monsters}) {
  return (
    <div className="card-list">
      {monsters.map(monster => (
        <CardName key={monster.id} monster={monster} />
      ))}
    </div>
  );

  //   <ul>
  //   {searchResults.map(item => (
  //    <li>{item}</li>
  //  ))}
  // </ul>
}
