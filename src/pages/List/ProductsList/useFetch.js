import { useCallback, useEffect, useState } from "react";

const END_POINT = "data/singleOriginData.json";

const useFetch = pageNum => {
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  console.log("hasMore :", hasMore);

  const sendQuery = useCallback(async () => {
    const URL = `${END_POINT}?${pageNum}`;
    const LIMIT = 12;
    const OFFSET = pageNum * LIMIT;

    console.log(
      "재로드",
      "OFFSET :",
      OFFSET,
      "LIMIT :",
      LIMIT,
      "계산값 :",
      LIMIT * (pageNum + 1)
    );

    try {
      setIsLoading(true);
      const response = await (await fetch(URL)).json();
      if (!response) {
        throw new Error("오류오류!!!");
      }
      setList(prev => [
        ...prev.concat(response.listItem.slice(OFFSET, OFFSET + LIMIT)),
      ]);
      setHasMore(response.listItem.length - LIMIT * (pageNum + 1) > 0);
      setIsLoading(false);
    } catch (e) {
      throw new Error(`오류!!!! ${e.message}`);
    }
  }, [pageNum]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery, pageNum]);

  return { hasMore, list, isLoading };
};

export default useFetch;
