import React, { useState } from 'react';
import {
  FormRow,
  FormRowSelect,
  LoanIDContainer,
  SearchContainer,
  TransactionContainer,
} from '../components';
import { Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/PayLoan';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

const PayLoanAdmin = () => {
  const [submit, setsubmit] = useState(false);
  const [loans, setloans] = useState('');
  const UserID = localStorage.getItem('UserID');

  const handleloanid = async (e) => {
    e.preventDefault();
    const formData = new FormData(loanid);
    formData.append('UserID', UserID);
    const data = Object.fromEntries(formData);
    console.log(data);

    try {
      const resp = await customFetch.get('/adminpayloan', {
        params: data,
      });
      setloans(resp.data.Loan);
      console.log(resp.data.Loan);
      setsubmit(true);
    } catch (error) {
      toast.error(error.response.data.message);
      setsubmit(false);
      console.log(error.response.data);
      return error.response.data;
    }
  };

  const handlepayment = async (e) => {
    e.preventDefault();
    const formData = new FormData(payment);
    formData.append('UserID', UserID);
    formData.append('FixedAmount', loans.FixedAmount);
    formData.append('LoanID', loans.LoanID);
    const data = Object.fromEntries(formData);
    console.log(data);

    try {
      const resp = await customFetch.post('/adminpayloan', data);
      toast.success(resp.data.message);
    } catch (error) {
      toast.error('error');
    }
    try {
      const formData = new FormData(loanid);
      formData.append('UserID', UserID);
      const data = Object.fromEntries(formData);
      const response = await customFetch.get('/adminpayloan', {
        params: data,
      });
      setloans(response.data.Loan);
    } catch (error) {
      toast.error('error');
    }
  };

  return (
    <>
      <Wrapper>
        <Form
          method="get"
          className="form"
          autoComplete="off"
          id="loanid"
          onSubmit={handleloanid}
        >
          <div className="form-centre">
            <FormRow
              type="text"
              name="LoanID"
              labelText="Enter LoanID"
            ></FormRow>
            <button
              type="submit"
              className="btn btn-block form-btn"
              form="loanid"
            >
              submit
            </button>
          </div>
        </Form>
        <LoanIDContainer Loans={loans} submit={submit}></LoanIDContainer>
        <Form
          method="post"
          className={submit ? 'form ' : 'form invisible'}
          autoComplete="off"
          onSubmit={handlepayment}
          id="payment"
        >
          <div className="form-centre">
            <FormRow
              type="text"
              name="AccountNo"
              labelText="Enter AccountNo"
            ></FormRow>
            <button
              type="submit"
              className="btn btn-block form-btn"
              form="payment"
            >
              Pay Amount
            </button>
          </div>
        </Form>
      </Wrapper>
    </>
  );
};

export default PayLoanAdmin;
