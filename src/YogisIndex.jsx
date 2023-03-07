import * as React from "react";
import { Link } from "react-router-dom";

export function YogisIndex(props) {
  return (
    <div>
      <h1> All YogiBear Instructors </h1>
      {props.yogis.map((yogi) => (
        <div key={yogi.id}>
          <h2>{yogi.name}</h2>
          {yogi.yoga_type} yoga <br />
          <img width="500" src={yogi.image} />
          <br />
          <Link to={`/yogis/${yogi.id}`}>More Info About {yogi.name}</Link>
        </div>
      ))}
    </div>
  );
}
