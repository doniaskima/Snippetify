
import React from "react";
import { chakra, VStack, HStack, Button, IconButton, useColorMode, Text, Box, Divider, useColorModeValue, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuCommand, MenuDivider, Icon, Avatar, useDisclosure } from "@chakra-ui/react";
import NextLink from "next/link";
import Container from "./container";
import { useRouter } from 'next/navigation'
import ThemeToggle from "./theme-toggle";
import AvatarNavigation from "./AvatarNavigation";

function NavLink(props: any) {
  const { href, name, ...rest } = props;
  const { asPath } = useRouter();

  const isActive = asPath === href;

  return (
    <NextLink href={href} passHref>
      <Button
        aria-current={isActive ? "page" : undefined}
        variant="ghost"
        size="md"
        {...rest}
        _activeLink={{
          color: useColorModeValue("neutral.1100", "neutralD.1100"),
          bg: useColorModeValue("neutral.100", "neutralD.300"),
        }}
        _hover={{
          bg: useColorModeValue("neutral.200", "neutralD.200"),
        }}
        px={4}
      >
        {name}
      </Button>
    </NextLink>
  );
}

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue("white", "neutralD.100")}
      display={{ base: "none", md: "block" }}
      position="fixed"
      w="100%"
      zIndex={99}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("neutral.400", "neutralD.400")}
      shadow="0 0 10px 0 rgba(0,0,0, 0.025);"
    >
      <Container>
        <VStack align="start" spacing={0}>
          <HStack justify="space-between" w="100%" h={16}>
            <HStack ml={-4} spacing={2}>
          
              <NavLink href="/choose-colors" name="Palettes" />
              <NavLink href="/about" name="About" />
              <NavLink href="/" name="Lists" />
            </HStack>
            <HStack>
              <ThemeToggle />
            </HStack>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Header;
