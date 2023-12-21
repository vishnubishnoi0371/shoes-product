import React from "react";
import Container from "react-bootstrap/Container";
import Navimg1 from "../Assets/Images/nav-img-1.png";
import Navimg2 from "../Assets/Images/nav-img-2.png";

const Header = () => {
  return (
    <div>
      <Container>
        <div className="d-flex align-items-center justify-content-between py-2 pb-0 pb-sm-3 py-sm-3">
          <img className="d-none d-lg-block" src={Navimg1} alt="#" />
          <ul className="ps-0">
            <li>
              <a href="">
                <img className=" w-100" src={Navimg2} alt="#" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Header;
