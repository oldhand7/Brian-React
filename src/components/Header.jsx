// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container-fluid bg-primary py-2">
      <div className="container text-white ">
        <div className="row">
          <div className="col-4">
            <ul className="nav gap-3">
              <li className="nav-item ">
                <Link className="nav-link text-white links-hover " to="/">
                  Applications in Progress
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div className="col-4"></div>
          <div className="col-4 d-flex align-items-end  justify-content-end ">
            Buttons
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
