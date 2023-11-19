import React from 'react';
import Wrapper from '../assets/wrappers/Account';

const Account = ({ AccountNo, Type, Balance }) => {
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{Type.charAt(0)}</div>
        <div className="info">
          <h5>{AccountNo}</h5>
          <p>{Balance}</p>
        </div>
      </header>
    </Wrapper>
  );
};

export default Account;
