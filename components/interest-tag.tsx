import React from "react";
import { Box, Tag, WrapItem, WrapItemProps } from "@chakra-ui/react";

interface InterestTagProps extends WrapItemProps {
  name: string;
}

const InterestTag: React.FC<InterestTagProps> = ({ name, ...rest }) => {
  return (
    <WrapItem {...rest}>
      <Tag size="lg" variant="subtle" colorScheme="pink" rounded="lg">
        {name}
      </Tag>
    </WrapItem>
  );
};

export default InterestTag;
