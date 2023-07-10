import React, { ReactNode } from "react";
import { VStack, Text, useColorModeValue, Icon, BoxProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface MobileMenuButtonProps extends BoxProps {
  label: string;
  icon: IconType;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  label,
  icon,
  ...rest
}) => {
  return (
    <VStack
      as="button"
      spacing={0}
      rounded="md"
      px={6}
      {...rest}
      color={useColorModeValue("neutral.1100", "neutralD.1100")}
    >
      <Icon as={icon} />

      <Text
        fontSize="xs"
        fontWeight="500"
        color={useColorModeValue("neutral.1000", "neutralD.1000")}
      >
        {label}
      </Text>
    </VStack>
  );
};

export default MobileMenuButton;
