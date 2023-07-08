import { styled } from '@stitches/react';
import React from 'react';
 

const Separator = () => {
  return (
    <Wrapper>
      <Seperator />
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center'
});

const Seperator = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  height: '1px',
  width: '45px',
  backgroundColor: '$darkGray'
});

export default Separator;
