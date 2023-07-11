import React from 'react';
import styled from 'styled-components';

const Component = () => {
  return (
    <Button>
      <span>HOVER</span>
    </Button>
  );
};

const Button = styled.button`
  border: none;
  border-radius: 20px;
  background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  transition: all 1.5s ease;
  font-family: 'Ropa Sans', sans-serif;
  font-weight: bold;
  letter-spacing: 0.05rem;
  padding: 0;

  span {
    display: inline-block;
    padding: 15px 35px;
    font-size: 17px;
    border-radius: 20px;
    background: #ffffff10;
    backdrop-filter: blur(20px);
    transition: 0.4s ease-in-out;
    transition-property: color;
    height: 100%;
    width: 100%;
  }

  &:hover span {
    backdrop-filter: blur(0px);
    color: #ffffff;
  }
  `;

const cssStyling = `
.exampleClass {
  border: none;
  border-radius: 20px;
  background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  transition: all 1.5s ease;
  font-family: 'Ropa Sans', sans-serif;
  font-weight: bold;
  letter-spacing: 0.05rem;
  padding: 0;
}

.exampleClass span {
  display: inline-block;
  padding: 15px 35px;
  font-size: 17px;
  border-radius: 20px;
  background: #ffffff10;
  backdrop-filter: blur(20px);
  transition: 0.4s ease-in-out;
  transition-property: color;
  height: 100%;
  width: 100%;
}

.exampleClass span:hover {
  backdrop-filter: blur(0px);
  color: #ffffff;
}
`;

const scssStyling = `
.exampleClass {
  border: none;
  border-radius: 20px;
  background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  transition: all 1.5s ease;
  font-family: 'Ropa Sans', sans-serif;
  font-weight: bold;
  letter-spacing: 0.05rem;
  padding: 0;

  span {
    display: inline-block;
    padding: 15px 35px;
    font-size: 17px;
    border-radius: 20px;
    background: #ffffff10;
    backdrop-filter: blur(20px);
    transition: 0.4s ease-in-out;
    transition-property: color;
    height: 100%;
    width: 100%;
  }

  &:hover {
    backdrop-filter: blur(0px);
    color: #ffffff;
  }
}
`;

export { cssStyling, scssStyling, Component };
