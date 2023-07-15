import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinnerAnimation = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const Spinner = styled.div`
  width: 56px;
  height: 56px;
  display: grid;
  border: 4.5px solid #0000;
  border-radius: 50%;
  border-color: #dbdcef #0000;
  animation: ${spinnerAnimation} 1s infinite linear;

  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    margin: 2.2px;
    border: inherit;
    border-radius: 50%;
  }

  &::before {
    border-color: #474bff #0000;
    animation: inherit;
    animation-duration: 0.5s;
    animation-direction: reverse;
  }

  &::after {
    margin: 8.9px;
  }
`;

const Component = () => {
  return (
    <Spinner />
  );
};

const cssStyling = `
.spinner {
  width: 56px;
  height: 56px;
  display: grid;
  border: 4.5px solid #0000;
  border-radius: 50%;
  border-color: #dbdcef #0000;
  animation: spinner-e04l1k 1s infinite linear;
}

.spinner::before,
.spinner::after {
  content: "";
  grid-area: 1/1;
  margin: 2.2px;
  border: inherit;
  border-radius: 50%;
}

.spinner::before {
  border-color: #474bff #0000;
  animation: inherit;
  animation-duration: 0.5s;
  animation-direction: reverse;
}

.spinner::after {
  margin: 8.9px;
}

@keyframes spinner-e04l1k {
  100% {
    transform: rotate(1turn);
  }
}
`;

const scssStyling = `
.spinner {
  width: 56px;
  height: 56px;
  display: grid;
  border: 4.5px solid #0000;
  border-radius: 50%;
  border-color: #dbdcef #0000;
  animation: spinner-e04l1k 1s infinite linear;

  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    margin: 2.2px;
    border: inherit;
    border-radius: 50%;
  }

  &::before {
    border-color: #474bff #0000;
    animation: inherit;
    animation-duration: 0.5s;
    animation-direction: reverse;
  }

  &::after {
    margin: 8.9px;
  }
}

@keyframes spinner-e04l1k {
  100% {
    transform: rotate(1turn);
  }
}
`;

export { cssStyling, scssStyling, Component };
