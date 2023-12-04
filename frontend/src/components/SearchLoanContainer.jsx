import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, useSubmit } from 'react-router-dom';
import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';

const SearchLoanContainer = ({ accounts }) => {
  const submit = useSubmit();
  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">Select Account Number</h5>
        <div className="form-center">
          <FormRowSelect
            labelText="LoanID"
            name="LoanID"
            list={accounts}
            defaultValue={accounts[0]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
        </div>
      </Form>
    </Wrapper>
  );
};
export default SearchLoanContainer;
