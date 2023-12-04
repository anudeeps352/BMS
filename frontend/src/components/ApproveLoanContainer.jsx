import React from 'react';
import Wrapper from '../assets/wrappers/ApproveLoanContainer';
import ApproveLoanElement from './ApproveLoanElement';

const LoanIDContainer = ({ Loans }) => {
  if (Loans.length === 0) {
    return (
      <Wrapper>
        <h2>No Loan Requests to display</h2>
      </Wrapper>
    );
  }
  {
    return (
      <Wrapper>
        <div className="approveloandata">
          {Loans.map((loan) => {
            return <ApproveLoanElement key={loan.id} {...loan} />;
          })}
        </div>
      </Wrapper>
    );
  }
};

export default LoanIDContainer;
