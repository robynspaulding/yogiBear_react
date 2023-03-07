import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
      <img src={yogi.image} />
      <p>{yogi.contact}</p>
      <p>{yogi.bio}</p>
      <p>Hourly Rate: {yogi.rate}</p>
      <p>Yoga Type: {yogi.yoga_type}</p>
      <p>
        Location: {yogi.city}, {yogi.state}
      </p>
      <p>
        Times available during the week:
        <p></p>
        {yogi.available_start_time} - {yogi.available_end_time}
        <p>For alternate times please contact the Yogi directly</p>
      </p>
    </div>
  );
}
