
"use client"
import React, { FC } from "react";
import styled from "styled-components";
import { Box, ChakraProvider, VStack } from "@chakra-ui/react";
import Header from "@/components/Header";
import Section from "@/components/section";
import { Grommet } from "grommet";
import grommetTheme from "@/utils/grommetTheme";
import { light } from "@/utils/theme";
import Body from "@/components/Palette/Body/Body";

interface AboutProps {
  baseColor: string;
  gradient: string;
}

const Wrapper = styled.div`
  padding: 2em 4em;
  background-color: ${light};
  min-height: calc(100vh - 2 * 2em);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Prata", serif;
`;
 
const About: FC<AboutProps> = ({ baseColor, gradient }) => {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Box as="main" pt={{ base: 16, md: 32 }} pb={{ base: 24, md: 16 }}>
       
          <VStack spacing={12} mt={6}>
            <Section>
              <Grommet theme={grommetTheme(baseColor)}>
                <Wrapper>
                  <Body baseColor={baseColor} gradient={gradient} />
                </Wrapper>
              </Grommet>
            </Section>
          </VStack>
        </Box>
      </ChakraProvider>
    </>
  );
};

export default About;
