import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListComponent from "./ListComponent";
import "./List.scss";

const List = () => {
  const [originalData, setOriginalData] = useState([]);
  const params = useParams();

  const LIMIT_MAX = 111;

  const TOP_IMG_URL = {
    singleOrigin: "/images/products/top/singleOrigin_bg.jpg",
    decaffeine: "/images/products/top/decaffeine_bg.jpg",
    blended: "/images/products/top/blended_bg.jpg",
  };

  const THUMBNAIL = {
    singleOrigin:
      "/images/products/thumbnail/singleorigin/singleorigin_pkg.jpeg",
    blended: "/images/products/thumbnail/blended/blended_pkg.jpeg",
    decaffeine: "/images/products/thumbnail/decaffein/decaffein_pkg.jpeg",
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
    블렌디드: "/images/products/thumbnail/blended/blended_beans.jpeg",
    디카페인: "/images/products/thumbnail/decaffein/decaffein_beans.jpeg",
  };

  useEffect(() => {
    console.log("params 변경");
    // 싱글오리진 국가 버튼 필터용 데이터
    if (params.pageName.includes("singleOrigin")) {
      fetch(
        `http://10.58.3.83:8000/products/list?offset=${0}&limit=${LIMIT_MAX}`
      )
        .then(res => res.json())
        .then(data =>
          setOriginalData(
            data.product_list_data.filter(
              item => item.category_name.includes("Single Origin")
              // item.category_name.includes("Blended")
            )
          )
        )
        .catch(error => console.log("에러", error));
    } else if (params.pageName.includes("blended")) {
      fetch(
        `http://10.58.3.83:8000/products/list?offset=${0}&limit=${LIMIT_MAX}`
      )
        .then(res => res.json())
        .then(data =>
          setOriginalData(
            data.product_list_data.filter(
              item => item.category_name.includes("Blended")
              // item.category_name.includes("Blended")
            )
          )
        )
        .catch(error => console.log("에러", error));
    } else if (params.pageName.includes("decaffeine")) {
      fetch(
        `http://10.58.3.83:8000/products/list?offset=${0}&limit=${LIMIT_MAX}`
      )
        .then(res => res.json())
        .then(data =>
          setOriginalData(
            data.product_list_data.filter(
              item => item.category_name.includes("Decaffeine")
              // item.category_name.includes("Blended")
            )
          )
        )
        .catch(error => console.log("에러", error));
    }
  }, [params.pageName]);

  const paramsConditional = params.pageName.includes("_")
    ? params.pageName.split("_")[0]
    : params.pageName;

  return (
    originalData.length && (
      <ListComponent
        tumbnail={THUMBNAIL[paramsConditional]}
        hoverImg={THUMBNAIL_HOVER}
        topImgUrl={TOP_IMG_URL[paramsConditional]}
        singleOriginData={originalData}
      />
    )
  );
};

export default List;
