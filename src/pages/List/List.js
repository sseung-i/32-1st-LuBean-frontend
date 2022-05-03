import { useEffect, useState } from "react";
import ListComponent from "./ListComponent";
import "./List.scss";
import { useParams } from "react-router-dom";

const List = () => {
  const [originalData, setOriginalData] = useState({});
  const params = useParams();

  useEffect(() => {
    // const api_url = `/${params.id}`;
    // fetch(api_url)
    fetch("data/singleOriginData.json")
      // fetch("data/blendedData.json")
      // fetch("data/decaffeinData.json")
      .then(res => res.json())
      .then(data => setOriginalData(data));
  }, []);

  return originalData.listItem && <ListComponent originalData={originalData} />;
};

export default List;
