import React from 'react';
import styled, { keyframes } from 'styled-components';

const Component = () => {
  return (
    <Loader>
      <LoaderInner />
    </Loader>
  );
};

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  width: 50px;
  height: 50px;
  border: 7px double;
  border-color: #43cec7 transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${spinAnimation} 2s linear infinite;
`;

const LoaderInner = styled.div`
  width: 50%;
  height: 50%;
  background-color: #43cec7;
  border-radius: 50%;
`;

const cssStyling = `
.loaderClass {
  width: 50px;
  height: 50px;
  border: 7px double;
  border-color: #43cec7 transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: spin13213 2s linear infinite;
}

.loaderClass div {
  width: 50%;
  height: 50%;
  background-color: #43cec7;
  border-radius: 50%;
}

@keyframes spin13213 {
  to {
    transform: rotate(360deg);
  }
}
`;

const scssStyling = `
.loaderClass {
  width: 50px;
  height: 50px;
  border: 7px double;
  border-color: #43cec7 transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: spin13213 2s linear infinite;

  div {
    width: 50%;
    height: 50%;
    background-color: #43cec7;
    border-radius: 50%;
  }
}

@keyframes spin13213 {
  to {
    transform: rotate(360deg);
  }
}
`;

export { cssStyling, scssStyling, Component };
