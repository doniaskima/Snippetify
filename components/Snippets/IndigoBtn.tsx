import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.5),
    7px 7px 20px 0px rgba(0,0,0,.1),
    4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;

  &.btn-1 {
    background: linear-gradient(0deg, rgba(96,9,240,1) 0%, rgba(129,5,240,1) 100%);
    border: none;
  }

  &:before {
    height: 0%;
    width: 2px;
  }

  &:hover {
    box-shadow: 4px 4px 6px 0 rgba(255,255,255,.5),
                -4px -4px 6px 0 rgba(116, 125, 136, .5),
    inset -4px -4px 6px 0 rgba(255,255,255,.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
  }
`;

const Component = () => {
  return (
    <CustomButton className="btn-1">
      Read More
    </CustomButton>
  );
};

const cssStyling = `
.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.5),
    7px 7px 20px 0px rgba(0,0,0,.1),
    4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
}

.btn-1 {
  background: linear-gradient(0deg, rgba(96,9,240,1) 0%, rgba(129,5,240,1) 100%);
  border: none;
}

.btn-1:before {
  height: 0%;
  width: 2px;
}

.btn-1:hover {
  box-shadow: 4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .5),
    inset -4px -4px 6px 0 rgba(255,255,255,.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
}
`;

const scssStyling = `
.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.5),
    7px 7px 20px 0px rgba(0,0,0,.1),
    4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;

  &.btn-1 {
    background: linear-gradient(0deg, rgba(96,9,240,1) 0%, rgba(129,5,240,1) 100%);
    border: none;
  }

  &.btn-1:before {
    height: 0%;
    width: 2px;
  }

  &.btn-1:hover {
    box-shadow: 4px 4px 6px 0 rgba(255,255,255,.5),
                -4px -4px 6px 0 rgba(116, 125, 136, .5),
    inset -4px -4px 6px 0 rgba(255,255,255,.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
  }
}
`;

export { cssStyling, scssStyling, Component };
