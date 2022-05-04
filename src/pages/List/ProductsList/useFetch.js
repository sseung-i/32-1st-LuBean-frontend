import { useCallback, useEffect, useState } from "react";

const END_POINT = "data/singleOriginData.json";

const useFetch = page => {
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //query API 요청 보내기
  const sendQuery = useCallback(async () => {
    const URL = `${END_POINT}?${page}`;
    const OFFSET = page * 12;
    const LIMIT = OFFSET + 12;

    try {
      setIsLoading(true);
      const response = await (await fetch(URL)).json();
      if (!response) {
        throw new Error(`오류오류`);
      }
      setList(prev => [...prev.concat(response.listItem.slice(OFFSET, LIMIT))]);
      setHasMore(response.listItem.length > 0);
      setIsLoading(false);
    } catch (e) {
      throw new Error(`오류!! ${e.message}`);
    }
  }, [page]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery, page]);

  return { hasMore, list, isLoading };
};

export default useFetch;
