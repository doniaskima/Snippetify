import React from 'react';
import styled from 'styled-components';

const Component = () => {
  return (
    <Button>
      <span className="box">
        Hover!
      </span>
    </Button>
  );
};

const Button = styled.button`
  color: black;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;

  .box {
    width: 140px;
    height: auto;
    float: left;
    transition: 0.5s linear;
    position: relative;
    display: block;
    overflow: hidden;
    padding: 15px;
    text-align: center;
    margin: 0 5px;
    background: transparent;
    text-transform: uppercase;
    font-weight: 900;
  }

  .box:before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    height: 4px;
    width: 100%;
    border-bottom: 4px solid transparent;
    border-left: 4px solid transparent;
    box-sizing: border-box;
    transform: translateX(100%);
  }

  .box:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-top: 4px solid transparent;
    border-right: 4px solid transparent;
    box-sizing: border-box;
    transform: translateX(-100%);
  }

  .box:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }

  .box:hover:before {
    border-color: #262626;
    height: 100%;
    transform: translateX(0);
    transition: 0.3s transform linear, 0.3s height linear 0.3s;
  }

  .box:hover:after {
    border-color: #262626;
    height: 100%;
    transform: translateX(0);
    transition: 0.3s transform linear, 0.3s height linear 0.5s;
  }
  `;

const cssStyling = `
.exampleClass {
  color: black;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
}

.exampleClass .box {
  width: 140px;
  height: auto;
  float: left;
  transition: 0.5s linear;
  position: relative;
  display: block;
  overflow: hidden;
  padding: 15px;
  text-align: center;
  margin: 0 5px;
  background: transparent;
  text-transform: uppercase;
  font-weight: 900;
}

.exampleClass .box:before {
  position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  height: 4px;
  width: 100%;
  border-bottom: 4px solid transparent;
  border-left: 4px solid transparent;
  box-sizing: border-box;
  transform: translateX(100%);
}

.exampleClass .box:after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  border-top: 4px solid transparent;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  transform: translateX(-100%);
}

.exampleClass .box:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

.exampleClass .box:hover:before {
  border-color: #262626;
  height: 100%;
  transform: translateX(0);
  transition: 0.3s transform linear, 0.3s height linear 0.3s;
}

.exampleClass .box:hover:after {
  border-color: #262626;
  height: 100%;
  transform: translateX(0);
  transition: 0.3s transform linear, 0.3s height linear 0.5s;
}
`;

const scssStyling = `
.exampleClass {
  color: black;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;

  .box {
    width: 140px;
    height: auto;
    float: left;
    transition: 0.5s linear;
    position: relative;
    display: block;
    overflow: hidden;
    padding: 15px;
    text-align: center;
    margin: 0 5px;
    background: transparent;
    text-transform: uppercase;
    font-weight: 900;

    &:before {
      position: absolute;
      content: '';
      left: 0;
      bottom: 0;
      height: 4px;
      width: 100%;
      border-bottom: 4px solid transparent;
      border-left: 4px solid transparent;
      box-sizing: border-box;
      transform: translateX(100%);
    }

    &:after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      border-top: 4px solid transparent;
      border-right: 4px solid transparent;
      box-sizing: border-box;
      transform: translateX(-100%);
    }

    &:hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    }

    &:hover:before {
      border-color: #262626;
      height: 100%;
      transform: translateX(0);
      transition: 0.3s transform linear, 0.3s height linear 0.3s;
    }

    &:hover:after {
      border-color: #262626;
      height: 100%;
      transform: translateX(0);
      transition: 0.3s transform linear, 0.3s height linear 0.5s;
    }
  }
}
`;

export { cssStyling, scssStyling, Component };
