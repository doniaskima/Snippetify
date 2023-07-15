"use client"
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Option from "../Option";
import Slider from "../Slider";
import GradientPicker from "./GradientPicker";
import CopyButton from "../CopyButton";
interface ControlsProps {
  cssCode: string;
  cssToCopied: string;
  baseColor: string;
  gradient: string;
  position: number;
  weight: number;
  handleChange: (name: string) => (event: ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > div:nth-child(1) {
    margin-right: 1rem;
  }

  @media (min-width: 1px) and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    box-sizing: content-box;

    > div:nth-child(1) {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`;

const Controls: React.FC<ControlsProps> = ({
  cssCode,
  cssToCopied,
  baseColor,
  gradient,
}) => {
  const [position, setPosition] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleChange = (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
    if (name === "position") {
      setPosition(parseInt(event.target.value));
    } else if (name === "weight") {
      setWeight(parseFloat(event.target.value));
    }
  };

  return (
    <Container>
      <Card>
        <Option icon="color-palette-outline" title="Gradient:">
          <GradientPicker handleChange={handleChange} gradient={gradient} />
        </Option>

        <Option icon="layers-outline" title="Position:">
          <Slider
            value={position}
            min={0}
            max={100}
            step={10}
            label="position"
            onChange={handleChange("position")}
          />
        </Option>

        <Option icon="crop-outline" title="Weight:">
          <Slider
            value={weight}
            min={0.1}
            max={1}
            step={0.1}
            label="weight"
            onChange={handleChange("weight")}
          />
        </Option>
      </Card>

      <CopyButton cssCode={cssToCopied} grow={1} baseColor={baseColor} />
    </Container>
  );
};

export default Controls;