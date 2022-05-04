import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Info from "../Info/Info";
import Tag from "../Tag/Tag";
import useFetch from "./useFetch";
import "./ProductsList.scss";

const ProductsList = ({ hoverImg, tumbnail }) => {
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
        {list.map(
          ({
            id,
            english_name,
            korean_name,
            country_name,
            weight,
            product_price,
            product_label,
          }) => (
            <li key={id}>
              <div className="thumbnail" onClick={() => productClick(id)}>
                <img
                  className="thumb"
                  alt={english_name}
                  src={hoverImg[country_name]}
                />
                <img className="thumbHover" alt={english_name} src={tumbnail} />
              </div>
              {product_label && <Tag tag={product_label} />}
              <Info
                id={id}
                name={korean_name}
                weight={weight}
                country={country_name}
                isTag={product_label}
                productClick={productClick}
              />
              <p className="cost">
                <span>₩ </span>
                {parseInt(product_price).toLocaleString()}
              </p>
            </li>
          )
        )}
      </ul>
      <div ref={observer} className="observerBox" />
    </article>
  );
};

export default ProductsList;
