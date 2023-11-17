import React from 'react';
import { toast } from 'react-toastify';
import { AccountsContainer } from '../components';
import { UserStats } from '../components';
const UserDetails = () => {
  return (
    <>
      <UserStats />
      <AccountsContainer></AccountsContainer>
    </>
  );
};

export default UserDetails;
