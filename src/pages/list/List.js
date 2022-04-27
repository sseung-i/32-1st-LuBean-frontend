import { useEffect, useState } from "react";
import ListComponent from "./ListComponent";
import "./List.scss";

const List = () => {
  const [originalData, setOriginalData] = useState([]);
  console.log("최상위", originalData);

  useEffect(() => {
    fetch("data/productsData.json")
      .then(res => res.json())
      .then(data => setOriginalData(data));
  }, []);

  return <ListComponent originalData={originalData} />;
};

export default List;
