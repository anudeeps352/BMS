import React from 'react';
import { Form } from 'react-router-dom';
import { FormRow } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
const FundTransfer = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Fund Transfer</h4>
        <div className="form-centre">
          <FormRow type="text" name="from_account"></FormRow>
          <FormRow type="text" name="to_account"></FormRow>
          <FormRow type="text" name="amount"></FormRow>
          <button typr="submit" className="btn btn-block form-btn">
            submit
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default FundTransfer;
