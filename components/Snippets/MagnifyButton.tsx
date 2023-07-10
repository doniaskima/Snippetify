import React from 'react';
import styled from 'styled-components';

const Component = () => {
  return <Wrapper>Click me</Wrapper>;
};

const Wrapper = styled.button`
  border: none;
  outline: none;
  background-color: #6c5ce7;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  transition: all ease 0.1s;
  box-shadow: 0px 5px 0px 0px #a29bfe;

  &:active {
    transform: translateY(5px);
    box-shadow: 0px 0px 0px 0px #a29bfe;
  }
`;

const cssStyling = `
.buttonClass {
  border: none;
  outline: none;
  background-color: #6c5ce7;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  transition: all ease 0.1s;
  box-shadow: 0px 5px 0px 0px #a29bfe;
}

.buttonClass:active {
  transform: translateY(5px);
  box-shadow: 0px 0px 0px 0px #a29bfe;
}
`;

const scssStyling = `
.buttonClass {
  border: none;
  outline: none;
  background-color: #6c5ce7;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  transition: all ease 0.1s;
  box-shadow: 0px 5px 0px 0px #a29bfe;

  &:active {
    transform: translateY(5px);
    box-shadow: 0px 0px 0px 0px #a29bfe;
  }
}
`;

export { cssStyling, scssStyling, Component };
