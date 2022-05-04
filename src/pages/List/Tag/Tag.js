import React from "react";
import "./Tag.scss";

const Tag = ({ tag }) => {
  return (
    <ul className="tag">
      <li>
        <span className={tag}>{tag.toUpperCase()}</span>
      </li>
      {/* {tag.map((it, index) => (
        <li key={index}>
          <span className={it}>{it.toUpperCase()}</span>
        </li>
      ))} */}
    </ul>
  );
};

export default Tag;
