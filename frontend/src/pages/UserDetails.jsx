import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AccountsContainer } from '../components';
import { UserStats } from '../components';
import customFetch from '../utils/customFetch';

export const loader = async () => {
  const userid = localStorage.getItem('UserID');
  const data = { UserID: userid };
  try {
    const userdetails = await customFetch.get('/userdetails', { params: data });
    console.log(userdetails.data);
    return userdetails.data;
  } catch (error) {
    return error.response.data;
  }
};

const UserDetails = () => {
  const [{ Userdetails }, { Accounts }] = useLoaderData();

  return (
    <>
      <UserStats Userdetails={Userdetails} />
      <AccountsContainer Accounts={Accounts}></AccountsContainer>
    </>
  );
};

export default UserDetails;
