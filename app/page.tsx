"use client"
import Head from "next/head";
import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import PlausibleProvider from "next-plausible";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
          <Footer />
        </PlausibleProvider>
      </ChakraProvider>
    
    </>
  );
};

export default App;
