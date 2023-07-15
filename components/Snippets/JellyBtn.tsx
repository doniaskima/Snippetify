import React from 'react';
import styled, { keyframes } from 'styled-components';

const jelloHorizontalAnimation = keyframes`
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
`;

const JellyButton = styled.button`
  position: relative;
  width: 180px;
  height: 60px;
  border-radius: 30px;
  border: none;
  background-color: rgb(255, 136, 0);
  color: white;
  box-shadow: 0px 10px 10px rgb(255, 198, 146) inset,
    0px 5px 10px rgba(5, 5, 5, 0.212),
    0px -10px 10px rgb(255, 102, 0) inset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    width: 80%;
    height: 2px;
    position: absolute;
    background-color: rgba(250, 250, 250, 0.678);
    content: "";
    filter: blur(1px);
    top: 7px;
    border-radius: 50%;
  }

  &::after {
    width: 80%;
    height: 2px;
    position: absolute;
    background-color: rgba(250, 250, 250, 0.137);
    content: "";
    filter: blur(1px);
    bottom: 7px;
    border-radius: 50%;
  }

  &:hover {
    animation: ${jelloHorizontalAnimation} 0.9s both;
  }
`;

const Component = () => {
  return (
    <JellyButton className="Btn">
      New Jelly Button
    </JellyButton>
  );
};

const cssStyling = `
.Btn {
  position: relative;
  width: 180px;
  height: 60px;
  border-radius: 30px;
  border: none;
  background-color: rgb(255, 136, 0);
  color: white;
  box-shadow: 0px 10px 10px rgb(255, 198, 146) inset,
    0px 5px 10px rgba(5, 5, 5, 0.212),
    0px -10px 10px rgb(255, 102, 0) inset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Btn::before {
  width: 80%;
  height: 2px;
  position: absolute;
  background-color: rgba(250, 250, 250, 0.678);
  content: "";
  filter: blur(1px);
  top: 7px;
  border-radius: 50%;
}

.Btn::after {
  width: 80%;
  height: 2px;
  position: absolute;
  background-color: rgba(250, 250, 250, 0.137);
  content: "";
  filter: blur(1px);
  bottom: 7px;
  border-radius: 50%;
}

.Btn:hover {
  animation: jello-horizontal 0.9s both;
}

@keyframes jello-horizontal {
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}
`;

const scssStyling = `
.Btn {
  position: relative;
  width: 180px;
  height: 60px;
  border-radius: 30px;
  border: none;
  background-color: rgb(255, 136, 0);
  color: white;
  box-shadow: 0px 10px 10px rgb(255, 198, 146) inset,
    0px 5px 10px rgba(5, 5, 5, 0.212),
    0px -10px 10px rgb(255, 102, 0) inset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    width: 80%;
    height: 2px;
    position: absolute;
    background-color: rgba(250, 250, 250, 0.678);
    content: "";
    filter: blur(1px);
    top: 7px;
    border-radius: 50%;
  }

  &::after {
    width: 80%;
    height: 2px;
    position: absolute;
    background-color: rgba(250, 250, 250, 0.137);
    content: "";
    filter: blur(1px);
    bottom: 7px;
    border-radius: 50%;
  }

  &:hover {
    animation: jello-horizontal 0.9s both;
  }
}

@keyframes jello-horizontal {
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}
`;

export { cssStyling, scssStyling, Component };
