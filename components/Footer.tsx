import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="transparent" py={4} position="fixed" bottom={0} left={0} right={0}>
      <Flex justify="center">
        <Text>&copy; 2023 Snippetify. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
