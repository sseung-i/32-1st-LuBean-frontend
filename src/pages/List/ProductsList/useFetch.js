import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// const END_POINT = "data/singleOriginData.json";
const END_POINT = "http://10.58.3.83:8000/products/list";

const useFetch = pageNum => {
  // const useFetch = page => {
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  // console.log("확인용 :", params.pageName);

  // console.log("hasMore :", hasMore);

  const sendQuery = useCallback(async () => {
    //query API 요청 보내기
    const LIMIT = 12;
    const OFFSET = pageNum * LIMIT;
    // const URL = `${END_POINT}?offset=${OFFSET}&limit=${OFFSET + LIMIT}`;

    // const mainMenu = params.pageName.includes(
    //   "singleOrigin" || "blended" || "decaffeine"
    // );

    const URL = `${END_POINT}?offset=0&limit=${110}`;

    // const URL = mainMenu
    //   ? `${END_POINT}?offset=0&limit=${110}`
    //   : `${END_POINT}?sub_category_id=${params.pageName}&offset=0&limit=${110}`;

    try {
      setIsLoading(true);

      const response = await (await fetch(URL)).json();

      if (!response) {
        throw new Error("오류오류!!!");
      }

      // console.log(response.product_list_data);

      if (params.pageName === "singleOrigin") {
        console.log("싱글오리진 로드");
        setList(
          response.product_list_data.filter(item =>
            item.category_name.includes("Single Origin")
          )
        );
        // setHasMore(57 - LIMIT * (pageNum + 1) > 0);
      } else if (params.pageName === "blended") {
        console.log("블렌디드 로드");
        setList(
          response.product_list_data.filter(item =>
            item.category_name.includes("Blended")
          )
        );
        // setHasMore(20 - LIMIT * (pageNum + 1) > 0);
      } else if (params.pageName === "decaffeine") {
        console.log("디카페인 로드");
        setList(
          response.product_list_data.filter(item =>
            item.category_name.includes("Decaffeine")
          )
        );
        // setHasMore(20 - LIMIT * (pageNum + 1) > 0);
      } else if (params.pageName.includes("과테말라")) {
        console.log("싱글오리진 - 과테말라 로드");
        setList(
          response.product_list_data.filter(item =>
            item.country_name.includes("과테말라")
          )
        );
      }
      // setHasMore(response.product_list_data.length - LIMIT * (pageNum + 1) > 0);
      setIsLoading(false);
    } catch (e) {
      throw new Error(`오류!!!! ${e.message}`);
    }
  }, [pageNum, params.pageName]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery, pageNum]);
  //       throw new Error(`오류오류`);
  //     }
  //     setList(prev => [...prev.concat(response.listItem.slice(OFFSET, LIMIT))]);
  //     setHasMore(response.listItem.length > 0);
  //     setIsLoading(false);
  //   } catch (e) {
  //     throw new Error(`오류!! ${e.message}`);
  //   }
  // }, [page]);

  // useEffect(() => {
  //   sendQuery();
  // }, [sendQuery, page]);

  return { list, hasMore, isLoading };
};

export default useFetch;
