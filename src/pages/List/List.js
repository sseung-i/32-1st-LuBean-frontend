import { useEffect, useRef, useState } from "react";
import ListComponent from "./ListComponent";
import "./List.scss";

const List = () => {
  const [originalData, setOriginalData] = useState({});

  useEffect(() => {
    fetch("data/singleOriginData.json")
      // fetch("data/blendedData.json")
      // fetch("data/decaffeinData.json")
      .then(res => res.json())
      .then(data => setOriginalData(data));
  }, []);

  return originalData.listItem && <ListComponent originalData={originalData} />;
};

export default List;
