import React from 'react';
import Wrapper from '../assets/wrappers/AccountContainer';
import Account from './Account';
const AccountsContainer = ({ Accounts }) => {
  if (Accounts.length === 0) {
    return (
      <Wrapper>
        <h2>No Accounts to display</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="accounts">
        <div className="mb-3">
          <h2>Accounts</h2>
        </div>
        {Accounts.map((account) => {
          return <Account key={account.AccountNo} {...account} />;
        })}
      </div>
    </Wrapper>
  );
};

export default AccountsContainer;
