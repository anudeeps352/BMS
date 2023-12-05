import React, { useState } from 'react';
import { FormRow } from '../components';
import { Form } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { toast } from 'react-toastify';

let Type = 'Savings';

const handlesubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(accountdetails);
  formData.append('Type', Type);
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    const resp = await customFetch.post('/createaccount', data);
    toast.success(resp.data.message);
    console.log(resp.data.message);
    e.target.reset();
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error.response.data);
    return error.response.data;
  }
};

const CreateAccount = () => {
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
        id="accountdetails"
        method="post"
        className="form"
        autoComplete="off"
        onSubmit={handlesubmit}
      >
        <h4 className="form-title">Enter Account Details Here</h4>
        <div className="form-centre">
          <FormRow type="text" name="UserID"></FormRow>
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

export default CreateAccount;
