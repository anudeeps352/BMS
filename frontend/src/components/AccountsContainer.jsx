import React from 'react';
import Wrapper from '../assets/wrappers/AccountContainer';
import accountdata from '../utils/accountdata';
import Account from './Account';
const AccountsContainer = () => {
  if (accountdata.length === 0) {
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
        {accountdata.map((account) => {
          return <Account key={account.accountno} {...account} />;
        })}
      </div>
    </Wrapper>
  );
};

export default AccountsContainer;
