import React from 'react';
import Wrapper from '../assets/wrappers/UserStats';
import StatItem from './StatItem';
const UserStats = ({ Userdetails }) => {
  return (
    <Wrapper>
      <StatItem
        key={Userdetails.id}
        Tag="Name"
        Displayparam={Userdetails.Name}
      />
      <StatItem key={Userdetails.id} Tag="Age" Displayparam={Userdetails.Age} />
      <StatItem
        key={Userdetails.id}
        Tag="Phone"
        Displayparam={Userdetails.Phone}
      />
    </Wrapper>
  );
};

export default UserStats;
