import React, { useState, useEffect } from "react";
import "./styles.css";
import Cardlist from "./components/card-list/Cardlist";

import Search from "./components/searchbox/search";
import './App.css';
import './index.css';

export default function App() {
  const [monsters, setState] = useState([]);
  const [search, setsearch] = useState("");

  const handleChange = event => {
    setsearch(event.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => setState(users));
  }, []);

  const results = !search
    ? monsters
    : monsters.filter(monster =>
        monster.name.toLowerCase().includes(search.toLocaleLowerCase())
      );

  return (
    <div className="App">
      <h1>monsters Rolodex</h1>
      <Search onChange={handleChange} />

      <Cardlist monsters={results} />
    </div>
  );
}
// import React from "react";

// export const Cardlist=()=>{
//   return <div></div>
// }
