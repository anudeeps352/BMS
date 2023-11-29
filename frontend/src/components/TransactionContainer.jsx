import React from 'react';
import Wrapper from '../assets/wrappers/TransactionContainer';
import Transaction from './Transaction';

const TransactionContainer = ({ Transactions }) => {
  if (Transactions.length === 0) {
    return (
      <Wrapper>
        <h2>No Accounts to display</h2>
      </Wrapper>
    );
  }
  if (Transactions[0].Amount === '...') {
    return <></>;
  }
  {
    return (
      <Wrapper>
        <div className="transaction">
          {Transactions.map((transaction) => {
            return (
              <Transaction key={transaction.TransactionID} {...transaction} />
            );
          })}
        </div>
      </Wrapper>
    );
  }
};

export default TransactionContainer;
