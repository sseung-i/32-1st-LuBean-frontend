import React, { useEffect, useState } from "react";
import "./List.scss";

const productData = [
  {
    id: 1,
    name: "산 안토니오 챠기테",
    country_name: "과테말라",
    weight: "200g",
    price: "14000",
    menus: "singleOrigin",
    imgUrl: ["/images/products/cooffee_pkg_1.png"],
  },
];

const List = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(data => setProduct(data.slice(0, 30)));
  }, []);

  console.log(product);

  return (
    <div className="list">
      <section className="title">
        <h2>싱글 오리진</h2>
        <p>각 생산지의 맛의 특색을 느껴보세요</p>
      </section>
      <section className="products">
        <article className="top">
          <h3>싱글 오리진 (Single Origin)</h3>
          <select className="listSort">
            <option>추천순</option>
            <option>가격낮은순</option>
            <option>가격높은순</option>
            <option>이름순</option>
          </select>
        </article>
        <ul className="country">
          <li className="nowView">
            전체<span>({0})</span>
          </li>
          <li>
            과테말라<span>({0})</span>
          </li>
          <li>
            브라질<span>({0})</span>
          </li>
          <li>
            니카라과<span>({0})</span>
          </li>
          <li>
            파푸아뉴기니<span>({0})</span>
          </li>
        </ul>
        <article className="productsList">
          <ul className="productWrap">
            {product.map(({ id, title, url }) => (
              <li key={id}>
                <div className="thumbnail">
                  <img alt={title} src={url} />
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
                  <p className="name">{title}</p>
                  <p className="desc">#커피 #원두</p>
                </div>
                <p className="cost">
                  <span>₩ </span>
                  {`${Math.ceil(Math.random() * 99)},000`}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
};

export default List;
