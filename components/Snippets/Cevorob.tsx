import React from 'react';
import styled from 'styled-components';

const Component = () => {
  return (
    <Wrapper>
      <span>GAME ON</span>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  position: relative;
  height: 50px;
  padding: 0 30px;
  border: 2px solid #000;
  background: #e8e8e8;
  user-select: none;
  white-space: nowrap;
  transition: all 0.05s linear;
  font-family: inherit;

  &:before,
  &:after {
    content: "";
    position: absolute;
    background: #e8e8e8;
    transition: all 0.2s linear;
  }

  &:before {
    width: calc(100% + 6px);
    height: calc(100% - 16px);
    top: 8px;
    left: -3px;
  }

  &:after {
    width: calc(100% - 16px);
    height: calc(100% + 6px);
    top: -3px;
    left: 8px;
  }

  &:hover {
    cursor: crosshair;
  }

  &:active {
    transform: scale(0.95);
  }

  &:hover:before {
    height: calc(100% - 32px);
    top: 16px;
  }

  &:hover:after {
    width: calc(100% - 32px);
    left: 16px;
  }

  span {
    font-size: 15px;
    z-index: 3;
    position: relative;
    font-weight: 600;
  }
`;

const cssStyling = `
.exampleClass {
  position: relative;
  height: 50px;
  padding: 0 30px;
  border: 2px solid #000;
  background: #e8e8e8;
  user-select: none;
  white-space: nowrap;
  transition: all 0.05s linear;
  font-family: inherit;

  &:before,
  &:after {
    content: "";
    position: absolute;
    background: #e8e8e8;
    transition: all 0.2s linear;
  }

  &:before {
    width: calc(100% + 6px);
    height: calc(100% - 16px);
    top: 8px;
    left: -3px;
  }

  &:after {
    width: calc(100% - 16px);
    height: calc(100% + 6px);
    top: -3px;
    left: 8px;
  }

  &:hover {
    cursor: crosshair;
  }

  &:active {
    transform: scale(0.95);
  }

  &:hover:before {
    height: calc(100% - 32px);
    top: 16px;
  }

  &:hover:after {
    width: calc(100% - 32px);
    left: 16px;
  }

  span {
    font-size: 15px;
    z-index: 3;
    position: relative;
    font-weight: 600;
  }
}
`;

const scssStyling = `
.exampleClass {
  position: relative;
  height: 50px;
  padding: 0 30px;
  border: 2px solid #000;
  background: #e8e8e8;
  user-select: none;
  white-space: nowrap;
  transition: all 0.05s linear;
  font-family: inherit;

  &:before,
  &:after {
    content: "";
    position: absolute;
    background: #e8e8e8;
    transition: all 0.2s linear;
  }

  &:before {
    width: calc(100% + 6px);
    height: calc(100% - 16px);
    top: 8px;
    left: -3px;
  }

  &:after {
    width: calc(100% - 16px);
    height: calc(100% + 6px);
    top: -3px;
    left: 8px;
  }

  &:hover {
    cursor: crosshair;
  }

  &:active {
    transform: scale(0.95);
  }

  &:hover:before {
    height: calc(100% - 32px);
    top: 16px;
  }

  &:hover:after {
    width: calc(100% - 32px);
    left: 16px;
  }

  span {
    font-size: 15px;
    z-index: 3;
    position: relative;
    font-weight: 600;
  }
}
`;

export { cssStyling, scssStyling, Component };
