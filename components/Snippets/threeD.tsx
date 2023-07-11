import React from 'react';
import styled from 'styled-components';

const Component = () => {
  return (
    <Button>
      Button
    </Button>
  );
};

const Button = styled.button`
  padding: 17px 40px;
  border-radius: 10px;
  border: 0;
  background-color: rgb(255, 56, 86);
  letter-spacing: 1.5px;
  font-size: 15px;
  transition: all 0.3s ease;
  box-shadow: rgb(201, 46, 70) 0px 10px 0px 0px;
  color: hsl(0, 0%, 100%);

  &:hover {
    box-shadow: rgb(201, 46, 70) 0px 7px 0px 0px;
  }

  &:active {
    background-color: rgb(255, 56, 86);
    /*50, 168, 80*/
    box-shadow: rgb(201, 46, 70) 0px 0px 0px 0px;
    transform: translateY(5px);
    transition: 200ms;
  }
  `;

const cssStyling = `
.exampleClass {
  padding: 17px 40px;
  border-radius: 10px;
  border: 0;
  background-color: rgb(255, 56, 86);
  letter-spacing: 1.5px;
  font-size: 15px;
  transition: all 0.3s ease;
  box-shadow: rgb(201, 46, 70) 0px 10px 0px 0px;
  color: hsl(0, 0%, 100%);
}

.exampleClass:hover {
  box-shadow: rgb(201, 46, 70) 0px 7px 0px 0px;
}

.exampleClass:active {
  background-color: rgb(255, 56, 86);
  /*50, 168, 80*/
  box-shadow: rgb(201, 46, 70) 0px 0px 0px 0px;
  transform: translateY(5px);
  transition: 200ms;
}
`;

const scssStyling = `
.exampleClass {
  padding: 17px 40px;
  border-radius: 10px;
  border: 0;
  background-color: rgb(255, 56, 86);
  letter-spacing: 1.5px;
  font-size: 15px;
  transition: all 0.3s ease;
  box-shadow: rgb(201, 46, 70) 0px 10px 0px 0px;
  color: hsl(0, 0%, 100%);

  &:hover {
    box-shadow: rgb(201, 46, 70) 0px 7px 0px 0px;
  }

  &:active {
    background-color: rgb(255, 56, 86);
    /*50, 168, 80*/
    box-shadow: rgb(201, 46, 70) 0px 0px 0px 0px;
    transform: translateY(5px);
    transition: 200ms;
  }
}
`;

export { cssStyling, scssStyling, Component };
