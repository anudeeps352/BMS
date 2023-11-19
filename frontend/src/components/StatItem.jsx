import React from 'react';
import Wrapper from '../assets/wrappers/StatItem';

const StatItem = ({ Tag, Displayparam }) => {
  return (
    <Wrapper>
      <h5>{Tag}</h5>
      <header>
        <span className="count">{Displayparam}</span>
      </header>
    </Wrapper>
  );
};

export default StatItem;
