import React from 'react';
import Wrapper from '../assets/wrappers/LoanIDContainer';
import LoanIDElement from './LoanIDElement';

const LoanIDContainer = ({ Loans, submit }) => {
  console.log(Loans);
  // if (Loan.length === 0) {
  //   return (
  //     <Wrapper>
  //       <h2>No Accounts to display</h2>
  //     </Wrapper>
  //   );
  // }
  // if (Transactions[0].Amount === '...') {
  //   return <></>;
  // }
  {
    return (
      <Wrapper>
        <div className={submit ? 'transaction' : 'transaction invisible'}>
          <LoanIDElement Loan={Loans} />
        </div>
      </Wrapper>
    );
  }
};

export default LoanIDContainer;
