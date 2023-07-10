import React, { ReactNode } from "react";
import { SlideFade } from "@chakra-ui/react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return <SlideFade in>{children}</SlideFade>;
};

export default PageTransition;
