import React from 'react';
import styled, { keyframes } from 'styled-components';

const matrixAnimation = keyframes`
  0% {
    background-position: 0% 100%, 50% 100%, 100% 100%;
  }

  100% {
    background-position: 0% 0%, 50% 0%, 100% 0%;
  }
`;

const Loader = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(#ff8a00 calc(1*100%/6),#fff 0 calc(3*100%/6),#ff8a00 0),
            linear-gradient(#ff8a00 calc(2*100%/6),#fff 0 calc(4*100%/6),#ff8a00 0),
            linear-gradient(#ff8a00 calc(3*100%/6),#fff 0 calc(5*100%/6),#ff8a00 0);
  background-size: 15px 400%;
  background-repeat: no-repeat;
  animation: ${matrixAnimation} 1s infinite linear;
`;

const Component = () => {
  return (
    <Loader className="loader" />
  );
};

const cssStyling = `
.loader {
  width: 60px;
  height: 60px;
  background: linear-gradient(#ff8a00 calc(1*100%/6),#fff 0 calc(3*100%/6),#ff8a00 0),
            linear-gradient(#ff8a00 calc(2*100%/6),#fff 0 calc(4*100%/6),#ff8a00 0),
            linear-gradient(#ff8a00 calc(3*100%/6),#fff 0 calc(5*100%/6),#ff8a00 0);
  background-size: 15px 400%;
  background-repeat: no-repeat;
  animation: matrix 1s infinite linear;
}

@keyframes matrix {
  0% {
    background-position: 0% 100%, 50% 100%, 100% 100%;
  }

  100% {
    background-position: 0% 0%, 50% 0%, 100% 0%;
  }
}
`;

const scssStyling = `
.loader {
  width: 60px;
  height: 60px;
  background: linear-gradient(#ff8a00 calc(1*100%/6),#fff 0 calc(3*100%/6),#ff8a00 0),
            linear-gradient(#ff8a00 calc(2*100%/6),#fff 0 calc(4*100%/6),#ff8a00 0),
            linear-gradient(#ff8a00 calc(3*100%/6),#fff 0 calc(5*100%/6),#ff8a00 0);
  background-size: 15px 400%;
  background-repeat: no-repeat;
  animation: matrix 1s infinite linear;
}

@keyframes matrix {
  0% {
    background-position: 0% 100%, 50% 100%, 100% 100%;
  }

  100% {
    background-position: 0% 0%, 50% 0%, 100% 0%;
  }
}
`;

export { cssStyling, scssStyling, Component };
