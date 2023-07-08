import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
    <ChakraProvider>
    <Header />
        <main className="mt-24">
        {children}
        </main>
        <Footer />
      </main>
    </ChakraProvider>
 
    </>
  );
};

export default Layout;
