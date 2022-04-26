import React from "react";
import Info from "../Info/Info";
import Tag from "../Tag/Tag";
import "./ProductsList.scss";

const ProductsList = ({ productsData }) => {
  return (
    <article className="productsList">
      <ul className="productWrap">
        {productsData.map(
          ({ id, name, desc, country_name, price, tag, imgUrl }) => (
            <li key={id} data-country={country_name}>
              <div className="thumbnail">
                <img className="thumb" alt={name} src={imgUrl[0]} />
                <img className="thumbHover" alt={name} src={imgUrl[1]} />
              </div>
              {tag.length ? <Tag tag={tag} /> : null}
              {tag.length ? (
                <Info name={name} desc={desc} />
              ) : (
                <Info name={name} desc={desc} padding="40px" />
              )}
              {/* <Tag tag={tag} />
              <Info name={name} desc={desc} /> */}
              <p className="cost">
                <span>₩ </span>
                {`${price.slice(0, price.length - 3)},${price.slice(-3)}`}
              </p>
            </li>
          )
        )}
      </ul>
    </article>
  );
};

export default ProductsList;
