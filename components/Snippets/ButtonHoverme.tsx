import React from 'react';
import styled from 'styled-components';

const Component = () => {
  return (
    <Wrapper>
      <span>Hover me</span>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  color: white;
  cursor: pointer;

  span {
    display: inline-block;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  &:hover span {
    transform: scale(1.2);
    color: blue;
  }
`;

const cssStyling = `
.differentClass {
  color: red;
}

.differentClass span {
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
}

.differentClass:hover span {
  transform: scale(1.2);
  color: blue;
}
`;

const scssStyling = `
.differentClass {
  color: red;

  span {
    display: inline-block;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  &:hover {
    transform: scale(1.2);
    color: blue;
  }
}
`;

export { cssStyling, scssStyling, Component };
