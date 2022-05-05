import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SellContainer from "./SellContainer/SellContainer";
import ReviewList from "./ReviewList/ReviewList";
import Delivery from "./Delivery/Delivery";
import Info from "./Info/Info";
import Tab from "./Tab/Tab";
import Modal from "./Modal/Modal";
import "./Detail.scss";
// import { useParams } from "react-router-dom";

const Detail = () => {
  const [feedsList, setFeedsList] = useState({});
  const [mockdata, setMockdata] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const params = useParams();
  console.log(params);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  //get
  useEffect(() => {
    fetch(`http://10.58.3.83:8000/products/detail/${params.id}`)
      .then(res => res.json())
      .then(data => setFeedsList(data.product_detail_data[0]));
  }, [params.id]);

  console.log(feedsList);
  //mock
  useEffect(() => {
    fetch("/data/detail.json")
      .then(res => res.json())
      .then(data => setMockdata(data));
  }, []);

  return (
    <section className="detail">
      <div className="detailWrap" key={feedsList.product_id}>
        <Modal modalOpen={modalOpen} closeModal={closeModal} />
        <SellContainer
          feedsList={feedsList}
          openModal={openModal}
          mockdata={mockdata}
        />
        <Tab id="info" region="info" />
        <div className="mainContainer">
          {feedsList.korean_name && (
            <Info infoList={feedsList} mockdata={mockdata} />
          )}
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
