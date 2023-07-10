import React, { ReactNode } from "react";
import NextLink from "next/link";
import { chakra, useColorModeValue, HTMLChakraProps } from "@chakra-ui/react";

interface LinkProps extends HTMLChakraProps<"a"> {
  href: string;
  unstyled?: boolean;
}

const Link: React.FC<LinkProps> = (props) => {
  const { href, unstyled, ...rest } = props;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (unstyled) {
    if (isInternalLink) {
      return (
        <NextLink href={href}>
          <chakra.a {...rest} />
        </NextLink>
      );
    } else {
      return <chakra.a {...rest} />;
    }
  }

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <chakra.a
          fontWeight="400"
          color={useColorModeValue("primary.900", "primaryD.900")}
          transition="all 0.25s"
          transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
          _hover={{
            color: useColorModeValue("primary.1000", "primaryD.1000"),
            textDecoration: "underline",
          }}
          {...rest}
        />
      </NextLink>
    );
  }

  return (
    <chakra.a
      fontWeight="400"
      color={useColorModeValue("primary.900", "primaryD.900")}
      transition="all 0.25s"
      transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        color: useColorModeValue("primary.1000", "primaryD.1000"),
        textDecoration: "underline",
      }}
      {...rest}
    />
  );
};

export default Link;
