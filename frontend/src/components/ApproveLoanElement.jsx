import React from 'react';
import Wrapper from '../assets/wrappers/ApproveLoanElement';
import customFetch from '../utils/customFetch';
import { useRevalidator } from 'react-router-dom';
import { toast } from 'react-toastify';

const ApproveLoanElement = ({
  Account,
  UserID,
  Amount,
  Duration,
  FixedAmount,
}) => {
  const revalidator = useRevalidator();

  const handleapprove = async () => {
    const data = {
      UserID: UserID,
      AccountNo: Account,
      Reply: 'Yes',
      AmountRemaining: Amount,
      TotalAmount: Amount,
      FixedAmount: FixedAmount,
      PaymentsRemaining: Duration,
    };
    console.log(data);

    try {
      const resp = await customFetch.post('/loanapprove', data);
      revalidator.revalidate();
      console.log(resp);
      toast.success(resp.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      return error.response.data;
    }
  };

  const handlereject = async () => {
    const data = {
      UserID: UserID,
      AccountNo: Account,
      Reply: 'No',
    };
    try {
      const resp = await customFetch.post('/loanapprove', data);
      toast.success(resp.data.message);
      revalidator.revalidate();
    } catch (error) {
      toast.error('Failed to do action');
      return error.response.data;
    }
  };

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{'Loan'}</div>
        <div className="info">
          <h5>Total Amount : {Amount}</h5>
          <h5>Fixed Amount : {FixedAmount}</h5>
          <h5>Number of Payments : {Duration}</h5>
        </div>
        <div className="buttons">
          <button type="button" className="btn" onClick={handleapprove}>
            Approve
          </button>
          <button type="button" className="btn" onClick={handlereject}>
            Reject
          </button>
        </div>
      </header>
    </Wrapper>
  );
};

export default ApproveLoanElement;
