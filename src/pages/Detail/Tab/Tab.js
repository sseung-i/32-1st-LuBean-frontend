import React from "react";
import "../Tab/Tab.scss";

const Tab = () => {
  return (
    <div className="tab">
      <ul className="tabNav">
        <li className="tabBlock">
          <a href="#tab01 ">상품상세정보</a>
        </li>
        <li className="tabBlock">
          <a href="#tab02">상품후기</a>
        </li>
        <li className="tabBlock">
          <a href="#tab03">배송/교환 및 반품안내</a>
        </li>
      </ul>
    </div>
  );
};

export default Tab;
