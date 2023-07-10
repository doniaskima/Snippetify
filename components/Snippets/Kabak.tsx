import React from 'react';
import styled from 'styled-components';

const Component = () => {
  return <Button>Button</Button>;
};

const Button = styled.button`
  height: 50px;
  margin: 5px;
  width: 120px;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Consolas, Courier New, monospace;
  border: solid #404C5D 1px;
  font-size: 16px;
  color: rgb(161, 161, 161);
  transition: 500ms;
  border-radius: 5px;
  background: linear-gradient(145deg, #2e2d2d, #212121);
  box-shadow: -1px -5px 15px #41465B,
    5px 5px 15px #41465B,
    inset 5px 5px 10px #212121,
    inset -5px -5px 10px #212121;

  &:hover {
    box-shadow: 1px 1px 13px #20232e,
      -1px -1px 13px #545b78;
    color: #d6d6d6;
    transition: 500ms;
  }

  &:active {
    box-shadow: 1px 1px 13px #20232e,
      -1px -1px 33px #545b78;
    color: #d6d6d6;
    transition: 100ms;
  }
`;

const cssStyling = `
.exampleClass {
    height: 50px;
    margin: 5px;
    width: 120px;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Consolas, Courier New, monospace;
    border: solid #404C5D 1px;
    font-size: 16px;
    color: rgb(161, 161, 161);
    transition: 500ms;
    border-radius: 5px;
    background: linear-gradient(145deg, #2e2d2d, #212121);
    box-shadow: -1px -5px 15px #41465B,
      5px 5px 15px #41465B,
      inset 5px 5px 10px #212121,
      inset -5px -5px 10px #212121;
  }
  
  .exampleClass:hover {
    box-shadow: 1px 1px 13px #20232e,
      -1px -1px 13px #545b78;
    color: #d6d6d6;
    transition: 500ms;
  }
  
  .exampleClass:active {
    box-shadow: 1px 1px 13px #20232e,
      -1px -1px 33px #545b78;
    color: #d6d6d6;
    transition: 100ms;
  }  
}
`;

const scssStyling = `
.exampleClass {
  height: 50px;
  margin: 5px;
  width: 120px;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Consolas, Courier New, monospace;
  border: solid #404C5D 1px;
  font-size: 16px;
  color: rgb(161, 161, 161);
  transition: 500ms;
  border-radius: 5px;
  background: linear-gradient(145deg, #2e2d2d, #212121);
  box-shadow: -1px -5px 15px #41465B,
    5px 5px 15px #41465B,
    inset 5px 5px 10px #212121,
    inset -5px -5px 10px #212121;

  &:hover {
    box-shadow: 1px 1px 13px #20232e,
      -1px -1px 13px #545b78;
    color: #d6d6d6;
    transition: 500ms;
  }

  &:active {
    box-shadow: 1px 1px 13px #20232e,
      -1px -1px 33px #545b78;
    color: #d6d6d6;
    transition: 100ms;
  }
}
`;

export { cssStyling, scssStyling, Component };
