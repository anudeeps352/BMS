import React from 'react';
import {
  FormRow,
  FormRowSelect,
  ApproveLoanContainer,
  SearchContainer,
  TransactionContainer,
} from '../components';
import { Form, useLoaderData } from 'react-router-dom';
import customFetch from '../utils/customFetch';

export const loader = async () => {
  try {
    const Loans = await customFetch.get('/loanapprove');
    console.log(Loans.data);
    return Loans.data;
  } catch (error) {
    return error.response.data.messsage;
  }
};

const ApproveLoans = () => {
  const Loans = useLoaderData().requests;
  return (
    <>
      <ApproveLoanContainer Loans={Loans}></ApproveLoanContainer>
    </>
  );
};

export default ApproveLoans;
