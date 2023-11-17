import React from 'react';
import Wrapper from '../assets/wrappers/UserStats';
import userstats from '../utils/userstats';
import StatItem from './StatItem';
const UserStats = () => {
  return (
    <Wrapper>
      {userstats.map((item) => {
        return <StatItem key={item.username} {...item} />;
      })}
    </Wrapper>
  );
};

export default UserStats;
