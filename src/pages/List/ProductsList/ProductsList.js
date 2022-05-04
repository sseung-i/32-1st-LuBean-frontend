import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Info from "../Info/Info";
import Tag from "../Tag/Tag";
import useFetch from "./useFetch";
import "./ProductsList.scss";

const ProductsList = () => {
  const [pageNum, setPageNum] = useState(0);
  const { list, hasMore, isLoading } = useFetch(pageNum);

  // console.log("list : ", list, "page : ", pageNum, "loding : ", isLoading);

  const observerRef = useRef();
  const navigate = useNavigate();

  const observer = node => {
    if (isLoading) return;
    if (observerRef.current) observerRef.current.disconnect();

    let options = {
      rootMargin: "200px",
      threshold: 1,
    };

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasMore) {
        setPageNum(page => page + 1);
      }
    }, options);

    node && observerRef.current.observe(node);
  };

  const productClick = id => {
    navigate(`${process.env.PUBLIC_URL}/detail/${id}`);
  };

  return (
    <article className="productsList">
      <ul className="productWrap">
        {list.map(({ id, name, country_name, weight, price, tag, imgUrl }) => (
          <li key={id}>
            <div className="thumbnail" onClick={() => productClick(id)}>
              <img className="thumb" alt={name} src={imgUrl[0]} />
              <img className="thumbHover" alt={name} src={imgUrl[1]} />
            </div>
            {tag && <Tag tag={tag} />}
            <Info
              id={id}
              name={name}
              weight={weight}
              country={country_name}
              isTag={tag.length}
              productClick={productClick}
            />
            <p className="cost">
              <span>₩ </span>
              {price.toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
      <div ref={observer} className="observerBox" />
    </article>
  );
};

export default ProductsList;
