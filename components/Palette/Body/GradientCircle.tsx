import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

interface GradientCircleProps {
  colors?: string[];
  selected?: boolean;
}

const GradientCircle = styled.div<GradientCircleProps>`
  min-width: 24px;
  min-height: 24px;
  max-width: 24px;
  max-height: 24px;

  margin-right: 4px;
  border-radius: 50px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  transition: box-shadow 0.6s ease-out, transform 0.3s ease-out;
  -webkit-transition: box-shadow 0.6s ease-out, transform 0.3s ease-out;
  -moz-transition: box-shadow 0.6s ease-out, transform 0.3s ease-out;
  -o-transition: box-shadow 0.6s ease-out, transform 0.3s ease-out;

  ${({ selected, colors }) =>
    selected
      ? `
      border: 3px solid ${colors?.[0] ?? "transparent"};
      background-color: white;
    `
      : colors && colors.length > 0
      ? `background: linear-gradient(-45deg, ${colors.join(", ")});`
      : "background-color: transparent;"};

  :hover {
    transform: translateY(-2px) scale(1.1);
    box-shadow: 0 5px 10px ${({ colors }) =>
      colors && colors.length > 0 ? rgba(colors[0], 0.5) : "transparent"};
  }
`;

export default GradientCircle;
