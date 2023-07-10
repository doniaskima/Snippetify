import React, { useState } from 'react';
import styled from 'styled-components';
import ContextMenu from './ContextMenu';
import SnippetsGridItem from './SnippetItem';
import allSnippets from './Snippets';

const SnippetsGrid = () => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const snippetsToDisplay = allSnippets.slice(startIndex, endIndex);

  const totalPages = Math.ceil(allSnippets.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Wrapper>
      {snippetsToDisplay.map(({ Component, cssStyling, scssStyling }, index) => (
        <ContextMenu cssStyling={cssStyling} scssStyling={scssStyling} key={cssStyling}>
          <SnippetsGridItem>
            <Component />
          </SnippetsGridItem>
        </ContextMenu>
      ))}
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </PageButton>
        ))}
      </Pagination>
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const PageButton = styled.button<{ active: boolean }>`
  margin: 0 4px;
  padding: 8px;
  border: none;
  background-color: ${({ active }) => (active ? '#333' : '#ddd')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;

  &:hover {
    background-color: ${({ active }) => (active ? '#333' : '#ccc')};
  }
`;

export default SnippetsGrid;
