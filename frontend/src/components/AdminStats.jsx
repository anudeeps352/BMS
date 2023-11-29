import React from 'react';
import Wrapper from '../assets/wrappers/UserStats';
import StatItem from './StatItem';
const AdminStats = ({ Admindetails }) => {
  return (
    <Wrapper>
      <StatItem
        key={Admindetails.id}
        Tag="Name"
        Displayparam={Admindetails.Name}
      />
    </Wrapper>
  );
};

export default AdminStats;
