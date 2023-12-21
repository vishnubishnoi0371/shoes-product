import React from "react";
import sectwoone from "../Assets/Images/sec-2-1.png";
import sectwotwo from "../Assets/Images/sec-2-2.png";
import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

const myinfo = [
  {
    img: sectwoone,
  },
  {
    img: sectwotwo,
  },
  {
    img: sectwoone,
  },
  {
    img: sectwotwo,
  },
];

const Locker = () => {
  const mydata = myinfo.map((myinfo) => (
    <Col xl={3} lg={4} sm={6} xsm={12} className="pt-4">
      <div className="sec-2-card">
        <img className="img-br w-100" src={myinfo.img} alt="#" />

        <div className="p-3">
          <div className="d-flex align-items-center justify-content-between pt-3">
            <div className="d-flex align-items-center">
              <p className="small5 fw-normal black1 ff-2 mb-0">Price:</p>
              <p className="small9 fw-semibold black1 ff-2 mb-0 ps-2">
                €179,99
              </p>
            </div>
            <div>
              <button className="small1 fw-normal white1 ff-2 mb-0 sec-2-btn">
                Best Price
              </button>
            </div>
          </div>
          <p className="small5 fw-normal black1 ff-2 mb-0">Size:</p>
          <div className="pb-2 d-flex align-items-center justify-content-between">
            <button className="sec-2-size-btn small5 fw-medium ff-2 black2 mb-0">
              41
            </button>
            <button className="sec-2-size-btn small5 fw-medium ff-2 black2 mb-0">
              42
            </button>
            <button className="sec-2-size-btn small5 fw-medium ff-2 black2 mb-0">
              43
            </button>
          </div>
          <div className="pt-0 d-flex align-items-center justify-content-between">
            <button className="sec-2-size-btn small5 fw-medium ff-2 black2 mb-0">
              44
            </button>
            <button className="sec-2-size-btn small5 fw-medium ff-2 black2 mb-0">
              45
            </button>
            <button className="sec-2-size-btn small5 fw-medium ff-2 black2 mb-0">
              46
            </button>
          </div>
          <p className="small5 fw-normal ff-2 green2 mb-0 pt-2">
            View this product as:
          </p>
          <p className="small5 fw-semibold ff-2 blue mb-0">Foot Locker NL</p>
        </div>
      </div>
    </Col>
  ));
  return (
    <div id="sneaker">
      <Container className="mb-5">
        <h2 className="medium2 fw-medium black1 ff-2 mb-0 py-sm-3 py-3">
          You can buy the Nike Air Max 97 Men's Shoe - White here:
        </h2>
        <Row className=" align-items-center justify-content-center">
          {mydata}
        </Row>
      </Container>
    </div>
  );
};

export default Locker;
