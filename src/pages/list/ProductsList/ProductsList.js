import React from "react";
import "./ProductsList.scss";

const ProductsList = ({ productData }) => {
  return (
    <article className="productsList">
      <ul className="productWrap">
        {productData.map(({ id, name, desc, country_name, price, imgUrl }) => (
          <li key={id} data-country={country_name}>
            <div className="thumbnail">
              <img className="thumb" alt={name} src={imgUrl[0]} />
              <img className="thumbHover" alt={name} src={imgUrl[1]} />
            </div>
            <ul className="tag">
              <li>
                <span className="new">NEW</span>
              </li>
              <li>
                <span className="best">BEST</span>
              </li>
            </ul>
            <div className="info">
              <p className="name">{name}</p>
              <p className="desc">{desc}</p>
            </div>
            <p className="cost">
              <span>₩ </span>
              {`${price.slice(0, price.length - 3)},${price.slice(-3)}`}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProductsList;
