import { styled } from "@stitches/react";

 

const Stack = styled('div', {
  '> * + *': {
    marginTop: '$5'
  }
});

export default Stack;
