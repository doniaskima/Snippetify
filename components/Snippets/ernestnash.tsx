import React from 'react';
import styled from 'styled-components';

const Component = () => {
  return <Button>I am a button</Button>;
};

const Button = styled.a`
  display: inline-block;
  padding: 0.9rem 1.8rem;
  font-size: 16px;
  font-weight: 700;
  color: white;
  border: 3px solid rgb(252, 70, 100);
  cursor: pointer;
  position: relative;
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  z-index: 1;
  font-family: inherit;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(252, 70, 100);
    transform: translateX(-100%);
    transition: all 0.3s;
    z-index: -1;
  }

  &:hover::before {
    transform: translateX(0);
  }
`;

const cssStyling = `
.btnClass {
  display: inline-block;
  padding: 0.9rem 1.8rem;
  font-size: 16px;
  font-weight: 700;
  color: white;
  border: 3px solid rgb(252, 70, 100);
  cursor: pointer;
  position: relative;
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  z-index: 1;
  font-family: inherit;
}

.btnClass::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(252, 70, 100);
  transform: translateX(-100%);
  transition: all 0.3s;
  z-index: -1;
}

.btnClass:hover::before {
  transform: translateX(0);
}
`;

const scssStyling = `
.btnClass {
  display: inline-block;
  padding: 0.9rem 1.8rem;
  font-size: 16px;
  font-weight: 700;
  color: white;
  border: 3px solid rgb(252, 70, 100);
  cursor: pointer;
  position: relative;
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  z-index: 1;
  font-family: inherit;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(252, 70, 100);
    transform: translateX(-100%);
    transition: all 0.3s;
    z-index: -1;
  }

  &:hover::before {
    transform: translateX(0);
  }
}
`;

export { cssStyling, scssStyling, Component };
