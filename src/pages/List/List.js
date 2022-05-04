import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListComponent from "./ListComponent";
import "./List.scss";

const List = () => {
  const [originalData, setOriginalData] = useState([]);
  const params = useParams();
  console.log(params.pageName === "singleOrigin");

  const LIMIT_MAX = 111;
  useEffect(() => {
    if (params.pageName === "singleOrigin") {
      fetch(
        `http://10.58.3.83:8000/products/list?offset=${0}&limit=${LIMIT_MAX}`
      )
        .then(res => res.json())
        .then(data =>
          setOriginalData(
            data.product_list_data.filter(
              countryName => countryName === "singleOrigin"
            )
          )
        )
        .catch(error => console.log("에러", error));
    } else if (params.pageName === "blended") {
      fetch(
        `http://10.58.3.83:8000/products/list?offset=${0}&limit=${LIMIT_MAX}`
      )
        .then(res => res.json())
        .then(data =>
          setOriginalData(
            data.product_list_data.filter(
              countryName => countryName === "blended"
            )
          )
        )
        .catch(error => console.log("에러", error));
    } else if (params.pageName === "decaffein") {
      fetch(
        `http://10.58.3.83:8000/products/list?offset=${0}&limit=${LIMIT_MAX}`
      )
        .then(res => res.json())
        .then(data =>
          setOriginalData(
            data.product_list_data.filter(
              countryName => countryName === "decaffein"
            )
          )
        )
        .catch(error => console.log("에러", error));
    }
  }, []);

  return originalData.length && <ListComponent originalData={originalData} />;
};

export default List;
