import React, { useEffect, useState } from "react";
import Review from "../Review/Review";
import Star from "../Star/Star";
import "./ReviewList.scss";

const REVIEW_BOX = [
  { id: 0, userName: "이**", content: "너무 좋아요!", star: 4 },
  { id: 1, userName: "김**", content: "향기로워요!", star: 5 },
  { id: 2, userName: "박**", content: "역시 원두는 게이샤죠!", star: 3 },
];

const ReviewList = () => {
  const [reviewList, setReviewList] = useState(REVIEW_BOX);
  const [inputValue, setInputValue] = useState("");
  const [rateValue, setRateValue] = useState(1);
  const [reviewCounter, setReviewCounter] = useState(4);

  useEffect(() => {
    const resetId = reviewList.map((it, index) => ({
      ...it,
      id: index,
    }));
    setReviewList(resetId);
  }, [reviewList]);

  const onInputChange = e => {
    setInputValue(e.target.value);
  };
  const onStarChange = e => {
    setRateValue(Number(e.target.value));
  };

  const onFormSubmit = e => {
    e.preventDefault();
    setReviewCounter(count => count + 1);

    if (inputValue !== "") {
      const newUser = {
        id: reviewCounter,
        userName: "이**",
        content: inputValue,
        star: rateValue,
      };

      setReviewList([...reviewList, newUser]);
      setInputValue("");
    }
  };

  const removeReview = id => {
    setReviewList(reviewList.filter(review => review.id !== id));
  };

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
        <div className="reMain">
          <div className="starRadioBtn">
            <form className="reviewForm" onSubmit={onFormSubmit}>
              <div className="reMainStar">
                <div className="starText">평가</div>
                <div className="radio">
                  <Star onStarChange={onStarChange} />
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
          <div className="reviewList">
            <ul className="reviewListContainer">
              {reviewList.map((review, index) => (
                <Review
                  key={index}
                  review={review}
                  removeReview={removeReview}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
