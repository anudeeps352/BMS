import React, { useRef } from 'react';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import axios from 'axios';
import { Form, redirect, useActionData } from 'react-router-dom';
import { FormRow } from '../components';
import { toast } from 'react-toastify';

const handlesubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(withdrawdetails);
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    const resp = await axios.post('http://localhost:5000/api/withdraw', data);
    toast.success('Transaction Successful');
    console.log(resp.data);
    return redirect('/userdashboard');
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error.response.data);
    return error.response.data;
  }
};

const Withdraw = () => {
  return (
    <Wrapper>
      <Form
        id="withdrawdetails"
        method="post"
        className="form"
        autoComplete="off"
        onSubmit={handlesubmit}
      >
        <h4 className="form-title">Withdraw</h4>
        <div className="form-centre">
          <FormRow type="text" name="AccountNo"></FormRow>
          <FormRow type="text" name="Amount"></FormRow>
        </div>
        <button type="submit" className="btn btn-block form-btn">
          Withdraw amount
        </button>
      </Form>
    </Wrapper>
  );
};

export default Withdraw;
