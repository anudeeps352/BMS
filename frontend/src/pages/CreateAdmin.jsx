import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import axios from 'axios';
import {
  Form,
  redirect,
  useActionData,
  useRevalidator,
} from 'react-router-dom';
import { FormRow } from '../components';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  console.log({ request });
  const data = Object.fromEntries(formData);

  try {
    const resp = await axios.post(
      'http://localhost:5000/api/createadmin',
      data
    );
    toast.success('Created Admin Successfully');
    return redirect('/admindashboard');
    console.log(resp.data);
  } catch (error) {
    toast.error(error.response.data.message);
    return error.response.data;
  }
};

const CreateAdmin = () => {
  return (
    <Wrapper>
      <Form method="post" className="form" autoComplete="off">
        <h4 className="form-title">Enter New Admin Details Here</h4>
        <div className="form-centre">
          <FormRow type="text" name="Name" labelText="Admin Name"></FormRow>
          <FormRow type="text" name="AdminID" labelText="Admin ID"></FormRow>
          <FormRow type="password" name="Password"></FormRow>
          <FormRow type="password" name="MasterKey"></FormRow>
        </div>
        <button type="submit" className="btn btn-block form-btn">
          Create
        </button>
      </Form>
    </Wrapper>
  );
};

export default CreateAdmin;
