import React from "react";
import { Box, Tag, WrapItem } from "@chakra-ui/react";

const InterestTag = ({ name}) => {
  return (
    <WrapItem>
      <Tag
        size="lg"
        variant="subtle"
        colorScheme="pink"
        rounded="lg"
      >
        {name}
      </Tag>
    </WrapItem>
  );
};

export default InterestTag;
