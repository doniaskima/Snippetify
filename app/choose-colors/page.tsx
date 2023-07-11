
"use client"
import { Box, ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import {
  Button,
  VStack,
  HStack,
  Text,
  IconButton,
  Heading,
  Wrap,
} from "@chakra-ui/react";
import PageTransition from "@/components/PageTransition";
import Section from "@/components/section";

import InterestTag from "@/components/interest-tag";
import Hero from "@/components/Hero";
import Link from "@/components/Link";
import Header from "@/components/Header";
import AnimationText from "@/components/AnimationText";

const About = () => {
  return (
    <>
        <ChakraProvider>
        <Header/>
        <Box as="main" pt={{ base: 16, md: 32 }} pb={{ base: 24, md: 16 }}>
            Hello palette :3
          </Box>
    </ChakraProvider>
    </>
 
  );
};

export default About;
