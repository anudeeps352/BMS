// import React from 'react';
// import Wrapper from '../assets/wrappers/Transaction';

// const LoanIDElement = ({
//   TransactionID,
//   FromAccount,
//   ToAccount,
//   Amount,
//   Date,
//   Type,
// }) => {
//   return (
//     <Wrapper>
//       <header>
//         <div className="main-icon">{Type}</div>
//         <div className="info">
//           <h5>Transaction ID : {TransactionID}</h5>
//           <h5>From Account : {FromAccount}</h5>
//           <p>To Account : {ToAccount}</p>
//         </div>
//         <div className="right-side">
//           <h6>Amount : {Amount}</h6>
//           <h6>Date : {Date}</h6>
//         </div>
//       </header>
//     </Wrapper>
//   );
// };

// export default LoanIDElement;

import React from 'react';
import Wrapper from '../assets/wrappers/Transaction';

const LoanIDElement = ({ Loan }) => {
  console.log;
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{'Loan'}</div>
        <div></div>
        <div className="info">
          <h5>Fixed Amount : {Loan.FixedAmount}</h5>
          <h5>Payments Remaining : {Loan.PaymentsRemaining}</h5>
        </div>
      </header>
    </Wrapper>
  );
};

export default LoanIDElement;
