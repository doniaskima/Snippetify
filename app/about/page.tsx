
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
import PlausibleProvider from "next-plausible";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import  Container   from "@/components/container";

const App = () => {
  return (
    <>
        <ChakraProvider>
        <Header/>
        <Box as="main" pt={{ base: 16, md: 32 }} pb={{ base: 24, md: 16 }}>
        <Hero title="About" align="start" subtitle="Learn more about Snippetify" />
    <VStack spacing={12} mt={6}>
      <Section>
        <VStack align="start" spacing={6}>
          <Text>
          Snippetify is a comprehensive UI snippets website that provides developers with a rich collection of pre-built user interface components and code snippets. Whether you're a beginner or an experienced developer, Snippetify offers a vast range of ready-to-use UI elements that can be seamlessly integrated into your projects.
          </Text>
          <Text>
          With Snippetify, you can quickly enhance the visual appeal and functionality of your web applications, saving valuable development time and effort. The platform offers an extensive library of snippets covering various categories, including navigation menus, buttons, forms, modals, sliders, cards, and much more.
          </Text>
          <Text>
          Each snippet on Snippetify is carefully crafted and optimized for performance
           and cross-browser compatibility. You can easily explore the collection, 
           preview snippets, and access the corresponding code. The snippets are conveniently
            organized, making it effortless to find the perfect
           component for your specific requirements.
          </Text>
          <Text>
          Snippetify also fosters a collaborative community of developers who can contribute their own UI snippets to the platform. By sharing your creations, you can help fellow developers and gain recognition for your work.
          </Text>
        </VStack>
      </Section> 
    </VStack>
          </Box>
    </ChakraProvider>
    </>
 
  );
};

export default App;
