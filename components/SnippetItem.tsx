import React from 'react';
import styled from 'styled-components';

const SnippetsGridItem = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  height: 120px;
  background-color: #333333;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export default SnippetsGridItem;
