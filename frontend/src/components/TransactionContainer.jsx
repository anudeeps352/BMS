import React from 'react';
import Wrapper from '../assets/wrappers/TransactionContainer';
import transactiondata from '../utils/transactiondata';
import Transaction from './Transaction';

const TransactionContainer = () => {
  if (transactiondata.length === 0) {
    return (
      <Wrapper>
        <h2>No Accounts to display</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="transaction">
        {transactiondata.map((transaction) => {
          return (
            <Transaction key={transaction.transactionid} {...transaction} />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default TransactionContainer;
