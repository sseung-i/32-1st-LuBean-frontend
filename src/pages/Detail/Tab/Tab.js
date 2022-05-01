import React from "react";
import "../Tab/Tab.scss";

const Tab = ({ id, region }) => {
  return (
    <div id={id}>
      <div className="tab">
        <ul className="tabNav">
          <li className="tabBlock">
            <a href="#info" className={`info ${region === "info" && "active"}`}>
              상품상세정보
            </a>
          </li>
          <li className="tabBlock">
            <a
              href="#reviewList"
              className={`info ${region === "reviewList" && "active"}`}
            >
              상품후기
            </a>
          </li>
          <li className="tabBlock">
            <a
              href="#delivery"
              className={`info ${region === "delivery" && "active"}`}
            >
              배송/교환 및 반품안내
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tab;
