
"use client"
import { Box, ChakraProvider, VStack } from "@chakra-ui/react";
import Header from "@/components/Header";
import Section from "@/components/section";
import { Grommet } from "grommet";

const About = () => {
  return (
    <>
        <ChakraProvider>
        <Header/>
        <Box as="main" pt={{ base: 16, md: 32 }} pb={{ base: 24, md: 16 }}>
        <VStack spacing={12} mt={6}> 
        <Section>
           Hello bro :3
        </Section>
        </VStack>
        </Box>
    </ChakraProvider>
    </>
 
  );
};

export default About;
