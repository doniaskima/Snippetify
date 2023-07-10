import React from 'react';
import styled from 'styled-components';
import ContextMenu from './ContextMenu';
import SnippetsGridItem from './SnippetItem';
import allSnippets from './Snippets';

const SnippetsGrid = () => {
  return (
    <Wrapper>
      {allSnippets.map(({ Component, cssStyling, scssStyling }) => (
        <ContextMenu cssStyling={cssStyling} scssStyling={scssStyling} key={cssStyling}>
          <SnippetsGridItem>
            <Component />
          </SnippetsGridItem>
        </ContextMenu>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default SnippetsGrid;
