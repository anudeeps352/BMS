import React from 'react';
import Wrapper from '../assets/wrappers/TransactionContainer';
import LoanElement from './LoanElement';

const LoanContainer = ({ Loans }) => {
  console.log(Loans);
  if (Loans.length === 0) {
    return (
      <Wrapper>
        <h2>No Loan to display</h2>
      </Wrapper>
    );
  }
  if (Loans[0].TotalAmount === '...') {
    return <></>;
  }
  {
    return (
      <Wrapper>
        <div className="transaction">
          {Loans.map((loan) => {
            return <LoanElement key={loan.LoanID} {...loan} />;
          })}
        </div>
      </Wrapper>
    );
  }
};

export default LoanContainer;
