import { useCallback, useEffect, useState } from "react";

// const END_POINT = "data/singleOriginData.json";
const END_POINT = "http://10.58.3.83:8000/products/list";

const useFetch = pageNum => {
  // const useFetch = page => {
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // console.log("hasMore :", hasMore);

  const sendQuery = useCallback(async () => {
    const LIMIT = 12;
    const OFFSET = pageNum * LIMIT;
    const URL = `${END_POINT}?offset=${OFFSET}&limit=${OFFSET + LIMIT}`;

    //query API 요청 보내기

    // const sendQuery = useCallback(async () => {
    //   const OFFSET = page * 12;
    //   const LIMIT = OFFSET + 12;
    //   const URL = `${END_POINT}?offset=${OFFSET}&limit=${LIMIT}`;

    try {
      setIsLoading(true);
      const response = await (await fetch(URL)).json();
      if (!response) {
        throw new Error("오류오류!!!");
      }

      setList(prev => [
        // ...prev.concat(response.listItem.slice(OFFSET, OFFSET + LIMIT)),
        ...prev.concat(response.product_list_data),
      ]);
      setHasMore(response.product_list_data.length - LIMIT * (pageNum + 1) > 0);
      setIsLoading(false);
    } catch (e) {
      throw new Error(`오류!!!! ${e.message}`);
    }
  }, [pageNum]);

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
