import React from 'react';
import Wrapper from '../assets/wrappers/Transaction';

const LoanElement = ({
  LoanID,
  AmountRemaining,
  TotalAmount,
  PaymentsRemaining,
  FixedAmount,
  StartDate,
}) => {
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{'Loan'}</div>
        <div className="info">
          <h5>TotalAmount : {TotalAmount}</h5>
          <h5>AmountRemaining: {AmountRemaining}</h5>
        </div>
        <div className="right-side">
          <h5>FixedAmount: {FixedAmount}</h5>
          <h5>PaymentsRemaining : {PaymentsRemaining}</h5>
        </div>
      </header>
    </Wrapper>
  );
};

export default LoanElement;
