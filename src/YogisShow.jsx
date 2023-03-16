import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookingsNew } from "./BookingsNew";

export function YogisShow() {
  const params = useParams();
  const [yogi, setYogi] = useState({});

  const handleShowYogi = () => {
    axios.get(`http://localhost:3000/yogis/${params.id}.json`).then((response) => {
      setYogi(response.data);
    });
  };

  useEffect(handleShowYogi, []);

  return (
    <div id="yogi-show" className="row justify-content-center">
      <h1>YogiBear Instructor Info</h1>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="card col-2 shadow m-3" style={{ width: "40rem" }}>
        <h2 className="card-title">{yogi.name}</h2>
        <img src={yogi.image} width="500px" />
        <br />
        <p>{yogi.bio}</p>
        <p className="row justify-content-center">Hourly Rate: ${yogi.rate}</p>
        <p className="row justify-content-center">Yoga Type: {yogi.yoga_type}</p>
        <p className="row justify-content-center">
          {" "}
          Location: {yogi.city}, {yogi.state}
        </p>
        <br />
        Times available during the week:
        <br />
        {yogi.available_start_time} - {yogi.available_end_time}
        <p>For alternate times please contact the Yogi directly - {yogi.contact}</p>
      </div>
      <BookingsNew yogi={yogi} />
    </div>
  );
}
