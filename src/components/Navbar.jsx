// eslint-disable-next-line no-unused-vars
import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto py-2  ">
      <div className="row top-nav ">
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex align-items-center  justify-lg-start justify-content-center">
          <img className="" src="https://dummyimage.com/304x103" alt="" />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-sm-12 d-flex align-items-end justify-content-center py-3">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-12 col-sm  d-flex align-items-center  justify-content-lg-end justify-content-center    ">
          <img className="" src="https://dummyimage.com/304x103" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
