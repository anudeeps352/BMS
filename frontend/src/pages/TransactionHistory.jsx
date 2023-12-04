import axios from 'axios';
import React, { useState } from 'react';
import { Form, useLoaderData, useSubmit } from 'react-router-dom';
import {
  FormRowSelect,
  SearchContainer,
  TransactionContainer,
} from '../components';
import customFetch from '../utils/customFetch';

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  console.log(params);
  try {
    const Transactions = await customFetch('/transactions', {
      params: { AccountNo: params.AccountNo },
    });
    console.log(Transactions.data);
    return Transactions.data;
  } catch (error) {
    return error.response.data;
  }
};

const TransactionHistory = () => {
  const Transactions = useLoaderData();
  const submit = useSubmit();
  const accounts = JSON.parse(localStorage.getItem('Accounts'));
  accounts.unshift('...');

  return (
    <>
      <SearchContainer accounts={accounts}></SearchContainer>
      <TransactionContainer Transactions={Transactions}></TransactionContainer>
    </>
  );
};

export default TransactionHistory;
