import React from "react";
import Info from "../Info/Info";
import Tag from "../Tag/Tag";
import "./ProductsList.scss";

const ProductsList = ({ data }) => {
  return (
    <article className="productsList">
      <ul className="productWrap">
        {data.map(({ id, name, desc, price, tag, imgUrl }) => (
          <li key={id}>
            <div className="thumbnail">
              <img className="thumb" alt={name} src={imgUrl[0]} />
              <img className="thumbHover" alt={name} src={imgUrl[1]} />
            </div>
            {tag && <Tag tag={tag} />}
            <Info name={name} desc={desc} isTag={tag.length} />
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
