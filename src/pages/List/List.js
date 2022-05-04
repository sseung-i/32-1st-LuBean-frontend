import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListComponent from "./ListComponent";
import "./List.scss";

const List = () => {
  const [originalData, setOriginalData] = useState([]);
  const params = useParams();

  const LIMIT_MAX = 111;

  const TOP_IMG_URL = {
    singleOrigin: "/images/products/top/single_origin_bg.jpg",
    decaffein: "/images/products/top/decaffein_bg.jpg",
    blended: "/images/products/top/blended_bg.jpg",
  };

  const THUMBNAIL = {
    singleOrigin:
      "/images/products/thumbnail/singleorigin/singleorigin_pkg.jpeg",
    blended: "/images/products/thumbnail/blended/blended_pkg.jpeg",
    decaffein: "/images/products/thumbnail/decaffein/decaffein_pkg.jpeg",
  };

  const THUMBNAIL_HOVER = {
    브라질: "/images/products/thumbnail/singleorigin/singleorigin_brasil.jpeg",
    과테말라:
      "/images/products/thumbnail/singleorigin/singleorigin_guatemala.jpeg",
    콜롬비아:
      "/images/products/thumbnail/singleorigin/singleorigin_colombia.jpeg",
    케냐: "/images/products/thumbnail/singleorigin/singleorigin_kenya.jpeg",
    탄자니아:
      "/images/products/thumbnail/singleorigin/singleorigin_tanzania.jpeg",
    에티오피아:
      "/images/products/thumbnail/singleorigin/singleorigin_ethiopia.jpeg",
  };

  useEffect(() => {
    if (params.pageName === "singleOrigin") {
      fetch(
        `http://10.58.3.83:8000/products/list?offset=${0}&limit=${LIMIT_MAX}`
      )
        .then(res => res.json())
        .then(data =>
          setOriginalData(
            data.product_list_data.filter(item =>
              item.category_name.includes("싱글오리진")
            )
          )
        )
        .catch(error => console.log("에러", error));
    }
    // else if (params.pageName === "blended") {
    //   fetch(
    //     `http://10.58.3.83:8000/products/list?offset=${0}&limit=${LIMIT_MAX}`
    //   )
    //     .then(res => res.json())
    //     .then(data =>
    //       setOriginalData(
    //         data.product_list_data.filter(
    //           countryName => countryName === "blended"
    //         )
    //       )
    //     )
    //     .catch(error => console.log("에러", error));
    // } else if (params.pageName === "decaffein") {
    //   fetch(
    //     `http://10.58.3.83:8000/products/list?offset=${0}&limit=${LIMIT_MAX}`
    //   )
    //     .then(res => res.json())
    //     .then(data =>
    //       setOriginalData(
    //         data.product_list_data.filter(
    //           countryName => countryName === "decaffein"
    //         )
    //       )
    //     )
    //     .catch(error => console.log("에러", error));
    // }
  }, []);

  return (
    originalData.length && (
      <ListComponent
        tumbnail={THUMBNAIL[params.pageName]}
        hoverImg={THUMBNAIL_HOVER}
        topImgUrl={TOP_IMG_URL[params.pageName]}
        originalData={originalData}
      />
    )
  );
};

export default List;
