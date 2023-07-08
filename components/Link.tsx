import React from "react";
import NextLink from "next/link";
import { chakra, useColorModeValue } from "@chakra-ui/react";

const Link = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  return props.unstyled ? (
    isInternalLink ? (
      <NextLink href={href}>
        <chakra.a {...props} />
      </NextLink>
    ) : (
      <chakra.a {...props} />
    )
  ) : isInternalLink ? (
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
        {...props}
      />
    </NextLink>
  ) : (
    <chakra.a
      fontWeight="400"
      color={useColorModeValue("primary.900", "primaryD.900")}
      transition="all 0.25s"
      transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        color: useColorModeValue("primary.1000", "primaryD.1000"),
        textDecoration: "underline",
      }}
      {...props}
    />
  );

 
};

export default Link;
