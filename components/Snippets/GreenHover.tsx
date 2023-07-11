import React from 'react';
import styled from 'styled-components';

const Component = () => {
  return (
    <Button className="btn">
      Hover me
    </Button>
  );
};

const Button = styled.button`
  font-size: 17px;
  background: transparent;
  border: none;
  padding: 1em 1.5em;
  color: #ffedd3;
  text-transform: uppercase;
  position: relative;
  transition: 0.5s ease;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: #ffc506;
    transition: 0.5s ease;
  }

  &:hover {
    color: #1e1e2b;
    transition-delay: 0.5s;
  }

  &:hover::before {
    width: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0;
    width: 100%;
    background-color: #ffc506;
    transition: 0.4s ease;
    z-index: -1;
  }

  &:hover::after {
    height: 100%;
    transition-delay: 0.4s;
    color: aliceblue;
  }
  `;

const cssStyling = `
.exampleClass {
  font-size: 17px;
  background: transparent;
  border: none;
  padding: 1em 1.5em;
  color: #ffedd3;
  text-transform: uppercase;
  position: relative;
  transition: 0.5s ease;
}

.exampleClass::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background-color: #ffc506;
  transition: 0.5s ease;
}

.exampleClass:hover {
  color: #1e1e2b;
  transition-delay: 0.5s;
}

.exampleClass:hover::before {
  width: 100%;
}

.exampleClass::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0;
  width: 100%;
  background-color: #ffc506;
  transition: 0.4s ease;
  z-index: -1;
}

.exampleClass:hover::after {
  height: 100%;
  transition-delay: 0.4s;
  color: aliceblue;
}
`;

const scssStyling = `
.exampleClass {
  font-size: 17px;
  background: transparent;
  border: none;
  padding: 1em 1.5em;
  color: #ffedd3;
  text-transform: uppercase;
  position: relative;
  transition: 0.5s ease;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: #ffc506;
    transition: 0.5s ease;
  }

  &:hover {
    color: #1e1e2b;
    transition-delay: 0.5s;
  }

  &:hover::before {
    width: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0;
    width: 100%;
    background-color: #ffc506;
    transition: 0.4s ease;
    z-index: -1;
  }

  &:hover::after {
    height: 100%;
    transition-delay: 0.4s;
    color: aliceblue;
  }
}
`;

export { cssStyling, scssStyling, Component };
