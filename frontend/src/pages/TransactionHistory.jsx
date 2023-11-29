import axios from 'axios';
import React, { useState } from 'react';
import { Form, useLoaderData, useSubmit } from 'react-router-dom';
import {
  FormRowSelect,
  SearchContainer,
  TransactionContainer,
} from '../components';
import customFetch from '../utils/customFetch';

// const [accounts, setaccounts] = useState([]);
const accounts = JSON.parse(localStorage.getItem('Accounts')).AccountNo;
accounts.unshift('...');
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

  return (
    <>
      {/* <Form className="form">
        <h4 className="form-title">Enter Account Number</h4>
        <FormRowSelect
          name="AccountNo"
          labelText="AccountNo"
          list={accounts}
          defaultValue={'...'}
          onChange={(e) => {
            submit(e.currentTarget.form);
          }}
        ></FormRowSelect>
      </Form> */}
      <SearchContainer accounts={accounts}></SearchContainer>
      <TransactionContainer
        Transactions={Transactions.Transactions}
      ></TransactionContainer>
    </>
  );
};

export default TransactionHistory;
