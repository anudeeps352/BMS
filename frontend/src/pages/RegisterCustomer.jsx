import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import axios from 'axios';
import { Form, redirect, useActionData } from 'react-router-dom';
import { FormRow } from '../components';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

let Type = 'Savings';

const handlesubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(userdetails);
  formData.append('Type', Type);
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    const resp = await customFetch.post('/createuser', data);
    toast.success('Created Customer Successfully');
    console.log(resp.data);
    e.target.reset();
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error.response.data);
    return error.response.data;
  }
};

const RegisterCustomer = () => {
  const setsavings = () => {
    Type = 'Savings';
    setisActiveLoan(false);
    setisActiveSavings(true);
  };
  const setloan = () => {
    Type = 'Current';
    setisActiveLoan(true);
    setisActiveSavings(false);
  };

  const [isActiveSavings, setisActiveSavings] = useState(false);
  const [isActiveLoan, setisActiveLoan] = useState(false);
  return (
    <Wrapper>
      <Form
        id="userdetails"
        method="post"
        className="form"
        autoComplete="off"
        onSubmit={handlesubmit}
      >
        <h4 className="form-title">Enter User Details Here</h4>
        <div className="form-centre">
          <FormRow type="text" name="UserID"></FormRow>
          <FormRow type="text" name="Username"></FormRow>
          <FormRow type="text" name="Age"></FormRow>
          <FormRow type="text" name="Phone"></FormRow>
          <FormRow type="password" name="Password"></FormRow>
        </div>
        <h4 className="accountsection">Enter Account Details Here</h4>
        <div className="form-centre">
          <FormRow type="text" name="AccountNo"></FormRow>
        </div>
        <button
          type="button"
          className={isActiveSavings ? 'active type-btn pressed' : 'type-btn'}
          onClick={setsavings}
        >
          Savings
        </button>
        <button
          type="button"
          className={isActiveLoan ? 'active type-btn pressed' : 'type-btn'}
          onClick={setloan}
        >
          Current
        </button>
        <button type="submit" className="btn btn-block form-btn">
          submit
        </button>
      </Form>
    </Wrapper>
  );
};

export default RegisterCustomer;
