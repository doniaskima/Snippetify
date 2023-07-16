import React, { FC, ChangeEvent } from "react";
import PropTypes from "prop-types";
import { RangeInput } from "grommet";

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange: (value: number) => void;
}

const Slider: FC<SliderProps> = ({
  min = 0,
  max = 1,
  step = 0.1,
  value = 0.1 * getRandomInt(10),
  onChange = () => {},
}) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    onChange(newValue);
  };

  return (
    <RangeInput
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={handleOnChange}
    />
  );
};

const getRandomInt = (max: number) => Math.floor(Math.random() * Math.floor(max));

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default Slider;
