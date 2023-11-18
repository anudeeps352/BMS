import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { TransactionContainer } from '../components';
import customFetch from '../utils/customFetch';

export const loader = async () => {
  const data = { AccountNo: 12344 };
  try {
    const Transactions = await customFetch('/transactions', {
      params: { AccountNo: 12344 },
    });
    console.log(Transactions.data);
    return Transactions.data;
  } catch (error) {
    return error.response.data;
  }
};
const TransactionHistory = () => {
  const Transactions = useLoaderData();
  return (
    <>
      <TransactionContainer
        Transactions={Transactions.Transactions}
      ></TransactionContainer>
    </>
  );
};

export default TransactionHistory;
