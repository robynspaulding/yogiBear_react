import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export function YogisIndex(props) {
  return (
    <div>
      <h1> Our YogiBear Instructors </h1>
      {props.yogis.map((yogi) => (
        <div key={yogi.id}>
          <h2>{yogi.name}</h2>
          {yogi.yoga_type} yoga <br />
          <img width="500" src={yogi.image} />
          <br />
          <Link to={`/yogis/${yogi.id}`}>
            <Button variant="outline-dark" size="md">
              See all of {yogi.name}'s Info
            </Button>
          </Link>
          <br />
          {localStorage.jwt === undefined ? (
            <></>
          ) : (
            <>
              <Button variant="light" size="sm" onClick={() => props.onSelectYogi(yogi)}>
                Admin Edit Actions
              </Button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
