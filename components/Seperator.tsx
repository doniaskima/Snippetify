import styled from 'styled-components';
import React from 'react';

const Separator = () => {
  return (
    <Wrapper>
      <SeparatorLine />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SeparatorLine = styled.div`
  display: flex;
  justify-content: center;
  height: 1px;
  width: 45px;
  background-color: $darkGray;
`;

export default Separator;
