import React from 'react';
import Wrapper from '../assets/wrappers/UserStats';
import StatItem from './StatItem';
const LoanStats = ({ FixedAmount, Payments, TotalAmount }) => {
  return (
    <Wrapper>
      <StatItem key={'1'} Tag="FixedAmount:" Displayparam={FixedAmount} />
      <StatItem key={'2'} Tag="Payments:" Displayparam={Payments} />
      <StatItem key={'3'} Tag="Total Amount:" Displayparam={TotalAmount} />
    </Wrapper>
  );
};

export default LoanStats;
