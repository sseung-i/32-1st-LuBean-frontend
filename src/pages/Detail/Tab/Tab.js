import React, { useState } from "react";
import "../Tab/Tab.scss";

const Tab = ({ region }) => {
  // const [clickTab, setClickTab] = useState([]);

  // const onTabHandler = e => {
  //   setClickTab(e.target.value);
  // };
  return (
    <div>
      <div className="tab">
        <ul className="tabNav">
          <li className="tabBlock">
            <a href="#info" className={region === "info" && "active"}>
              상품상세정보
            </a>
          </li>
          <li className="tabBlock">
            <a
              href="#reviewList"
              className={region === "reviewList" && "active"}
            >
              상품후기
            </a>
          </li>
          <li className="tabBlock">
            <a href="#delivery" className={region === "delivery" && "active"}>
              배송/교환 및 반품안내
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tab;
