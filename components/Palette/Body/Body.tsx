import React from "react";
import styled from "styled-components";
import Controls from "./Control";

interface BodyProps {
  cssCode: string;
  cssToCopied: string;
  baseColor: string;
  displayText: string;
  gradient: string;
  position: number;
  weight: number;
  handleChange: (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1281px) {
    width: 60%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Body: React.FC<BodyProps> = ({
  cssCode,
  cssToCopied,
  baseColor,
  displayText,
  gradient,
  position,
  weight,
  handleChange,
}) => {
  return (
    <Container>
        <Controls
        cssCode={cssCode}
        cssToCopied={cssToCopied}
        baseColor={baseColor}
        gradient={gradient}
        position={position}
        weight={weight}
        handleChange={handleChange}
      />
    
    </Container>
  );
};

export default Body;
