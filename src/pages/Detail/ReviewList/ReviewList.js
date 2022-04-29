import React, { useState } from "react";
import Review from "../Review/Review";
import Star from "../Star/Star";
import "./ReviewList.scss";

const REVIEW_BOX = [
  { id: 1, userName: "이**", content: "너무 좋아요!", star: 4 },
  { id: 2, userName: "김**", content: "향기로워요!", star: 5 },
  { id: 3, userName: "박**", content: "역시 원두는 게이샤죠!", star: 3 },
];

const ReviewList = () => {
  const [reviewList, setReviewList] = useState(REVIEW_BOX);
  const [inputValue, setInputValue] = useState("");
  const [rateValue, setRateValue] = useState(1);
  const [reviewCounter, setReviewCounter] = useState(4);

  const rate = rateValue;

  const onInputChange = e => {
    setInputValue(e.target.value);
  };
  const onStarChange = e => {
    setRateValue(Number(e.target.value));
  };

  const onFormSubmit = e => {
    setReviewCounter(count => count + 1);

    if (inputValue !== "") {
      const newUser = {
        id: reviewCounter,
        userName: "이**",
        content: inputValue,
        star: rate,
      };

      setReviewList([...reviewList, newUser]);
    }

    setInputValue("");
    e.preventDefault();
  };

  const removeReview = id => {
    setReviewList(reviewList.filter(review => review.id !== id));
  };

  console.log(rateValue, typeof rateValue);
  console.log(inputValue);

  return (
    <div>
      <div className="reContainer">
        <div className="reHeader">
          <div className="reHeaderFirst">
            <h1 className="reHeaderName">Product Reviews</h1>
            <span className="reHeaderStar">★★★★★</span>
          </div>
          <div className="reHeaderSecond">
            나만의 원두를 맛과 향을 리뷰해주세요!
          </div>
        </div>
        {/* 별이랑 리뷰 */}
        <div className="reMain">
          <div className="starRadioBtn">
            <form className="reviewForm" onSubmit={onFormSubmit}>
              <div className="reMainStar">
                <div className="starText">평가</div>
                <div className="radio">
                  <Star onStarChange={onStarChange} />

                  {/* <label htmlFor="star4">
                    <input
                      type="radio"
                      id="star4"
                      name="star"
                      value={rateValue}
                      onClick={onStarChange}
                    />
                    ★★★★☆
                  </label>
                  <label htmlFor="star3">
                    <input
                      type="radio"
                      id="star3"
                      name="star"
                      value={rateValue}
                      onClick={onStarChange}
                    />
                    ★★★☆☆
                  </label>
                  <label htmlFor="star2">
                    <input
                      type="radio"
                      id="star2"
                      name="star"
                      value={rateValue}
                      onClick={onStarChange}
                    />
                    ★★☆☆☆
                  </label>
                  <label htmlFor="star1">
                    <input
                      type="radio"
                      id="star1"
                      name="star"
                      value={rateValue}
                      onClick={onStarChange}
                    />
                    ★☆☆☆☆
                  </label> */}
                </div>
              </div>
              <div className="reviewArea">
                <textarea
                  className="reviewTextArea"
                  type="text"
                  onChange={onInputChange}
                  value={inputValue}
                />
              </div>
              <div className="reviewBtn">
                <button className="reviewButton">후기작성</button>
              </div>
            </form>
          </div>
          {/* 댓글달리는곳 */}
          <div className="reviewList">
            <ul className="reviewListContainer">
              {reviewList.map(review => (
                <Review review={review} removeReview={removeReview} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
