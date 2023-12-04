import React from 'react';
import Wrapper from '../assets/wrappers/AdminStat';
import StatItem from './StatItem';
const AdminStats = ({ Admindetails }) => {
  return (
    <Wrapper>
      <StatItem
        key={Admindetails.id}
        Tag="Name"
        Displayparam={Admindetails.Name}
      />
      <StatItem
        key={Admindetails.id}
        Tag="AdminID"
        Displayparam={Admindetails.AdminID}
      />
    </Wrapper>
  );
};

export default AdminStats;
