"use client"
import Head from "next/head";
import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import PlausibleProvider from "next-plausible";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SnippetsGrid from "@/components/SnippetsGrid";
import Container from "@/components/container"
import { styled } from "styled-components";
 
 
const App = () => {
  return (
    <>
      <ChakraProvider>
        <PlausibleProvider domain="snippetify.com">
          <Head>
            <meta
              content="width=device-width, initial-scale=1"
              name="viewport"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="96x96"
              href="/favicon.png"
            />
            <meta name="theme-color" content="#2BB0EC" />
          </Head>
          <DefaultSeo {...SEO} />
          <Header />
          <Box as="main" pt={{ base: 16, md: 32 }} pb={{ base: 24, md: 16 }}>
          <Container>   
<div className="nine">
  <h1>Right-click and select 'Copy' to copy the CSS or Sass code."<span>Snippetify Keywords</span></h1>
</div>

            <SnippetsGrid/>
          </Container>
         
          </Box>
          <Footer />
        </PlausibleProvider>
      </ChakraProvider>
    
    </>
  );
};

export default App;
