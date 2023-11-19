import React from 'react';
import Wrapper from '../assets/wrappers/Account';

const Account = ({ AccountNo, Type, Balance }) => {
  const type = Type === 'loan' ? 'Loan amount' : 'Balance';
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{Type}</div>
        <div className="info">
          <h5>Account No : {AccountNo}</h5>
          <p>
            {type} : {Balance}
          </p>
        </div>
      </header>
    </Wrapper>
  );
};

export default Account;
