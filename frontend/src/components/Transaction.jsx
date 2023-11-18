import React from 'react';
import Wrapper from '../assets/wrappers/Transaction';

const Transaction = ({
  TransactionID,
  FromAccount,
  ToAccount,
  Amount,
  Date,
  Type,
}) => {
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{Type}</div>
        <div className="info">
          <h5>Transaction ID : {TransactionID}</h5>
          <h5>From Account : {FromAccount}</h5>
          <p>To Account : {ToAccount}</p>
        </div>
      </header>
    </Wrapper>
  );
};

export default Transaction;
