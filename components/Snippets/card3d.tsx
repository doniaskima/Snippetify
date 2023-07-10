import React from 'react';
import styled from 'styled-components';

const Component = () => {
  return <Button>Button</Button>;
};

const Button = styled.button`
  margin: 12px;
  height: 50px;
  width: 120px;
  border-radius: 10px;
  background: #333;
  justify-content: center;
  align-items: center;
  box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #444, inset -5px -5px 10px #222;
  font-family: 'Damion', cursive;
  border: none;
  font-size: 16px;
  color: rgb(161, 161, 161);
  transition: 500ms;

  &:hover {
    box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #222, inset -5px -5px 10px #444;
    color: #d6d6d6;
    transition: 500ms;
  }
  `;

  const cssStyling = `
  .exampleClass {
    margin: 12px;
    height: 50px;
    width: 120px;
    border-radius: 10px;
    background: #333;
    justify-content: center;
    align-items: center;
    box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #444, inset -5px -5px 10px #222;
    font-family: 'Damion', cursive;
    border: none;
    font-size: 16px;
    color: rgb(161, 161, 161);
    transition: 500ms;
  }
  
  .exampleClass:hover {
    box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #222, inset -5px -5px 10px #444;
    color: #d6d6d6;
    transition: 500ms;
  }
  `;

const scssStyling = `
.exampleClass {
  margin: 12px;
  height: 50px;
  width: 120px;
  border-radius: 10px;
  background: #333;
  justify-content: center;
  align-items: center;
  box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #444, inset -5px -5px 10px #222;
  font-family: 'Damion', cursive;
  border: none;
  font-size: 16px;
  color: rgb(161, 161, 161);
  transition: 500ms;

  &:hover {
    box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #222, inset -5px -5px 10px #444;
    color: #d6d6d6;
    transition: 500ms;
  }
}
`;

export { Component, cssStyling, scssStyling };
