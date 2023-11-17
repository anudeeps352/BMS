import React from 'react';
import Wrapper from '../assets/wrappers/Transaction';

const Transaction = ({ transactionid, from, to }) => {
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{from.charAt(0)}</div>
        <div className="info">
          <h5>{transactionid}</h5>
          <h5>{from}</h5>
          <p>{to}</p>
        </div>
      </header>
    </Wrapper>
  );
};

export default Transaction;
