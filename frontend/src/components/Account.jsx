import React from 'react';
import Wrapper from '../assets/wrappers/Account';

const Account = ({ accountno, type, balance }) => {
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{type.charAt(0)}</div>
        <div className="info">
          <h5>{accountno}</h5>
          <p>{balance}</p>
        </div>
      </header>
    </Wrapper>
  );
};

export default Account;
