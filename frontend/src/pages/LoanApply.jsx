import React, { useEffect, useState } from 'react';
import { FormRow, LoanStats } from '../components';
import Wrapper from '../assets/wrappers/LoanApply';
import { Form } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoanApply = () => {
  const [FixedAmount, setFixedAmount] = useState('');
  const [TotalAmount, setTotalAmount] = useState('');
  const [Payments, setPayments] = useState('');
  const [AccountNo, setAccountNo] = useState('');

  const handlesubmit = async (request) => {
    request.preventDefault();
    const formData = new FormData(loanapply);
    formData.append('UserID', localStorage.getItem('UserID'));
    formData.append('FixedAmount', FixedAmount);
    const data = Object.fromEntries(formData);
    console.log(data);

    try {
      const resp = await axios.post(
        'http://localhost:5000/api/loanapply',
        data
      );
      toast.success('Successfully applied for Loan');
      console.log(resp.data);
      request.target.reset();
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data);
      return error.response.data;
    }
  };

  const handleamount = (e) => {
    setTotalAmount(e.target.value);
  };

  const handlenumber = (e) => {
    setPayments(e.target.value);
  };

  const handleaccount = (e) => {
    setAccountNo(e.target.value);
  };

  const handlebuttonsubmit = (e) => {
    var n = Number(Payments);
    var r = 0.01;
    var pow = Math.pow(1 + r, n);
    setFixedAmount(((TotalAmount * r * pow) / (pow - 1)).toFixed(2));
  };

  return (
    <>
      <LoanStats
        FixedAmount={FixedAmount}
        TotalAmount={TotalAmount}
        Payments={Payments}
      />
      <Wrapper>
        <Form
          method="post"
          className="form"
          id="loanapply"
          autoComplete="off"
          onSubmit={handlesubmit}
        >
          <h4 className="form-title">Enter Details</h4>
          <div className="form-centre">
            <FormRow
              type="text"
              name="AccountNo"
              onChange={handleaccount}
            ></FormRow>
            <FormRow
              type="text"
              name="TotalAmount"
              onChange={handleamount}
            ></FormRow>
            <FormRow
              type="text"
              labelText="Duration(Number of Installments)"
              name="NumberofPayments"
              onChange={handlenumber}
            ></FormRow>
          </div>
          <button type="button" className="btn" onClick={handlebuttonsubmit}>
            Calculate
          </button>
          <button type="submit" className="btn ">
            submit
          </button>
        </Form>
      </Wrapper>
    </>
  );
};

export default LoanApply;
