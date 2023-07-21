import { neutral } from "@/utils/theme";
import React from "react";
import styled from "styled-components";
 

const Wrapper = styled.div`
  max-width: 100%;
  margin-top: 2em;
  padding-top: 2em;

  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: salmon; */
`;

const Sup = styled.sup`
  font-family: "Prompt", sans-serif;
  font-size: 0.65rem;
  color: ${neutral[400]};
`;

const A = styled.a`
  color: ${props => props.baseColor};
  font-weight: bold;
  font-size: 0.75rem;

  &:focus {
    outline-color: ${props => props.baseColor};
  }
`;

const Footer = ({ baseColor }) => {
  return (
    <Wrapper>
      <Sup>
      Built by{" "}
        <A href="https://twitter.com/doniaskima" baseColor={baseColor}>
          @doniaskima
        </A>
      </Sup>
    </Wrapper>
  );
};

export default Footer;
