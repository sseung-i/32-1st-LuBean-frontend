import React, { useEffect, useState } from "react";
import SellContainer from "./SellContainer/SellContainer";
import ReviewList from "./ReviewList/ReviewList";
import Delivery from "./Delivery/Delivery";
import Info from "./Info/Info";
import Tab from "./Tab/Tab";
import "./Detail.scss";

const Detail = () => {
  const [feedsList, setFeedsList] = useState({});

  useEffect(() => {
    fetch("data/detail.json")
      .then(res => res.json())
      .then(data => {
        setFeedsList(data);
      });
  }, []);

  return (
    <section className="detail">
      <div className="detailWrap" key={feedsList.id}>
        <SellContainer feedsList={feedsList} />
        <Tab id="info" region="info" />
        <div className="mainContainer">
          {feedsList.productInfo && <Info infoList={feedsList} />}
        </div>
        <div className="review">
          <Tab id="reviewList" region="reviewList" />
          <ReviewList />
        </div>
        <div className="delivery">
          <Tab id="delivery" region="delivery" />
          <Delivery />
        </div>
      </div>
      ;
    </section>
  );
};

export default Detail;
