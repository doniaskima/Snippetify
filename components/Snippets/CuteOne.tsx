import React from 'react';
import styled, { keyframes } from 'styled-components';

const shakeAnimation = keyframes`
  0% {
    left: 45%;
  }

  25% {
    left: 54%;
  }

  50% {
    left: 48%;
  }

  75% {
    left: 52%;
  }

  100% {
    left: 50%;
  }
`;

const ContainerButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "bt-1 bt-2 bt-3"
    "bt-4 bt-5 bt-6";
  position: relative;
  perspective: 800;
  padding: 0;
  width: 135px;
  height: 47px;
  transition: all 0.3s ease-in-out;

  &:active {
    transform: scale(0.95);
  }
`;

const Hover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 200;
`;

const Button = styled.button`
  position: absolute;
  padding: 0;
  width: 135px;
  height: 47px;
  background: transparent;
  font-size: 17px;
  font-weight: 900;
  border: 3px solid #f39923;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 135px;
    height: 47px;
    background-color: #f5ae51;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
    z-index: -1;
  }

  &::after {
    content: "Hover";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 135px;
    height: 47px;
    background-color: transparent;
    font-size: 17px;
    font-weight: 900;
    line-height: 47px;
    color: #ffffff;
    border: none;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
    z-index: 2;
  }

  &:hover {
    transform: rotateX(15deg) rotateY(-15deg) rotateZ(0deg);
    box-shadow: -2px -2px #18181888;
  }

  &:hover::after {
    animation: ${shakeAnimation} 0.5s ease-in-out 0.3s;
    text-shadow: -2px -2px #18181888;
  }
`;

const Component = () => {
  return (
    <ContainerButton className="container-button">
      <Hover className="hover bt-1" />
      <Hover className="hover bt-2" />
      <Hover className="hover bt-3" />
      <Hover className="hover bt-4" />
      <Hover className="hover bt-5" />
      <Hover className="hover bt-6" />
      <Button />
    </ContainerButton>
  );
};

const cssStyling = `
.container-button {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "bt-1 bt-2 bt-3"
    "bt-4 bt-5 bt-6";
  position: relative;
  perspective: 800;
  padding: 0;
  width: 135px;
  height: 47px;
  transition: all 0.3s ease-in-out;
}

.container-button:active {
  transform: scale(0.95);
}

.hover {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 200;
}

.bt-1 {
  grid-area: bt-1;
}

.bt-2 {
  grid-area: bt-2;
}

.bt-3 {
  grid-area: bt-3;
}

.bt-4 {
  grid-area: bt-4;
}

.bt-5 {
  grid-area: bt-5;
}

.bt-6 {
  grid-area: bt-6;
}

.bt-1:hover ~ button {
  transform: rotateX(15deg) rotateY(-15deg) rotateZ(0deg);
  box-shadow: -2px -2px #18181888;
}

.bt-1:hover ~ button::after {
  animation: shake 0.5s ease-in-out 0.3s;
  text-shadow: -2px -2px #18181888;
}

.bt-3:hover ~ button {
  transform: rotateX(15deg) rotateY(15deg) rotateZ(0deg);
  box-shadow: 2px -2px #18181888;
}

.bt-3:hover ~ button::after {
  animation: shake 0.5s ease-in-out 0.3s;
  text-shadow: 2px -2px #18181888;
}

.bt-4:hover ~ button {
  transform: rotateX(-15deg) rotateY(-15deg) rotateZ(0deg);
  box-shadow: -2px 2px #18181888;
}

.bt-4:hover ~ button::after {
  animation: shake 0.5s ease-in-out 0.3s;
  text-shadow: -2px 2px #18181888;
}

.bt-6:hover ~ button {
  transform: rotateX(-15deg) rotateY(15deg) rotateZ(0deg);
  box-shadow: 2px 2px #18181888;
}

.bt-6:hover ~ button::after {
  animation: shake 0.5s ease-in-out 0.3s;
  text-shadow: 2px 2px #18181888;
}

.hover:hover ~ button::before {
  background: transparent;
}

.hover:hover ~ button::after {
  content: "Click";
  top: -150%;
  transform: translate(-50%, 0);
  font-size: 34px;
  color: #f19c2b;
}

button {
  position: absolute;
  padding: 0;
  width: 135px;
  height: 47px;
  background: transparent;
  font-size: 17px;
  font-weight: 900;
  border: 3px solid #f39923;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
}

button::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 135px;
  height: 47px;
  background-color: #f5ae51;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  z-index: -1;
}

button::after {
  content: "Hover";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 135px;
  height: 47px;
  background-color: transparent;
  font-size: 17px;
  font-weight: 900;
  line-height: 47px;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  z-index: 2;
}

@keyframes shake {
  0% {
    left: 45%;
  }

  25% {
    left: 54%;
  }

  50% {
    left: 48%;
  }

  75% {
    left: 52%;
  }

  100% {
    left: 50%;
  }
}
`;

