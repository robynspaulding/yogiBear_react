import * as React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Row } from "react-bootstrap";
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
      <br />
      <br />
      <Row xs={1} md={2} className="g-4">
        {props.yogis
          .filter((yogi) => yogi.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((yogi) => (
            <div className="row justify-content-center">
              <Card style={{ width: "25rem" }} key={yogi.id} className="card col-2 shadow m-3">
                <Card.Title>{yogi.name}</Card.Title>
                <Card.Img variant="top" width="500" src={yogi.image} />
                <Card.Text align="center">
                  Certified {yogi.yoga_type} yoga instructor
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
                </Card.Text>
              </Card>
            </div>
          ))}
      </Row>
    </div>
  );
}
