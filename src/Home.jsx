import { useState, useEffect } from "react";
import axios from "axios";
import { YogisIndex } from "./YogisIndex";

export function Home() {
  const [yogis, setYogis] = useState([]);

  const handleIndexYogis = () => {
    console.log("handleIndexYogis");
    axios.get("http://localhost:3000/yogis.json").then((response) => {
      console.log(response.data);
      setYogis(response.data);
    });
  };
  useEffect(handleIndexYogis, []);
  return (
    <div>
      <h1>Welcome to React!</h1>
      <YogisIndex yogis={yogis} />
    </div>
  );
}
