import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookingsIndex } from "./BookingsIndex";
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
    <div>
      <h1>Yogi Info</h1>
      <h2>{yogi.name}</h2>
      <img src={yogi.image} width="500px" />
      <p>{yogi.bio}</p>
      <p>Hourly Rate: ${yogi.rate}</p>
      <p>Yoga Type: {yogi.yoga_type}</p>
      <p>
        Location: {yogi.city}, {yogi.state}
      </p>
      <br />
      Times available during the week:
      <br />
      {yogi.available_start_time} - {yogi.available_end_time}
      <p>For alternate times please contact the Yogi directly - {yogi.contact}</p>
      <BookingsNew yogi={yogi} />
    </div>
  );
}
