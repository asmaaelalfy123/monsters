import React from "react";
import "./search.css";

export default function Search(props) {
  return (
    <input
      className="search"
      type="search"
      placeholder="Search Monsters"
      onChange={props.onChange}
    />
  );
}
