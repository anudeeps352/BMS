import React from 'react';
import Wrapper from '../assets/wrappers/Landing';
import main from '../assets/images/currencyr.svg';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <div>
      <Wrapper>
        <div className="container page min-w-[95%] ">
          <div className="info">
            <h1>
              Bank
              <span> Management </span>System
            </h1>
            <p>Bank Management System</p>
            <Link to="/loginuser" className="btn mr-4">
              Login as User
            </Link>
            <Link to="/loginadmin" className="btn ">
              Login as Admin
            </Link>
          </div>
          <img src={main} alt="BMS" className="img main-img" />
        </div>
      </Wrapper>
    </div>
  );
};

export default Landing;
