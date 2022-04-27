import React from "react";
import "../Tab/Tab.scss";

const Tab = () => {
  return (
    <div>
      <ul className="tabNav">
        <li className="col-sm-4">
          <a href="#tab01 ">탭1</a>
        </li>
        <li className="col-sm-4">
          <a href="#tab02">탭2</a>
        </li>
        <li className="col-sm-4">
          <a href="#tab03">탭3</a>
        </li>
      </ul>
      <div class="tabContent">
        <div id="tab01">tab1 content</div>
        <div id="tab02">tab2 content</div>
        <div id="tab03">tab3 content</div>
      </div>
    </div>
  );
};

export default Tab;
