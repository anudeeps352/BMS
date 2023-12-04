import React, { useState } from 'react';
import { Form, redirect, useActionData } from 'react-router-dom';
import { FormRow } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { toast } from 'react-toastify';
import axios from 'axios';

export const action = async ({ request }) => {
  const formData = await request.formData();
  console.log({ request });
  const data = Object.fromEntries(formData);

  try {
    const resp = await axios.post(
      'http://localhost:5000/api/userpayment',
      data
    );
    toast.success('Transaction Successful');
    console.log(resp.data);
    return redirect('/userdashboard');
  } catch (error) {
    toast.error('Wrong details supplied');
    console.log(error.response.data);
    return error.response.data;
  }
};

const FundTransfer = () => {
  const [render, setrender] = useState(false);
  const handlechange = (e) => {
    setrender(!render);
  };
  return (
    <Wrapper>
      <Form
        method="post"
        className="form"
        autoComplete="off"
        onSubmit={(e) => {
          handlechange;
        }}
      >
        <h4 className="form-title">Fund Transfer</h4>
        <div className="form-centre">
          <FormRow type="text" name="FromAccount"></FormRow>
          <FormRow type="text" name="ToAccount"></FormRow>
          <FormRow type="text" name="Amount"></FormRow>
          <button type="submit" className="btn btn-block form-btn">
            submit
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default FundTransfer;
