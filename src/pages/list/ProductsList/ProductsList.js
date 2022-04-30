import React from "react";
import { useNavigate } from "react-router-dom";
import Info from "../Info/Info";
import Tag from "../Tag/Tag";
import "./ProductsList.scss";

const ProductsList = ({ data }) => {
  const navigate = useNavigate();

  const productClick = (id, name) => {
    navigate(`${process.env.PUBLIC_URL}/detail/${id}`);
    console.log(id, name);
  };

  return (
    <article className="productsList">
      <ul className="productWrap">
        {data.map(({ id, name, country_name, weight, price, tag, imgUrl }) => (
          <li key={id}>
            <div className="thumbnail" onClick={() => productClick(id, name)}>
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
              {`${String(price).slice(0, String(price).length - 3)},${String(
                price
              ).slice(-3)}`}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProductsList;
