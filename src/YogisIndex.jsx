import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";

export function YogisIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="yogis-index">
      <h1> Our YogiBear Instructors </h1>
      Search by instructor name:
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="titles" />
      <datalist id="titles">
        {props.yogis.map((yogi) => (
          <option key={yogi.id}>{yogi.name}</option>
        ))}
      </datalist>
      {props.yogis
        .filter((yogi) => yogi.name.toLowerCase().includes(searchFilter.toLowerCase()))

        .map((yogi) => (
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
