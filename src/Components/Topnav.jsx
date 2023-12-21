import React, { useState } from "react";
import Navimg1 from "../Assets/Images/nav-img-1.png";
import Navimg2 from "../Assets/Images/nav-img-2.png";
import Container from "react-bootstrap/Container";
// import nav_icon from "../Imag";
const Topnav = () => {
  const [data, setdata] = useState(false);
  function menubar() {
    setdata(!data);
    if (data === false) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }
  return (
    <div>
      <nav className="nav-bg position-relative py-2 py-md-4">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <ul className={` "ps-0 mb-0 d-lg-none"`}>
              <li>
                <a href="#" className="text-decoration-none d-block d-lg-none">
                  <img src={Navimg1} alt="logo" width="46" />
                </a>
              </li>
            </ul>
            <label>
              <a
                href="#"
                className="nav_icon d-block d-lg-none position-relative z-3"
                onClick={menubar}
                id="nav"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                </svg>
              </a>
            </label>
            <ul
              className={`${
                data ? "end-0" : "end-100"
              } ps-0 mb-0 d-flex justify-content-lg-end align-items-center gap-3 menubar`}
            >
              <li>
                <a
                  href="#hoome"
                  className="text-decoration-none small7 black1 fw-normal ff-2 nav-hvr"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#sneeaker"
                  className="text-decoration-none small7 black1 fw-normal ff-2 nav-hvr"
                >
                  SNEAKERS KOPEN
                </a>
              </li>
              <li>
                <a
                  href="#interv"
                  className="text-decoration-none small7 black1 fw-normal ff-2 nav-hvr"
                >
                  INTERVIEWS
                </a>
              </li>
              <li>
                <a
                  href="#salee"
                  className="text-decoration-none small7 black1 fw-normal ff-2 nav-hvr"
                >
                  SALE
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none small7 black1 fw-normal ff-2 nav-hvr"
                >
                  SNEAKER VAN DE DAG
                </a>
              </li>
              <li>
                <a
                  href="#Fourms"
                  className="text-decoration-none small7 black1 fw-normal ff-2 nav-hvr"
                >
                  SNEAKER FORUM
                </a>
              </li>
              <li>
                <a
                  href="#Blog"
                  className="text-decoration-none small7 black1 fw-normal ff-2 nav-hvr"
                >
                  BLOG
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default Topnav;
