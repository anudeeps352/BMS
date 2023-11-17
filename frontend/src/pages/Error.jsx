import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/images/404.svg';

const Error = () => {
  const error = useRouteError();
  if (error.status === 404);
  return (
    <div className="flex place-content-center mt-14 py-10 al ">
      <div className="">
        <img src={img} alt="Page not found"></img>
        <div className=" ml-60 my-6">
          <h3>Ah ! Page Not Found</h3>
        </div>
        <p className=" ml-60 my-6">
          Seems like you messed up askin for the wrong page
        </p>
        <Link to="/dashboard"></Link>
      </div>
    </div>
  );
};

export default Error;
