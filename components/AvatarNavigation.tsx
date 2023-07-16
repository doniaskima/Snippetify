import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const AvatarNavigation = () => {
  return (
    <Link href="/">
      <Box w={16} h={16} borderRadius="full" overflow="hidden">
        <Image src="/MyCuteLogo.png" alt="" layout="fill" objectFit="cover" />
      </Box>
    </Link>
  );
};

export default AvatarNavigation;
