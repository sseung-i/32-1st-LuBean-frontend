import React from "react";

const Tag = ({ tag }) => {
  return (
    <ul className="tag">
      {tag.map((it, index) => (
        <li key={index}>
          <span className={it}>{it.toUpperCase()}</span>
        </li>
      ))}
    </ul>
  );
};

export default Tag;
