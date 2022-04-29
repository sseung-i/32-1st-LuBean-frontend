import React from "react";
import "./Review.scss";

const Review = ({ review, removeReview }) => {
  return (
    <li className="reviewListBox" key={review.id}>
      <div className="reviewArticle">
        <div className="summary">
          <div className="star">
            {"★".repeat(review.star) + "☆".repeat(5 - review.star)}
          </div>
          <div className="date">2022.04.26</div>
          <div className="name">{review.userName}</div>
        </div>
        <div className="reviewContent">
          <div className="content">{review.content}</div>
        </div>
        <div className="reviewBtn">
          <button
            className="btnDel"
            onClick={() => {
              removeReview(review.id);
            }}
          >
            삭제
          </button>
        </div>
      </div>
    </li>
  );
};

export default Review;
