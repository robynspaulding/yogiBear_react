import { useState, useEffect } from "react";
import axios from "axios";
import { YogisIndex } from "./YogisIndex";
import { YogisUpdate } from "./YogisUpdate";
import { Modal } from "./Modal";
import { YogisNew } from "./YogisNew";

export function Home() {
  const [yogis, setYogis] = useState([]);
  const [isYogisUpdateVisible, setIsYogisUpdateVisible] = useState(false);
  const [currentYogi, setCurrentYogi] = useState({});

  const handleIndexYogis = () => {
    console.log("handleIndexYogis");
    axios.get("http://localhost:3000/yogis.json").then((response) => {
      console.log(response.data);
      setYogis(response.data);
    });
  };

  const handleUpdateYogi = (yogi) => {
    console.log("handleUpdateYogi", yogi);
    setIsYogisUpdateVisible(true);
    setCurrentYogi(yogi);
  };

  const handleHideYogi = () => {
    console.log("handleHideYogi");
    setIsYogisUpdateVisible(false);
  };

  const handleUpdateYogiInModal = (id, params, successCallback) => {
    console.log("handleUpdateYogi", params);
    axios.patch(`http://localhost:3000/yogis/${id}.json`, params).then((response) => {
      setYogis(
        yogis.map((yogi) => {
          if (yogi.id === response.data.id) {
            return response.data;
          } else {
            return yogi;
          }
        })
      );
      successCallback();
      handleHideYogi();
    });
  };

  useEffect(handleIndexYogis, []);
  return (
    <div>
      <YogisIndex yogis={yogis} onSelectYogi={handleUpdateYogi} />
      <Modal show={isYogisUpdateVisible} onClose={handleHideYogi}>
        <YogisUpdate yogi={currentYogi} onUpdateYogi={handleUpdateYogiInModal} />
      </Modal>
    </div>
  );
}
