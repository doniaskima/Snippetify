import React from 'react';
import styled, { keyframes } from 'styled-components';

const Component = () => {
  return (
    <Wrapper>
      <span>Button</span>
    </Wrapper>
  );
};

const pulseAnimation = keyframes`
  0% {
    transform: scale(0.7, 1.3);
  }

  25% {
    transform: scale(1.3, 0.7);
  }

  50% {
    transform: scale(0.7, 1.3);
  }

  75% {
    transform: scale(1.3, 0.7);
  }

  100% {
    transform: scale(1, 1);
  }
`;

const Wrapper = styled.button`
  padding: 15px 30px;
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 10px;
  transition: 0.5s;
  background: #1e1e1e;
  color: greenyellow;
  box-shadow: 0 0 10px #363636, inset 0 0 10px #363636;

  &:hover {
    animation: ${pulseAnimation} 0.5s 1 linear;
  }
`;

const cssStyling = `
.exampleClass {
  padding: 15px 30px;
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 10px;
  transition: 0.5s;
  background: #1e1e1e;
  color: greenyellow;
  box-shadow: 0 0 10px #363636, inset 0 0 10px #363636;
}

.exampleClass span {
  display: inline-block;
  transition: transform 0.2s ease, color 0.2s ease;
}

.exampleClass:hover span {
  transform: translateX(4px);
  color: hsl(243, 80%, 62%);
}
`;

const scssStyling = `
.exampleClass {
  padding: 15px 30px;
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 10px;
  transition: 0.5s;
  background: #1e1e1e;
  color: greenyellow;
  box-shadow: 0 0 10px #363636, inset 0 0 10px #363636;

  span {
    display: inline-block;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  &:hover {
    transform: translateX(4px);
    color: hsl(243, 80%, 62%);
  }
}
`;

export { cssStyling, scssStyling, Component };
