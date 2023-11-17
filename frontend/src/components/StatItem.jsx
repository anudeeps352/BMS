import React from 'react';
import Wrapper from '../assets/wrappers/StatItem';

const StatItem = ({ username, phone, age }) => {
  return (
    <Wrapper>
      <header>
        <span className="count">{username}</span>
        <span className="count">{age}</span>
        <span className="count">{phone}</span>
      </header>
      <h5></h5>
    </Wrapper>
  );
};

export default StatItem;
