import React, { ReactNode } from 'react';
import styled from 'styled-components';
interface SnippetsGridItemProps {
  children: ReactNode;
}

const SnippetsGridItem: React.FC<SnippetsGridItemProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  height: 120px;
  width: 190px;
  background-color: #E1AEFF;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export default SnippetsGridItem;
