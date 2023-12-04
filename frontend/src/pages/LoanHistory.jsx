import React from 'react';
import {
  FormRowSelect,
  LoanContainer,
  SearchLoanContainer,
} from '../components';
import { Form, useLoaderData, useSubmit } from 'react-router-dom';
import customFetch from '../utils/customFetch';

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  try {
    const Loans = await customFetch('/loanhistory', {
      params: { LoanID: params.LoanID },
    });
    return Loans.data;
  } catch (error) {
    return error.response.data;
  }
};

const LoanHistory = () => {
  const Loans = useLoaderData();
  console.log(Loans);
  const submit = useSubmit();
  const accounts = JSON.parse(localStorage.getItem('LoanAccounts'));
  accounts.unshift('...');
  return (
    <>
      <SearchLoanContainer accounts={accounts}></SearchLoanContainer>
      <LoanContainer Loans={Loans.Loans}></LoanContainer>
    </>
  );
};

export default LoanHistory;
