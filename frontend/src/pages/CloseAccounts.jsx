import React, { useRef } from 'react';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import axios from 'axios';
import { Form, redirect, useActionData } from 'react-router-dom';
import { FormRow } from '../components';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  console.log({ request });
  const data = Object.fromEntries(formData);

  try {
    const resp = await axios.post(
      'http://localhost:5000/api/closeaccount',
      data
    );
    toast.success('Account Closed Successfully');
    return redirect('/admindashboard');
  } catch (error) {
    toast.error(error.response.data.message);
    return error.response.data;
  }
};

const CloseAccount = () => {
  return (
    <Wrapper>
      <Form method="post" className="form" autoComplete="off">
        <h4 className="form-title">Close Account</h4>
        <div className="form-centre">
          <FormRow type="text" name="UserID"></FormRow>
          <FormRow type="text" name="AccountNo"></FormRow>
        </div>
        <button type="submit" className="btn btn-block form-btn">
          Close Account
        </button>
      </Form>
    </Wrapper>
  );
};

export default CloseAccount;