const scssStyling = `
.container-button {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "bt-1 bt-2 bt-3"
    "bt-4 bt-5 bt-6";
  position: relative;
  perspective: 800;
  padding: 0;
  width: 135px;
  height: 47px;
  transition: all 0.3s ease-in-out;
}

.container-button:active {
  transform: scale(0.95);
}

.hover {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 200;
}

.bt-1 {
  grid-area: bt-1;
}

.bt-2 {
  grid-area: bt-2;
}

.bt-3 {
  grid-area: bt-3;
}

.bt-4 {
  grid-area: bt-4;
}

.bt-5 {
  grid-area: bt-5;
}

.bt-6 {
  grid-area: bt-6;
}

.bt-1:hover ~ button {
  transform: rotateX(15deg) rotateY(-15deg) rotateZ(0deg);
  box-shadow: -2px -2px #18181888;
}

.bt-1:hover ~ button::after {
  animation: shake 0.5s ease-in-out 0.3s;
  text-shadow: -2px -2px #18181888;
}

.bt-3:hover ~ button {
  transform: rotateX(15deg) rotateY(15deg) rotateZ(0deg);
  box-shadow: 2px -2px #18181888;
}

.bt-3:hover ~ button::after {
  animation: shake 0.5s ease-in-out 0.3s;
  text-shadow: 2px -2px #18181888;
}

.bt-4:hover ~ button {
  transform: rotateX(-15deg) rotateY(-15deg) rotateZ(0deg);
  box-shadow: -2px 2px #18181888;
}

.bt-4:hover ~ button::after {
  animation: shake 0.5s ease-in-out 0.3s;
  text-shadow: -2px 2px #18181888;
}

.bt-6:hover ~ button {
  transform: rotateX(-15deg) rotateY(15deg) rotateZ(0deg);
  box-shadow: 2px 2px #18181888;
}

.bt-6:hover ~ button::after {
  animation: shake 0.5s ease-in-out 0.3s;
  text-shadow: 2px 2px #18181888;
}

.hover:hover ~ button::before {
  background: transparent;
}

.hover:hover ~ button::after {
  content: "Click";
  top: -150%;
  transform: translate(-50%, 0);
  font-size: 34px;
  color: #f19c2b;
}

button {
  position: absolute;
  padding: 0;
  width: 135px;
  height: 47px;
  background: transparent;
  font-size: 17px;
  font-weight: 900;
  border: 3px solid #f39923;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 135px;
    height: 47px;
    background-color: #f5ae51;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
    z-index: -1;
  }

  &::after {
    content: "Hover";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 135px;
    height: 47px;
    background-color: transparent;
    font-size: 17px;
    font-weight: 900;
    line-height: 47px;
    color: #ffffff;
    border: none;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
    z-index: 2;
  }

  &:hover {
    transform: rotateX(15deg) rotateY(-15deg) rotateZ(0deg);
    box-shadow: -2px -2px #18181888;
  }

  &:hover::after {
    animation: shake 0.5s ease-in-out 0.3s;
    text-shadow: -2px -2px #18181888;
  }
}

@keyframes shake {
  0% {
    left: 45%;
  }

  25% {
    left: 54%;
  }

  50% {
    left: 48%;
  }

  75% {
    left: 52%;
  }

  100% {
    left: 50%;
  }
}
`;

export { cssStyling, scssStyling, Component };
